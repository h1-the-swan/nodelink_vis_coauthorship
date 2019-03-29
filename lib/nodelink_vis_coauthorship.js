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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $ = _jquery.default; // reusable chart pattern inspired by:
// https://bost.ocks.org/mike/chart/
// and
// https://www.toptal.com/d3-js/towards-reusable-d3-js-charts

var NodeLinkCoauthorshipVis =
/*#__PURE__*/
function () {
  function NodeLinkCoauthorshipVis() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, NodeLinkCoauthorshipVis);

    var defaults = {
      el: null,
      data: null,
      width: 960,
      color: d3.scaleOrdinal(d3.schemeCategory10),
      forceStrength: -2
    };
    Object.assign(this, defaults, opts); // opts will overwrite defaults

    this._data = this.data;
    this.data = this.updateData;

    if (typeof this.height === 'undefined') {
      this.height = .625 * this.width;
    }

    this.manyBody = d3.forceManyBody().strength(this.forceStrength);
    this.init = false;
    console.log(this._data);

    if (this.el !== null && this._data !== null) {
      this.draw(this.el);
      this.init = true;
    }
  }

  _createClass(NodeLinkCoauthorshipVis, [{
    key: "getLinkId",
    value: function getLinkId(link) {
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
  }, {
    key: "updateData",
    value: function updateData(value) {
      if (!arguments.length) return this._data;
      this._data = value;

      if (this.init === false) {
        this.draw(this.el);
        this.init = true;
      } else {
        // this.updateData();
        // NOT IMPLEMENTED
        console.log("UPDATING DATA NOT YET IMPLEMENTED");
      } // console.log(typeof updateData);
      // if (typeof updateData === 'function') updateData();


      return this;
    }
  }, {
    key: "draw",
    value: function draw(selection) {
      var obj = this;
      var width = this.width;
      var height = this.height;
      var graph = this._data;
      var manyBody = this.manyBody;
      var color = this.color;
      var getLinkId = this.getLinkId;
      selection.each(function () {
        var selItem = this;
        var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);
        console.log(graph);

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
        this.simulation = simulation;
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
        // updateWidth = function() {
        // 	// use width to make any changes
        // 	//
        // 	// NOT IMPLEMENTED
        // };
      });
      return this;
    } // updateData() {
    // 	// use D3 update pattern with data
    //
    // 	var graph = this._data;
    // 	graph.nodes.forEach(function(d) {
    // 		d.id = d.id.toString();
    // 	})
    // 	graph.links.forEach(function(d) {
    // 		d.id = getLinkId(d, graph.directed);
    // 	});
    // 	this.simulation
    // 		.nodes(graph.nodes)
    // 		.on("tick", ticked);
    //
    // 	simulation.force("link")
    // 		.links(graph.links);
    // 	console.log(graph);
    // 	simulation.stop();
    // 	node = node.data(graph.nodes, function(d) { return d.id; });
    // 	var nodeExit = node.exit();
    // 	// nodeExit.selectAll("circle").attr("fill", "red");
    // 	var t = d3.transition('updateData').duration(5000);
    // 	nodeExit.selectAll("circle").style("stroke", "red").transition(t).attr("r", 0);
    // 	node = enterNodes(node, t);
    // 	// node = node.call(enterNodes, t);
    //
    //
    //
    // 	link = link
    // 		.data(graph.links, function(d) {
    // 			// d.id = getLinkId(d);
    // 			return d.id;
    // 		});
    // 	var linkExit = link.exit();
    // 	linkExit.style("stroke", "red").transition(t).style("opacity", 0).remove();
    // 	// linkExit.remove();
    // 	link = enterLinks(link, t);
    // 	simulation.on("tick").call();
    //
    //
    // 	t.end().then(function(d) {
    // 		nodeExit.remove();
    // 		// simulation.alpha(1).restart();
    // 		// simulation
    // 			// .alphaDecay(.0005)
    // 			// .velocityDecay(0.9)
    // 			// .alpha(.1)
    // 			// .restart();
    // 	});
    // 	
    // 	// setTimeout(function() {
    // 	// }, 4000);
    // }

  }]);

  return NodeLinkCoauthorshipVis;
}();

var _default = NodeLinkCoauthorshipVis;
exports.default = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvY29hdXRob3JzaGlwX3Rvb2x0aXBzLmpzIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRpcHB5LmpzXCIsXCJjb21tb25qczJcIjpcInRpcHB5LmpzXCIsXCJhbWRcIjpcInRpcHB5LmpzXCIsXCJyb290XCI6XCJ0aXBweVwifSJdLCJuYW1lcyI6WyIkIiwiYWN0aXZhdGVUb29sdGlwcyIsInNldERlZmF1bHRzIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImZpbGxIdG1sIiwiJHRlbXBsYXRlIiwiY2xhc3NuYW1lIiwidGV4dENvbnRlbnQiLCJmaW5kIiwidGV4dCIsImQzIiwic2VsZWN0QWxsIiwiZWFjaCIsImQiLCIkdG9vbHRpcE5vZGUiLCJjbG9uZSIsImF0dHIiLCJoYXNPd25Qcm9wZXJ0eSIsInRpcHB5SW5zdGFuY2UiLCJfdGlwcHkiLCJhdXRob3JfbmFtZSIsImFmZmlsX25hbWUiLCJjbF9ib3R0b20iLCIkcGFwZXJUaXRsZXMiLCJpIiwibGVuIiwicGFwZXJzIiwibGVuZ3RoIiwiJGxpc3RJdGVtIiwidGl0bGUiLCJhcHBlbmQiLCJzZXRDb250ZW50IiwiaHRtbCIsIk5vZGVMaW5rQ29hdXRob3JzaGlwVmlzIiwib3B0cyIsImRlZmF1bHRzIiwiZWwiLCJkYXRhIiwid2lkdGgiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsInNjaGVtZUNhdGVnb3J5MTAiLCJmb3JjZVN0cmVuZ3RoIiwiT2JqZWN0IiwiYXNzaWduIiwiX2RhdGEiLCJ1cGRhdGVEYXRhIiwiaGVpZ2h0IiwibWFueUJvZHkiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJpbml0IiwiZHJhdyIsImxpbmsiLCJkaXJlY3RlZCIsInNvdXJjZSIsInRvU3RyaW5nIiwidGFyZ2V0IiwiaXRlbXMiLCJzZXAiLCJzb3J0IiwidmFsdWUiLCJhcmd1bWVudHMiLCJzZWxlY3Rpb24iLCJvYmoiLCJncmFwaCIsImdldExpbmtJZCIsInNlbEl0ZW0iLCJzdmciLCJzZWxlY3QiLCJkcmFnc3RhcnRlZCIsImV2ZW50IiwiYWN0aXZlIiwic2ltdWxhdGlvbiIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwieCIsImZ5IiwieSIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbnRlck5vZGVzIiwibm9kZSIsInQiLCJkZWZhdWx0Q29sb3IiLCJzaXplU2NhbGUiLCJkb21haW4iLCJleHRlbnQiLCJub2RlcyIsImZsb3ciLCJub2RlRW50ZXIiLCJlbnRlciIsImNhbGwiLCJkcmFnIiwib24iLCJtZXJnZSIsInJhZGl1cyIsImNsX3RvcCIsIm5vZGVDaXJjbGUiLCJ0cmFuc2l0aW9uIiwiZW50ZXJMaW5rcyIsImxpbmtFbnRlciIsIk1hdGgiLCJzcXJ0Iiwid2VpZ2h0Iiwic3R5bGUiLCJmb3JFYWNoIiwiaWQiLCJsaW5rcyIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZm9yY2VDZW50ZXIiLCJ0aWNrZWQiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiZyIsIm1h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QixDQUEwQixZQUExQixFQUF5QyxRQUF6QztBQUNBOztBQUNEdEQsV0FBRyxDQUFDMkIsRUFBSixDQUFPLE9BQVAsRUFBZ0J5QixZQUFoQixFQTlPeUIsQ0FnUHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsT0F2UkQ7QUF3UkQsYUFBTyxJQUFQO0FBQ0MsSyxDQUVEO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7ZUFHY3ZGLHVCOzs7Ozs7Ozs7Ozs7O0FDNVpmLGdEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6Im5vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcInRpcHB5LmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcFwiLCBbXCJkM1wiLCBcImpRdWVyeVwiLCBcInRpcHB5LmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcInRpcHB5LmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJub2RlbGlua192aXNfY29hdXRob3JzaGlwXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJ0aXBweVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RpcHB5X2pzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG4vLyBjb25zdCB0aXBweSA9IHJlcXVpcmUoJy4uL25vZGVfbW9kdWxlcy90aXBweS5qcy8nKTtcbmltcG9ydCAndGlwcHkuanMvdGhlbWVzL2xpZ2h0LWJvcmRlci5jc3MnO1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBhY3RpdmF0ZVRvb2x0aXBzO1xuXG50aXBweS5zZXREZWZhdWx0cyh7XG5cdCd0aGVtZSc6ICdsaWdodC1ib3JkZXInLFxuXHQnYW5pbWF0ZUZpbGwnOiBmYWxzZSxcblx0J2FuaW1hdGlvbic6ICdmYWRlJyxcbn0pO1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9vbHRpcC10ZW1wbGF0ZScpO1xuXG5mdW5jdGlvbiBhY3RpdmF0ZVRvb2x0aXBzKCkge1xuXHRjb25zb2xlLmxvZygnYWN0aXZhdGVUb29sdGlwcygpJyk7XG5cblx0ZnVuY3Rpb24gZmlsbEh0bWwoJHRlbXBsYXRlLCBjbGFzc25hbWUsIHRleHRDb250ZW50KSB7XG5cdFx0JHRlbXBsYXRlLmZpbmQoICcuJyArIGNsYXNzbmFtZSApLmZpbmQoICcudGVtcGxhdGUtY29udGVudCcgKS50ZXh0KHRleHRDb250ZW50KTtcblx0fVxuXG5cdGQzLnNlbGVjdEFsbCgnLm5vZGUgY2lyY2xlJykuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0dmFyICR0b29sdGlwTm9kZSA9ICQodGVtcGxhdGUpLmNsb25lKCkuYXR0cihcImlkXCIsIG51bGwpO1xuXHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KFwiX3RpcHB5XCIpKSB7XG5cdFx0XHR2YXIgdGlwcHlJbnN0YW5jZSA9IHRoaXMuX3RpcHB5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgdGlwcHlJbnN0YW5jZSA9IHRpcHB5KHRoaXMpO1xuXHRcdH1cblx0XHRmaWxsSHRtbCgkdG9vbHRpcE5vZGUsICdhdXRob3JfbmFtZScsIGQuYXV0aG9yX25hbWUpO1xuXHRcdGZpbGxIdG1sKCR0b29sdGlwTm9kZSwgJ2FmZmlsX25hbWUnLCBkLmFmZmlsX25hbWUpO1xuXHRcdGlmIChkLmhhc093blByb3BlcnR5KCdjbF9ib3R0b20nKSkgZmlsbEh0bWwoJHRvb2x0aXBOb2RlLCAnY2x1c3Rlcl9pZCcsIGQuY2xfYm90dG9tKTtcblx0XHR2YXIgJHBhcGVyVGl0bGVzID0gJHRvb2x0aXBOb2RlLmZpbmQoICcucGFwZXJfdGl0bGVzJyApLmZpbmQoICcudGVtcGxhdGUtY29udGVudCcgKTtcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gZC5wYXBlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciAkbGlzdEl0ZW0gPSAkKCAnPGxpIGNsYXNzPVwicGFwZXJfdGl0bGVcIj4nICkudGV4dChkLnBhcGVyc1tpXS50aXRsZSk7XG5cdFx0XHQkcGFwZXJUaXRsZXMuYXBwZW5kKCAkbGlzdEl0ZW0gKTtcblx0XHR9XG5cdFx0dGlwcHlJbnN0YW5jZS5zZXRDb250ZW50KCR0b29sdGlwTm9kZS5odG1sKCkpO1xuXHR9KTtcbn1cbiIsImltcG9ydCBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyBmcm9tICcuL3Zpcy5qcyc7XG5pbXBvcnQgYWN0aXZhdGVUb29sdGlwcyBmcm9tICcuL2NvYXV0aG9yc2hpcF90b29sdGlwcy5qcyc7XG5leHBvcnQgeyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcywgYWN0aXZhdGVUb29sdGlwcyB9O1xuXG4iLCIvLyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpc1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0galF1ZXJ5O1xuXG5cblxuLy8gcmV1c2FibGUgY2hhcnQgcGF0dGVybiBpbnNwaXJlZCBieTpcbi8vIGh0dHBzOi8vYm9zdC5vY2tzLm9yZy9taWtlL2NoYXJ0L1xuLy8gYW5kXG4vLyBodHRwczovL3d3dy50b3B0YWwuY29tL2QzLWpzL3Rvd2FyZHMtcmV1c2FibGUtZDMtanMtY2hhcnRzXG5jbGFzcyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyB7XG5cdGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdFx0ZWw6IG51bGwsXG5cdFx0XHRkYXRhOiBudWxsLFxuXHRcdFx0d2lkdGg6IDk2MCxcblx0XHRcdGNvbG9yOiBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCksXG5cdFx0XHRmb3JjZVN0cmVuZ3RoOiAtMixcblx0XHR9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdHMpOyAgLy8gb3B0cyB3aWxsIG92ZXJ3cml0ZSBkZWZhdWx0c1xuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGE7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy51cGRhdGVEYXRhO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IC42MjUgKiB0aGlzLndpZHRoO1xuXHRcdH1cblx0XHR0aGlzLm1hbnlCb2R5ID0gZDMuZm9yY2VNYW55Qm9keSgpXG5cdFx0XHRcdFx0XHRcdC5zdHJlbmd0aCh0aGlzLmZvcmNlU3RyZW5ndGgpO1xuXHRcdHRoaXMuaW5pdCA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuX2RhdGEpO1xuXHRcdGlmICh0aGlzLmVsICE9PSBudWxsICYmIHRoaXMuX2RhdGEgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TGlua0lkKGxpbmssIGRpcmVjdGVkID0gZmFsc2UpIHtcblx0XHQvLyBsaW5rIElEIHdpbGwgYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIHNvdXJjZSBJRCBhbmQgdGFyZ2V0IElELCBzZXBhcmF0ZWQgYnkgXCItJi1cIlxuXHRcdC8vIElmIHRoZSBncmFwaCBpcyB1bmRpcmVjdGVkLCB0aGUgSURzIHdpbGwgYmUgc29ydGVkIEFMUEhBQkVUSUNBTExZIHVzaW5nIHRoZSBzdHJpbmcgdmFsdWVzIG9mIHRoZSBJRFxuXHRcdHZhciBzb3VyY2UgPSBsaW5rLnNvdXJjZS50b1N0cmluZygpO1xuXHRcdHZhciB0YXJnZXQgPSBsaW5rLnRhcmdldC50b1N0cmluZygpO1xuXHRcdHZhciBpdGVtcyA9IFtzb3VyY2UsIHRhcmdldF07XG5cdFx0dmFyIHNlcCA9IFwiLSYtXCI7XG5cdFx0aWYgKGRpcmVjdGVkID09PSB0cnVlKSB7XG5cdFx0XHRpdGVtcy5zb3J0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBpdGVtc1swXSArIHNlcCArIGl0ZW1zWzFdO1xuXHR9XG5cblx0dXBkYXRlRGF0YSh2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2RhdGE7XG5cdFx0dGhpcy5fZGF0YSA9IHZhbHVlO1xuXHRcdGlmICh0aGlzLmluaXQgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGlzLnVwZGF0ZURhdGEoKTtcblx0XHRcdC8vIE5PVCBJTVBMRU1FTlRFRFxuXHRcdFx0Y29uc29sZS5sb2coXCJVUERBVElORyBEQVRBIE5PVCBZRVQgSU1QTEVNRU5URURcIik7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1cGRhdGVEYXRhKTtcblx0XHQvLyBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRkcmF3KHNlbGVjdGlvbikge1xuXHRcdHZhciBvYmogPSB0aGlzO1xuXHRcdHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cdFx0dmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXHRcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdFx0dmFyIG1hbnlCb2R5ID0gdGhpcy5tYW55Qm9keTtcblx0XHR2YXIgY29sb3IgPSB0aGlzLmNvbG9yO1xuXHRcdHZhciBnZXRMaW5rSWQgPSB0aGlzLmdldExpbmtJZDtcblx0XHRzZWxlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxJdGVtID0gdGhpcztcblxuXHRcdFx0dmFyIHN2ZyA9IGQzLnNlbGVjdChzZWxJdGVtKS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG5cdFx0XHRjb25zb2xlLmxvZyhncmFwaCk7XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcblx0XHRcdFx0aWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG5cdFx0XHRcdGQuZnggPSBkLng7XG5cdFx0XHRcdGQuZnkgPSBkLnk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuXHRcdFx0XHRkLmZ4ID0gZDMuZXZlbnQueDtcblx0XHRcdFx0ZC5meSA9IGQzLmV2ZW50Lnk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG5cdFx0XHRcdGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuXHRcdFx0XHRkLmZ4ID0gbnVsbDtcblx0XHRcdFx0ZC5meSA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVudGVyTm9kZXMobm9kZSwgdCA9IG51bGwpIHtcblx0XHRcdFx0Ly8gcGFzcyBpbiB0aGUgc2VsZWN0aW9uIGZvciBlbnRlcmluZyBub2Rlc1xuXG5cdFx0XHRcdHZhciBkZWZhdWx0Q29sb3IgPSBjb2xvcigwKTtcblxuXHRcdFx0XHRzaXplU2NhbGUuZG9tYWluKGQzLmV4dGVudChncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KCdmbG93JykpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkLmZsb3c7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBbNSw1XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzaXplU2NhbGUuZG9tYWluKCkpO1xuXG5cblx0XHRcdFx0dmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwiclwiLCA1KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0dmFyIHR4ID0gKHdpZHRoLzIpICsgZC54O1xuXHRcdFx0XHRcdC8vIFx0dmFyIHR5ID0gKGhlaWdodC8yKSArIGQueTtcblx0XHRcdFx0XHQvLyBcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIHR4ICsgXCIsXCIgKyB0eSArIFwiKVwiO1xuXHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0LmNhbGwoZDMuZHJhZygpXG5cdFx0XHRcdFx0XHQub24oXCJzdGFydFwiLCBkcmFnc3RhcnRlZClcblx0XHRcdFx0XHRcdC5vbihcImRyYWdcIiwgZHJhZ2dlZClcblx0XHRcdFx0XHRcdC5vbihcImVuZFwiLCBkcmFnZW5kZWQpKTtcblxuXG5cblx0XHRcdFx0bm9kZSA9IG5vZGUubWVyZ2Uobm9kZUVudGVyKVxuXHRcdFx0XHRcdC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54ID0gKHdpZHRoLzIpICsgZC54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ID0gKGhlaWdodC8yKSArIGQueTsgfSlcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eSgnZmxvdycpKSB7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gc2l6ZVNjYWxlKGQuZmxvdyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IDU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KFwiY2xfdG9wXCIpKSB7XG5cdFx0XHRcdFx0XHRcdGQuY29sb3IgPSBjb2xvcihkLmNsX3RvcCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkLmNvbG9yID0gZGVmYXVsdENvbG9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHZhciBub2RlQ2lyY2xlID0gbm9kZUVudGVyXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KVxuXHRcdFx0XHRcdC5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdFx0XHQvLyAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3I7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApO1xuXG5cdFx0XHRcdGlmICh0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gbm9kZUVudGVyLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0ZC54ID0gd2lkdGgvMjtcblx0XHRcdFx0XHQvLyBcdGQueSA9IGhlaWdodC8yO1xuXHRcdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHRcdG5vZGVcblx0XHRcdFx0XHRcdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikudHJhbnNpdGlvbih0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnID0gY29sb3IoZC5jbF90b3ApOyB9KTtcblx0XHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLmNvbG9yO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRub2RlLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnID0gY29sb3IoZC5jbF90b3ApOyB9KTtcblx0XHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLmNvbG9yO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZW50ZXJMaW5rcyhsaW5rLCB0ID0gbnVsbCkge1xuXHRcdFx0XHQvLyBwYXNzIGluIHRoZSBzZWxlY3Rpb24gZm9yIGVudGVyaW5nIGxpbmtzXG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcblx0XHRcdFx0XHQuYXR0cihcIngyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpO1xuXHRcdFx0XHRsaW5rID0gbGluay5tZXJnZShsaW5rRW50ZXIpO1xuXHRcdFx0XHRsaW5rXG5cdFx0XHRcdCAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gTWF0aC5zcXJ0KGQud2VpZ2h0KTsgfSk7XG5cblx0XHRcdFx0aWYgKHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRsaW5rRW50ZXJcblx0XHRcdFx0XHRcdC8vIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblx0XHRcdFx0XHRcdC5zdHlsZShcInN0cm9rZVwiLCBcImdyZWVuXCIpXG5cdFx0XHRcdFx0Ly8gbGlua0VudGVyLnRyYW5zaXRpb24odClcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBsaW5rO1xuXHRcdFx0fVxuXG5cblx0XHRcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHRcdFx0fSk7XG5cdFx0XHRncmFwaC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuXHRcdFx0XHQuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpLmlkKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pKVxuXHRcdFx0XHQvLyAuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpKVxuXHRcdFx0XHQuZm9yY2UoXCJjaGFyZ2VcIiwgbWFueUJvZHkpXG5cdFx0XHRcdC5mb3JjZShcImNlbnRlclwiLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuXHRcdCAgc2ltdWxhdGlvblxuXHRcdFx0ICAubm9kZXMoZ3JhcGgubm9kZXMpXG5cdFx0XHQgIC5vbihcInRpY2tcIiwgdGlja2VkKTtcblxuXHRcdCAgc2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0XHRcdCAgLmxpbmtzKGdyYXBoLmxpbmtzKTtcblxuXHRcdCAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcblxuXHRcdFx0dmFyIHNpemVTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcblx0XHRcdFx0LnJhbmdlKFs0LCAxMl0pO1xuXG5cblx0XHRcdHZhciBnID0gc3ZnLmFwcGVuZChcImdcIik7XG5cblx0XHQgIHZhciBsaW5rID0gZy5hcHBlbmQoXCJnXCIpXG5cdFx0XHQgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rc1wiKVxuXHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubGlua1wiKTtcblxuXHRcdFx0bGluayA9IGxpbmsuZGF0YShncmFwaC5saW5rcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRyZXR1cm4gZC5pZDtcblx0XHRcdH0pO1xuXG5cdFx0ICB2YXIgbm9kZSA9IGcuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0ICAuYXR0cihcImNsYXNzXCIsIFwibm9kZXNcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubm9kZVwiKTtcblxuXHRcdFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cblx0XHRcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUpO1xuXHRcdFx0bGluayA9IGVudGVyTGlua3MobGluayk7XG5cblxuXHRcdFx0Ly8gbm9kZUNpcmNsZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG5cdFx0XHQvLyBcdG5vZGUuY2xhc3NlZCgnZm9jdXMnLCBmYWxzZSk7XG5cdFx0XHQvLyBcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0Ly8gXHRub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC4xKTtcblx0XHRcdC8vIFx0bGluay5zdHlsZShcIm9wYWNpdHlcIiwgLjEpO1xuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50X2lkcyA9IGdyYXBoLmdyYXBoLmNvbm5lY3RlZF9jb21wb25lbnRzW2QuY29tcG9uZW50XTtcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudCA9IG5vZGUuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gY29tcG9uZW50X2lkcy5pbmNsdWRlcyhkLmlkKTsgfSk7XG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRMaW5rID0gbGluay5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBjb21wb25lbnRfaWRzLmluY2x1ZGVzKGQuc291cmNlLmlkKTt9KVxuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50Q29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5jbGFzc2VkKFwiZm9jdXNcIiwgdHJ1ZSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29tcG9uZW50Q29sb3IoZC5jbF9ib3R0b20pOyB9KVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTsgIC8vIHNob3cgdGhlc2UgbGFiZWxzXG5cdFx0XHQvLyBcdGNvbXBvbmVudExpbmsuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0Ly8gXHRcblx0XHRcdC8vIFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAndmlzaWJsZScgKTtcblx0XHRcdC8vIFx0YXBwbHlSYWRpb1NlbGVjdGlvbigpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0ZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gfSk7XG5cblxuXG5cdFx0ICBmdW5jdGlvbiB0aWNrZWQoKSB7XG5cdFx0XHQvLyBub2RlXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pO1xuXHRcdFx0Ly8gYWRkIGJvdW5kaW5nIGJveFxuXHRcdFx0Ly8gICBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjk0OTJcblx0XHRcdG5vZGVcblx0XHRcdFx0LmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IFxuXHRcdFx0XHRcdGQueCA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih3aWR0aCAtIGQucmFkaXVzLCBkLngpKTtcblx0XHRcdFx0XHRyZXR1cm4gZC54OyB9KVxuXHRcdFx0XHQuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0ZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHdpZHRoIC0gZC5yYWRpdXMsIGQueSkpO1xuXHRcdFx0XHRcdHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSk7XG5cblx0XHRcdGxpbmtcblx0XHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwieDJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcblx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcblx0XHQgIH1cblxuXHRcdFx0ZnVuY3Rpb24gcmVzZXRfbGF5b3V0KCkge1xuXHRcdFx0XHRub2RlLmNsYXNzZWQoXCJmb2N1c1wiLCBmYWxzZSk7XG5cdFx0XHRcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHQvLyBub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZzsgfSlcblx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHRsaW5rLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAnaGlkZGVuJyApO1xuXHRcdFx0fVxuXHRcdFx0c3ZnLm9uKFwiY2xpY2tcIiwgcmVzZXRfbGF5b3V0KTtcblxuXHRcdFx0Ly8gVE9ETyB0aGlzIGlzIGJyb2tlbi4gZml4IGl0LlxuXHRcdFx0Ly8gdmFyIGZ1c2UgPSBuZXcgRnVzZShncmFwaC5ub2RlcywgZnVzZU9wdGlvbnMpO1xuXHRcdFx0Ly8gdmFyIHJlc3VsdCA9IGZ1c2Uuc2VhcmNoKFwiZWhsb3dcIik7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0Ly8gJCggJyN0ZXh0U2VhcmNoJyApLm9uKCAnaW5wdXQnLCBmdXNlU2VsZWN0ICk7XG5cdFx0XHQvLyBmdW5jdGlvbiBmdXNlU2VsZWN0KCkge1xuXHRcdFx0Ly8gXHQvLyByZXNldCBub2RlIHNpemVzIGFuZCBzdHlsZXNcblx0XHRcdC8vIFx0ZDMuc2VsZWN0QWxsKFwiLm5vZGUgY2lyY2xlXCIpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDEpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcblx0XHRcdC8vIFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5yYWRpdXM7IH0pO1xuICAgICAgICAgICAgLy9cblx0XHRcdC8vIFx0dmFyICR0aGlzID0gJCggdGhpcyApO1xuXHRcdFx0Ly8gXHR2YXIgcXVlcnkgPSAkdGhpcy52YWwoKTtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJHRoaXMudmFsKCkpO1xuXHRcdFx0Ly8gXHRpZiAocXVlcnkubGVuZ3RoID4gMykge1xuXHRcdFx0Ly8gXHRcdHZhciByZXN1bHQgPSBmdXNlLnNlYXJjaChxdWVyeSk7XG5cdFx0XHQvLyBcdFx0aWYgKHJlc3VsdC5sZW5ndGggIT0wKSB7XG5cdFx0XHQvLyBcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHQvLyBcdFx0XHRcdHZhciBhdXRob3JJZCA9IHJlc3VsdFtpXTtcblx0XHRcdC8vIFx0XHRcdFx0bm9kZS5maWx0ZXIoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZCA9PSBhdXRob3JJZDsgfSlcblx0XHRcdC8vIFx0XHRcdFx0XHQuc2VsZWN0KFwiY2lyY2xlXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5yYWRpdXMgKiAxLjU7IH0pO1xuXHRcdFx0Ly8gXHRcdFx0fVxuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXG5cdFx0XHQvLyB1cGRhdGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHQvLyB1c2Ugd2lkdGggdG8gbWFrZSBhbnkgY2hhbmdlc1xuXHRcdFx0Ly8gXHQvL1xuXHRcdFx0Ly8gXHQvLyBOT1QgSU1QTEVNRU5URURcblx0XHRcdC8vIH07XG5cblxuXG5cblx0XHR9KTtcblx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyB1cGRhdGVEYXRhKCkge1xuXHQvLyBcdC8vIHVzZSBEMyB1cGRhdGUgcGF0dGVybiB3aXRoIGRhdGFcbiAgICAvL1xuXHQvLyBcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdC8vIFx0Z3JhcGgubm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHQvLyBcdH0pXG5cdC8vIFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZ2V0TGlua0lkKGQsIGdyYXBoLmRpcmVjdGVkKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHR0aGlzLnNpbXVsYXRpb25cblx0Ly8gXHRcdC5ub2RlcyhncmFwaC5ub2Rlcylcblx0Ly8gXHRcdC5vbihcInRpY2tcIiwgdGlja2VkKTtcbiAgICAvL1xuXHQvLyBcdHNpbXVsYXRpb24uZm9yY2UoXCJsaW5rXCIpXG5cdC8vIFx0XHQubGlua3MoZ3JhcGgubGlua3MpO1xuXHQvLyBcdGNvbnNvbGUubG9nKGdyYXBoKTtcblx0Ly8gXHRzaW11bGF0aW9uLnN0b3AoKTtcblx0Ly8gXHRub2RlID0gbm9kZS5kYXRhKGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KTtcblx0Ly8gXHR2YXIgbm9kZUV4aXQgPSBub2RlLmV4aXQoKTtcblx0Ly8gXHQvLyBub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgXCJyZWRcIik7XG5cdC8vIFx0dmFyIHQgPSBkMy50cmFuc2l0aW9uKCd1cGRhdGVEYXRhJykuZHVyYXRpb24oNTAwMCk7XG5cdC8vIFx0bm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuYXR0cihcInJcIiwgMCk7XG5cdC8vIFx0bm9kZSA9IGVudGVyTm9kZXMobm9kZSwgdCk7XG5cdC8vIFx0Ly8gbm9kZSA9IG5vZGUuY2FsbChlbnRlck5vZGVzLCB0KTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHRsaW5rID0gbGlua1xuXHQvLyBcdFx0LmRhdGEoZ3JhcGgubGlua3MsIGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdFx0Ly8gZC5pZCA9IGdldExpbmtJZChkKTtcblx0Ly8gXHRcdFx0cmV0dXJuIGQuaWQ7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR2YXIgbGlua0V4aXQgPSBsaW5rLmV4aXQoKTtcblx0Ly8gXHRsaW5rRXhpdC5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAwKS5yZW1vdmUoKTtcblx0Ly8gXHQvLyBsaW5rRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRsaW5rID0gZW50ZXJMaW5rcyhsaW5rLCB0KTtcblx0Ly8gXHRzaW11bGF0aW9uLm9uKFwidGlja1wiKS5jYWxsKCk7XG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdHQuZW5kKCkudGhlbihmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRub2RlRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvblxuXHQvLyBcdFx0XHQvLyAuYWxwaGFEZWNheSguMDAwNSlcblx0Ly8gXHRcdFx0Ly8gLnZlbG9jaXR5RGVjYXkoMC45KVxuXHQvLyBcdFx0XHQvLyAuYWxwaGEoLjEpXG5cdC8vIFx0XHRcdC8vIC5yZXN0YXJ0KCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0XG5cdC8vIFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0Ly8gXHQvLyB9LCA0MDAwKTtcblx0Ly8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGlwcHlfanNfXzsiXSwic291cmNlUm9vdCI6IiJ9