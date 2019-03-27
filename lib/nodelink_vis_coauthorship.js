(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("jQuery"), require("tippy.js"));
	else if(typeof define === 'function' && define.amd)
		define("nodelink_vis_coauthorship", ["d3", "jQuery", "tippy.js"], factory);
	else if(typeof exports === 'object')
		exports["nodelink_vis_coauthorship"] = factory(require("d3"), require("jQuery"), require("tippy.js"));
	else
		root["nodelink_vis_coauthorship"] = factory(root["d3"], root["jQuery"], root["tippy"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_tippy_js__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tippy.js/themes/light-border.css":
/*!*******************************************************!*\
  !*** ./node_modules/tippy.js/themes/light-border.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/coauthorship_tooltips.js":
/*!**************************************!*\
  !*** ./src/coauthorship_tooltips.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tippy = _interopRequireDefault(__webpack_require__(/*! tippy.js */ "tippy.js"));

__webpack_require__(/*! tippy.js/themes/light-border.css */ "./node_modules/tippy.js/themes/light-border.css");

var d3 = _interopRequireWildcard(__webpack_require__(/*! d3 */ "d3"));

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const tippy = require('../node_modules/tippy.js/');
console.log(_tippy.default);
var $ = _jquery.default;
var _default = activateTooltips;
exports.default = _default;

_tippy.default.setDefaults({
  'theme': 'light-border',
  'animateFill': false,
  'animation': 'fade'
});

var template = document.getElementById('tooltip-template');

function activateTooltips() {
  console.log('activateTooltips()');

  function fillHtml($template, classname, textContent) {
    $template.find('.' + classname).find('.template-content').text(textContent);
  }

  d3.selectAll('.node circle').each(function (d) {
    var $tooltipNode = $(template).clone().attr("id", null);

    if (this.hasOwnProperty("_tippy")) {
      var tippyInstance = this._tippy;
    } else {
      var tippyInstance = (0, _tippy.default)(this);
    }

    fillHtml($tooltipNode, 'author_name', d.author_name);
    fillHtml($tooltipNode, 'affil_name', d.affil_name);
    if (d.hasOwnProperty('cl_bottom')) fillHtml($tooltipNode, 'cluster_id', d.cl_bottom);
    var $paperTitles = $tooltipNode.find('.paper_titles').find('.template-content');

    for (var i = 0, len = d.papers.length; i < len; i++) {
      var $listItem = $('<li class="paper_title">').text(d.papers[i].title);
      $paperTitles.append($listItem);
    }

    tippyInstance.setContent($tooltipNode.html());
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NodeLinkCoauthorshipVis", {
  enumerable: true,
  get: function get() {
    return _vis.default;
  }
});
Object.defineProperty(exports, "activateTooltips", {
  enumerable: true,
  get: function get() {
    return _coauthorship_tooltips.default;
  }
});

var _vis = _interopRequireDefault(__webpack_require__(/*! ./vis.js */ "./src/vis.js"));

var _coauthorship_tooltips = _interopRequireDefault(__webpack_require__(/*! ./coauthorship_tooltips.js */ "./src/coauthorship_tooltips.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/vis.js":
/*!********************!*\
  !*** ./src/vis.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var d3 = _interopRequireWildcard(__webpack_require__(/*! d3 */ "d3"));

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = _jquery.default;
var _default = NodeLinkCoauthorshipVis; // reusable chart pattern inspired by:
// https://bost.ocks.org/mike/chart/
// and
// https://www.toptal.com/d3-js/towards-reusable-d3-js-charts

exports.default = _default;

function NodeLinkCoauthorshipVis() {
  var data = [];
  var width = 960;
  var updateData;
  var updateWidth;
  var color = d3.scaleOrdinal(d3.schemeCategory10);
  var manyBody = d3.forceManyBody().strength(-2);

  function getLinkId(link) {
    var directed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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
    selection.each(function () {
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

      function enterNodes(node) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        // pass in the selection for entering nodes
        var defaultColor = color(0);
        sizeScale.domain(d3.extent(graph.nodes, function (d) {
          if (d.hasOwnProperty('flow')) {
            return d.flow;
          } else {
            return [5, 5];
          }
        }));
        console.log(sizeScale.domain());
        var nodeEnter = node.enter().append("g") // .attr("r", 5)
        .attr("class", "node") // .attr("transform", function(d) {
        // 	var tx = (width/2) + d.x;
        // 	var ty = (height/2) + d.y;
        // 	return "translate(" + tx + "," + ty + ")";
        // })
        .call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
        node = node.merge(nodeEnter).attr("cx", function (d) {
          return d.x = width / 2 + d.x;
        }).attr("cy", function (d) {
          return d.y = height / 2 + d.y;
        }).each(function (d) {
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
        var nodeCircle = nodeEnter.attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        }).append("circle") // .attr("x", function(d) { return d.x; })
        // .attr("y", function(d) { return d.y; })
        .attr("fill", function (d) {
          return d.color;
        }).attr("r", 0);

        if (t !== null) {
          // nodeEnter.each(function(d) {
          // 	d.x = width/2;
          // 	d.y = height/2;
          // });
          node.selectAll("circle").transition(t).attr("r", function (d) {
            return d.radius;
          }) // .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
          .attr("fill", function (d) {
            return d.color;
          });
        } else {
          node.selectAll("circle").attr("r", function (d) {
            return d.radius;
          }) // .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
          .attr("fill", function (d) {
            return d.color;
          });
        }

        return node;
      }

      function enterLinks(link) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        // pass in the selection for entering links
        var linkEnter = link.enter().append("line").attr("x1", function (d) {
          return d.source.x;
        }).attr("y1", function (d) {
          return d.source.y;
        }).attr("x2", function (d) {
          return d.target.x;
        }).attr("y2", function (d) {
          return d.target.y;
        }).attr("class", "link");
        link = link.merge(linkEnter);
        link.attr("stroke-width", function (d) {
          return Math.sqrt(d.weight);
        });

        if (t !== null) {
          linkEnter // .style("opacity", 0)
          .style("stroke", "green"); // linkEnter.transition(t)
          // 	.style("opacity", 1);
        } else {//
          }

        return link;
      }

      var graph = data;
      console.log(graph);
      graph.nodes.forEach(function (d) {
        d.id = d.id.toString();
      });
      graph.links.forEach(function (d) {
        d.id = getLinkId(d, graph.directed);
      });
      var simulation = d3.forceSimulation().force("link", d3.forceLink().id(function (d) {
        return d.id;
      })) // .force("link", d3.forceLink())
      .force("charge", manyBody).force("center", d3.forceCenter(width / 2, height / 2));
      simulation.nodes(graph.nodes).on("tick", ticked);
      simulation.force("link").links(graph.links);
      var sizeScale = d3.scaleLinear().range([4, 12]);
      var g = svg.append("g");
      var link = g.append("g").attr("class", "links") // .selectAll("line")
      .selectAll(".link");
      link = link.data(graph.links, function (d) {
        return d.id;
      });
      var node = g.append("g").attr("class", "nodes").selectAll(".node");
      node = node.data(graph.nodes, function (d) {
        return d.id;
      });
      node = enterNodes(node);
      link = enterLinks(link); // nodeCircle.on('click', function(d) {
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
        node.attr("cx", function (d) {
          d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
          return d.x;
        }).attr("cy", function (d) {
          d.y = Math.max(d.radius, Math.min(width - d.radius, d.y));
          return d.y;
        }).attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
        link // .selectAll("line")
        .attr("x1", function (d) {
          return d.source.x;
        }).attr("y1", function (d) {
          return d.source.y;
        }).attr("x2", function (d) {
          return d.target.x;
        }).attr("y2", function (d) {
          return d.target.y;
        });
      }

      function reset_layout() {
        node.classed("focus", false);
        node.selectAll("text").style("display", "none"); // nodeCircle.attr("fill", function(d) { return d.color_orig; })
        // 	.style("opacity", 1);

        link.style("opacity", 1);
        $('#nodelab-form').css('visibility', 'hidden');
      }

      svg.on("click", reset_layout); // TODO this is broken. fix it.
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

      updateWidth = function updateWidth() {// use width to make any changes
        //
        // NOT IMPLEMENTED
      };

      updateData = function updateData() {
        // use D3 update pattern with data
        graph = data;
        graph.nodes.forEach(function (d) {
          d.id = d.id.toString();
        });
        graph.links.forEach(function (d) {
          d.id = getLinkId(d, graph.directed);
        });
        simulation.nodes(graph.nodes).on("tick", ticked);
        simulation.force("link").links(graph.links);
        console.log(graph);
        simulation.stop();
        node = node.data(graph.nodes, function (d) {
          return d.id;
        });
        var nodeExit = node.exit(); // nodeExit.selectAll("circle").attr("fill", "red");

        var t = d3.transition('updateData').duration(5000);
        nodeExit.selectAll("circle").style("stroke", "red").transition(t).attr("r", 0);
        node = enterNodes(node, t); // node = node.call(enterNodes, t);

        link = link.data(graph.links, function (d) {
          // d.id = getLinkId(d);
          return d.id;
        });
        var linkExit = link.exit();
        linkExit.style("stroke", "red").transition(t).style("opacity", 0).remove(); // linkExit.remove();

        link = enterLinks(link, t);
        simulation.on("tick").call();
        t.end().then(function (d) {
          nodeExit.remove(); // simulation.alpha(1).restart();
          // simulation
          // .alphaDecay(.0005)
          // .velocityDecay(0.9)
          // .alpha(.1)
          // .restart();

          console.log('dddd');
        });
        console.log('ssss'); // setTimeout(function() {
        // }, 4000);
      };
    });
  }

  chart.data = function (value) {
    if (!arguments.length) return data;
    data = value;
    console.log(_typeof(updateData));
    if (typeof updateData === 'function') updateData();
    return chart;
  };

  chart.width = function (value) {
    if (!arguments.length) return width;
    width = value;
    if (typeof updateWidth === 'function') updateWidth();
    return chart;
  };

  return chart;
}

module.exports = exports["default"];

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "tippy.js":
/*!***********************************************************************************************!*\
  !*** external {"commonjs":"tippy.js","commonjs2":"tippy.js","amd":"tippy.js","root":"tippy"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tippy_js__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvY29hdXRob3JzaGlwX3Rvb2x0aXBzLmpzIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRpcHB5LmpzXCIsXCJjb21tb25qczJcIjpcInRpcHB5LmpzXCIsXCJhbWRcIjpcInRpcHB5LmpzXCIsXCJyb290XCI6XCJ0aXBweVwifSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiJCIsImFjdGl2YXRlVG9vbHRpcHMiLCJzZXREZWZhdWx0cyIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbGxIdG1sIiwiJHRlbXBsYXRlIiwiY2xhc3NuYW1lIiwidGV4dENvbnRlbnQiLCJmaW5kIiwidGV4dCIsImQzIiwic2VsZWN0QWxsIiwiZWFjaCIsImQiLCIkdG9vbHRpcE5vZGUiLCJjbG9uZSIsImF0dHIiLCJoYXNPd25Qcm9wZXJ0eSIsInRpcHB5SW5zdGFuY2UiLCJfdGlwcHkiLCJhdXRob3JfbmFtZSIsImFmZmlsX25hbWUiLCJjbF9ib3R0b20iLCIkcGFwZXJUaXRsZXMiLCJpIiwibGVuIiwicGFwZXJzIiwibGVuZ3RoIiwiJGxpc3RJdGVtIiwidGl0bGUiLCJhcHBlbmQiLCJzZXRDb250ZW50IiwiaHRtbCIsIk5vZGVMaW5rQ29hdXRob3JzaGlwVmlzIiwiZGF0YSIsIndpZHRoIiwidXBkYXRlRGF0YSIsInVwZGF0ZVdpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwibWFueUJvZHkiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJnZXRMaW5rSWQiLCJsaW5rIiwiZGlyZWN0ZWQiLCJzb3VyY2UiLCJ0b1N0cmluZyIsInRhcmdldCIsIml0ZW1zIiwic2VwIiwic29ydCIsImNoYXJ0Iiwic2VsZWN0aW9uIiwic2VsSXRlbSIsImhlaWdodCIsInN2ZyIsInNlbGVjdCIsImRyYWdzdGFydGVkIiwiZXZlbnQiLCJhY3RpdmUiLCJzaW11bGF0aW9uIiwiYWxwaGFUYXJnZXQiLCJyZXN0YXJ0IiwiZngiLCJ4IiwiZnkiLCJ5IiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImVudGVyTm9kZXMiLCJub2RlIiwidCIsImRlZmF1bHRDb2xvciIsInNpemVTY2FsZSIsImRvbWFpbiIsImV4dGVudCIsImdyYXBoIiwibm9kZXMiLCJmbG93Iiwibm9kZUVudGVyIiwiZW50ZXIiLCJjYWxsIiwiZHJhZyIsIm9uIiwibWVyZ2UiLCJyYWRpdXMiLCJjbF90b3AiLCJub2RlQ2lyY2xlIiwidHJhbnNpdGlvbiIsImVudGVyTGlua3MiLCJsaW5rRW50ZXIiLCJNYXRoIiwic3FydCIsIndlaWdodCIsInN0eWxlIiwiZm9yRWFjaCIsImlkIiwibGlua3MiLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlQ2VudGVyIiwidGlja2VkIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImciLCJtYXgiLCJtaW4iLCJyZXNldF9sYXlvdXQiLCJjbGFzc2VkIiwiY3NzIiwic3RvcCIsIm5vZGVFeGl0IiwiZXhpdCIsImR1cmF0aW9uIiwibGlua0V4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LENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0MsU0FURDtBQVVBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBbER1QixDQW9EdkI7QUFDQTtBQUNBLE9BdEREO0FBMERBLEtBOVVEO0FBZ1ZBOztBQUNEd0QsT0FBSyxDQUFDbkIsSUFBTixHQUFhLFVBQVN1RixLQUFULEVBQWdCO0FBQzVCLFFBQUksQ0FBQ0MsU0FBUyxDQUFDL0YsTUFBZixFQUF1QixPQUFPTyxJQUFQO0FBQ3ZCQSxRQUFJLEdBQUd1RixLQUFQO0FBQ0E3SCxXQUFPLENBQUNDLEdBQVIsU0FBbUJ1QyxVQUFuQjtBQUNBLFFBQUksT0FBT0EsVUFBUCxLQUFzQixVQUExQixFQUFzQ0EsVUFBVTtBQUNoRCxXQUFPaUIsS0FBUDtBQUNBLEdBTkQ7O0FBUUFBLE9BQUssQ0FBQ2xCLEtBQU4sR0FBYyxVQUFTc0YsS0FBVCxFQUFnQjtBQUM3QixRQUFJLENBQUNDLFNBQVMsQ0FBQy9GLE1BQWYsRUFBdUIsT0FBT1EsS0FBUDtBQUN2QkEsU0FBSyxHQUFHc0YsS0FBUjtBQUNBLFFBQUksT0FBT3BGLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUNBLFdBQVc7QUFDbEQsV0FBT2dCLEtBQVA7QUFDQSxHQUxEOztBQU9BLFNBQU9BLEtBQVA7QUFFQTs7Ozs7Ozs7Ozs7OztBQzNZRCxnRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJub2RlbGlua192aXNfY29hdXRob3JzaGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIiksIHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJ0aXBweS5qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm5vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXBcIiwgW1wiZDNcIiwgXCJqUXVlcnlcIiwgXCJ0aXBweS5qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJub2RlbGlua192aXNfY29hdXRob3JzaGlwXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIiksIHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJ0aXBweS5qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcFwiXSA9IGZhY3Rvcnkocm9vdFtcImQzXCJdLCByb290W1wialF1ZXJ5XCJdLCByb290W1widGlwcHlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90aXBweV9qc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuLy8gY29uc3QgdGlwcHkgPSByZXF1aXJlKCcuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvJyk7XG5jb25zb2xlLmxvZyh0aXBweSk7XG5pbXBvcnQgJ3RpcHB5LmpzL3RoZW1lcy9saWdodC1ib3JkZXIuY3NzJztcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZhdGVUb29sdGlwcztcblxudGlwcHkuc2V0RGVmYXVsdHMoe1xuXHQndGhlbWUnOiAnbGlnaHQtYm9yZGVyJyxcblx0J2FuaW1hdGVGaWxsJzogZmFsc2UsXG5cdCdhbmltYXRpb24nOiAnZmFkZScsXG59KTtcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2x0aXAtdGVtcGxhdGUnKTtcblxuZnVuY3Rpb24gYWN0aXZhdGVUb29sdGlwcygpIHtcblx0Y29uc29sZS5sb2coJ2FjdGl2YXRlVG9vbHRpcHMoKScpO1xuXG5cdGZ1bmN0aW9uIGZpbGxIdG1sKCR0ZW1wbGF0ZSwgY2xhc3NuYW1lLCB0ZXh0Q29udGVudCkge1xuXHRcdCR0ZW1wbGF0ZS5maW5kKCAnLicgKyBjbGFzc25hbWUgKS5maW5kKCAnLnRlbXBsYXRlLWNvbnRlbnQnICkudGV4dCh0ZXh0Q29udGVudCk7XG5cdH1cblxuXHRkMy5zZWxlY3RBbGwoJy5ub2RlIGNpcmNsZScpLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdHZhciAkdG9vbHRpcE5vZGUgPSAkKHRlbXBsYXRlKS5jbG9uZSgpLmF0dHIoXCJpZFwiLCBudWxsKTtcblx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIl90aXBweVwiKSkge1xuXHRcdFx0dmFyIHRpcHB5SW5zdGFuY2UgPSB0aGlzLl90aXBweTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHRpcHB5SW5zdGFuY2UgPSB0aXBweSh0aGlzKTtcblx0XHR9XG5cdFx0ZmlsbEh0bWwoJHRvb2x0aXBOb2RlLCAnYXV0aG9yX25hbWUnLCBkLmF1dGhvcl9uYW1lKTtcblx0XHRmaWxsSHRtbCgkdG9vbHRpcE5vZGUsICdhZmZpbF9uYW1lJywgZC5hZmZpbF9uYW1lKTtcblx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eSgnY2xfYm90dG9tJykpIGZpbGxIdG1sKCR0b29sdGlwTm9kZSwgJ2NsdXN0ZXJfaWQnLCBkLmNsX2JvdHRvbSk7XG5cdFx0dmFyICRwYXBlclRpdGxlcyA9ICR0b29sdGlwTm9kZS5maW5kKCAnLnBhcGVyX3RpdGxlcycgKS5maW5kKCAnLnRlbXBsYXRlLWNvbnRlbnQnICk7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGQucGFwZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgJGxpc3RJdGVtID0gJCggJzxsaSBjbGFzcz1cInBhcGVyX3RpdGxlXCI+JyApLnRleHQoZC5wYXBlcnNbaV0udGl0bGUpO1xuXHRcdFx0JHBhcGVyVGl0bGVzLmFwcGVuZCggJGxpc3RJdGVtICk7XG5cdFx0fVxuXHRcdHRpcHB5SW5zdGFuY2Uuc2V0Q29udGVudCgkdG9vbHRpcE5vZGUuaHRtbCgpKTtcblx0fSk7XG59XG4iLCJpbXBvcnQgTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXMgZnJvbSAnLi92aXMuanMnO1xuaW1wb3J0IGFjdGl2YXRlVG9vbHRpcHMgZnJvbSAnLi9jb2F1dGhvcnNoaXBfdG9vbHRpcHMuanMnO1xuZXhwb3J0IHsgTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXMsIGFjdGl2YXRlVG9vbHRpcHMgfTtcblxuIiwiLy8gTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXNcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXM7XG5cblxuXG4vLyByZXVzYWJsZSBjaGFydCBwYXR0ZXJuIGluc3BpcmVkIGJ5OlxuLy8gaHR0cHM6Ly9ib3N0Lm9ja3Mub3JnL21pa2UvY2hhcnQvXG4vLyBhbmRcbi8vIGh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZDMtanMvdG93YXJkcy1yZXVzYWJsZS1kMy1qcy1jaGFydHNcbmZ1bmN0aW9uIE5vZGVMaW5rQ29hdXRob3JzaGlwVmlzKCkge1xuXHR2YXIgZGF0YSA9IFtdO1xuXHR2YXIgd2lkdGggPSA5NjA7XG5cblx0dmFyIHVwZGF0ZURhdGE7XG5cdHZhciB1cGRhdGVXaWR0aDtcblxuXHR2YXIgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cblx0dmFyIG1hbnlCb2R5ID0gZDMuZm9yY2VNYW55Qm9keSgpXG5cdFx0XHRcdFx0XHQuc3RyZW5ndGgoLTIpO1xuXG5cdGZ1bmN0aW9uIGdldExpbmtJZChsaW5rLCBkaXJlY3RlZCA9IGZhbHNlKSB7XG5cdFx0Ly8gbGluayBJRCB3aWxsIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBzb3VyY2UgSUQgYW5kIHRhcmdldCBJRCwgc2VwYXJhdGVkIGJ5IFwiLSYtXCJcblx0XHQvLyBJZiB0aGUgZ3JhcGggaXMgdW5kaXJlY3RlZCwgdGhlIElEcyB3aWxsIGJlIHNvcnRlZCBBTFBIQUJFVElDQUxMWSB1c2luZyB0aGUgc3RyaW5nIHZhbHVlcyBvZiB0aGUgSURcblx0XHR2YXIgc291cmNlID0gbGluay5zb3VyY2UudG9TdHJpbmcoKTtcblx0XHR2YXIgdGFyZ2V0ID0gbGluay50YXJnZXQudG9TdHJpbmcoKTtcblx0XHR2YXIgaXRlbXMgPSBbc291cmNlLCB0YXJnZXRdO1xuXHRcdHZhciBzZXAgPSBcIi0mLVwiO1xuXHRcdGlmIChkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0aXRlbXMuc29ydCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbXNbMF0gKyBzZXAgKyBpdGVtc1sxXTtcblx0fVxuXG5cblx0ZnVuY3Rpb24gY2hhcnQoc2VsZWN0aW9uKSB7XG5cdFx0c2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsSXRlbSA9IHRoaXM7XG5cblx0XHRcdHZhciBoZWlnaHQgPSAuNjI1ICogd2lkdGg7XG5cdFx0XHR2YXIgc3ZnID0gZDMuc2VsZWN0KHNlbEl0ZW0pLmFwcGVuZChcInN2Z1wiKS5hdHRyKFwid2lkdGhcIiwgd2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblxuXHRcdFx0ZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuXHRcdFx0XHRpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcblx0XHRcdFx0ZC5meCA9IGQueDtcblx0XHRcdFx0ZC5meSA9IGQueTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG5cdFx0XHRcdGQuZnggPSBkMy5ldmVudC54O1xuXHRcdFx0XHRkLmZ5ID0gZDMuZXZlbnQueTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcblx0XHRcdFx0aWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG5cdFx0XHRcdGQuZnggPSBudWxsO1xuXHRcdFx0XHRkLmZ5ID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZW50ZXJOb2Rlcyhub2RlLCB0ID0gbnVsbCkge1xuXHRcdFx0XHQvLyBwYXNzIGluIHRoZSBzZWxlY3Rpb24gZm9yIGVudGVyaW5nIG5vZGVzXG5cblx0XHRcdFx0dmFyIGRlZmF1bHRDb2xvciA9IGNvbG9yKDApO1xuXG5cdFx0XHRcdHNpemVTY2FsZS5kb21haW4oZDMuZXh0ZW50KGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0aWYgKGQuaGFzT3duUHJvcGVydHkoJ2Zsb3cnKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGQuZmxvdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFs1LDVdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHNpemVTY2FsZS5kb21haW4oKSk7XG5cblxuXHRcdFx0XHR2YXIgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0Ly8gLmF0dHIoXCJyXCIsIDUpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVcIilcblx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHR2YXIgdHggPSAod2lkdGgvMikgKyBkLng7XG5cdFx0XHRcdFx0Ly8gXHR2YXIgdHkgPSAoaGVpZ2h0LzIpICsgZC55O1xuXHRcdFx0XHRcdC8vIFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgdHggKyBcIixcIiArIHR5ICsgXCIpXCI7XG5cdFx0XHRcdFx0Ly8gfSlcblx0XHRcdFx0XHQuY2FsbChkMy5kcmFnKClcblx0XHRcdFx0XHRcdC5vbihcInN0YXJ0XCIsIGRyYWdzdGFydGVkKVxuXHRcdFx0XHRcdFx0Lm9uKFwiZHJhZ1wiLCBkcmFnZ2VkKVxuXHRcdFx0XHRcdFx0Lm9uKFwiZW5kXCIsIGRyYWdlbmRlZCkpO1xuXG5cblxuXHRcdFx0XHRub2RlID0gbm9kZS5tZXJnZShub2RlRW50ZXIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnggPSAod2lkdGgvMikgKyBkLng7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnkgPSAoaGVpZ2h0LzIpICsgZC55OyB9KVxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KCdmbG93JykpIHtcblx0XHRcdFx0XHRcdFx0ZC5yYWRpdXMgPSBzaXplU2NhbGUoZC5mbG93KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gNTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGQuaGFzT3duUHJvcGVydHkoXCJjbF90b3BcIikpIHtcblx0XHRcdFx0XHRcdFx0ZC5jb2xvciA9IGNvbG9yKGQuY2xfdG9wKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGQuY29sb3IgPSBkZWZhdWx0Q29sb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dmFyIG5vZGVDaXJjbGUgPSBub2RlRW50ZXJcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IH0pXG5cdFx0XHRcdFx0LmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueTsgfSlcblx0XHRcdFx0XHQuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcjsgfSlcblx0XHRcdFx0XHQuYXR0cihcInJcIiwgMCk7XG5cblx0XHRcdFx0aWYgKHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBub2RlRW50ZXIuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRkLnggPSB3aWR0aC8yO1xuXHRcdFx0XHRcdC8vIFx0ZC55ID0gaGVpZ2h0LzI7XG5cdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdFx0bm9kZVxuXHRcdFx0XHRcdFx0LnNlbGVjdEFsbChcImNpcmNsZVwiKS50cmFuc2l0aW9uKHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZC5yYWRpdXM7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmNvbG9yX29yaWcgPSBjb2xvcihkLmNsX3RvcCk7IH0pO1xuXHRcdFx0XHRcdFx0LmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQuY29sb3I7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdG5vZGUuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZC5yYWRpdXM7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmNvbG9yX29yaWcgPSBjb2xvcihkLmNsX3RvcCk7IH0pO1xuXHRcdFx0XHRcdFx0LmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQuY29sb3I7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBlbnRlckxpbmtzKGxpbmssIHQgPSBudWxsKSB7XG5cdFx0XHRcdC8vIHBhc3MgaW4gdGhlIHNlbGVjdGlvbiBmb3IgZW50ZXJpbmcgbGlua3Ncblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgbGlua0VudGVyID0gbGluay5lbnRlcigpLmFwcGVuZChcImxpbmVcIilcblx0XHRcdFx0XHQuYXR0cihcIngxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcblx0XHRcdFx0XHQuYXR0cihcInkyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxpbmtcIik7XG5cdFx0XHRcdGxpbmsgPSBsaW5rLm1lcmdlKGxpbmtFbnRlcik7XG5cdFx0XHRcdGxpbmtcblx0XHRcdFx0ICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBNYXRoLnNxcnQoZC53ZWlnaHQpOyB9KTtcblxuXHRcdFx0XHRpZiAodCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGxpbmtFbnRlclxuXHRcdFx0XHRcdFx0Ly8gLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwiZ3JlZW5cIilcblx0XHRcdFx0XHQvLyBsaW5rRW50ZXIudHJhbnNpdGlvbih0KVxuXHRcdFx0XHRcdC8vIFx0LnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGxpbms7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBncmFwaCA9IGRhdGE7XG5cdFx0XHRjb25zb2xlLmxvZyhncmFwaCk7XG5cblx0XHRcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHRcdFx0fSk7XG5cdFx0XHRncmFwaC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuXHRcdFx0XHQuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpLmlkKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pKVxuXHRcdFx0XHQvLyAuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpKVxuXHRcdFx0XHQuZm9yY2UoXCJjaGFyZ2VcIiwgbWFueUJvZHkpXG5cdFx0XHRcdC5mb3JjZShcImNlbnRlclwiLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuXHRcdCAgc2ltdWxhdGlvblxuXHRcdFx0ICAubm9kZXMoZ3JhcGgubm9kZXMpXG5cdFx0XHQgIC5vbihcInRpY2tcIiwgdGlja2VkKTtcblxuXHRcdCAgc2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0XHRcdCAgLmxpbmtzKGdyYXBoLmxpbmtzKTtcblxuXHRcdFx0dmFyIHNpemVTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcblx0XHRcdFx0LnJhbmdlKFs0LCAxMl0pO1xuXG5cblx0XHRcdHZhciBnID0gc3ZnLmFwcGVuZChcImdcIik7XG5cblx0XHQgIHZhciBsaW5rID0gZy5hcHBlbmQoXCJnXCIpXG5cdFx0XHQgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rc1wiKVxuXHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubGlua1wiKTtcblxuXHRcdFx0bGluayA9IGxpbmsuZGF0YShncmFwaC5saW5rcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRyZXR1cm4gZC5pZDtcblx0XHRcdH0pO1xuXG5cdFx0ICB2YXIgbm9kZSA9IGcuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0ICAuYXR0cihcImNsYXNzXCIsIFwibm9kZXNcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubm9kZVwiKTtcblxuXHRcdFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cblx0XHRcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUpO1xuXHRcdFx0bGluayA9IGVudGVyTGlua3MobGluayk7XG5cblxuXHRcdFx0Ly8gbm9kZUNpcmNsZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG5cdFx0XHQvLyBcdG5vZGUuY2xhc3NlZCgnZm9jdXMnLCBmYWxzZSk7XG5cdFx0XHQvLyBcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0Ly8gXHRub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC4xKTtcblx0XHRcdC8vIFx0bGluay5zdHlsZShcIm9wYWNpdHlcIiwgLjEpO1xuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50X2lkcyA9IGdyYXBoLmdyYXBoLmNvbm5lY3RlZF9jb21wb25lbnRzW2QuY29tcG9uZW50XTtcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudCA9IG5vZGUuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gY29tcG9uZW50X2lkcy5pbmNsdWRlcyhkLmlkKTsgfSk7XG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRMaW5rID0gbGluay5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBjb21wb25lbnRfaWRzLmluY2x1ZGVzKGQuc291cmNlLmlkKTt9KVxuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50Q29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5jbGFzc2VkKFwiZm9jdXNcIiwgdHJ1ZSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29tcG9uZW50Q29sb3IoZC5jbF9ib3R0b20pOyB9KVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTsgIC8vIHNob3cgdGhlc2UgbGFiZWxzXG5cdFx0XHQvLyBcdGNvbXBvbmVudExpbmsuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0Ly8gXHRcblx0XHRcdC8vIFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAndmlzaWJsZScgKTtcblx0XHRcdC8vIFx0YXBwbHlSYWRpb1NlbGVjdGlvbigpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0ZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gfSk7XG5cblxuXG5cdFx0ICBmdW5jdGlvbiB0aWNrZWQoKSB7XG5cdFx0XHQvLyBub2RlXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pO1xuXHRcdFx0Ly8gYWRkIGJvdW5kaW5nIGJveFxuXHRcdFx0Ly8gICBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjk0OTJcblx0XHRcdG5vZGVcblx0XHRcdFx0LmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IFxuXHRcdFx0XHRcdGQueCA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih3aWR0aCAtIGQucmFkaXVzLCBkLngpKTtcblx0XHRcdFx0XHRyZXR1cm4gZC54OyB9KVxuXHRcdFx0XHQuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0ZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHdpZHRoIC0gZC5yYWRpdXMsIGQueSkpO1xuXHRcdFx0XHRcdHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSk7XG5cblx0XHRcdGxpbmtcblx0XHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwieDJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcblx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcblx0XHQgIH1cblxuXHRcdFx0ZnVuY3Rpb24gcmVzZXRfbGF5b3V0KCkge1xuXHRcdFx0XHRub2RlLmNsYXNzZWQoXCJmb2N1c1wiLCBmYWxzZSk7XG5cdFx0XHRcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHQvLyBub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZzsgfSlcblx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHRsaW5rLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAnaGlkZGVuJyApO1xuXHRcdFx0fVxuXHRcdFx0c3ZnLm9uKFwiY2xpY2tcIiwgcmVzZXRfbGF5b3V0KTtcblxuXHRcdFx0Ly8gVE9ETyB0aGlzIGlzIGJyb2tlbi4gZml4IGl0LlxuXHRcdFx0Ly8gdmFyIGZ1c2UgPSBuZXcgRnVzZShncmFwaC5ub2RlcywgZnVzZU9wdGlvbnMpO1xuXHRcdFx0Ly8gdmFyIHJlc3VsdCA9IGZ1c2Uuc2VhcmNoKFwiZWhsb3dcIik7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0Ly8gJCggJyN0ZXh0U2VhcmNoJyApLm9uKCAnaW5wdXQnLCBmdXNlU2VsZWN0ICk7XG5cdFx0XHQvLyBmdW5jdGlvbiBmdXNlU2VsZWN0KCkge1xuXHRcdFx0Ly8gXHQvLyByZXNldCBub2RlIHNpemVzIGFuZCBzdHlsZXNcblx0XHRcdC8vIFx0ZDMuc2VsZWN0QWxsKFwiLm5vZGUgY2lyY2xlXCIpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDEpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcblx0XHRcdC8vIFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5yYWRpdXM7IH0pO1xuICAgICAgICAgICAgLy9cblx0XHRcdC8vIFx0dmFyICR0aGlzID0gJCggdGhpcyApO1xuXHRcdFx0Ly8gXHR2YXIgcXVlcnkgPSAkdGhpcy52YWwoKTtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJHRoaXMudmFsKCkpO1xuXHRcdFx0Ly8gXHRpZiAocXVlcnkubGVuZ3RoID4gMykge1xuXHRcdFx0Ly8gXHRcdHZhciByZXN1bHQgPSBmdXNlLnNlYXJjaChxdWVyeSk7XG5cdFx0XHQvLyBcdFx0aWYgKHJlc3VsdC5sZW5ndGggIT0wKSB7XG5cdFx0XHQvLyBcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHQvLyBcdFx0XHRcdHZhciBhdXRob3JJZCA9IHJlc3VsdFtpXTtcblx0XHRcdC8vIFx0XHRcdFx0bm9kZS5maWx0ZXIoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZCA9PSBhdXRob3JJZDsgfSlcblx0XHRcdC8vIFx0XHRcdFx0XHQuc2VsZWN0KFwiY2lyY2xlXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5yYWRpdXMgKiAxLjU7IH0pO1xuXHRcdFx0Ly8gXHRcdFx0fVxuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXG5cdFx0XHR1cGRhdGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyB1c2Ugd2lkdGggdG8gbWFrZSBhbnkgY2hhbmdlc1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBOT1QgSU1QTEVNRU5URURcblx0XHRcdH07XG5cblx0XHRcdHVwZGF0ZURhdGEgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gdXNlIEQzIHVwZGF0ZSBwYXR0ZXJuIHdpdGggZGF0YVxuXG5cdFx0XHRcdGdyYXBoID0gZGF0YTtcblx0XHRcdFx0Z3JhcGgubm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0ZC5pZCA9IGQuaWQudG9TdHJpbmcoKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzaW11bGF0aW9uXG5cdFx0XHRcdFx0Lm5vZGVzKGdyYXBoLm5vZGVzKVxuXHRcdFx0XHRcdC5vbihcInRpY2tcIiwgdGlja2VkKTtcblxuXHRcdFx0XHRzaW11bGF0aW9uLmZvcmNlKFwibGlua1wiKVxuXHRcdFx0XHRcdC5saW5rcyhncmFwaC5saW5rcyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGdyYXBoKTtcblx0XHRcdFx0c2ltdWxhdGlvbi5zdG9wKCk7XG5cdFx0XHRcdG5vZGUgPSBub2RlLmRhdGEoZ3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pO1xuXHRcdFx0XHR2YXIgbm9kZUV4aXQgPSBub2RlLmV4aXQoKTtcblx0XHRcdFx0Ly8gbm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmF0dHIoXCJmaWxsXCIsIFwicmVkXCIpO1xuXHRcdFx0XHR2YXIgdCA9IGQzLnRyYW5zaXRpb24oJ3VwZGF0ZURhdGEnKS5kdXJhdGlvbig1MDAwKTtcblx0XHRcdFx0bm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuYXR0cihcInJcIiwgMCk7XG5cdFx0XHRcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUsIHQpO1xuXHRcdFx0XHQvLyBub2RlID0gbm9kZS5jYWxsKGVudGVyTm9kZXMsIHQpO1xuXG5cblxuXHRcdFx0XHRsaW5rID0gbGlua1xuXHRcdFx0XHRcdC5kYXRhKGdyYXBoLmxpbmtzLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHQvLyBkLmlkID0gZ2V0TGlua0lkKGQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGQuaWQ7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdHZhciBsaW5rRXhpdCA9IGxpbmsuZXhpdCgpO1xuXHRcdFx0XHRsaW5rRXhpdC5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAwKS5yZW1vdmUoKTtcblx0XHRcdFx0Ly8gbGlua0V4aXQucmVtb3ZlKCk7XG5cdFx0XHRcdGxpbmsgPSBlbnRlckxpbmtzKGxpbmssIHQpO1xuXHRcdFx0XHRzaW11bGF0aW9uLm9uKFwidGlja1wiKS5jYWxsKCk7XG5cblxuXHRcdFx0XHR0LmVuZCgpLnRoZW4oZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdG5vZGVFeGl0LnJlbW92ZSgpO1xuXHRcdFx0XHRcdC8vIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXHRcdFx0XHRcdC8vIHNpbXVsYXRpb25cblx0XHRcdFx0XHRcdC8vIC5hbHBoYURlY2F5KC4wMDA1KVxuXHRcdFx0XHRcdFx0Ly8gLnZlbG9jaXR5RGVjYXkoMC45KVxuXHRcdFx0XHRcdFx0Ly8gLmFscGhhKC4xKVxuXHRcdFx0XHRcdFx0Ly8gLnJlc3RhcnQoKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RkZGQnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdzc3NzJyk7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyB9LCA0MDAwKTtcblx0XHRcdH1cblxuXG5cblx0XHR9KTtcblxuXHR9XG5cdGNoYXJ0LmRhdGEgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRhdGE7XG5cdFx0ZGF0YSA9IHZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKHR5cGVvZiB1cGRhdGVEYXRhKTtcblx0XHRpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcblx0XHRyZXR1cm4gY2hhcnQ7XG5cdH07XG5cblx0Y2hhcnQud2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHdpZHRoO1xuXHRcdHdpZHRoID0gdmFsdWU7XG5cdFx0aWYgKHR5cGVvZiB1cGRhdGVXaWR0aCA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlV2lkdGgoKTtcblx0XHRyZXR1cm4gY2hhcnQ7XG5cdH07XG5cblx0cmV0dXJuIGNoYXJ0O1xuXHRcbn1cblxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90aXBweV9qc19fOyJdLCJzb3VyY2VSb290IjoiIn0=