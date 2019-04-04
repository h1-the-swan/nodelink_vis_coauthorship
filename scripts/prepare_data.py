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
    logger.debug("{} nodes {} links before removing isolates".format(G.number_of_nodes(), G.number_of_edges()))
    G.remove_nodes_from(list(nx.isolates(G)))
    # G = reindex_nodes(G)
    logger.debug("{} nodes {} links after removing isolates".format(G.number_of_nodes(), G.number_of_edges()))
    return G

def reindex_nodes(G):
    mapping = {}
    for i, n in enumerate(G.nodes):
        mapping[n] = i
    return nx.relabel_nodes(G, mapping)

def trim_graph(G, max_nodes=None, min_nodes_per_component=0):
    """Limit the number of nodes in the graph by keeping only the largest connected components

    :G: networkx Graph (undirected)
    :max_nodes: The graph will have fewer than this many nodes.
    :min_nodes_per_component: Included components will have at least this many nodes.
    :returns: trimmed nx.Graph object

    """
    nodes_to_include = []
    # Iterate through connected components by size
    for c in sorted(nx.connected_components(G), key=len, reverse=True):
        num_nodes_this_component = len(c)
        if (num_nodes_this_component < min_nodes_per_component):
            break
        if (len(nodes_to_include) + num_nodes_this_component) > max_nodes:
            if len(nodes_to_include) > 0:
                break
            else:
                logger.warning("The first connected component has {} nodes, which is more than max_nodes ({}). Including the first connected component.".format(num_nodes_this_component, max_nodes))
                pass
        nodes_to_include.extend(c)
    return G.subgraph(nodes_to_include)

def calc_infomap(G, infomap_args='--undirected --seed 999 --silent'):

    this_infomap = infomap.Infomap(infomap_args)
    network = this_infomap.network()
    mapping = {}
    reverse_mapping = {}
    for i, n in enumerate(G.nodes):
        mapping[n] = i
        reverse_mapping[i] = n

        _node = network.addNode(mapping[n])
        _node.disown()  # this seems to prevent an error message being sent out for every node

    for source, target, weight in G.edges.data('weight'):
        network.addLink(mapping[source], mapping[target], weight)
    this_infomap.run()
    for node in this_infomap.iterTree():
        if node.isLeaf():
            node_id = node.physicalId
            node_name = reverse_mapping[node_id]
            path_tuple = node.path()
            path_str = ":".join([str(x) for x in path_tuple])
            G.node[node_name]['flow'] = node.data.flow
            G.node[node_name]['cl_top'] = path_tuple[0]
            G.node[node_name]['cl_infomap'] = path_str
            G.node[node_name]['cl_bottom'] = path_str[path_str.find(":")+1:]
    return G

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
    logger.debug("done constructing graph ({} nodes, {} links). took {}".format(G.number_of_nodes(), G.number_of_edges(), format_timespan(timer()-start)))

    start = timer()
    logger.debug("trimming graph...")
    G = trim_graph(G, args.max_nodes, args.min_nodes_per_component)
    logger.debug("done trimming (new graph: {} nodes, {} links). took {}".format(G.number_of_nodes(), G.number_of_edges(), format_timespan(timer()-start)))

    start = timer()
    logger.debug("running infomap...")
    G = calc_infomap(G)
    logger.debug("done running infomap. took {}".format(format_timespan(timer()-start)))

    logger.debug("writing to {}".format(args.output))
    json_data = json_graph.node_link_data(G)
    with open(args.output, 'w') as outf:
        json.dump(json_data, outf)
    

if __name__ == "__main__":
    total_start = timer()
    logger = logging.getLogger(__name__)
    logger.info(" ".join(sys.argv))
    logger.info( '{:%Y-%m-%d %H:%M:%S}'.format(datetime.now()) )
    import argparse
    parser = argparse.ArgumentParser(description=DESCRIPTION)
    parser.add_argument("input", help="input file: newline separated MAG Paper IDs")
    parser.add_argument("output", help="output file (JSON)")
    parser.add_argument("--max-nodes", type=int, help="Maximum number of nodes in the graph. Note that since connected components are kept intact, the number of nodes may be less than the provided number. Default: no limit")
    parser.add_argument("--min-nodes-per-component", type=int, default=5, help="Minimum number of nodes per connected component (default: 5)")
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
