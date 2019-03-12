// NodeLinkCoauthorshipVis

import * as d3 from 'd3';
import jQuery from 'jquery';
const $ = jQuery;

export default NodeLinkCoauthorshipVis;



// reusable chart pattern inspired by:
// https://bost.ocks.org/mike/chart/
// and
// https://www.toptal.com/d3-js/towards-reusable-d3-js-charts
function NodeLinkCoauthorshipVis() {
	var data = [];
	var width = 960;

	var updateData;
	var updateWidth;

	var color = d3.scaleOrdinal(d3.schemeCategory10);

	var manyBody = d3.forceManyBody()
						.strength(-2);

	function getLinkId(link, directed = false) {
		// link ID will be the concatenation of the source ID and target ID, separated by "-&-"
		// If the graph is undirected, the IDs will be sorted ALPHABETICALLY using the string values of the ID
		var source = link.source.toString();
		var target = link.target.toString();
		var items = [source, target];
		var sep = "-&-";
		if (directed === true) {
			items.sort();
		}
		return items[0] + sep + items[1];
	}

	function dragstarted(d) {
	  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
	  d.fx = d.x;
	  d.fy = d.y;
	}

	function dragged(d) {
	  d.fx = d3.event.x;
	  d.fy = d3.event.y;
	}

	function dragended(d) {
	  if (!d3.event.active) simulation.alphaTarget(0);
	  d.fx = null;
	  d.fy = null;
	}


	function chart(selection) {
		selection.each(function() {
			var selItem = this;

			var height = .625 * width;
			var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);

			function enterNodes(node) {
				// pass in the selection for entering nodes
				
				
				var nodeEnter = node.enter().append("g")
			  // .attr("r", 5)
				.attr("class", "node")
			  .call(d3.drag()
				  .on("start", dragstarted)
				  .on("drag", dragged)
				  .on("end", dragended));


				node = node.merge(nodeEnter)
					.each(function(d) {
						if (d.hasOwnProperty('flow')) {
						  d.radius = sizeScale(d.flow);
						} else {
						  d.radius = 5;
						}
					});

			  var nodeCircle = nodeEnter.append("circle")
				.attr("r", function(d) {
					return d.radius;
				})
				// .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
				.attr("fill", function(d) {
					if (d.hasOwnProperty("cl_top")) {
						d.color_orig = color(d.cl_top);
					} else {
						d.color_orig = color(0);
					}
					return d.color_orig
				});
				return node;
			}

			function enterLinks(link) {
				// pass in the selection for entering links
				
				
				var linkEnter = link.enter().append("line").attr("class", "link")
				  .attr("stroke-width", function(d) { return Math.sqrt(d.weight); });
				link = link.merge(linkEnter);
				return link;
			}

			var graph = data;
			console.log(graph);

			graph.nodes.forEach(function(d) {
				d.id = d.id.toString();
			});
			graph.links.forEach(function(d) {
				d.id = getLinkId(d);
			});

			var simulation = d3.forceSimulation()
				.force("link", d3.forceLink().id(function(d) { return d.id; }))
				// .force("link", d3.forceLink())
				.force("charge", manyBody)
				.force("center", d3.forceCenter(width / 2, height / 2));

			var sizeScale = d3.scaleLinear()
				.range([4, 12]);

			sizeScale.domain(d3.extent(graph.nodes, function(d) {
				if (d.hasOwnProperty('flow')) {
					return d.flow;
				} else {
					return [5,5]
				}
			}));


		  var link = svg.append("g")
			  .attr("class", "links")
			// .selectAll("line")
			.selectAll(".link")
			.data(graph.links, function(d) {
				return d.id;
			});
			// .enter();
			// .append("line").attr("class", "link")
			//   .attr("stroke-width", function(d) { return Math.sqrt(d.weight); });

		  var node = svg.append("g")
			  .attr("class", "nodes")
			.selectAll(".node")
			.data(graph.nodes, function(d) { return d.id; });
			// .enter();
				// .append("g")
			  // // .attr("r", 5)
				// .attr("class", "node")
			  // .call(d3.drag()
				//   .on("start", dragstarted)
				//   .on("drag", dragged)
				//   .on("end", dragended));
			node = enterNodes(node);
			link = enterLinks(link);


			// node.append("text")
			// 	.attr("class", "affil_name")
			// 	.style("display", "none")  // hidden initially
			// 	.text(function(d) { return d.affil_name; });
			// node.append("text")
			// 	.attr("class", "author_name")
			// 	.style("display", "none")  // hidden initially
			// 	.text(function(d) { return d.author_name_detex; });

			// nodeCircle.on('click', function(d) {
			// 	node.classed('focus', false);
			// 	node.selectAll("text").style("display", "none");
			// 	nodeCircle.attr("fill", "black")
			// 		.style("opacity", .1);
			// 	link.style("opacity", .1);
			// 	var component_ids = graph.graph.connected_components[d.component];
			// 	var component = node.filter(function(d) {return component_ids.includes(d.id); });
			// 	var componentLink = link.filter(function(d) {return component_ids.includes(d.source.id);})
			// 	var componentColor = d3.scaleOrdinal(d3.schemeCategory10);
			// 	component.classed("focus", true);
			// 	component.selectAll("circle").attr("fill", function(d) { return componentColor(d.cl_bottom); })
			// 		.style("opacity", 1);
			// 	component.selectAll("text").style("display", "");  // show these labels
			// 	componentLink.style("opacity", 1);
			// 	
			// 	$( '#nodelab-form' ).css( 'visibility' , 'visible' );
			// 	applyRadioSelection();
			//
			// 	d3.event.stopPropagation();
			//
			// });

		  // node.append("title")
		  //     // .text(function(d) { return d.author_name; });
		  //     .text(function(d) { 
			// 	  var titles = [];
			// 	  for (var i = 0, len = d.papers.length; i < len; i++) {
			// 	  	titles.push(d.papers[i].title);
			// 	  }
			// 	  return  d.author_name + '\n' + d.cl_bottom + '\n' + titles.join('\n');
			//   });
			// node.attr("title", function(d) {
			// 	  // var titles = [];
			// 	  // for (var i = 0, len = d.papers.length; i < len; i++) {
			// 	  // 	titles.push(d.papers[i].title);
			// 	  // }
			// 	  // return  d.author_name + '\n' + d.cl_bottom + '\n' + titles.join('\n');
			// 	return d.author_name_detex + ' ' + d.affil_name;
			// });

		  simulation
			  .nodes(graph.nodes)
			  .on("tick", ticked);

		  simulation.force("link")
			  .links(graph.links);

		  function ticked() {
			node
			    .attr("cx", function(d) { return d.x; })
			    .attr("cy", function(d) { return d.y; });
			// add bounding box
			//   https://bl.ocks.org/mbostock/1129492
			node
				.attr("cx", function(d) { 
					d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
					return d.x; })
				.attr("cy", function(d) { 
					d.y = Math.max(d.radius, Math.min(width - d.radius, d.y));
					return d.y; })
				.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

			link
				.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });
		  }

			function reset_layout() {
				node.classed("focus", false);
				node.selectAll("text").style("display", "none");
				// nodeCircle.attr("fill", function(d) { return d.color_orig; })
				// 	.style("opacity", 1);
				link.style("opacity", 1);
				$( '#nodelab-form' ).css( 'visibility' , 'hidden' );
			}
			// nodeTooltips();  // not working!!
			svg.on("click", reset_layout);

			// // TEST
			// setTimeout(function() {
			// 	d3.json("data/test_coauthorship_graph_misinfo.json").then(function(graph) {
			// 		simulation.stop();
			// 		d3.selectAll('.node').data(graph.nodes, function(d) { return d.id; }).exit().remove();
			// 		// link.data(graph.links, function(d) { return d.id; }).exit().remove();
			// 	});
			// }, 2000);

			// TODO this is broken. fix it.
			// var fuse = new Fuse(graph.nodes, fuseOptions);
			// var result = fuse.search("ehlow");
			// console.log(result);
			// $( '#textSearch' ).on( 'input', fuseSelect );
			// function fuseSelect() {
			// 	// reset node sizes and styles
			// 	d3.selectAll(".node circle")
			// 		.style("stroke-width", 1)
			// 		.style("stroke", "white")
			// 		.attr("r", function(d) { return d.radius; });
            //
			// 	var $this = $( this );
			// 	var query = $this.val();
			// 	console.log($this.val());
			// 	if (query.length > 3) {
			// 		var result = fuse.search(query);
			// 		if (result.length !=0) {
			// 			for (var i = 0, len = result.length; i < len; i++) {
			// 				var authorId = result[i];
			// 				node.filter(function(d) { return d.id == authorId; })
			// 					.select("circle")
			// 					.style("stroke-width", 2)
			// 					.style("stroke", "black")
			// 					.attr("r", function(d) { return d.radius * 1.5; });
			// 			}
			// 		}
			// 	}
			// }

			updateWidth = function() {
				// use width to make any changes
			};

			updateData = function() {
				// use D3 update pattern with data

				graph = data;
				graph.nodes.forEach(function(d) {
					d.id = d.id.toString();
				});
				graph.links.forEach(function(d) {
					d.id = getLinkId(d);
				});
				console.log(graph);
				// simulation.stop();
				// var linkExit = link.data(graph.links, function(d) { return d.id; }).exit().remove();
				// console.log(linkExit);
				// node = d3.selectAll('.node').data(graph.nodes, function(d) { return d.id; });
				node = node.data(graph.nodes, function(d) { return d.id; });
				var nodeExit = node.exit();
				// nodeExit.selectAll("circle").attr("fill", "red");
				nodeExit.remove();
				node = enterNodes(node);


				// var orig_ids = [];
				// link.each(function(d) {
				// 	orig_ids.push(d.id);
				// });
				// link = d3.selectAll('.link')
				link = link
					.data(graph.links, function(d) {
						// d.id = getLinkId(d);
						return d.id;
					});
				var linkExit = link.exit();
				linkExit.remove();
				link = enterLinks(link);
				// console.log(orig_ids);
				// link.each(function(d) {
				// 	if (orig_ids.includes(d.id)) {
				// 		console.log("true");
				// 	} else {
				// 		console.log("false");
				// 	}
				// });
				// var linkEnter = link.enter();
				link.style("stroke", "red");
				simulation
					.nodes(graph.nodes)
					.on("tick", ticked);

				simulation.force("link")
					.links(graph.links);
				// for (var i = 0; i < 30; i++) {
				// 	simulation.tick()
				// }
				// console.log("ticked");
				// simulation.restart();
			}



		});

	}
	chart.data = function(value) {
		if (!arguments.length) return data;
		data = value;
		console.log(typeof updateData);
		if (typeof updateData === 'function') updateData();
		return chart;
	};

	chart.width = function(value) {
		if (!arguments.length) return width;
		width = value;
		if (typeof updateWidth === 'function') updateWidth();
		return chart;
	};

	return chart;
	
}




