import tippy from 'tippy.js';
// const tippy = require('../node_modules/tippy.js/');
import 'tippy.js/themes/light-border.css';

import * as d3 from 'd3';
import jQuery from 'jquery';
const $ = jQuery;

export default activateTooltips;

tippy.setDefaults({
	'theme': 'light-border',
	'animateFill': false,
	'animation': 'fade',
});
const template = document.getElementById('tooltip-template');

function activateTooltips() {
	console.log('activateTooltips()');

	function fillHtml($template, classname, textContent) {
		$template.find( '.' + classname ).find( '.template-content' ).text(textContent);
	}

	d3.selectAll('.node circle').each(function(d) {
		var $tooltipNode = $(template).clone().attr("id", null);
		if (this.hasOwnProperty("_tippy")) {
			var tippyInstance = this._tippy;
		} else {
			var tippyInstance = tippy(this);
		}
		fillHtml($tooltipNode, 'author_name', d.author_name);
		// if (d.hasOwnProperty('affil_name') && d.affil_name.length) {
		if (d.hasOwnProperty('affil_name')) {
			fillHtml($tooltipNode, 'affil_name', d.affil_name);
		} else {
			$tooltipNode.find('.affil_name').hide();
		}
		// if (d.hasOwnProperty('cl_bottom')) fillHtml($tooltipNode, 'cluster_id', d.cl_bottom);
		var $paperTitles = $tooltipNode.find( '.paper_titles' ).find( '.template-content' );
		var papers = d.papers;
		// sort papers alphabetically
		papers.sort(function(a, b) { return d3.ascending(a.title, b.title); });
		for (var i = 0, len = papers.length; i < len; i++) {
			var $listItem = $( '<li class="paper_title">' ).text(papers[i].title);
			$paperTitles.append( $listItem );
		}
		tippyInstance.setContent($tooltipNode.html());
	});
}
