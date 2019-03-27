var NodeLinkCoauthorshipVis = nodelink_vis_coauthorship.NodeLinkCoauthorshipVis;

var activateTooltips = nodelink_vis_coauthorship.activateTooltips;

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

var nodelinkvis;

// d3.json("data/test_coauthorship_graph.json").then(function(graph) {
d3.json("data/test_coauthorship_graph_combined_max600.json").then(function(graph) {
	nodelinkvis = NodeLinkCoauthorshipVis().width(960)
		.data(graph);
	d3.select("#chartDiv").call(nodelinkvis);
	// nodelinkvis.data(graph);

	activateTooltips();
	labelImportantNodes();

});

// setTimeout(function() {
// 	d3.json("data/test_coauthorship_graph_misinfo_max600.json").then(function(graph) {
// 		nodelinkvis.data(graph);
// 		activateTooltips();
// 	});
// }, 3000);

// function applyRadioSelection() {
// 	var val = $( 'input[type=radio][name=nodelab-radio]:checked' ).val();
// 	console.log(val);
// 	$( '.node' ).find( 'text' ).hide();
// 	if (val !== 'none') {
// 		$( '.node.focus' ).find( '.' + val ).show();
// 	}
// }

function labelImportantNodes() {
	var topN = 10;
	var x = d3.selectAll('.node')
		.sort(function(a, b) {
			return d3.descending(a.flow, b.flow)
		})
		.filter(function(d, i) { return i<topN; })
		.append('g').attr("class", "label-important");
		// .each(function(d) {
		// 	console.log(d);
		// 	var instance = tippy(this)
		// 	instance.setContent('ddd');
		// 	instance.show();
		// });
	x.append("circle").attr("r", 0.0001).style("visible", "hidden")
		.each(function(d) {
			var instance = tippy(this, {
				// animation: "scale",
				placement: "right",
				duration: 0,
				delay: 0,
				distance: 10,
				hideOnClick: false,
				interactive: true,
				trigger: "manual",
				appendTo: document.getElementById("chartDiv"),
				theme: "label-important",
				showOnInit: true,
				sticky: true,  // move around with the nodes
				updateDuration: 0,
				content: d.author_name,
			});
			// instance.show();
		});
	// x.append('text').text(function(d) { return d.author_name; });
}

$( document ).ready(function() {
	// var $nodelabRadio = $( 'input[type=radio][name=nodelab-radio]' );
	// $nodelabRadio.change( applyRadioSelection );

	
})
