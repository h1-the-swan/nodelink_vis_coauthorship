# -*- coding: utf-8 -*-

DESCRIPTION = """Prepare data for visualization"""

import sys, os, time, json
import itertools
from datetime import datetime
from timeit import default_timer as timer
try:
    from humanfriendly import format_timespan
except ImportError:
    def format_timespan(seconds):
        return "{:.2f} seconds".format(seconds)

import logging
logging.basicConfig(format='%(asctime)s %(name)s.%(lineno)d %(levelname)s : %(message)s',
        datefmt="%H:%M:%S",
        level=logging.INFO)
# logger = logging.getLogger(__name__)
logger = logging.getLogger('__main__').getChild(__name__)

from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())
from mysql_connect import get_db_connection
db = get_db_connection(os.environ.get('MAG_DB_NAME'))

import pandas as pd
import numpy as np
import networkx as nx
from networkx.readwrite import json_graph

import infomap

def get_paper_ids(fname):
    """Get a list of paper ids

    :fname: path to file containing newline-separated paper ids
    :returns: list of strings

    """
    paper_ids = []
    with open(fname, 'r') as f:
        for line in f:
            paper_ids.append(line.strip())
    return paper_ids

def format_ids_for_sql(ids):
    return ",".join([str(x) for x in ids])

def make_sql_query(ids, tablename='Papers', id_colname='Paper_ID'):
    """Query MySQL database by list of IDs, returning a pandas dataframe"""

    ids_str = format_ids_for_sql(ids)
    stmt = "SELECT * FROM {tablename} WHERE {id_colname} IN ({ids})".format(tablename=tablename, 
                                                                                    id_colname=id_colname,
                                                                                    ids=ids_str)
    return db.read_sql(stmt)

def get_papers(paper_ids, tablename='Papers', id_colname='Paper_ID'):
    """Get papers from MySQL database"""

    return make_sql_query(paper_ids, tablename=tablename, id_colname=id_colname)

def get_paas(paper_ids, tablename='PaperAuthorAffiliations', id_colname='Paper_ID'):
    """Get PaperAuthorAffiliations from MySQL database"""

    return make_sql_query(paper_ids, tablename=tablename, id_colname=id_colname)

def get_authors(author_ids, tablename='Authors', id_colname='Author_ID'):
    """Get PaperAuthorAffiliations from MySQL database"""

    authors = make_sql_query(author_ids, tablename=tablename, id_colname=id_colname)
    # The `paper_count` column in the Authors table is mislabeled. It is actually the last known Affiliation ID
    authors = authors.rename(columns={'paper_count': 'last_known_Affiliation_ID'})
    return authors

def get_affiliations(affiliation_ids, tablename='Affiliations', id_colname='Affiliation_ID'):
    """Get PaperAuthorAffiliations from MySQL database"""

    return make_sql_query(affiliation_ids, tablename=tablename, id_colname=id_colname)

def get_graph(papers, paas, authors, affiliations, author_count_cutoff=50):
    """Make the coauthorship graph

    :papers: pandas dataframe with all the papers
    :paas: pandas dataframe: PaperAuthorAffiliations (mapping papers to authors and affiliations)
    :authors: pandas dataframe with all the authors
    :affiliations: pandas dataframe with the affiliations
    :author_count_cutoff: exclude papers with this many authors (or more)
    :returns: network Graph

    """
    affil_map = affiliations['display_name'].to_dict()
    G = nx.Graph()
    for name, row in papers.iterrows():
        this_paper = {
            'title': row['title']
        }
        paas_subset = paas[paas['Paper_ID']==row['Paper_ID']]
        author_ids = paas_subset['Author_ID']
        # filter out papers with a lot of authors
        if len(author_ids) >= author_count_cutoff:
            logger.debug('excluding paper with {} authors: "{}" (mag_Paper_ID: {})'.format(len(author_ids), row['title'], row['Paper_ID']))
            continue
        for author_id in author_ids:
            authors_subset = authors[authors['Author_ID']==author_id]
            author_name = authors_subset.iloc[0].display_name
            affil_name = affil_map.get(authors_subset.iloc[0]['last_known_Affiliation_ID'], "")
            if G.has_node(author_id):
                G.node[author_id]['papers'].append(this_paper)
            else:
                G.add_node(author_id, author_name=author_name, author_id=author_id, papers=[this_paper], affil_name=affil_name)
        if len(author_ids) > 1:
            for a1, a2 in itertools.combinations(author_ids, 2):
                if G.has_edge(a1, a2):
                    G[a1][a2]['weight'] += 1
                else:
                    G.add_edge(a1, a2, weight=1)
    G = reindex_nodes(G)
    return G

def reindex_nodes(G):
    mapping = {}
    for i, n in enumerate(G.nodes):
        mapping[n] = i
    return nx.relabel_nodes(G, mapping)

# copied from infomap_large_network codebase
# def calc_infomap(nodes, links):
#     this_infomap = infomap.Infomap('-t --seed 999 --silent')
#     network = this_infomap.network()
#     for node in nodes:
#         _node = network.addNode(int(node))
#         _node.disown()  # this seems to prevent an error message being sent out for every node
#     for source, target in links:
#         network.addLink(int(source), int(target))
#     this_infomap.run()
#     data = []
#     for node in this_infomap.iterTree():
#         if node.isLeaf():
#             path = ":".join([str(x) for x in node.path()])
#             data.append((node.physicalId, path))
#     return data

def main(args):
    logger.debug("reading input file: {}".format(args.input))
    paper_ids = get_paper_ids(args.input)
    logger.debug("read {} paper ids".format(len(paper_ids)))
    start = timer()
    logger.debug("querying for papers...")
    df_papers = get_papers(paper_ids)
    logger.debug("done querying for papers. took {}".format(format_timespan(timer()-start)))
    start = timer()
    logger.debug("querying for PaperAuthorAffiliations...")
    df_paas = get_paas(paper_ids)
    logger.debug("done querying for PaperAuthorAffiliations. took {}".format(format_timespan(timer()-start)))
    start = timer()
    logger.debug("querying for Authors...")
    df_authors = get_authors(df_paas['Author_ID'].unique().tolist())
    logger.debug("done querying for Authors. took {}".format(format_timespan(timer()-start)))
    start = timer()
    logger.debug("querying for Affiliations...")
    df_affiliations = get_affiliations(df_authors['last_known_Affiliation_ID'].unique().tolist())
    logger.debug("done querying for Affiliations. took {}".format(format_timespan(timer()-start)))
    start = timer()
    logger.debug("constructing graph...")
    G = get_graph(df_papers, df_paas, df_authors, df_affiliations)
    logger.debug("done constructing graph. took {}".format(format_timespan(timer()-start)))
    logger.debug("writing to {}".format(args.output))
    json_data = json_graph.node_link_data(G)
    with open(args.output, 'w') as outf:
        json.dump(json_data, outf)
    
    # TODO:
    # keep only largest connected components?
    # run infomap

if __name__ == "__main__":
    total_start = timer()
    logger = logging.getLogger(__name__)
    logger.info(" ".join(sys.argv))
    logger.info( '{:%Y-%m-%d %H:%M:%S}'.format(datetime.now()) )
    import argparse
    parser = argparse.ArgumentParser(description=DESCRIPTION)
    parser.add_argument("input", help="input file: newline separated MAG Paper IDs")
    parser.add_argument("output", help="output file (JSON)")
    parser.add_argument("--debug", action='store_true', help="output debugging info")
    global args
    args = parser.parse_args()
    if args.debug:
        logger.setLevel(logging.DEBUG)
        logger.debug('debug mode is on')
    else:
        logger.setLevel(logging.INFO)
    main(args)
    total_end = timer()
    logger.info('all finished. total time: {}'.format(format_timespan(total_end-total_start)))
