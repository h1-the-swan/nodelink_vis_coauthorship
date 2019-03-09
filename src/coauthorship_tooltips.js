import tippy from 'tippy.js';
import 'tippy.js/themes/light-border.css';

export default activateTooltips;

function activateTooltips() {
	console.log('activateTooltips()');
	tippy.setDefaults({
		'theme': 'light-border',
		'animateFill': false,
		'animation': 'fade',
	});

	tippy('.vis-description', {content: "test description tooltip"});
	var instance = tippy('.node', {
		content: 'test Tooltip',
	});
	console.log(instance);
}
//
// function nodeTooltips() {
// 	var windowWidth = $(window).width();
// 	$('.node').find('circle').tooltipster({
// 		theme: 'tooltipster-noir',
// 		maxWidth: windowWidth * .5,
// 		// animation: null,
// 		// animationduration: 0,
// 		// delay: 0,
// 		// updateAnimation: null,
// 		// content: "error",
// 		contentAsHTML: true,
// 		functionInit: function(instance, helper) {
// 			// var tooltipHtml = getTooltipHtml(helper.origin);
// 			// instance.content($(helper.origin).data("tooltipHtml"));
// 			// d3.select(helper.origin).each(function(d) {instance.content(d.author_name_detex)});
// 			// instance.content(tooltipHtml);
// 			$( '#tooltipCheckbox' ).change( function() { this.checked ? instance.enable() : instance.disable(); } );
// 			instance.content('error');
// 		},
// 		functionFormat: tooltipFormat
// 	});
// 	// tooltipster-discovery mode so tooltips open quicker in succession
// 	// https://github.com/louisameline/tooltipster-discovery
// 	$.tooltipster.group('.node circle');
//
//
// 	function tooltipFormat(instance, helper, content) {
// 		var thisNode = d3.select(helper.origin);
// 		var $template = $( '#tooltip-template' ).clone().show();
// 		function fillHtml(classname, textContent) {
// 			$template.find( '.' + classname ).find( '.template-content' ).text(textContent);
// 		}
//
// 		thisNode.each(function(d) {
// 			// fillHtml('author_name', d.author_name_detex);
// 			fillHtml('author_name', d.author_name);
// 			fillHtml('affil_name', d.affil_name);
// 			fillHtml('cluster_id', d.cl_bottom);
// 			var $paperTitles = $template.find( '.paper_titles' ).find( '.template-content' );
// 			for (var i = 0, len = d.papers.length; i < len; i++) {
// 				var $listItem = $( '<li class="paper_title">' ).text(d.papers[i].title);
// 				$paperTitles.append( $listItem );
// 			}
// 		});
// 		// return $template.html();
// 		return $template;
// 	}
//
//
// 	// function getTooltipHtml(node) {
// 	// 	// store tooltip html as data attribute
// 	// 	var html;
// 	// 	d3.select(node).each(function(d) {
// 	// 		var span = $( '<span>' );
// 	// 		span.append( $('<p class="tooltip author_name">').text(d.author_name_detex) );
// 	// 		span.append( $('<p class="tooltip affil_name">').text(d.affil_name) );
// 	// 		for (var i = 0, len = d.papers.length; i < len; i++) {
// 	// 			span.append( $( '<p class="tooltip paper_title">' ).text(d.papers[i].title) );
// 	// 		}
// 	// 		html = span.html();
// 	// 	});
// 	// 	return html;
// 	// }
//
// 	
// }

