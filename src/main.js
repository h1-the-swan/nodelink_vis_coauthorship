import * as d3 from 'd3';
import jQuery from 'jquery';
window.d3 = d3;
window.$ = jQuery;
window.jQuery = jQuery;
import NodeLinkCoauthorshipVis from './vis.js';
import activateTooltips from './coauthorship_tooltips.js';

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
	nodelinkvis = NodeLinkCoauthorshipVis().width(960).data(graph);
	d3.select("#chartDiv").call(nodelinkvis);
	// nodelinkvis.data(graph);

	activateTooltips();

});

setTimeout(function() {
	d3.json("data/test_coauthorship_graph_misinfo_max600.json").then(function(graph) {
		nodelinkvis.data(graph);
		activateTooltips();
	});
}, 3000);

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
