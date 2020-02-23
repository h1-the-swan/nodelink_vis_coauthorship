# -*- coding: utf-8 -*-

DESCRIPTION = """Prepare data for coauthorship visualization using spark and parquet data files"""

import sys, os, time, json
from pathlib import Path
from datetime import datetime
from timeit import default_timer as timer
try:
    from humanfriendly import format_timespan
except ImportError:
    def format_timespan(seconds):
        return "{:.2f} seconds".format(seconds)

import logging
root_logger = logging.getLogger()
logger = root_logger.getChild(__name__)

import pandas as pd
import numpy as np
import networkx as nx
from networkx.readwrite import json_graph

from prepare_data import construct_graph, trim_graph, calc_infomap

from config import Config

class DataPreparer:

    """prepare data for coauthorship visualization"""

    def __init__(self, config, paper_ids):
        """
        config: Config object, containing a spark context and a dictionary (mag_fpaths) with paths to the MAG data in parquet format
        paper_ids: list of paper ids
        """
        self._config = config
        self.spark = config.spark
        self.paper_ids = paper_ids

        self.data_fpaths = config.mag_fpaths
        mag_datafiles_needed = ['Papers', 'PaperAuthorAffiliations', 'Authors', 'Affiliations']
        mag_datafiles_missing = [x for x in mag_datafiles_needed if x not in self.data_fpaths.keys()]
        if len(mag_datafiles_missing) > 0:
            raise ValueError("path(s) to data files are missing from Config: {}".format(mag_datafiles_missing))

        # data for papers, authors, affiliations (initialize)
        self.papers = None
        self.paper_authors = None

        self.G = None

    def get_papers_dataframe(self):
        """get papers dataframe
        :returns: pandas dataframe

        """
        colnames = [
            'PaperId',
            'Doi',
            'PaperTitle',
            'OriginalTitle',
            'Year',
            'Date'
        ]
        sdf_papers = self.spark.read.parquet(str(self.data_fpaths['Papers']))
        sdf_papers = sdf_papers.select(colnames)
        return sdf_papers.filter(sdf_papers['PaperId'].isin(self.paper_ids)).toPandas()

    def get_paper_authors_dataframe(self):
        """get dataframe with one row per paper per author
        :returns: pandas dataframe

        """
        paas_select_cols = ['PaperId', 'AuthorId']
        authors_select_cols = ['AuthorId', 'DisplayName', 'LastKnownAffiliationId']
        affils_select_cols = ['AffiliationId', 'DisplayName', 'OfficialPage', 'WikiPage', 'Latitude', 'Longitude']
        sdf_paas = self.spark.read.parquet(str(self.data_fpaths['PaperAuthorAffiliations'])).select(paas_select_cols)
        sdf_authors = self.spark.read.parquet(str(self.data_fpaths['Authors'])).select(authors_select_cols)
        sdf_affils = self.spark.read.parquet(str(self.data_fpaths['Affiliations'])).select(affils_select_cols)

        sdf_merged = sdf_paas.join(sdf_authors, how='left', on='AuthorId')
        sdf_merged = sdf_merged.withColumnRenamed('DisplayName', 'AuthorDisplayName')
        sdf_merged = sdf_merged.withColumnRenamed('LastKnownAffiliationId', 'AffiliationId')
        sdf_merged = sdf_merged.join(sdf_affils, how='left', on='AffiliationId')
        sdf_merged = sdf_merged.withColumnRenamed('DisplayName', 'AffiliationDisplayName')
        return sdf_merged.filter(sdf_merged['PaperId'].isin(self.paper_ids)).toPandas()

    def get_graph(self, max_nodes, min_nodes_per_component=5):
        """construct_graph, trim_graph, calc_infomap

        """
        if self.papers is None:
            start = timer()
            logger.debug('getting papers data...')
            self.papers = self.get_papers_dataframe()
            logger.debug('getting papers data took {}'.format(format_timespan(timer()-start)))
        if self.paper_authors is None:
            start = timer()
            logger.debug('getting paper_authors data...')
            self.paper_authors = self.get_paper_authors_dataframe()
            logger.debug('getting paper_authors data took {}'.format(format_timespan(timer()-start)))

        start = timer()
        logger.debug('constructing graph...')
        G = construct_graph(self.papers, self.paper_authors)
        logger.debug("done constructing graph ({} nodes, {} links). took {}".format(G.number_of_nodes(), G.number_of_edges(), format_timespan(timer()-start)))

        start = timer()
        logger.debug("trimming graph...")
        logger.debug("maximum number of nodes in the graph: {}".format(max_nodes))
        logger.debug("minimum number of nodes per connected component: {}".format(min_nodes_per_component))
        G = trim_graph(G, max_nodes, min_nodes_per_component)
        logger.debug("done trimming (new graph: {} nodes, {} links). took {}".format(G.number_of_nodes(), G.number_of_edges(), format_timespan(timer()-start)))

        start = timer()
        logger.debug("running infomap...")
        G = calc_infomap(G)
        logger.debug("done running infomap. took {}".format(format_timespan(timer()-start)))

        self.G = G

    def write_graph(self, outfpath):
        """write graph to json file

        """
        if self.G is None:
            raise RuntimeError("graph has not been constructed yet")
        outfpath = Path(outfpath)
        logger.debug("writing to {}".format(outfpath))
        json_data = json_graph.node_link_data(self.G)
        with outfpath.open('w') as outf:
            json.dump(json_data, outf)

def get_paper_ids(fpath, sep='\t', id_colname=None):
    """get list of paper ids from input file

    :fpath: path to text file with newline-separated IDs, or TSV file
    :id_colname: if not specified, the fpath will be treated as a newline-separated list of IDs, otherwise, this is the column in the TSV file with IDs
    :returns: list of paper ids

    """
    if not id_colname:
        header = None
        id_colname = 0
    else:
        header = 0
    df = pd.read_csv(fpath, sep=sep, header=header)
    return df[id_colname].dropna().tolist()

def main(args):
    root_logger.getChild('py4j').setLevel(logging.WARNING)

    logger.debug("reading input file: {}".format(args.input))
    paper_ids = get_paper_ids(args.input)
    logger.debug("read {} paper ids".format(len(paper_ids)))

    config = Config()
    spark = config.spark
    preparer = DataPreparer(config, paper_ids)
    preparer.get_graph(args.max_nodes, args.min_nodes_per_component)
    preparer.write_graph(args.output)

    
if __name__ == "__main__":
    total_start = timer()
    handler = logging.StreamHandler()
    handler.setFormatter(logging.Formatter(fmt="%(asctime)s %(name)s.%(lineno)d %(levelname)s : %(message)s", datefmt="%H:%M:%S"))
    root_logger.addHandler(handler)
    root_logger.setLevel(logging.INFO)
    logger.info(" ".join(sys.argv))
    logger.info( '{:%Y-%m-%d %H:%M:%S}'.format(datetime.now()) )
    import argparse
    parser = argparse.ArgumentParser(description=DESCRIPTION)
    parser.add_argument("input", help="input file with paper IDs (either newline-separated list of IDs, or TSV)")
    parser.add_argument("output", help="path to output file (JSON)")
    parser.add_argument("--max-nodes", type=int, help="Maximum number of nodes in the graph. Note that since connected components are kept intact, the number of nodes may be less than the provided number. Default: no limit")
    parser.add_argument("--min-nodes-per-component", type=int, default=5, help="Minimum number of nodes per connected component (default: 5)")
    parser.add_argument("--debug", action='store_true', help="output debugging info")
    global args
    args = parser.parse_args()
    if args.debug:
        root_logger.setLevel(logging.DEBUG)
        logger.debug('debug mode is on')
    main(args)
    total_end = timer()
    logger.info('all finished. total time: {}'.format(format_timespan(total_end-total_start)))
