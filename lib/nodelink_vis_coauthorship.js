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

    fillHtml($tooltipNode, 'author_name', d.author_name); // if (d.hasOwnProperty('affil_name') && d.affil_name.length) {

    if (d.hasOwnProperty('affil_name')) {
      fillHtml($tooltipNode, 'affil_name', d.affil_name);
    } else {
      $tooltipNode.find('.affil_name').hide();
    } // if (d.hasOwnProperty('cl_bottom')) fillHtml($tooltipNode, 'cluster_id', d.cl_bottom);


    var $paperTitles = $tooltipNode.find('.paper_titles').find('.template-content');
    var papers = d.papers; // sort papers alphabetically

    papers.sort(function (a, b) {
      return d3.ascending(a.title, b.title);
    });

    for (var i = 0, len = papers.length; i < len; i++) {
      var $listItem = $('<li class="paper_title">').text(papers[i].title);
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

            if (d.hasOwnProperty("color_group")) {
              d.color = color(d.color_group);
            } else if (d.hasOwnProperty("cl_top")) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvY29hdXRob3JzaGlwX3Rvb2x0aXBzLmpzIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRpcHB5LmpzXCIsXCJjb21tb25qczJcIjpcInRpcHB5LmpzXCIsXCJhbWRcIjpcInRpcHB5LmpzXCIsXCJyb290XCI6XCJ0aXBweVwifSJdLCJuYW1lcyI6WyIkIiwiYWN0aXZhdGVUb29sdGlwcyIsInNldERlZmF1bHRzIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImZpbGxIdG1sIiwiJHRlbXBsYXRlIiwiY2xhc3NuYW1lIiwidGV4dENvbnRlbnQiLCJmaW5kIiwidGV4dCIsImQzIiwic2VsZWN0QWxsIiwiZWFjaCIsImQiLCIkdG9vbHRpcE5vZGUiLCJjbG9uZSIsImF0dHIiLCJoYXNPd25Qcm9wZXJ0eSIsInRpcHB5SW5zdGFuY2UiLCJfdGlwcHkiLCJhdXRob3JfbmFtZSIsImFmZmlsX25hbWUiLCJoaWRlIiwiJHBhcGVyVGl0bGVzIiwicGFwZXJzIiwic29ydCIsImEiLCJiIiwiYXNjZW5kaW5nIiwidGl0bGUiLCJpIiwibGVuIiwibGVuZ3RoIiwiJGxpc3RJdGVtIiwiYXBwZW5kIiwic2V0Q29udGVudCIsImh0bWwiLCJOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyIsIm9wdHMiLCJkZWZhdWx0cyIsImVsIiwiZGF0YSIsIndpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwiZm9yY2VTdHJlbmd0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsIm1hbnlCb2R5IiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiaW5pdCIsImRyYXciLCJsaW5rIiwiZGlyZWN0ZWQiLCJzb3VyY2UiLCJ0b1N0cmluZyIsInRhcmdldCIsIml0ZW1zIiwic2VwIiwidmFsdWUiLCJhcmd1bWVudHMiLCJzZWxlY3Rpb24iLCJvYmoiLCJncmFwaCIsImdldExpbmtJZCIsInNlbEl0ZW0iLCJzdmciLCJzZWxlY3QiLCJkcmFnc3RhcnRlZCIsImV2ZW50IiwiYWN0aXZlIiwic2ltdWxhdGlvbiIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwieCIsImZ5IiwieSIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbnRlck5vZGVzIiwibm9kZSIsInQiLCJkZWZhdWx0Q29sb3IiLCJzaXplU2NhbGUiLCJkb21haW4iLCJleHRlbnQiLCJub2RlcyIsImZsb3ciLCJub2RlRW50ZXIiLCJlbnRlciIsImNhbGwiLCJkcmFnIiwib24iLCJtZXJnZSIsInJhZGl1cyIsImNvbG9yX2dyb3VwIiwiY2xfdG9wIiwibm9kZUNpcmNsZSIsInRyYW5zaXRpb24iLCJlbnRlckxpbmtzIiwibGlua0VudGVyIiwiTWF0aCIsInNxcnQiLCJ3ZWlnaHQiLCJzdHlsZSIsImZvckVhY2giLCJpZCIsImxpbmtzIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJmb3JjZUxpbmsiLCJmb3JjZUNlbnRlciIsInRpY2tlZCIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJnIiwibWF4IiwibWluIiwicmVzZXRfbGF5b3V0IiwiY2xhc3NlZCIsImNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7OztBQUpBO0FBS0EsSUFBTUEsQ0FBQyxrQkFBUDtlQUVlQyxnQjs7O0FBRWYsZUFBTUMsV0FBTixDQUFrQjtBQUNqQixXQUFTLGNBRFE7QUFFakIsaUJBQWUsS0FGRTtBQUdqQixlQUFhO0FBSEksQ0FBbEI7O0FBS0EsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWpCOztBQUVBLFNBQVNKLGdCQUFULEdBQTRCO0FBQzNCSyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjs7QUFFQSxXQUFTQyxRQUFULENBQWtCQyxTQUFsQixFQUE2QkMsU0FBN0IsRUFBd0NDLFdBQXhDLEVBQXFEO0FBQ3BERixhQUFTLENBQUNHLElBQVYsQ0FBZ0IsTUFBTUYsU0FBdEIsRUFBa0NFLElBQWxDLENBQXdDLG1CQUF4QyxFQUE4REMsSUFBOUQsQ0FBbUVGLFdBQW5FO0FBQ0E7O0FBRURHLElBQUUsQ0FBQ0MsU0FBSCxDQUFhLGNBQWIsRUFBNkJDLElBQTdCLENBQWtDLFVBQVNDLENBQVQsRUFBWTtBQUM3QyxRQUFJQyxZQUFZLEdBQUdsQixDQUFDLENBQUNHLFFBQUQsQ0FBRCxDQUFZZ0IsS0FBWixHQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FBbkI7O0FBQ0EsUUFBSSxLQUFLQyxjQUFMLENBQW9CLFFBQXBCLENBQUosRUFBbUM7QUFDbEMsVUFBSUMsYUFBYSxHQUFHLEtBQUtDLE1BQXpCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBSUQsYUFBYSxHQUFHLG9CQUFNLElBQU4sQ0FBcEI7QUFDQTs7QUFDRGQsWUFBUSxDQUFDVSxZQUFELEVBQWUsYUFBZixFQUE4QkQsQ0FBQyxDQUFDTyxXQUFoQyxDQUFSLENBUDZDLENBUTdDOztBQUNBLFFBQUlQLENBQUMsQ0FBQ0ksY0FBRixDQUFpQixZQUFqQixDQUFKLEVBQW9DO0FBQ25DYixjQUFRLENBQUNVLFlBQUQsRUFBZSxZQUFmLEVBQTZCRCxDQUFDLENBQUNRLFVBQS9CLENBQVI7QUFDQSxLQUZELE1BRU87QUFDTlAsa0JBQVksQ0FBQ04sSUFBYixDQUFrQixhQUFsQixFQUFpQ2MsSUFBakM7QUFDQSxLQWI0QyxDQWM3Qzs7O0FBQ0EsUUFBSUMsWUFBWSxHQUFHVCxZQUFZLENBQUNOLElBQWIsQ0FBbUIsZUFBbkIsRUFBcUNBLElBQXJDLENBQTJDLG1CQUEzQyxDQUFuQjtBQUNBLFFBQUlnQixNQUFNLEdBQUdYLENBQUMsQ0FBQ1csTUFBZixDQWhCNkMsQ0FpQjdDOztBQUNBQSxVQUFNLENBQUNDLElBQVAsQ0FBWSxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUFFLGFBQU9qQixFQUFFLENBQUNrQixTQUFILENBQWFGLENBQUMsQ0FBQ0csS0FBZixFQUFzQkYsQ0FBQyxDQUFDRSxLQUF4QixDQUFQO0FBQXdDLEtBQXJFOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHUCxNQUFNLENBQUNRLE1BQTdCLEVBQXFDRixDQUFDLEdBQUdDLEdBQXpDLEVBQThDRCxDQUFDLEVBQS9DLEVBQW1EO0FBQ2xELFVBQUlHLFNBQVMsR0FBR3JDLENBQUMsQ0FBRSwwQkFBRixDQUFELENBQWdDYSxJQUFoQyxDQUFxQ2UsTUFBTSxDQUFDTSxDQUFELENBQU4sQ0FBVUQsS0FBL0MsQ0FBaEI7QUFDQU4sa0JBQVksQ0FBQ1csTUFBYixDQUFxQkQsU0FBckI7QUFDQTs7QUFDRGYsaUJBQWEsQ0FBQ2lCLFVBQWQsQ0FBeUJyQixZQUFZLENBQUNzQixJQUFiLEVBQXpCO0FBQ0EsR0F4QkQ7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakREOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTXhDLENBQUMsa0JBQVAsQyxDQUlBO0FBQ0E7QUFDQTtBQUNBOztJQUNNeUMsdUI7OztBQUNMLHFDQUF1QjtBQUFBLFFBQVhDLElBQVcsdUVBQUosRUFBSTs7QUFBQTs7QUFDdEIsUUFBTUMsUUFBUSxHQUFHO0FBQ2hCQyxRQUFFLEVBQUUsSUFEWTtBQUVoQkMsVUFBSSxFQUFFLElBRlU7QUFHaEJDLFdBQUssRUFBRSxHQUhTO0FBSWhCQyxXQUFLLEVBQUVqQyxFQUFFLENBQUNrQyxZQUFILENBQWdCbEMsRUFBRSxDQUFDbUMsZ0JBQW5CLENBSlM7QUFLaEJDLG1CQUFhLEVBQUUsQ0FBQztBQUxBLEtBQWpCO0FBT0FDLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0JULFFBQXBCLEVBQThCRCxJQUE5QixFQVJzQixDQVFnQjs7QUFDdEMsU0FBS1csS0FBTCxHQUFhLEtBQUtSLElBQWxCO0FBQ0EsU0FBS0EsSUFBTCxHQUFZLEtBQUtTLFVBQWpCOztBQUNBLFFBQUksT0FBTyxLQUFLQyxNQUFaLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3ZDLFdBQUtBLE1BQUwsR0FBYyxPQUFPLEtBQUtULEtBQTFCO0FBQ0E7O0FBQ0QsU0FBS1UsUUFBTCxHQUFnQjFDLEVBQUUsQ0FBQzJDLGFBQUgsR0FDVkMsUUFEVSxDQUNELEtBQUtSLGFBREosQ0FBaEI7QUFFQSxTQUFLUyxJQUFMLEdBQVksS0FBWjtBQUNBckQsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBSzhDLEtBQWpCOztBQUNBLFFBQUksS0FBS1QsRUFBTCxLQUFZLElBQVosSUFBb0IsS0FBS1MsS0FBTCxLQUFlLElBQXZDLEVBQTZDO0FBQzVDLFdBQUtPLElBQUwsQ0FBVSxLQUFLaEIsRUFBZjtBQUNBLFdBQUtlLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFDRDs7Ozs4QkFFU0UsSSxFQUF3QjtBQUFBLFVBQWxCQyxRQUFrQix1RUFBUCxLQUFPO0FBQ2pDO0FBQ0E7QUFDQSxVQUFJQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxRQUFaLEVBQWI7QUFDQSxVQUFJQyxNQUFNLEdBQUdKLElBQUksQ0FBQ0ksTUFBTCxDQUFZRCxRQUFaLEVBQWI7QUFDQSxVQUFJRSxLQUFLLEdBQUcsQ0FBQ0gsTUFBRCxFQUFTRSxNQUFULENBQVo7QUFDQSxVQUFJRSxHQUFHLEdBQUcsS0FBVjs7QUFDQSxVQUFJTCxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDdEJJLGFBQUssQ0FBQ3JDLElBQU47QUFDQTs7QUFDRCxhQUFPcUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQyxHQUFYLEdBQWlCRCxLQUFLLENBQUMsQ0FBRCxDQUE3QjtBQUNBOzs7K0JBRVVFLEssRUFBTztBQUNqQixVQUFJLENBQUNDLFNBQVMsQ0FBQ2pDLE1BQWYsRUFBdUIsT0FBTyxLQUFLaUIsS0FBWjtBQUN2QixXQUFLQSxLQUFMLEdBQWFlLEtBQWI7O0FBQ0EsVUFBSSxLQUFLVCxJQUFMLEtBQWMsS0FBbEIsRUFBeUI7QUFDeEIsYUFBS0MsSUFBTCxDQUFVLEtBQUtoQixFQUFmO0FBQ0EsYUFBS2UsSUFBTCxHQUFZLElBQVo7QUFDQSxPQUhELE1BR087QUFDTjtBQUNBO0FBQ0FyRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBLE9BVmdCLENBV2pCO0FBQ0E7OztBQUNBLGFBQU8sSUFBUDtBQUNBOzs7eUJBRUkrRCxTLEVBQVc7QUFDZixVQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBLFVBQUl6QixLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFDQSxVQUFJUyxNQUFNLEdBQUcsS0FBS0EsTUFBbEI7QUFDQSxVQUFJaUIsS0FBSyxHQUFHLEtBQUtuQixLQUFqQjtBQUNBLFVBQUlHLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFVBQUlULEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUNBLFVBQUkwQixTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFDQUgsZUFBUyxDQUFDdEQsSUFBVixDQUFlLFlBQVc7QUFDekIsWUFBSTBELE9BQU8sR0FBRyxJQUFkO0FBRUEsWUFBSUMsR0FBRyxHQUFHN0QsRUFBRSxDQUFDOEQsTUFBSCxDQUFVRixPQUFWLEVBQW1CcEMsTUFBbkIsQ0FBMEIsS0FBMUIsRUFBaUNsQixJQUFqQyxDQUFzQyxPQUF0QyxFQUErQzBCLEtBQS9DLEVBQXNEMUIsSUFBdEQsQ0FBMkQsUUFBM0QsRUFBcUVtQyxNQUFyRSxDQUFWO0FBQ0FqRCxlQUFPLENBQUNDLEdBQVIsQ0FBWWlFLEtBQVo7O0FBRUEsaUJBQVNLLFdBQVQsQ0FBcUI1RCxDQUFyQixFQUF3QjtBQUN2QixjQUFJLENBQUNILEVBQUUsQ0FBQ2dFLEtBQUgsQ0FBU0MsTUFBZCxFQUFzQkMsVUFBVSxDQUFDQyxXQUFYLENBQXVCLEdBQXZCLEVBQTRCQyxPQUE1QjtBQUN0QmpFLFdBQUMsQ0FBQ2tFLEVBQUYsR0FBT2xFLENBQUMsQ0FBQ21FLENBQVQ7QUFDQW5FLFdBQUMsQ0FBQ29FLEVBQUYsR0FBT3BFLENBQUMsQ0FBQ3FFLENBQVQ7QUFDQTs7QUFFRCxpQkFBU0MsT0FBVCxDQUFpQnRFLENBQWpCLEVBQW9CO0FBQ25CQSxXQUFDLENBQUNrRSxFQUFGLEdBQU9yRSxFQUFFLENBQUNnRSxLQUFILENBQVNNLENBQWhCO0FBQ0FuRSxXQUFDLENBQUNvRSxFQUFGLEdBQU92RSxFQUFFLENBQUNnRSxLQUFILENBQVNRLENBQWhCO0FBQ0E7O0FBRUQsaUJBQVNFLFNBQVQsQ0FBbUJ2RSxDQUFuQixFQUFzQjtBQUNyQixjQUFJLENBQUNILEVBQUUsQ0FBQ2dFLEtBQUgsQ0FBU0MsTUFBZCxFQUFzQkMsVUFBVSxDQUFDQyxXQUFYLENBQXVCLENBQXZCO0FBQ3RCaEUsV0FBQyxDQUFDa0UsRUFBRixHQUFPLElBQVA7QUFDQWxFLFdBQUMsQ0FBQ29FLEVBQUYsR0FBTyxJQUFQO0FBQ0E7O0FBRUQsaUJBQVNJLFVBQVQsQ0FBb0JDLElBQXBCLEVBQW9DO0FBQUEsY0FBVkMsQ0FBVSx1RUFBTixJQUFNO0FBQ25DO0FBRUEsY0FBSUMsWUFBWSxHQUFHN0MsS0FBSyxDQUFDLENBQUQsQ0FBeEI7QUFFQThDLG1CQUFTLENBQUNDLE1BQVYsQ0FBaUJoRixFQUFFLENBQUNpRixNQUFILENBQVV2QixLQUFLLENBQUN3QixLQUFoQixFQUF1QixVQUFTL0UsQ0FBVCxFQUFZO0FBQ25ELGdCQUFJQSxDQUFDLENBQUNJLGNBQUYsQ0FBaUIsTUFBakIsQ0FBSixFQUE4QjtBQUM3QixxQkFBT0osQ0FBQyxDQUFDZ0YsSUFBVDtBQUNBLGFBRkQsTUFFTztBQUNOLHFCQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBUDtBQUNBO0FBQ0QsV0FOZ0IsQ0FBakI7QUFPQTNGLGlCQUFPLENBQUNDLEdBQVIsQ0FBWXNGLFNBQVMsQ0FBQ0MsTUFBVixFQUFaO0FBR0EsY0FBSUksU0FBUyxHQUFHUixJQUFJLENBQUNTLEtBQUwsR0FBYTdELE1BQWIsQ0FBb0IsR0FBcEIsRUFDaEI7QUFEZ0IsV0FFZGxCLElBRmMsQ0FFVCxPQUZTLEVBRUEsTUFGQSxFQUdmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQZSxXQVFkZ0YsSUFSYyxDQVFUdEYsRUFBRSxDQUFDdUYsSUFBSCxHQUNKQyxFQURJLENBQ0QsT0FEQyxFQUNRekIsV0FEUixFQUVKeUIsRUFGSSxDQUVELE1BRkMsRUFFT2YsT0FGUCxFQUdKZSxFQUhJLENBR0QsS0FIQyxFQUdNZCxTQUhOLENBUlMsQ0FBaEI7QUFlQUUsY0FBSSxHQUFHQSxJQUFJLENBQUNhLEtBQUwsQ0FBV0wsU0FBWCxFQUNMOUUsSUFESyxDQUNBLElBREEsRUFDTSxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDbUUsQ0FBRixHQUFPdEMsS0FBSyxHQUFDLENBQVAsR0FBWTdCLENBQUMsQ0FBQ21FLENBQTNCO0FBQStCLFdBRG5ELEVBRUxoRSxJQUZLLENBRUEsSUFGQSxFQUVNLFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPQSxDQUFDLENBQUNxRSxDQUFGLEdBQU8vQixNQUFNLEdBQUMsQ0FBUixHQUFhdEMsQ0FBQyxDQUFDcUUsQ0FBNUI7QUFBZ0MsV0FGcEQsRUFHTHRFLElBSEssQ0FHQSxVQUFTQyxDQUFULEVBQVk7QUFDakIsZ0JBQUlBLENBQUMsQ0FBQ0ksY0FBRixDQUFpQixNQUFqQixDQUFKLEVBQThCO0FBQzdCSixlQUFDLENBQUN1RixNQUFGLEdBQVdYLFNBQVMsQ0FBQzVFLENBQUMsQ0FBQ2dGLElBQUgsQ0FBcEI7QUFDQSxhQUZELE1BRU87QUFDTmhGLGVBQUMsQ0FBQ3VGLE1BQUYsR0FBVyxDQUFYO0FBQ0E7O0FBRUQsZ0JBQUl2RixDQUFDLENBQUNJLGNBQUYsQ0FBaUIsYUFBakIsQ0FBSixFQUFxQztBQUNwQ0osZUFBQyxDQUFDOEIsS0FBRixHQUFVQSxLQUFLLENBQUM5QixDQUFDLENBQUN3RixXQUFILENBQWY7QUFDQSxhQUZELE1BRU8sSUFBSXhGLENBQUMsQ0FBQ0ksY0FBRixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBQ3RDSixlQUFDLENBQUM4QixLQUFGLEdBQVVBLEtBQUssQ0FBQzlCLENBQUMsQ0FBQ3lGLE1BQUgsQ0FBZjtBQUNBLGFBRk0sTUFFQTtBQUNOekYsZUFBQyxDQUFDOEIsS0FBRixHQUFVNkMsWUFBVjtBQUNBO0FBQ0QsV0FqQkssQ0FBUDtBQW1CQSxjQUFJZSxVQUFVLEdBQUdULFNBQVMsQ0FDeEI5RSxJQURlLENBQ1YsV0FEVSxFQUNHLFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPLGVBQWVBLENBQUMsQ0FBQ21FLENBQWpCLEdBQXFCLEdBQXJCLEdBQTJCbkUsQ0FBQyxDQUFDcUUsQ0FBN0IsR0FBaUMsR0FBeEM7QUFBOEMsV0FEL0QsRUFFZmhELE1BRmUsQ0FFUixRQUZRLEVBR2hCO0FBQ0E7QUFKZ0IsV0FLZmxCLElBTGUsQ0FLVixNQUxVLEVBS0YsVUFBU0gsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLENBQUMsQ0FBQzhCLEtBQVQ7QUFBaUIsV0FMN0IsRUFNZjNCLElBTmUsQ0FNVixHQU5VLEVBTUwsQ0FOSyxDQUFqQjs7QUFRQSxjQUFJdUUsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBRCxnQkFBSSxDQUNGM0UsU0FERixDQUNZLFFBRFosRUFDc0I2RixVQUR0QixDQUNpQ2pCLENBRGpDLEVBRUV2RSxJQUZGLENBRU8sR0FGUCxFQUVZLFVBQVNILENBQVQsRUFBWTtBQUN0QixxQkFBT0EsQ0FBQyxDQUFDdUYsTUFBVDtBQUNBLGFBSkYsRUFLQTtBQUxBLGFBTUVwRixJQU5GLENBTU8sTUFOUCxFQU1lLFVBQVNILENBQVQsRUFBWTtBQUN6QixxQkFBT0EsQ0FBQyxDQUFDOEIsS0FBVDtBQUNBLGFBUkY7QUFTQSxXQWRELE1BY087QUFFTjJDLGdCQUFJLENBQUMzRSxTQUFMLENBQWUsUUFBZixFQUNFSyxJQURGLENBQ08sR0FEUCxFQUNZLFVBQVNILENBQVQsRUFBWTtBQUN0QixxQkFBT0EsQ0FBQyxDQUFDdUYsTUFBVDtBQUNBLGFBSEYsRUFJQTtBQUpBLGFBS0VwRixJQUxGLENBS08sTUFMUCxFQUtlLFVBQVNILENBQVQsRUFBWTtBQUN6QixxQkFBT0EsQ0FBQyxDQUFDOEIsS0FBVDtBQUNBLGFBUEY7QUFRQTs7QUFFRCxpQkFBTzJDLElBQVA7QUFDQTs7QUFFRCxpQkFBU21CLFVBQVQsQ0FBb0JoRCxJQUFwQixFQUFvQztBQUFBLGNBQVY4QixDQUFVLHVFQUFOLElBQU07QUFDbkM7QUFHQSxjQUFJbUIsU0FBUyxHQUFHakQsSUFBSSxDQUFDc0MsS0FBTCxHQUFhN0QsTUFBYixDQUFvQixNQUFwQixFQUNkbEIsSUFEYyxDQUNULElBRFMsRUFDSCxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDOEMsTUFBRixDQUFTcUIsQ0FBaEI7QUFBb0IsV0FEL0IsRUFFZGhFLElBRmMsQ0FFVCxJQUZTLEVBRUgsVUFBU0gsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLENBQUMsQ0FBQzhDLE1BQUYsQ0FBU3VCLENBQWhCO0FBQW9CLFdBRi9CLEVBR2RsRSxJQUhjLENBR1QsSUFIUyxFQUdILFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPQSxDQUFDLENBQUNnRCxNQUFGLENBQVNtQixDQUFoQjtBQUFvQixXQUgvQixFQUlkaEUsSUFKYyxDQUlULElBSlMsRUFJSCxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDZ0QsTUFBRixDQUFTcUIsQ0FBaEI7QUFBb0IsV0FKL0IsRUFLZGxFLElBTGMsQ0FLVCxPQUxTLEVBS0EsTUFMQSxDQUFoQjtBQU1BeUMsY0FBSSxHQUFHQSxJQUFJLENBQUMwQyxLQUFMLENBQVdPLFNBQVgsQ0FBUDtBQUNBakQsY0FBSSxDQUNEekMsSUFESCxDQUNRLGNBRFIsRUFDd0IsVUFBU0gsQ0FBVCxFQUFZO0FBQUUsbUJBQU84RixJQUFJLENBQUNDLElBQUwsQ0FBVS9GLENBQUMsQ0FBQ2dHLE1BQVosQ0FBUDtBQUE2QixXQURuRTs7QUFHQSxjQUFJdEIsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZm1CLHFCQUFTLENBQ1I7QUFEUSxhQUVQSSxLQUZGLENBRVEsUUFGUixFQUVrQixPQUZsQixFQURlLENBSWY7QUFDQTtBQUNBLFdBTkQsTUFNTyxDQUNOO0FBQ0E7O0FBRUQsaUJBQU9yRCxJQUFQO0FBQ0E7O0FBR0RXLGFBQUssQ0FBQ3dCLEtBQU4sQ0FBWW1CLE9BQVosQ0FBb0IsVUFBU2xHLENBQVQsRUFBWTtBQUMvQkEsV0FBQyxDQUFDbUcsRUFBRixHQUFPbkcsQ0FBQyxDQUFDbUcsRUFBRixDQUFLcEQsUUFBTCxFQUFQO0FBQ0EsU0FGRDtBQUdBUSxhQUFLLENBQUM2QyxLQUFOLENBQVlGLE9BQVosQ0FBb0IsVUFBU2xHLENBQVQsRUFBWTtBQUMvQkEsV0FBQyxDQUFDbUcsRUFBRixHQUFPM0MsU0FBUyxDQUFDeEQsQ0FBRCxFQUFJdUQsS0FBSyxDQUFDVixRQUFWLENBQWhCO0FBQ0EsU0FGRDtBQUlBLFlBQUlrQixVQUFVLEdBQUdsRSxFQUFFLENBQUN3RyxlQUFILEdBQ2ZDLEtBRGUsQ0FDVCxNQURTLEVBQ0R6RyxFQUFFLENBQUMwRyxTQUFILEdBQWVKLEVBQWYsQ0FBa0IsVUFBU25HLENBQVQsRUFBWTtBQUFFLGlCQUFPQSxDQUFDLENBQUNtRyxFQUFUO0FBQWMsU0FBOUMsQ0FEQyxFQUVoQjtBQUZnQixTQUdmRyxLQUhlLENBR1QsUUFIUyxFQUdDL0QsUUFIRCxFQUlmK0QsS0FKZSxDQUlULFFBSlMsRUFJQ3pHLEVBQUUsQ0FBQzJHLFdBQUgsQ0FBZTNFLEtBQUssR0FBRyxDQUF2QixFQUEwQlMsTUFBTSxHQUFHLENBQW5DLENBSkQsQ0FBakI7QUFNQ3lCLGtCQUFVLENBQ1JnQixLQURGLENBQ1F4QixLQUFLLENBQUN3QixLQURkLEVBRUVNLEVBRkYsQ0FFSyxNQUZMLEVBRWFvQixNQUZiO0FBSUExQyxrQkFBVSxDQUFDdUMsS0FBWCxDQUFpQixNQUFqQixFQUNFRixLQURGLENBQ1E3QyxLQUFLLENBQUM2QyxLQURkO0FBR0EsYUFBS3JDLFVBQUwsR0FBa0JBLFVBQWxCO0FBRUQsWUFBSWEsU0FBUyxHQUFHL0UsRUFBRSxDQUFDNkcsV0FBSCxHQUNkQyxLQURjLENBQ1IsQ0FBQyxDQUFELEVBQUksRUFBSixDQURRLENBQWhCO0FBSUEsWUFBSUMsQ0FBQyxHQUFHbEQsR0FBRyxDQUFDckMsTUFBSixDQUFXLEdBQVgsQ0FBUjtBQUVDLFlBQUl1QixJQUFJLEdBQUdnRSxDQUFDLENBQUN2RixNQUFGLENBQVMsR0FBVCxFQUNUbEIsSUFEUyxDQUNKLE9BREksRUFDSyxPQURMLEVBRVo7QUFGWSxTQUdYTCxTQUhXLENBR0QsT0FIQyxDQUFYO0FBS0Q4QyxZQUFJLEdBQUdBLElBQUksQ0FBQ2hCLElBQUwsQ0FBVTJCLEtBQUssQ0FBQzZDLEtBQWhCLEVBQXVCLFVBQVNwRyxDQUFULEVBQVk7QUFDekMsaUJBQU9BLENBQUMsQ0FBQ21HLEVBQVQ7QUFDQSxTQUZNLENBQVA7QUFJQyxZQUFJMUIsSUFBSSxHQUFHbUMsQ0FBQyxDQUFDdkYsTUFBRixDQUFTLEdBQVQsRUFDVGxCLElBRFMsQ0FDSixPQURJLEVBQ0ssT0FETCxFQUVYTCxTQUZXLENBRUQsT0FGQyxDQUFYO0FBSUQyRSxZQUFJLEdBQUdBLElBQUksQ0FBQzdDLElBQUwsQ0FBVTJCLEtBQUssQ0FBQ3dCLEtBQWhCLEVBQXVCLFVBQVMvRSxDQUFULEVBQVk7QUFBRSxpQkFBT0EsQ0FBQyxDQUFDbUcsRUFBVDtBQUFjLFNBQW5ELENBQVA7QUFFQTFCLFlBQUksR0FBR0QsVUFBVSxDQUFDQyxJQUFELENBQWpCO0FBQ0E3QixZQUFJLEdBQUdnRCxVQUFVLENBQUNoRCxJQUFELENBQWpCLENBckx5QixDQXdMekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUMsaUJBQVM2RCxNQUFULEdBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWhDLGNBQUksQ0FDRnRFLElBREYsQ0FDTyxJQURQLEVBQ2EsVUFBU0gsQ0FBVCxFQUFZO0FBQ3ZCQSxhQUFDLENBQUNtRSxDQUFGLEdBQU0yQixJQUFJLENBQUNlLEdBQUwsQ0FBUzdHLENBQUMsQ0FBQ3VGLE1BQVgsRUFBbUJPLElBQUksQ0FBQ2dCLEdBQUwsQ0FBU2pGLEtBQUssR0FBRzdCLENBQUMsQ0FBQ3VGLE1BQW5CLEVBQTJCdkYsQ0FBQyxDQUFDbUUsQ0FBN0IsQ0FBbkIsQ0FBTjtBQUNBLG1CQUFPbkUsQ0FBQyxDQUFDbUUsQ0FBVDtBQUFhLFdBSGYsRUFJRWhFLElBSkYsQ0FJTyxJQUpQLEVBSWEsVUFBU0gsQ0FBVCxFQUFZO0FBQ3ZCQSxhQUFDLENBQUNxRSxDQUFGLEdBQU15QixJQUFJLENBQUNlLEdBQUwsQ0FBUzdHLENBQUMsQ0FBQ3VGLE1BQVgsRUFBbUJPLElBQUksQ0FBQ2dCLEdBQUwsQ0FBU2pGLEtBQUssR0FBRzdCLENBQUMsQ0FBQ3VGLE1BQW5CLEVBQTJCdkYsQ0FBQyxDQUFDcUUsQ0FBN0IsQ0FBbkIsQ0FBTjtBQUNBLG1CQUFPckUsQ0FBQyxDQUFDcUUsQ0FBVDtBQUFhLFdBTmYsRUFPRWxFLElBUEYsQ0FPTyxXQVBQLEVBT29CLFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPLGVBQWVBLENBQUMsQ0FBQ21FLENBQWpCLEdBQXFCLEdBQXJCLEdBQTJCbkUsQ0FBQyxDQUFDcUUsQ0FBN0IsR0FBaUMsR0FBeEM7QUFBOEMsV0FQaEY7QUFTQXpCLGNBQUksQ0FDSDtBQURHLFdBRUZ6QyxJQUZGLENBRU8sSUFGUCxFQUVhLFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPQSxDQUFDLENBQUM4QyxNQUFGLENBQVNxQixDQUFoQjtBQUFvQixXQUYvQyxFQUdFaEUsSUFIRixDQUdPLElBSFAsRUFHYSxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDOEMsTUFBRixDQUFTdUIsQ0FBaEI7QUFBb0IsV0FIL0MsRUFJRWxFLElBSkYsQ0FJTyxJQUpQLEVBSWEsVUFBU0gsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLENBQUMsQ0FBQ2dELE1BQUYsQ0FBU21CLENBQWhCO0FBQW9CLFdBSi9DLEVBS0VoRSxJQUxGLENBS08sSUFMUCxFQUthLFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPQSxDQUFDLENBQUNnRCxNQUFGLENBQVNxQixDQUFoQjtBQUFvQixXQUwvQztBQU1FOztBQUVGLGlCQUFTMEMsWUFBVCxHQUF3QjtBQUN2QnRDLGNBQUksQ0FBQ3VDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLEtBQXRCO0FBQ0F2QyxjQUFJLENBQUMzRSxTQUFMLENBQWUsTUFBZixFQUF1Qm1HLEtBQXZCLENBQTZCLFNBQTdCLEVBQXdDLE1BQXhDLEVBRnVCLENBR3ZCO0FBQ0E7O0FBQ0FyRCxjQUFJLENBQUNxRCxLQUFMLENBQVcsU0FBWCxFQUFzQixDQUF0QjtBQUNBbEgsV0FBQyxDQUFFLGVBQUYsQ0FBRCxDQUFxQmtJLEdBQXJCLENBQTBCLFlBQTFCLEVBQXlDLFFBQXpDO0FBQ0E7O0FBQ0R2RCxXQUFHLENBQUMyQixFQUFKLENBQU8sT0FBUCxFQUFnQjBCLFlBQWhCLEVBaFB5QixDQWtQekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxPQXpSRDtBQTBSRCxhQUFPLElBQVA7QUFDQyxLLENBRUQ7QUFDQTtBQUNHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNHO0FBQ0E7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztlQUdjdkYsdUI7Ozs7Ozs7Ozs7Ozs7QUM5WmYsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoibm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwidGlwcHkuanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJub2RlbGlua192aXNfY29hdXRob3JzaGlwXCIsIFtcImQzXCIsIFwialF1ZXJ5XCIsIFwidGlwcHkuanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwidGlwcHkuanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXBcIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSwgcm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcInRpcHB5XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGlwcHlfanNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcbi8vIGNvbnN0IHRpcHB5ID0gcmVxdWlyZSgnLi4vbm9kZV9tb2R1bGVzL3RpcHB5LmpzLycpO1xuaW1wb3J0ICd0aXBweS5qcy90aGVtZXMvbGlnaHQtYm9yZGVyLmNzcyc7XG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGl2YXRlVG9vbHRpcHM7XG5cbnRpcHB5LnNldERlZmF1bHRzKHtcblx0J3RoZW1lJzogJ2xpZ2h0LWJvcmRlcicsXG5cdCdhbmltYXRlRmlsbCc6IGZhbHNlLFxuXHQnYW5pbWF0aW9uJzogJ2ZhZGUnLFxufSk7XG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29sdGlwLXRlbXBsYXRlJyk7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVG9vbHRpcHMoKSB7XG5cdGNvbnNvbGUubG9nKCdhY3RpdmF0ZVRvb2x0aXBzKCknKTtcblxuXHRmdW5jdGlvbiBmaWxsSHRtbCgkdGVtcGxhdGUsIGNsYXNzbmFtZSwgdGV4dENvbnRlbnQpIHtcblx0XHQkdGVtcGxhdGUuZmluZCggJy4nICsgY2xhc3NuYW1lICkuZmluZCggJy50ZW1wbGF0ZS1jb250ZW50JyApLnRleHQodGV4dENvbnRlbnQpO1xuXHR9XG5cblx0ZDMuc2VsZWN0QWxsKCcubm9kZSBjaXJjbGUnKS5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHR2YXIgJHRvb2x0aXBOb2RlID0gJCh0ZW1wbGF0ZSkuY2xvbmUoKS5hdHRyKFwiaWRcIiwgbnVsbCk7XG5cdFx0aWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJfdGlwcHlcIikpIHtcblx0XHRcdHZhciB0aXBweUluc3RhbmNlID0gdGhpcy5fdGlwcHk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB0aXBweUluc3RhbmNlID0gdGlwcHkodGhpcyk7XG5cdFx0fVxuXHRcdGZpbGxIdG1sKCR0b29sdGlwTm9kZSwgJ2F1dGhvcl9uYW1lJywgZC5hdXRob3JfbmFtZSk7XG5cdFx0Ly8gaWYgKGQuaGFzT3duUHJvcGVydHkoJ2FmZmlsX25hbWUnKSAmJiBkLmFmZmlsX25hbWUubGVuZ3RoKSB7XG5cdFx0aWYgKGQuaGFzT3duUHJvcGVydHkoJ2FmZmlsX25hbWUnKSkge1xuXHRcdFx0ZmlsbEh0bWwoJHRvb2x0aXBOb2RlLCAnYWZmaWxfbmFtZScsIGQuYWZmaWxfbmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b29sdGlwTm9kZS5maW5kKCcuYWZmaWxfbmFtZScpLmhpZGUoKTtcblx0XHR9XG5cdFx0Ly8gaWYgKGQuaGFzT3duUHJvcGVydHkoJ2NsX2JvdHRvbScpKSBmaWxsSHRtbCgkdG9vbHRpcE5vZGUsICdjbHVzdGVyX2lkJywgZC5jbF9ib3R0b20pO1xuXHRcdHZhciAkcGFwZXJUaXRsZXMgPSAkdG9vbHRpcE5vZGUuZmluZCggJy5wYXBlcl90aXRsZXMnICkuZmluZCggJy50ZW1wbGF0ZS1jb250ZW50JyApO1xuXHRcdHZhciBwYXBlcnMgPSBkLnBhcGVycztcblx0XHQvLyBzb3J0IHBhcGVycyBhbHBoYWJldGljYWxseVxuXHRcdHBhcGVycy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGQzLmFzY2VuZGluZyhhLnRpdGxlLCBiLnRpdGxlKTsgfSk7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyICRsaXN0SXRlbSA9ICQoICc8bGkgY2xhc3M9XCJwYXBlcl90aXRsZVwiPicgKS50ZXh0KHBhcGVyc1tpXS50aXRsZSk7XG5cdFx0XHQkcGFwZXJUaXRsZXMuYXBwZW5kKCAkbGlzdEl0ZW0gKTtcblx0XHR9XG5cdFx0dGlwcHlJbnN0YW5jZS5zZXRDb250ZW50KCR0b29sdGlwTm9kZS5odG1sKCkpO1xuXHR9KTtcbn1cbiIsImltcG9ydCBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyBmcm9tICcuL3Zpcy5qcyc7XG5pbXBvcnQgYWN0aXZhdGVUb29sdGlwcyBmcm9tICcuL2NvYXV0aG9yc2hpcF90b29sdGlwcy5qcyc7XG5leHBvcnQgeyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcywgYWN0aXZhdGVUb29sdGlwcyB9O1xuXG4iLCIvLyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpc1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0galF1ZXJ5O1xuXG5cblxuLy8gcmV1c2FibGUgY2hhcnQgcGF0dGVybiBpbnNwaXJlZCBieTpcbi8vIGh0dHBzOi8vYm9zdC5vY2tzLm9yZy9taWtlL2NoYXJ0L1xuLy8gYW5kXG4vLyBodHRwczovL3d3dy50b3B0YWwuY29tL2QzLWpzL3Rvd2FyZHMtcmV1c2FibGUtZDMtanMtY2hhcnRzXG5jbGFzcyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyB7XG5cdGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdFx0ZWw6IG51bGwsXG5cdFx0XHRkYXRhOiBudWxsLFxuXHRcdFx0d2lkdGg6IDk2MCxcblx0XHRcdGNvbG9yOiBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCksXG5cdFx0XHRmb3JjZVN0cmVuZ3RoOiAtMixcblx0XHR9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdHMpOyAgLy8gb3B0cyB3aWxsIG92ZXJ3cml0ZSBkZWZhdWx0c1xuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGE7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy51cGRhdGVEYXRhO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IC42MjUgKiB0aGlzLndpZHRoO1xuXHRcdH1cblx0XHR0aGlzLm1hbnlCb2R5ID0gZDMuZm9yY2VNYW55Qm9keSgpXG5cdFx0XHRcdFx0XHRcdC5zdHJlbmd0aCh0aGlzLmZvcmNlU3RyZW5ndGgpO1xuXHRcdHRoaXMuaW5pdCA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuX2RhdGEpO1xuXHRcdGlmICh0aGlzLmVsICE9PSBudWxsICYmIHRoaXMuX2RhdGEgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TGlua0lkKGxpbmssIGRpcmVjdGVkID0gZmFsc2UpIHtcblx0XHQvLyBsaW5rIElEIHdpbGwgYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIHNvdXJjZSBJRCBhbmQgdGFyZ2V0IElELCBzZXBhcmF0ZWQgYnkgXCItJi1cIlxuXHRcdC8vIElmIHRoZSBncmFwaCBpcyB1bmRpcmVjdGVkLCB0aGUgSURzIHdpbGwgYmUgc29ydGVkIEFMUEhBQkVUSUNBTExZIHVzaW5nIHRoZSBzdHJpbmcgdmFsdWVzIG9mIHRoZSBJRFxuXHRcdHZhciBzb3VyY2UgPSBsaW5rLnNvdXJjZS50b1N0cmluZygpO1xuXHRcdHZhciB0YXJnZXQgPSBsaW5rLnRhcmdldC50b1N0cmluZygpO1xuXHRcdHZhciBpdGVtcyA9IFtzb3VyY2UsIHRhcmdldF07XG5cdFx0dmFyIHNlcCA9IFwiLSYtXCI7XG5cdFx0aWYgKGRpcmVjdGVkID09PSB0cnVlKSB7XG5cdFx0XHRpdGVtcy5zb3J0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBpdGVtc1swXSArIHNlcCArIGl0ZW1zWzFdO1xuXHR9XG5cblx0dXBkYXRlRGF0YSh2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2RhdGE7XG5cdFx0dGhpcy5fZGF0YSA9IHZhbHVlO1xuXHRcdGlmICh0aGlzLmluaXQgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGlzLnVwZGF0ZURhdGEoKTtcblx0XHRcdC8vIE5PVCBJTVBMRU1FTlRFRFxuXHRcdFx0Y29uc29sZS5sb2coXCJVUERBVElORyBEQVRBIE5PVCBZRVQgSU1QTEVNRU5URURcIik7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1cGRhdGVEYXRhKTtcblx0XHQvLyBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRkcmF3KHNlbGVjdGlvbikge1xuXHRcdHZhciBvYmogPSB0aGlzO1xuXHRcdHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cdFx0dmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXHRcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdFx0dmFyIG1hbnlCb2R5ID0gdGhpcy5tYW55Qm9keTtcblx0XHR2YXIgY29sb3IgPSB0aGlzLmNvbG9yO1xuXHRcdHZhciBnZXRMaW5rSWQgPSB0aGlzLmdldExpbmtJZDtcblx0XHRzZWxlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxJdGVtID0gdGhpcztcblxuXHRcdFx0dmFyIHN2ZyA9IGQzLnNlbGVjdChzZWxJdGVtKS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG5cdFx0XHRjb25zb2xlLmxvZyhncmFwaCk7XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcblx0XHRcdFx0aWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG5cdFx0XHRcdGQuZnggPSBkLng7XG5cdFx0XHRcdGQuZnkgPSBkLnk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuXHRcdFx0XHRkLmZ4ID0gZDMuZXZlbnQueDtcblx0XHRcdFx0ZC5meSA9IGQzLmV2ZW50Lnk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG5cdFx0XHRcdGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuXHRcdFx0XHRkLmZ4ID0gbnVsbDtcblx0XHRcdFx0ZC5meSA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVudGVyTm9kZXMobm9kZSwgdCA9IG51bGwpIHtcblx0XHRcdFx0Ly8gcGFzcyBpbiB0aGUgc2VsZWN0aW9uIGZvciBlbnRlcmluZyBub2Rlc1xuXG5cdFx0XHRcdHZhciBkZWZhdWx0Q29sb3IgPSBjb2xvcigwKTtcblxuXHRcdFx0XHRzaXplU2NhbGUuZG9tYWluKGQzLmV4dGVudChncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KCdmbG93JykpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkLmZsb3c7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBbNSw1XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzaXplU2NhbGUuZG9tYWluKCkpO1xuXG5cblx0XHRcdFx0dmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwiclwiLCA1KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0dmFyIHR4ID0gKHdpZHRoLzIpICsgZC54O1xuXHRcdFx0XHRcdC8vIFx0dmFyIHR5ID0gKGhlaWdodC8yKSArIGQueTtcblx0XHRcdFx0XHQvLyBcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIHR4ICsgXCIsXCIgKyB0eSArIFwiKVwiO1xuXHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0LmNhbGwoZDMuZHJhZygpXG5cdFx0XHRcdFx0XHQub24oXCJzdGFydFwiLCBkcmFnc3RhcnRlZClcblx0XHRcdFx0XHRcdC5vbihcImRyYWdcIiwgZHJhZ2dlZClcblx0XHRcdFx0XHRcdC5vbihcImVuZFwiLCBkcmFnZW5kZWQpKTtcblxuXG5cblx0XHRcdFx0bm9kZSA9IG5vZGUubWVyZ2Uobm9kZUVudGVyKVxuXHRcdFx0XHRcdC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54ID0gKHdpZHRoLzIpICsgZC54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ID0gKGhlaWdodC8yKSArIGQueTsgfSlcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eSgnZmxvdycpKSB7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gc2l6ZVNjYWxlKGQuZmxvdyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IDU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KFwiY29sb3JfZ3JvdXBcIikpIHtcblx0XHRcdFx0XHRcdFx0ZC5jb2xvciA9IGNvbG9yKGQuY29sb3JfZ3JvdXApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkLmhhc093blByb3BlcnR5KFwiY2xfdG9wXCIpKSB7XG5cdFx0XHRcdFx0XHRcdGQuY29sb3IgPSBjb2xvcihkLmNsX3RvcCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkLmNvbG9yID0gZGVmYXVsdENvbG9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHZhciBub2RlQ2lyY2xlID0gbm9kZUVudGVyXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KVxuXHRcdFx0XHRcdC5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdFx0XHQvLyAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3I7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApO1xuXG5cdFx0XHRcdGlmICh0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gbm9kZUVudGVyLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0ZC54ID0gd2lkdGgvMjtcblx0XHRcdFx0XHQvLyBcdGQueSA9IGhlaWdodC8yO1xuXHRcdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHRcdG5vZGVcblx0XHRcdFx0XHRcdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikudHJhbnNpdGlvbih0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnID0gY29sb3IoZC5jbF90b3ApOyB9KTtcblx0XHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLmNvbG9yO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRub2RlLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnID0gY29sb3IoZC5jbF90b3ApOyB9KTtcblx0XHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLmNvbG9yO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZW50ZXJMaW5rcyhsaW5rLCB0ID0gbnVsbCkge1xuXHRcdFx0XHQvLyBwYXNzIGluIHRoZSBzZWxlY3Rpb24gZm9yIGVudGVyaW5nIGxpbmtzXG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcblx0XHRcdFx0XHQuYXR0cihcIngyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpO1xuXHRcdFx0XHRsaW5rID0gbGluay5tZXJnZShsaW5rRW50ZXIpO1xuXHRcdFx0XHRsaW5rXG5cdFx0XHRcdCAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gTWF0aC5zcXJ0KGQud2VpZ2h0KTsgfSk7XG5cblx0XHRcdFx0aWYgKHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRsaW5rRW50ZXJcblx0XHRcdFx0XHRcdC8vIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblx0XHRcdFx0XHRcdC5zdHlsZShcInN0cm9rZVwiLCBcImdyZWVuXCIpXG5cdFx0XHRcdFx0Ly8gbGlua0VudGVyLnRyYW5zaXRpb24odClcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBsaW5rO1xuXHRcdFx0fVxuXG5cblx0XHRcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHRcdFx0fSk7XG5cdFx0XHRncmFwaC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuXHRcdFx0XHQuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpLmlkKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pKVxuXHRcdFx0XHQvLyAuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpKVxuXHRcdFx0XHQuZm9yY2UoXCJjaGFyZ2VcIiwgbWFueUJvZHkpXG5cdFx0XHRcdC5mb3JjZShcImNlbnRlclwiLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuXHRcdCAgc2ltdWxhdGlvblxuXHRcdFx0ICAubm9kZXMoZ3JhcGgubm9kZXMpXG5cdFx0XHQgIC5vbihcInRpY2tcIiwgdGlja2VkKTtcblxuXHRcdCAgc2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0XHRcdCAgLmxpbmtzKGdyYXBoLmxpbmtzKTtcblxuXHRcdCAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcblxuXHRcdFx0dmFyIHNpemVTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcblx0XHRcdFx0LnJhbmdlKFs0LCAxMl0pO1xuXG5cblx0XHRcdHZhciBnID0gc3ZnLmFwcGVuZChcImdcIik7XG5cblx0XHQgIHZhciBsaW5rID0gZy5hcHBlbmQoXCJnXCIpXG5cdFx0XHQgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rc1wiKVxuXHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubGlua1wiKTtcblxuXHRcdFx0bGluayA9IGxpbmsuZGF0YShncmFwaC5saW5rcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRyZXR1cm4gZC5pZDtcblx0XHRcdH0pO1xuXG5cdFx0ICB2YXIgbm9kZSA9IGcuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0ICAuYXR0cihcImNsYXNzXCIsIFwibm9kZXNcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubm9kZVwiKTtcblxuXHRcdFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cblx0XHRcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUpO1xuXHRcdFx0bGluayA9IGVudGVyTGlua3MobGluayk7XG5cblxuXHRcdFx0Ly8gbm9kZUNpcmNsZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG5cdFx0XHQvLyBcdG5vZGUuY2xhc3NlZCgnZm9jdXMnLCBmYWxzZSk7XG5cdFx0XHQvLyBcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0Ly8gXHRub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC4xKTtcblx0XHRcdC8vIFx0bGluay5zdHlsZShcIm9wYWNpdHlcIiwgLjEpO1xuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50X2lkcyA9IGdyYXBoLmdyYXBoLmNvbm5lY3RlZF9jb21wb25lbnRzW2QuY29tcG9uZW50XTtcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudCA9IG5vZGUuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gY29tcG9uZW50X2lkcy5pbmNsdWRlcyhkLmlkKTsgfSk7XG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRMaW5rID0gbGluay5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBjb21wb25lbnRfaWRzLmluY2x1ZGVzKGQuc291cmNlLmlkKTt9KVxuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50Q29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5jbGFzc2VkKFwiZm9jdXNcIiwgdHJ1ZSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29tcG9uZW50Q29sb3IoZC5jbF9ib3R0b20pOyB9KVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTsgIC8vIHNob3cgdGhlc2UgbGFiZWxzXG5cdFx0XHQvLyBcdGNvbXBvbmVudExpbmsuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0Ly8gXHRcblx0XHRcdC8vIFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAndmlzaWJsZScgKTtcblx0XHRcdC8vIFx0YXBwbHlSYWRpb1NlbGVjdGlvbigpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0ZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gfSk7XG5cblxuXG5cdFx0ICBmdW5jdGlvbiB0aWNrZWQoKSB7XG5cdFx0XHQvLyBub2RlXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pO1xuXHRcdFx0Ly8gYWRkIGJvdW5kaW5nIGJveFxuXHRcdFx0Ly8gICBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjk0OTJcblx0XHRcdG5vZGVcblx0XHRcdFx0LmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IFxuXHRcdFx0XHRcdGQueCA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih3aWR0aCAtIGQucmFkaXVzLCBkLngpKTtcblx0XHRcdFx0XHRyZXR1cm4gZC54OyB9KVxuXHRcdFx0XHQuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0ZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHdpZHRoIC0gZC5yYWRpdXMsIGQueSkpO1xuXHRcdFx0XHRcdHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSk7XG5cblx0XHRcdGxpbmtcblx0XHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwieDJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcblx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcblx0XHQgIH1cblxuXHRcdFx0ZnVuY3Rpb24gcmVzZXRfbGF5b3V0KCkge1xuXHRcdFx0XHRub2RlLmNsYXNzZWQoXCJmb2N1c1wiLCBmYWxzZSk7XG5cdFx0XHRcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHQvLyBub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZzsgfSlcblx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHRsaW5rLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAnaGlkZGVuJyApO1xuXHRcdFx0fVxuXHRcdFx0c3ZnLm9uKFwiY2xpY2tcIiwgcmVzZXRfbGF5b3V0KTtcblxuXHRcdFx0Ly8gVE9ETyB0aGlzIGlzIGJyb2tlbi4gZml4IGl0LlxuXHRcdFx0Ly8gdmFyIGZ1c2UgPSBuZXcgRnVzZShncmFwaC5ub2RlcywgZnVzZU9wdGlvbnMpO1xuXHRcdFx0Ly8gdmFyIHJlc3VsdCA9IGZ1c2Uuc2VhcmNoKFwiZWhsb3dcIik7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0Ly8gJCggJyN0ZXh0U2VhcmNoJyApLm9uKCAnaW5wdXQnLCBmdXNlU2VsZWN0ICk7XG5cdFx0XHQvLyBmdW5jdGlvbiBmdXNlU2VsZWN0KCkge1xuXHRcdFx0Ly8gXHQvLyByZXNldCBub2RlIHNpemVzIGFuZCBzdHlsZXNcblx0XHRcdC8vIFx0ZDMuc2VsZWN0QWxsKFwiLm5vZGUgY2lyY2xlXCIpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDEpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcblx0XHRcdC8vIFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5yYWRpdXM7IH0pO1xuICAgICAgICAgICAgLy9cblx0XHRcdC8vIFx0dmFyICR0aGlzID0gJCggdGhpcyApO1xuXHRcdFx0Ly8gXHR2YXIgcXVlcnkgPSAkdGhpcy52YWwoKTtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJHRoaXMudmFsKCkpO1xuXHRcdFx0Ly8gXHRpZiAocXVlcnkubGVuZ3RoID4gMykge1xuXHRcdFx0Ly8gXHRcdHZhciByZXN1bHQgPSBmdXNlLnNlYXJjaChxdWVyeSk7XG5cdFx0XHQvLyBcdFx0aWYgKHJlc3VsdC5sZW5ndGggIT0wKSB7XG5cdFx0XHQvLyBcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHQvLyBcdFx0XHRcdHZhciBhdXRob3JJZCA9IHJlc3VsdFtpXTtcblx0XHRcdC8vIFx0XHRcdFx0bm9kZS5maWx0ZXIoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZCA9PSBhdXRob3JJZDsgfSlcblx0XHRcdC8vIFx0XHRcdFx0XHQuc2VsZWN0KFwiY2lyY2xlXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5yYWRpdXMgKiAxLjU7IH0pO1xuXHRcdFx0Ly8gXHRcdFx0fVxuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXG5cdFx0XHQvLyB1cGRhdGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHQvLyB1c2Ugd2lkdGggdG8gbWFrZSBhbnkgY2hhbmdlc1xuXHRcdFx0Ly8gXHQvL1xuXHRcdFx0Ly8gXHQvLyBOT1QgSU1QTEVNRU5URURcblx0XHRcdC8vIH07XG5cblxuXG5cblx0XHR9KTtcblx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyB1cGRhdGVEYXRhKCkge1xuXHQvLyBcdC8vIHVzZSBEMyB1cGRhdGUgcGF0dGVybiB3aXRoIGRhdGFcbiAgICAvL1xuXHQvLyBcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdC8vIFx0Z3JhcGgubm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHQvLyBcdH0pXG5cdC8vIFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZ2V0TGlua0lkKGQsIGdyYXBoLmRpcmVjdGVkKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHR0aGlzLnNpbXVsYXRpb25cblx0Ly8gXHRcdC5ub2RlcyhncmFwaC5ub2Rlcylcblx0Ly8gXHRcdC5vbihcInRpY2tcIiwgdGlja2VkKTtcbiAgICAvL1xuXHQvLyBcdHNpbXVsYXRpb24uZm9yY2UoXCJsaW5rXCIpXG5cdC8vIFx0XHQubGlua3MoZ3JhcGgubGlua3MpO1xuXHQvLyBcdGNvbnNvbGUubG9nKGdyYXBoKTtcblx0Ly8gXHRzaW11bGF0aW9uLnN0b3AoKTtcblx0Ly8gXHRub2RlID0gbm9kZS5kYXRhKGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KTtcblx0Ly8gXHR2YXIgbm9kZUV4aXQgPSBub2RlLmV4aXQoKTtcblx0Ly8gXHQvLyBub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgXCJyZWRcIik7XG5cdC8vIFx0dmFyIHQgPSBkMy50cmFuc2l0aW9uKCd1cGRhdGVEYXRhJykuZHVyYXRpb24oNTAwMCk7XG5cdC8vIFx0bm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuYXR0cihcInJcIiwgMCk7XG5cdC8vIFx0bm9kZSA9IGVudGVyTm9kZXMobm9kZSwgdCk7XG5cdC8vIFx0Ly8gbm9kZSA9IG5vZGUuY2FsbChlbnRlck5vZGVzLCB0KTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHRsaW5rID0gbGlua1xuXHQvLyBcdFx0LmRhdGEoZ3JhcGgubGlua3MsIGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdFx0Ly8gZC5pZCA9IGdldExpbmtJZChkKTtcblx0Ly8gXHRcdFx0cmV0dXJuIGQuaWQ7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR2YXIgbGlua0V4aXQgPSBsaW5rLmV4aXQoKTtcblx0Ly8gXHRsaW5rRXhpdC5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAwKS5yZW1vdmUoKTtcblx0Ly8gXHQvLyBsaW5rRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRsaW5rID0gZW50ZXJMaW5rcyhsaW5rLCB0KTtcblx0Ly8gXHRzaW11bGF0aW9uLm9uKFwidGlja1wiKS5jYWxsKCk7XG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdHQuZW5kKCkudGhlbihmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRub2RlRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvblxuXHQvLyBcdFx0XHQvLyAuYWxwaGFEZWNheSguMDAwNSlcblx0Ly8gXHRcdFx0Ly8gLnZlbG9jaXR5RGVjYXkoMC45KVxuXHQvLyBcdFx0XHQvLyAuYWxwaGEoLjEpXG5cdC8vIFx0XHRcdC8vIC5yZXN0YXJ0KCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0XG5cdC8vIFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0Ly8gXHQvLyB9LCA0MDAwKTtcblx0Ly8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGlwcHlfanNfXzsiXSwic291cmNlUm9vdCI6IiJ9