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


	function chart(selection) {
		selection.each(function() {
			var selItem = this;

			var height = .625 * width;
			var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);

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

			function enterNodes(node, t = null) {
				// pass in the selection for entering nodes

				var defaultColor = color(0);

				sizeScale.domain(d3.extent(graph.nodes, function(d) {
					if (d.hasOwnProperty('flow')) {
						return d.flow;
					} else {
						return [5,5]
					}
				}));
				console.log(sizeScale.domain());


				var nodeEnter = node.enter().append("g")
				// .attr("r", 5)
					.attr("class", "node")
					// .attr("transform", function(d) {
					// 	var tx = (width/2) + d.x;
					// 	var ty = (height/2) + d.y;
					// 	return "translate(" + tx + "," + ty + ")";
					// })
					.call(d3.drag()
						.on("start", dragstarted)
						.on("drag", dragged)
						.on("end", dragended));



				node = node.merge(nodeEnter)
					.attr("cx", function(d) { return d.x = (width/2) + d.x; })
					.attr("cy", function(d) { return d.y = (height/2) + d.y; })
					.each(function(d) {
						if (d.hasOwnProperty('flow')) {
							d.radius = sizeScale(d.flow);
						} else {
							d.radius = 5;
						}

						if (d.hasOwnProperty("cl_top")) {
							d.color = color(d.cl_top);
						} else {
							d.color = defaultColor;
						}
					});

				var nodeCircle = nodeEnter
					.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
					.append("circle")
					// .attr("x", function(d) { return d.x; })
					// .attr("y", function(d) { return d.y; })
					.attr("fill", function(d) { return d.color; })
					.attr("r", 0);

				if (t !== null) {
					// nodeEnter.each(function(d) {
					// 	d.x = width/2;
					// 	d.y = height/2;
					// });
					node
						.selectAll("circle").transition(t)
						.attr("r", function(d) {
							return d.radius;
						})
					// .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
						.attr("fill", function(d) {
							return d.color;
						});
				} else {

					node.selectAll("circle")
						.attr("r", function(d) {
							return d.radius;
						})
					// .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
						.attr("fill", function(d) {
							return d.color;
						});
				}

				return node;
			}

			function enterLinks(link, t = null) {
				// pass in the selection for entering links
				
				
				var linkEnter = link.enter().append("line")
					.attr("x1", function(d) { return d.source.x; })
					.attr("y1", function(d) { return d.source.y; })
					.attr("x2", function(d) { return d.target.x; })
					.attr("y2", function(d) { return d.target.y; })
					.attr("class", "link");
				link = link.merge(linkEnter);
				link
				  .attr("stroke-width", function(d) { return Math.sqrt(d.weight); });

				if (t !== null) {
					linkEnter
						// .style("opacity", 0)
						.style("stroke", "green")
					// linkEnter.transition(t)
					// 	.style("opacity", 1);
				} else {
					//
				}

				return link;
			}

			var graph = data;
			console.log(graph);

			graph.nodes.forEach(function(d) {
				d.id = d.id.toString();
			});
			graph.links.forEach(function(d) {
				d.id = getLinkId(d, graph.directed);
			});

			var simulation = d3.forceSimulation()
				.force("link", d3.forceLink().id(function(d) { return d.id; }))
				// .force("link", d3.forceLink())
				.force("charge", manyBody)
				.force("center", d3.forceCenter(width / 2, height / 2));

		  simulation
			  .nodes(graph.nodes)
			  .on("tick", ticked);

		  simulation.force("link")
			  .links(graph.links);

			var sizeScale = d3.scaleLinear()
				.range([4, 12]);


			var g = svg.append("g");

		  var link = g.append("g")
			  .attr("class", "links")
			// .selectAll("line")
			.selectAll(".link");

			link = link.data(graph.links, function(d) {
				return d.id;
			});

		  var node = g.append("g")
			  .attr("class", "nodes")
			.selectAll(".node");

			node = node.data(graph.nodes, function(d) { return d.id; });

			node = enterNodes(node);
			link = enterLinks(link);


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



		  function ticked() {
			// node
			//     .attr("cx", function(d) { return d.x; })
			//     .attr("cy", function(d) { return d.y; });
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
				// .selectAll("line")
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
			svg.on("click", reset_layout);

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
				//
				// NOT IMPLEMENTED
			};

			updateData = function() {
				// use D3 update pattern with data

				graph = data;
				graph.nodes.forEach(function(d) {
					d.id = d.id.toString();
				})
				graph.links.forEach(function(d) {
					d.id = getLinkId(d, graph.directed);
				});
				simulation
					.nodes(graph.nodes)
					.on("tick", ticked);

				simulation.force("link")
					.links(graph.links);
				console.log(graph);
				simulation.stop();
				node = node.data(graph.nodes, function(d) { return d.id; });
				var nodeExit = node.exit();
				// nodeExit.selectAll("circle").attr("fill", "red");
				var t = d3.transition('updateData').duration(5000);
				nodeExit.selectAll("circle").style("stroke", "red").transition(t).attr("r", 0);
				node = enterNodes(node, t);
				// node = node.call(enterNodes, t);



				link = link
					.data(graph.links, function(d) {
						// d.id = getLinkId(d);
						return d.id;
					});
				var linkExit = link.exit();
				linkExit.style("stroke", "red").transition(t).style("opacity", 0).remove();
				// linkExit.remove();
				link = enterLinks(link, t);
				simulation.on("tick").call();


				t.end().then(function(d) {
					nodeExit.remove();
					// simulation.alpha(1).restart();
					// simulation
						// .alphaDecay(.0005)
						// .velocityDecay(0.9)
						// .alpha(.1)
						// .restart();
				console.log('dddd');
				});
				console.log('ssss');
				
				// setTimeout(function() {
				// }, 4000);
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




