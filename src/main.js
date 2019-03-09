// import update from './update.js';

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

// update();


var fuseOptions = {
	id: "id",
	shouldSort: true,
	threshold: 0.3,
	location: 0,
	distance: 100,
	maxPatternLength: 32,
	minMatchCharLength: 1,
	keys: [
		"author_name",
		"affil_name"
	]
};

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var manyBody = d3.forceManyBody()
					.strength(-2);

var simulation = d3.forceSimulation()
    // .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("link", d3.forceLink())
    .force("charge", manyBody)
    .force("center", d3.forceCenter(width / 2, height / 2));

var sizeScale = d3.scaleLinear()
	.range([4, 12]);


d3.json("coauthorship_nas2_doilinked_largest_cc.json").then(function(graph) {
	console.log(graph);

	graph.nodes.forEach(function(d) {
		d.id = d.id.toString();
	});

	sizeScale.domain(d3.extent(graph.nodes, function(d) { return d.flow; }));


  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.weight); });

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll(".node")
    .data(graph.nodes)
    .enter().append("g")
      // .attr("r", 5)
		.attr("class", "node")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

	var nodeCircle = node.append("circle")
      .attr("r", function(d) { return d.radius = sizeScale(d.flow); })
      .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });

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
    // node
    //     .attr("cx", function(d) { return d.x; })
    //     .attr("cy", function(d) { return d.y; });
	// add bounding box
	  // https://bl.ocks.org/mbostock/1129492
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
	nodeTooltips();  // not working!!
	svg.on("click", reset_layout);

	var fuse = new Fuse(graph.nodes, fuseOptions);
	var result = fuse.search("ehlow");
	console.log(result);
	$( '#textSearch' ).on( 'input', fuseSelect );
	function fuseSelect() {
		// reset node sizes and styles
		d3.selectAll(".node circle")
			.style("stroke-width", 1)
			.style("stroke", "white")
			.attr("r", function(d) { return d.radius; });

		var $this = $( this );
		var query = $this.val();
		console.log($this.val());
		if (query.length > 3) {
			var result = fuse.search(query);
			if (result.length !=0) {
				for (var i = 0, len = result.length; i < len; i++) {
					var authorId = result[i];
					node.filter(function(d) { return d.id == authorId; })
						.select("circle")
						.style("stroke-width", 2)
						.style("stroke", "black")
						.attr("r", function(d) { return d.radius * 1.5; });
				}
			}
		}
	}

});

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

function nodeTooltips() {
	var windowWidth = $(window).width();
	$('.node').find('circle').tooltipster({
		theme: 'tooltipster-noir',
		maxWidth: windowWidth * .5,
		// animation: null,
		// animationduration: 0,
		// delay: 0,
		// updateAnimation: null,
		// content: "error",
		contentAsHTML: true,
		functionInit: function(instance, helper) {
			// var tooltipHtml = getTooltipHtml(helper.origin);
			// instance.content($(helper.origin).data("tooltipHtml"));
			// d3.select(helper.origin).each(function(d) {instance.content(d.author_name_detex)});
			// instance.content(tooltipHtml);
			$( '#tooltipCheckbox' ).change( function() { this.checked ? instance.enable() : instance.disable(); } );
			instance.content('error');
		},
		functionFormat: tooltipFormat
	});
	// tooltipster-discovery mode so tooltips open quicker in succession
	// https://github.com/louisameline/tooltipster-discovery
	$.tooltipster.group('.node circle');


	function tooltipFormat(instance, helper, content) {
		var thisNode = d3.select(helper.origin);
		var $template = $( '#tooltip-template' ).clone().show();
		function fillHtml(classname, textContent) {
			$template.find( '.' + classname ).find( '.template-content' ).text(textContent);
		}

		thisNode.each(function(d) {
			// fillHtml('author_name', d.author_name_detex);
			fillHtml('author_name', d.author_name);
			fillHtml('affil_name', d.affil_name);
			fillHtml('cluster_id', d.cl_bottom);
			var $paperTitles = $template.find( '.paper_titles' ).find( '.template-content' );
			for (var i = 0, len = d.papers.length; i < len; i++) {
				$listItem = $( '<li class="paper_title">' ).text(d.papers[i].title);
				$paperTitles.append( $listItem );
			}
		});
		// return $template.html();
		return $template;
	}


	// function getTooltipHtml(node) {
	// 	// store tooltip html as data attribute
	// 	var html;
	// 	d3.select(node).each(function(d) {
	// 		var span = $( '<span>' );
	// 		span.append( $('<p class="tooltip author_name">').text(d.author_name_detex) );
	// 		span.append( $('<p class="tooltip affil_name">').text(d.affil_name) );
	// 		for (var i = 0, len = d.papers.length; i < len; i++) {
	// 			span.append( $( '<p class="tooltip paper_title">' ).text(d.papers[i].title) );
	// 		}
	// 		html = span.html();
	// 	});
	// 	return html;
	// }

	
}

function applyRadioSelection() {
	var val = $( 'input[type=radio][name=nodelab-radio]:checked' ).val();
	console.log(val);
	$( '.node' ).find( 'text' ).hide();
	if (val !== 'none') {
		$( '.node.focus' ).find( '.' + val ).show();
	}
}

$( document ).ready(function() {
	var $nodelabRadio = $( 'input[type=radio][name=nodelab-radio]' );
	$nodelabRadio.change( applyRadioSelection );
	
})
