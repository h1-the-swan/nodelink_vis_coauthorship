# -*- coding: utf-8 -*-

DESCRIPTION = """prepare data for coauthorship graph"""

import sys, os, time, json
import itertools
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

import infomap

def construct_graph(papers, 
                    paper_author_data, 
                    author_count_cutoff=50,
                    paper_id_colname="PaperId",
                    author_id_colname="AuthorId",
                    affil_id_colname="AffiliationId",
                    title_colname="OriginalTitle",
                    year_colname="Year",
                    doi_colname="Doi",
                    author_name_colname="AuthorDisplayName",
                    affil_name_colname="AffiliationDisplayName",
                    official_page_colname="OfficialPage",
                    wiki_page_colname="WikiPage",
                    latitude_colname="Latitude",
                    longitude_colname="Longitude"):
    """Make the coauthorship graph

    :papers: pandas dataframe with all the papers
    :paper_author_data: pandas dataframe
    :author_count_cutoff: exclude papers with this many authors (or more)
    :returns: networkx Graph

    """
    # affil_map = affiliations['display_name'].to_dict()
    G = nx.Graph()
    for name, row in papers.iterrows():
        this_paper_id = int(row[paper_id_colname])
        this_paper = {
            'title': row.get(title_colname),
            'doi': row.get(doi_colname),
            'year': row.get(year_colname),
            'paper_id': this_paper_id
        }
        # paas_subset = paas[paas['Paper_ID']==row['Paper_ID']]
        authors_this_paper = paper_author_data[paper_author_data[paper_id_colname]==this_paper_id]
        author_ids = authors_this_paper[author_id_colname].astype(int)
        # filter out papers with a lot of authors
        if len(authors_this_paper) >= author_count_cutoff:
            logger.debug('excluding paper with {} authors: "{}" (paper ID: {})'.format(len(authors_this_paper), this_paper['title'], this_paper_id))
            continue
        for _, this_author in authors_this_paper.iterrows():
            author_id = int(this_author[author_id_colname])
            if G.has_node(author_id):
                G.nodes[author_id]['papers'].append(this_paper)
            else:
                this_author_name = this_author.get(author_name_colname)
                affil_id = this_author.get(affil_id_colname)
                if affil_id and not np.isnan(affil_id):
                    affil_id = int(affil_id)
                else:
                    affil_id = None
                this_author_affil = {
                    'affil_name': this_author.get(affil_name_colname),
                    'affil_id': affil_id,
                    'official_page': this_author.get(official_page_colname),
                    'wiki_page': this_author.get(wiki_page_colname),
                    'latitude': this_author.get(latitude_colname),
                    'longitude': this_author.get(longitude_colname)
                }
                G.add_node(author_id, author_name=this_author_name, author_id=author_id, papers=[this_paper], affil_name=this_author_affil['affil_name'], affiliation=this_author_affil)
        # add edges
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
        if max_nodes:
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
            G.nodes[node_name]['flow'] = node.data.flow
            G.nodes[node_name]['cl_top'] = path_tuple[0]
            G.nodes[node_name]['cl_infomap'] = path_str
            G.nodes[node_name]['cl_bottom'] = path_str[path_str.find(":")+1:]
    return G

# def main(args):
#     pass
#
# if __name__ == "__main__":
#     total_start = timer()
#     handler = logging.StreamHandler()
#     handler.setFormatter(logging.Formatter(fmt="%(asctime)s %(name)s.%(lineno)d %(levelname)s : %(message)s", datefmt="%H:%M:%S"))
#     root_logger.addHandler(handler)
#     root_logger.setLevel(logging.INFO)
#     logger.info(" ".join(sys.argv))
#     logger.info( '{:%Y-%m-%d %H:%M:%S}'.format(datetime.now()) )
#     import argparse
#     parser = argparse.ArgumentParser(description=DESCRIPTION)
#     parser.add_argument("--debug", action='store_true', help="output debugging info")
#     global args
#     args = parser.parse_args()
#     if args.debug:
#         root_logger.setLevel(logging.DEBUG)
#         logger.debug('debug mode is on')
#     main(args)
#     total_end = timer()
#     logger.info('all finished. total time: {}'.format(format_timespan(total_end-total_start)))
