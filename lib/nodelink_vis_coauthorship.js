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

    if (d.hasOwnProperty('affil_name') && d.affil_name.length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvY29hdXRob3JzaGlwX3Rvb2x0aXBzLmpzIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRpcHB5LmpzXCIsXCJjb21tb25qczJcIjpcInRpcHB5LmpzXCIsXCJhbWRcIjpcInRpcHB5LmpzXCIsXCJyb290XCI6XCJ0aXBweVwifSJdLCJuYW1lcyI6WyIkIiwiYWN0aXZhdGVUb29sdGlwcyIsInNldERlZmF1bHRzIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImZpbGxIdG1sIiwiJHRlbXBsYXRlIiwiY2xhc3NuYW1lIiwidGV4dENvbnRlbnQiLCJmaW5kIiwidGV4dCIsImQzIiwic2VsZWN0QWxsIiwiZWFjaCIsImQiLCIkdG9vbHRpcE5vZGUiLCJjbG9uZSIsImF0dHIiLCJoYXNPd25Qcm9wZXJ0eSIsInRpcHB5SW5zdGFuY2UiLCJfdGlwcHkiLCJhdXRob3JfbmFtZSIsImFmZmlsX25hbWUiLCJsZW5ndGgiLCJoaWRlIiwiJHBhcGVyVGl0bGVzIiwicGFwZXJzIiwic29ydCIsImEiLCJiIiwiYXNjZW5kaW5nIiwidGl0bGUiLCJpIiwibGVuIiwiJGxpc3RJdGVtIiwiYXBwZW5kIiwic2V0Q29udGVudCIsImh0bWwiLCJOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyIsIm9wdHMiLCJkZWZhdWx0cyIsImVsIiwiZGF0YSIsIndpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwiZm9yY2VTdHJlbmd0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsIm1hbnlCb2R5IiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiaW5pdCIsImRyYXciLCJsaW5rIiwiZGlyZWN0ZWQiLCJzb3VyY2UiLCJ0b1N0cmluZyIsInRhcmdldCIsIml0ZW1zIiwic2VwIiwidmFsdWUiLCJhcmd1bWVudHMiLCJzZWxlY3Rpb24iLCJvYmoiLCJncmFwaCIsImdldExpbmtJZCIsInNlbEl0ZW0iLCJzdmciLCJzZWxlY3QiLCJkcmFnc3RhcnRlZCIsImV2ZW50IiwiYWN0aXZlIiwic2ltdWxhdGlvbiIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwieCIsImZ5IiwieSIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbnRlck5vZGVzIiwibm9kZSIsInQiLCJkZWZhdWx0Q29sb3IiLCJzaXplU2NhbGUiLCJkb21haW4iLCJleHRlbnQiLCJub2RlcyIsImZsb3ciLCJub2RlRW50ZXIiLCJlbnRlciIsImNhbGwiLCJkcmFnIiwib24iLCJtZXJnZSIsInJhZGl1cyIsImNvbG9yX2dyb3VwIiwiY2xfdG9wIiwibm9kZUNpcmNsZSIsInRyYW5zaXRpb24iLCJlbnRlckxpbmtzIiwibGlua0VudGVyIiwiTWF0aCIsInNxcnQiLCJ3ZWlnaHQiLCJzdHlsZSIsImZvckVhY2giLCJpZCIsImxpbmtzIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJmb3JjZUxpbmsiLCJmb3JjZUNlbnRlciIsInRpY2tlZCIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJnIiwibWF4IiwibWluIiwicmVzZXRfbGF5b3V0IiwiY2xhc3NlZCIsImNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7OztBQUpBO0FBS0EsSUFBTUEsQ0FBQyxrQkFBUDtlQUVlQyxnQjs7O0FBRWYsZUFBTUMsV0FBTixDQUFrQjtBQUNqQixXQUFTLGNBRFE7QUFFakIsaUJBQWUsS0FGRTtBQUdqQixlQUFhO0FBSEksQ0FBbEI7O0FBS0EsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWpCOztBQUVBLFNBQVNKLGdCQUFULEdBQTRCO0FBQzNCSyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjs7QUFFQSxXQUFTQyxRQUFULENBQWtCQyxTQUFsQixFQUE2QkMsU0FBN0IsRUFBd0NDLFdBQXhDLEVBQXFEO0FBQ3BERixhQUFTLENBQUNHLElBQVYsQ0FBZ0IsTUFBTUYsU0FBdEIsRUFBa0NFLElBQWxDLENBQXdDLG1CQUF4QyxFQUE4REMsSUFBOUQsQ0FBbUVGLFdBQW5FO0FBQ0E7O0FBRURHLElBQUUsQ0FBQ0MsU0FBSCxDQUFhLGNBQWIsRUFBNkJDLElBQTdCLENBQWtDLFVBQVNDLENBQVQsRUFBWTtBQUM3QyxRQUFJQyxZQUFZLEdBQUdsQixDQUFDLENBQUNHLFFBQUQsQ0FBRCxDQUFZZ0IsS0FBWixHQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FBbkI7O0FBQ0EsUUFBSSxLQUFLQyxjQUFMLENBQW9CLFFBQXBCLENBQUosRUFBbUM7QUFDbEMsVUFBSUMsYUFBYSxHQUFHLEtBQUtDLE1BQXpCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBSUQsYUFBYSxHQUFHLG9CQUFNLElBQU4sQ0FBcEI7QUFDQTs7QUFDRGQsWUFBUSxDQUFDVSxZQUFELEVBQWUsYUFBZixFQUE4QkQsQ0FBQyxDQUFDTyxXQUFoQyxDQUFSOztBQUNBLFFBQUlQLENBQUMsQ0FBQ0ksY0FBRixDQUFpQixZQUFqQixLQUFrQ0osQ0FBQyxDQUFDUSxVQUFGLENBQWFDLE1BQW5ELEVBQTJEO0FBQzFEbEIsY0FBUSxDQUFDVSxZQUFELEVBQWUsWUFBZixFQUE2QkQsQ0FBQyxDQUFDUSxVQUEvQixDQUFSO0FBQ0EsS0FGRCxNQUVPO0FBQ05QLGtCQUFZLENBQUNOLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUNlLElBQWpDO0FBQ0EsS0FaNEMsQ0FhN0M7OztBQUNBLFFBQUlDLFlBQVksR0FBR1YsWUFBWSxDQUFDTixJQUFiLENBQW1CLGVBQW5CLEVBQXFDQSxJQUFyQyxDQUEyQyxtQkFBM0MsQ0FBbkI7QUFDQSxRQUFJaUIsTUFBTSxHQUFHWixDQUFDLENBQUNZLE1BQWYsQ0FmNkMsQ0FnQjdDOztBQUNBQSxVQUFNLENBQUNDLElBQVAsQ0FBWSxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUFFLGFBQU9sQixFQUFFLENBQUNtQixTQUFILENBQWFGLENBQUMsQ0FBQ0csS0FBZixFQUFzQkYsQ0FBQyxDQUFDRSxLQUF4QixDQUFQO0FBQXdDLEtBQXJFOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHUCxNQUFNLENBQUNILE1BQTdCLEVBQXFDUyxDQUFDLEdBQUdDLEdBQXpDLEVBQThDRCxDQUFDLEVBQS9DLEVBQW1EO0FBQ2xELFVBQUlFLFNBQVMsR0FBR3JDLENBQUMsQ0FBRSwwQkFBRixDQUFELENBQWdDYSxJQUFoQyxDQUFxQ2dCLE1BQU0sQ0FBQ00sQ0FBRCxDQUFOLENBQVVELEtBQS9DLENBQWhCO0FBQ0FOLGtCQUFZLENBQUNVLE1BQWIsQ0FBcUJELFNBQXJCO0FBQ0E7O0FBQ0RmLGlCQUFhLENBQUNpQixVQUFkLENBQXlCckIsWUFBWSxDQUFDc0IsSUFBYixFQUF6QjtBQUNBLEdBdkJEO0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hERDs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU14QyxDQUFDLGtCQUFQLEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTXlDLHVCOzs7QUFDTCxxQ0FBdUI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3RCLFFBQU1DLFFBQVEsR0FBRztBQUNoQkMsUUFBRSxFQUFFLElBRFk7QUFFaEJDLFVBQUksRUFBRSxJQUZVO0FBR2hCQyxXQUFLLEVBQUUsR0FIUztBQUloQkMsV0FBSyxFQUFFakMsRUFBRSxDQUFDa0MsWUFBSCxDQUFnQmxDLEVBQUUsQ0FBQ21DLGdCQUFuQixDQUpTO0FBS2hCQyxtQkFBYSxFQUFFLENBQUM7QUFMQSxLQUFqQjtBQU9BQyxVQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CVCxRQUFwQixFQUE4QkQsSUFBOUIsRUFSc0IsQ0FRZ0I7O0FBQ3RDLFNBQUtXLEtBQUwsR0FBYSxLQUFLUixJQUFsQjtBQUNBLFNBQUtBLElBQUwsR0FBWSxLQUFLUyxVQUFqQjs7QUFDQSxRQUFJLE9BQU8sS0FBS0MsTUFBWixLQUF1QixXQUEzQixFQUF3QztBQUN2QyxXQUFLQSxNQUFMLEdBQWMsT0FBTyxLQUFLVCxLQUExQjtBQUNBOztBQUNELFNBQUtVLFFBQUwsR0FBZ0IxQyxFQUFFLENBQUMyQyxhQUFILEdBQ1ZDLFFBRFUsQ0FDRCxLQUFLUixhQURKLENBQWhCO0FBRUEsU0FBS1MsSUFBTCxHQUFZLEtBQVo7QUFDQXJELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUs4QyxLQUFqQjs7QUFDQSxRQUFJLEtBQUtULEVBQUwsS0FBWSxJQUFaLElBQW9CLEtBQUtTLEtBQUwsS0FBZSxJQUF2QyxFQUE2QztBQUM1QyxXQUFLTyxJQUFMLENBQVUsS0FBS2hCLEVBQWY7QUFDQSxXQUFLZSxJQUFMLEdBQVksSUFBWjtBQUNBO0FBQ0Q7Ozs7OEJBRVNFLEksRUFBd0I7QUFBQSxVQUFsQkMsUUFBa0IsdUVBQVAsS0FBTztBQUNqQztBQUNBO0FBQ0EsVUFBSUMsTUFBTSxHQUFHRixJQUFJLENBQUNFLE1BQUwsQ0FBWUMsUUFBWixFQUFiO0FBQ0EsVUFBSUMsTUFBTSxHQUFHSixJQUFJLENBQUNJLE1BQUwsQ0FBWUQsUUFBWixFQUFiO0FBQ0EsVUFBSUUsS0FBSyxHQUFHLENBQUNILE1BQUQsRUFBU0UsTUFBVCxDQUFaO0FBQ0EsVUFBSUUsR0FBRyxHQUFHLEtBQVY7O0FBQ0EsVUFBSUwsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3RCSSxhQUFLLENBQUNwQyxJQUFOO0FBQ0E7O0FBQ0QsYUFBT29DLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBV0MsR0FBWCxHQUFpQkQsS0FBSyxDQUFDLENBQUQsQ0FBN0I7QUFDQTs7OytCQUVVRSxLLEVBQU87QUFDakIsVUFBSSxDQUFDQyxTQUFTLENBQUMzQyxNQUFmLEVBQXVCLE9BQU8sS0FBSzJCLEtBQVo7QUFDdkIsV0FBS0EsS0FBTCxHQUFhZSxLQUFiOztBQUNBLFVBQUksS0FBS1QsSUFBTCxLQUFjLEtBQWxCLEVBQXlCO0FBQ3hCLGFBQUtDLElBQUwsQ0FBVSxLQUFLaEIsRUFBZjtBQUNBLGFBQUtlLElBQUwsR0FBWSxJQUFaO0FBQ0EsT0FIRCxNQUdPO0FBQ047QUFDQTtBQUNBckQsZUFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFDQSxPQVZnQixDQVdqQjtBQUNBOzs7QUFDQSxhQUFPLElBQVA7QUFDQTs7O3lCQUVJK0QsUyxFQUFXO0FBQ2YsVUFBSUMsR0FBRyxHQUFHLElBQVY7QUFDQSxVQUFJekIsS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBQ0EsVUFBSVMsTUFBTSxHQUFHLEtBQUtBLE1BQWxCO0FBQ0EsVUFBSWlCLEtBQUssR0FBRyxLQUFLbkIsS0FBakI7QUFDQSxVQUFJRyxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFDQSxVQUFJVCxLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFDQSxVQUFJMEIsU0FBUyxHQUFHLEtBQUtBLFNBQXJCO0FBQ0FILGVBQVMsQ0FBQ3RELElBQVYsQ0FBZSxZQUFXO0FBQ3pCLFlBQUkwRCxPQUFPLEdBQUcsSUFBZDtBQUVBLFlBQUlDLEdBQUcsR0FBRzdELEVBQUUsQ0FBQzhELE1BQUgsQ0FBVUYsT0FBVixFQUFtQnBDLE1BQW5CLENBQTBCLEtBQTFCLEVBQWlDbEIsSUFBakMsQ0FBc0MsT0FBdEMsRUFBK0MwQixLQUEvQyxFQUFzRDFCLElBQXRELENBQTJELFFBQTNELEVBQXFFbUMsTUFBckUsQ0FBVjtBQUNBakQsZUFBTyxDQUFDQyxHQUFSLENBQVlpRSxLQUFaOztBQUVBLGlCQUFTSyxXQUFULENBQXFCNUQsQ0FBckIsRUFBd0I7QUFDdkIsY0FBSSxDQUFDSCxFQUFFLENBQUNnRSxLQUFILENBQVNDLE1BQWQsRUFBc0JDLFVBQVUsQ0FBQ0MsV0FBWCxDQUF1QixHQUF2QixFQUE0QkMsT0FBNUI7QUFDdEJqRSxXQUFDLENBQUNrRSxFQUFGLEdBQU9sRSxDQUFDLENBQUNtRSxDQUFUO0FBQ0FuRSxXQUFDLENBQUNvRSxFQUFGLEdBQU9wRSxDQUFDLENBQUNxRSxDQUFUO0FBQ0E7O0FBRUQsaUJBQVNDLE9BQVQsQ0FBaUJ0RSxDQUFqQixFQUFvQjtBQUNuQkEsV0FBQyxDQUFDa0UsRUFBRixHQUFPckUsRUFBRSxDQUFDZ0UsS0FBSCxDQUFTTSxDQUFoQjtBQUNBbkUsV0FBQyxDQUFDb0UsRUFBRixHQUFPdkUsRUFBRSxDQUFDZ0UsS0FBSCxDQUFTUSxDQUFoQjtBQUNBOztBQUVELGlCQUFTRSxTQUFULENBQW1CdkUsQ0FBbkIsRUFBc0I7QUFDckIsY0FBSSxDQUFDSCxFQUFFLENBQUNnRSxLQUFILENBQVNDLE1BQWQsRUFBc0JDLFVBQVUsQ0FBQ0MsV0FBWCxDQUF1QixDQUF2QjtBQUN0QmhFLFdBQUMsQ0FBQ2tFLEVBQUYsR0FBTyxJQUFQO0FBQ0FsRSxXQUFDLENBQUNvRSxFQUFGLEdBQU8sSUFBUDtBQUNBOztBQUVELGlCQUFTSSxVQUFULENBQW9CQyxJQUFwQixFQUFvQztBQUFBLGNBQVZDLENBQVUsdUVBQU4sSUFBTTtBQUNuQztBQUVBLGNBQUlDLFlBQVksR0FBRzdDLEtBQUssQ0FBQyxDQUFELENBQXhCO0FBRUE4QyxtQkFBUyxDQUFDQyxNQUFWLENBQWlCaEYsRUFBRSxDQUFDaUYsTUFBSCxDQUFVdkIsS0FBSyxDQUFDd0IsS0FBaEIsRUFBdUIsVUFBUy9FLENBQVQsRUFBWTtBQUNuRCxnQkFBSUEsQ0FBQyxDQUFDSSxjQUFGLENBQWlCLE1BQWpCLENBQUosRUFBOEI7QUFDN0IscUJBQU9KLENBQUMsQ0FBQ2dGLElBQVQ7QUFDQSxhQUZELE1BRU87QUFDTixxQkFBTyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVA7QUFDQTtBQUNELFdBTmdCLENBQWpCO0FBT0EzRixpQkFBTyxDQUFDQyxHQUFSLENBQVlzRixTQUFTLENBQUNDLE1BQVYsRUFBWjtBQUdBLGNBQUlJLFNBQVMsR0FBR1IsSUFBSSxDQUFDUyxLQUFMLEdBQWE3RCxNQUFiLENBQW9CLEdBQXBCLEVBQ2hCO0FBRGdCLFdBRWRsQixJQUZjLENBRVQsT0FGUyxFQUVBLE1BRkEsRUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUGUsV0FRZGdGLElBUmMsQ0FRVHRGLEVBQUUsQ0FBQ3VGLElBQUgsR0FDSkMsRUFESSxDQUNELE9BREMsRUFDUXpCLFdBRFIsRUFFSnlCLEVBRkksQ0FFRCxNQUZDLEVBRU9mLE9BRlAsRUFHSmUsRUFISSxDQUdELEtBSEMsRUFHTWQsU0FITixDQVJTLENBQWhCO0FBZUFFLGNBQUksR0FBR0EsSUFBSSxDQUFDYSxLQUFMLENBQVdMLFNBQVgsRUFDTDlFLElBREssQ0FDQSxJQURBLEVBQ00sVUFBU0gsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLENBQUMsQ0FBQ21FLENBQUYsR0FBT3RDLEtBQUssR0FBQyxDQUFQLEdBQVk3QixDQUFDLENBQUNtRSxDQUEzQjtBQUErQixXQURuRCxFQUVMaEUsSUFGSyxDQUVBLElBRkEsRUFFTSxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDcUUsQ0FBRixHQUFPL0IsTUFBTSxHQUFDLENBQVIsR0FBYXRDLENBQUMsQ0FBQ3FFLENBQTVCO0FBQWdDLFdBRnBELEVBR0x0RSxJQUhLLENBR0EsVUFBU0MsQ0FBVCxFQUFZO0FBQ2pCLGdCQUFJQSxDQUFDLENBQUNJLGNBQUYsQ0FBaUIsTUFBakIsQ0FBSixFQUE4QjtBQUM3QkosZUFBQyxDQUFDdUYsTUFBRixHQUFXWCxTQUFTLENBQUM1RSxDQUFDLENBQUNnRixJQUFILENBQXBCO0FBQ0EsYUFGRCxNQUVPO0FBQ05oRixlQUFDLENBQUN1RixNQUFGLEdBQVcsQ0FBWDtBQUNBOztBQUVELGdCQUFJdkYsQ0FBQyxDQUFDSSxjQUFGLENBQWlCLGFBQWpCLENBQUosRUFBcUM7QUFDcENKLGVBQUMsQ0FBQzhCLEtBQUYsR0FBVUEsS0FBSyxDQUFDOUIsQ0FBQyxDQUFDd0YsV0FBSCxDQUFmO0FBQ0EsYUFGRCxNQUVPLElBQUl4RixDQUFDLENBQUNJLGNBQUYsQ0FBaUIsUUFBakIsQ0FBSixFQUFnQztBQUN0Q0osZUFBQyxDQUFDOEIsS0FBRixHQUFVQSxLQUFLLENBQUM5QixDQUFDLENBQUN5RixNQUFILENBQWY7QUFDQSxhQUZNLE1BRUE7QUFDTnpGLGVBQUMsQ0FBQzhCLEtBQUYsR0FBVTZDLFlBQVY7QUFDQTtBQUNELFdBakJLLENBQVA7QUFtQkEsY0FBSWUsVUFBVSxHQUFHVCxTQUFTLENBQ3hCOUUsSUFEZSxDQUNWLFdBRFUsRUFDRyxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBTyxlQUFlQSxDQUFDLENBQUNtRSxDQUFqQixHQUFxQixHQUFyQixHQUEyQm5FLENBQUMsQ0FBQ3FFLENBQTdCLEdBQWlDLEdBQXhDO0FBQThDLFdBRC9ELEVBRWZoRCxNQUZlLENBRVIsUUFGUSxFQUdoQjtBQUNBO0FBSmdCLFdBS2ZsQixJQUxlLENBS1YsTUFMVSxFQUtGLFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPQSxDQUFDLENBQUM4QixLQUFUO0FBQWlCLFdBTDdCLEVBTWYzQixJQU5lLENBTVYsR0FOVSxFQU1MLENBTkssQ0FBakI7O0FBUUEsY0FBSXVFLENBQUMsS0FBSyxJQUFWLEVBQWdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQUQsZ0JBQUksQ0FDRjNFLFNBREYsQ0FDWSxRQURaLEVBQ3NCNkYsVUFEdEIsQ0FDaUNqQixDQURqQyxFQUVFdkUsSUFGRixDQUVPLEdBRlAsRUFFWSxVQUFTSCxDQUFULEVBQVk7QUFDdEIscUJBQU9BLENBQUMsQ0FBQ3VGLE1BQVQ7QUFDQSxhQUpGLEVBS0E7QUFMQSxhQU1FcEYsSUFORixDQU1PLE1BTlAsRUFNZSxVQUFTSCxDQUFULEVBQVk7QUFDekIscUJBQU9BLENBQUMsQ0FBQzhCLEtBQVQ7QUFDQSxhQVJGO0FBU0EsV0FkRCxNQWNPO0FBRU4yQyxnQkFBSSxDQUFDM0UsU0FBTCxDQUFlLFFBQWYsRUFDRUssSUFERixDQUNPLEdBRFAsRUFDWSxVQUFTSCxDQUFULEVBQVk7QUFDdEIscUJBQU9BLENBQUMsQ0FBQ3VGLE1BQVQ7QUFDQSxhQUhGLEVBSUE7QUFKQSxhQUtFcEYsSUFMRixDQUtPLE1BTFAsRUFLZSxVQUFTSCxDQUFULEVBQVk7QUFDekIscUJBQU9BLENBQUMsQ0FBQzhCLEtBQVQ7QUFDQSxhQVBGO0FBUUE7O0FBRUQsaUJBQU8yQyxJQUFQO0FBQ0E7O0FBRUQsaUJBQVNtQixVQUFULENBQW9CaEQsSUFBcEIsRUFBb0M7QUFBQSxjQUFWOEIsQ0FBVSx1RUFBTixJQUFNO0FBQ25DO0FBR0EsY0FBSW1CLFNBQVMsR0FBR2pELElBQUksQ0FBQ3NDLEtBQUwsR0FBYTdELE1BQWIsQ0FBb0IsTUFBcEIsRUFDZGxCLElBRGMsQ0FDVCxJQURTLEVBQ0gsVUFBU0gsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLENBQUMsQ0FBQzhDLE1BQUYsQ0FBU3FCLENBQWhCO0FBQW9CLFdBRC9CLEVBRWRoRSxJQUZjLENBRVQsSUFGUyxFQUVILFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPQSxDQUFDLENBQUM4QyxNQUFGLENBQVN1QixDQUFoQjtBQUFvQixXQUYvQixFQUdkbEUsSUFIYyxDQUdULElBSFMsRUFHSCxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDZ0QsTUFBRixDQUFTbUIsQ0FBaEI7QUFBb0IsV0FIL0IsRUFJZGhFLElBSmMsQ0FJVCxJQUpTLEVBSUgsVUFBU0gsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLENBQUMsQ0FBQ2dELE1BQUYsQ0FBU3FCLENBQWhCO0FBQW9CLFdBSi9CLEVBS2RsRSxJQUxjLENBS1QsT0FMUyxFQUtBLE1BTEEsQ0FBaEI7QUFNQXlDLGNBQUksR0FBR0EsSUFBSSxDQUFDMEMsS0FBTCxDQUFXTyxTQUFYLENBQVA7QUFDQWpELGNBQUksQ0FDRHpDLElBREgsQ0FDUSxjQURSLEVBQ3dCLFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPOEYsSUFBSSxDQUFDQyxJQUFMLENBQVUvRixDQUFDLENBQUNnRyxNQUFaLENBQVA7QUFBNkIsV0FEbkU7O0FBR0EsY0FBSXRCLENBQUMsS0FBSyxJQUFWLEVBQWdCO0FBQ2ZtQixxQkFBUyxDQUNSO0FBRFEsYUFFUEksS0FGRixDQUVRLFFBRlIsRUFFa0IsT0FGbEIsRUFEZSxDQUlmO0FBQ0E7QUFDQSxXQU5ELE1BTU8sQ0FDTjtBQUNBOztBQUVELGlCQUFPckQsSUFBUDtBQUNBOztBQUdEVyxhQUFLLENBQUN3QixLQUFOLENBQVltQixPQUFaLENBQW9CLFVBQVNsRyxDQUFULEVBQVk7QUFDL0JBLFdBQUMsQ0FBQ21HLEVBQUYsR0FBT25HLENBQUMsQ0FBQ21HLEVBQUYsQ0FBS3BELFFBQUwsRUFBUDtBQUNBLFNBRkQ7QUFHQVEsYUFBSyxDQUFDNkMsS0FBTixDQUFZRixPQUFaLENBQW9CLFVBQVNsRyxDQUFULEVBQVk7QUFDL0JBLFdBQUMsQ0FBQ21HLEVBQUYsR0FBTzNDLFNBQVMsQ0FBQ3hELENBQUQsRUFBSXVELEtBQUssQ0FBQ1YsUUFBVixDQUFoQjtBQUNBLFNBRkQ7QUFJQSxZQUFJa0IsVUFBVSxHQUFHbEUsRUFBRSxDQUFDd0csZUFBSCxHQUNmQyxLQURlLENBQ1QsTUFEUyxFQUNEekcsRUFBRSxDQUFDMEcsU0FBSCxHQUFlSixFQUFmLENBQWtCLFVBQVNuRyxDQUFULEVBQVk7QUFBRSxpQkFBT0EsQ0FBQyxDQUFDbUcsRUFBVDtBQUFjLFNBQTlDLENBREMsRUFFaEI7QUFGZ0IsU0FHZkcsS0FIZSxDQUdULFFBSFMsRUFHQy9ELFFBSEQsRUFJZitELEtBSmUsQ0FJVCxRQUpTLEVBSUN6RyxFQUFFLENBQUMyRyxXQUFILENBQWUzRSxLQUFLLEdBQUcsQ0FBdkIsRUFBMEJTLE1BQU0sR0FBRyxDQUFuQyxDQUpELENBQWpCO0FBTUN5QixrQkFBVSxDQUNSZ0IsS0FERixDQUNReEIsS0FBSyxDQUFDd0IsS0FEZCxFQUVFTSxFQUZGLENBRUssTUFGTCxFQUVhb0IsTUFGYjtBQUlBMUMsa0JBQVUsQ0FBQ3VDLEtBQVgsQ0FBaUIsTUFBakIsRUFDRUYsS0FERixDQUNRN0MsS0FBSyxDQUFDNkMsS0FEZDtBQUdBLGFBQUtyQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVELFlBQUlhLFNBQVMsR0FBRy9FLEVBQUUsQ0FBQzZHLFdBQUgsR0FDZEMsS0FEYyxDQUNSLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FEUSxDQUFoQjtBQUlBLFlBQUlDLENBQUMsR0FBR2xELEdBQUcsQ0FBQ3JDLE1BQUosQ0FBVyxHQUFYLENBQVI7QUFFQyxZQUFJdUIsSUFBSSxHQUFHZ0UsQ0FBQyxDQUFDdkYsTUFBRixDQUFTLEdBQVQsRUFDVGxCLElBRFMsQ0FDSixPQURJLEVBQ0ssT0FETCxFQUVaO0FBRlksU0FHWEwsU0FIVyxDQUdELE9BSEMsQ0FBWDtBQUtEOEMsWUFBSSxHQUFHQSxJQUFJLENBQUNoQixJQUFMLENBQVUyQixLQUFLLENBQUM2QyxLQUFoQixFQUF1QixVQUFTcEcsQ0FBVCxFQUFZO0FBQ3pDLGlCQUFPQSxDQUFDLENBQUNtRyxFQUFUO0FBQ0EsU0FGTSxDQUFQO0FBSUMsWUFBSTFCLElBQUksR0FBR21DLENBQUMsQ0FBQ3ZGLE1BQUYsQ0FBUyxHQUFULEVBQ1RsQixJQURTLENBQ0osT0FESSxFQUNLLE9BREwsRUFFWEwsU0FGVyxDQUVELE9BRkMsQ0FBWDtBQUlEMkUsWUFBSSxHQUFHQSxJQUFJLENBQUM3QyxJQUFMLENBQVUyQixLQUFLLENBQUN3QixLQUFoQixFQUF1QixVQUFTL0UsQ0FBVCxFQUFZO0FBQUUsaUJBQU9BLENBQUMsQ0FBQ21HLEVBQVQ7QUFBYyxTQUFuRCxDQUFQO0FBRUExQixZQUFJLEdBQUdELFVBQVUsQ0FBQ0MsSUFBRCxDQUFqQjtBQUNBN0IsWUFBSSxHQUFHZ0QsVUFBVSxDQUFDaEQsSUFBRCxDQUFqQixDQXJMeUIsQ0F3THpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlDLGlCQUFTNkQsTUFBVCxHQUFrQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FoQyxjQUFJLENBQ0Z0RSxJQURGLENBQ08sSUFEUCxFQUNhLFVBQVNILENBQVQsRUFBWTtBQUN2QkEsYUFBQyxDQUFDbUUsQ0FBRixHQUFNMkIsSUFBSSxDQUFDZSxHQUFMLENBQVM3RyxDQUFDLENBQUN1RixNQUFYLEVBQW1CTyxJQUFJLENBQUNnQixHQUFMLENBQVNqRixLQUFLLEdBQUc3QixDQUFDLENBQUN1RixNQUFuQixFQUEyQnZGLENBQUMsQ0FBQ21FLENBQTdCLENBQW5CLENBQU47QUFDQSxtQkFBT25FLENBQUMsQ0FBQ21FLENBQVQ7QUFBYSxXQUhmLEVBSUVoRSxJQUpGLENBSU8sSUFKUCxFQUlhLFVBQVNILENBQVQsRUFBWTtBQUN2QkEsYUFBQyxDQUFDcUUsQ0FBRixHQUFNeUIsSUFBSSxDQUFDZSxHQUFMLENBQVM3RyxDQUFDLENBQUN1RixNQUFYLEVBQW1CTyxJQUFJLENBQUNnQixHQUFMLENBQVNqRixLQUFLLEdBQUc3QixDQUFDLENBQUN1RixNQUFuQixFQUEyQnZGLENBQUMsQ0FBQ3FFLENBQTdCLENBQW5CLENBQU47QUFDQSxtQkFBT3JFLENBQUMsQ0FBQ3FFLENBQVQ7QUFBYSxXQU5mLEVBT0VsRSxJQVBGLENBT08sV0FQUCxFQU9vQixVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBTyxlQUFlQSxDQUFDLENBQUNtRSxDQUFqQixHQUFxQixHQUFyQixHQUEyQm5FLENBQUMsQ0FBQ3FFLENBQTdCLEdBQWlDLEdBQXhDO0FBQThDLFdBUGhGO0FBU0F6QixjQUFJLENBQ0g7QUFERyxXQUVGekMsSUFGRixDQUVPLElBRlAsRUFFYSxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDOEMsTUFBRixDQUFTcUIsQ0FBaEI7QUFBb0IsV0FGL0MsRUFHRWhFLElBSEYsQ0FHTyxJQUhQLEVBR2EsVUFBU0gsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLENBQUMsQ0FBQzhDLE1BQUYsQ0FBU3VCLENBQWhCO0FBQW9CLFdBSC9DLEVBSUVsRSxJQUpGLENBSU8sSUFKUCxFQUlhLFVBQVNILENBQVQsRUFBWTtBQUFFLG1CQUFPQSxDQUFDLENBQUNnRCxNQUFGLENBQVNtQixDQUFoQjtBQUFvQixXQUovQyxFQUtFaEUsSUFMRixDQUtPLElBTFAsRUFLYSxVQUFTSCxDQUFULEVBQVk7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDZ0QsTUFBRixDQUFTcUIsQ0FBaEI7QUFBb0IsV0FML0M7QUFNRTs7QUFFRixpQkFBUzBDLFlBQVQsR0FBd0I7QUFDdkJ0QyxjQUFJLENBQUN1QyxPQUFMLENBQWEsT0FBYixFQUFzQixLQUF0QjtBQUNBdkMsY0FBSSxDQUFDM0UsU0FBTCxDQUFlLE1BQWYsRUFBdUJtRyxLQUF2QixDQUE2QixTQUE3QixFQUF3QyxNQUF4QyxFQUZ1QixDQUd2QjtBQUNBOztBQUNBckQsY0FBSSxDQUFDcUQsS0FBTCxDQUFXLFNBQVgsRUFBc0IsQ0FBdEI7QUFDQWxILFdBQUMsQ0FBRSxlQUFGLENBQUQsQ0FBcUJrSSxHQUFyQixDQUEwQixZQUExQixFQUF5QyxRQUF6QztBQUNBOztBQUNEdkQsV0FBRyxDQUFDMkIsRUFBSixDQUFPLE9BQVAsRUFBZ0IwQixZQUFoQixFQWhQeUIsQ0FrUHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsT0F6UkQ7QUEwUkQsYUFBTyxJQUFQO0FBQ0MsSyxDQUVEO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7ZUFHY3ZGLHVCOzs7Ozs7Ozs7Ozs7O0FDOVpmLGdEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6Im5vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcInRpcHB5LmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcFwiLCBbXCJkM1wiLCBcImpRdWVyeVwiLCBcInRpcHB5LmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcInRpcHB5LmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJub2RlbGlua192aXNfY29hdXRob3JzaGlwXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJ0aXBweVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RpcHB5X2pzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG4vLyBjb25zdCB0aXBweSA9IHJlcXVpcmUoJy4uL25vZGVfbW9kdWxlcy90aXBweS5qcy8nKTtcbmltcG9ydCAndGlwcHkuanMvdGhlbWVzL2xpZ2h0LWJvcmRlci5jc3MnO1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0galF1ZXJ5O1xuXG5leHBvcnQgZGVmYXVsdCBhY3RpdmF0ZVRvb2x0aXBzO1xuXG50aXBweS5zZXREZWZhdWx0cyh7XG5cdCd0aGVtZSc6ICdsaWdodC1ib3JkZXInLFxuXHQnYW5pbWF0ZUZpbGwnOiBmYWxzZSxcblx0J2FuaW1hdGlvbic6ICdmYWRlJyxcbn0pO1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9vbHRpcC10ZW1wbGF0ZScpO1xuXG5mdW5jdGlvbiBhY3RpdmF0ZVRvb2x0aXBzKCkge1xuXHRjb25zb2xlLmxvZygnYWN0aXZhdGVUb29sdGlwcygpJyk7XG5cblx0ZnVuY3Rpb24gZmlsbEh0bWwoJHRlbXBsYXRlLCBjbGFzc25hbWUsIHRleHRDb250ZW50KSB7XG5cdFx0JHRlbXBsYXRlLmZpbmQoICcuJyArIGNsYXNzbmFtZSApLmZpbmQoICcudGVtcGxhdGUtY29udGVudCcgKS50ZXh0KHRleHRDb250ZW50KTtcblx0fVxuXG5cdGQzLnNlbGVjdEFsbCgnLm5vZGUgY2lyY2xlJykuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0dmFyICR0b29sdGlwTm9kZSA9ICQodGVtcGxhdGUpLmNsb25lKCkuYXR0cihcImlkXCIsIG51bGwpO1xuXHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KFwiX3RpcHB5XCIpKSB7XG5cdFx0XHR2YXIgdGlwcHlJbnN0YW5jZSA9IHRoaXMuX3RpcHB5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgdGlwcHlJbnN0YW5jZSA9IHRpcHB5KHRoaXMpO1xuXHRcdH1cblx0XHRmaWxsSHRtbCgkdG9vbHRpcE5vZGUsICdhdXRob3JfbmFtZScsIGQuYXV0aG9yX25hbWUpO1xuXHRcdGlmIChkLmhhc093blByb3BlcnR5KCdhZmZpbF9uYW1lJykgJiYgZC5hZmZpbF9uYW1lLmxlbmd0aCkge1xuXHRcdFx0ZmlsbEh0bWwoJHRvb2x0aXBOb2RlLCAnYWZmaWxfbmFtZScsIGQuYWZmaWxfbmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b29sdGlwTm9kZS5maW5kKCcuYWZmaWxfbmFtZScpLmhpZGUoKTtcblx0XHR9XG5cdFx0Ly8gaWYgKGQuaGFzT3duUHJvcGVydHkoJ2NsX2JvdHRvbScpKSBmaWxsSHRtbCgkdG9vbHRpcE5vZGUsICdjbHVzdGVyX2lkJywgZC5jbF9ib3R0b20pO1xuXHRcdHZhciAkcGFwZXJUaXRsZXMgPSAkdG9vbHRpcE5vZGUuZmluZCggJy5wYXBlcl90aXRsZXMnICkuZmluZCggJy50ZW1wbGF0ZS1jb250ZW50JyApO1xuXHRcdHZhciBwYXBlcnMgPSBkLnBhcGVycztcblx0XHQvLyBzb3J0IHBhcGVycyBhbHBoYWJldGljYWxseVxuXHRcdHBhcGVycy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGQzLmFzY2VuZGluZyhhLnRpdGxlLCBiLnRpdGxlKTsgfSk7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyICRsaXN0SXRlbSA9ICQoICc8bGkgY2xhc3M9XCJwYXBlcl90aXRsZVwiPicgKS50ZXh0KHBhcGVyc1tpXS50aXRsZSk7XG5cdFx0XHQkcGFwZXJUaXRsZXMuYXBwZW5kKCAkbGlzdEl0ZW0gKTtcblx0XHR9XG5cdFx0dGlwcHlJbnN0YW5jZS5zZXRDb250ZW50KCR0b29sdGlwTm9kZS5odG1sKCkpO1xuXHR9KTtcbn1cbiIsImltcG9ydCBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyBmcm9tICcuL3Zpcy5qcyc7XG5pbXBvcnQgYWN0aXZhdGVUb29sdGlwcyBmcm9tICcuL2NvYXV0aG9yc2hpcF90b29sdGlwcy5qcyc7XG5leHBvcnQgeyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcywgYWN0aXZhdGVUb29sdGlwcyB9O1xuXG4iLCIvLyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpc1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0galF1ZXJ5O1xuXG5cblxuLy8gcmV1c2FibGUgY2hhcnQgcGF0dGVybiBpbnNwaXJlZCBieTpcbi8vIGh0dHBzOi8vYm9zdC5vY2tzLm9yZy9taWtlL2NoYXJ0L1xuLy8gYW5kXG4vLyBodHRwczovL3d3dy50b3B0YWwuY29tL2QzLWpzL3Rvd2FyZHMtcmV1c2FibGUtZDMtanMtY2hhcnRzXG5jbGFzcyBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyB7XG5cdGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdFx0ZWw6IG51bGwsXG5cdFx0XHRkYXRhOiBudWxsLFxuXHRcdFx0d2lkdGg6IDk2MCxcblx0XHRcdGNvbG9yOiBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCksXG5cdFx0XHRmb3JjZVN0cmVuZ3RoOiAtMixcblx0XHR9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdHMpOyAgLy8gb3B0cyB3aWxsIG92ZXJ3cml0ZSBkZWZhdWx0c1xuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGE7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy51cGRhdGVEYXRhO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IC42MjUgKiB0aGlzLndpZHRoO1xuXHRcdH1cblx0XHR0aGlzLm1hbnlCb2R5ID0gZDMuZm9yY2VNYW55Qm9keSgpXG5cdFx0XHRcdFx0XHRcdC5zdHJlbmd0aCh0aGlzLmZvcmNlU3RyZW5ndGgpO1xuXHRcdHRoaXMuaW5pdCA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuX2RhdGEpO1xuXHRcdGlmICh0aGlzLmVsICE9PSBudWxsICYmIHRoaXMuX2RhdGEgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TGlua0lkKGxpbmssIGRpcmVjdGVkID0gZmFsc2UpIHtcblx0XHQvLyBsaW5rIElEIHdpbGwgYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIHNvdXJjZSBJRCBhbmQgdGFyZ2V0IElELCBzZXBhcmF0ZWQgYnkgXCItJi1cIlxuXHRcdC8vIElmIHRoZSBncmFwaCBpcyB1bmRpcmVjdGVkLCB0aGUgSURzIHdpbGwgYmUgc29ydGVkIEFMUEhBQkVUSUNBTExZIHVzaW5nIHRoZSBzdHJpbmcgdmFsdWVzIG9mIHRoZSBJRFxuXHRcdHZhciBzb3VyY2UgPSBsaW5rLnNvdXJjZS50b1N0cmluZygpO1xuXHRcdHZhciB0YXJnZXQgPSBsaW5rLnRhcmdldC50b1N0cmluZygpO1xuXHRcdHZhciBpdGVtcyA9IFtzb3VyY2UsIHRhcmdldF07XG5cdFx0dmFyIHNlcCA9IFwiLSYtXCI7XG5cdFx0aWYgKGRpcmVjdGVkID09PSB0cnVlKSB7XG5cdFx0XHRpdGVtcy5zb3J0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBpdGVtc1swXSArIHNlcCArIGl0ZW1zWzFdO1xuXHR9XG5cblx0dXBkYXRlRGF0YSh2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2RhdGE7XG5cdFx0dGhpcy5fZGF0YSA9IHZhbHVlO1xuXHRcdGlmICh0aGlzLmluaXQgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGlzLnVwZGF0ZURhdGEoKTtcblx0XHRcdC8vIE5PVCBJTVBMRU1FTlRFRFxuXHRcdFx0Y29uc29sZS5sb2coXCJVUERBVElORyBEQVRBIE5PVCBZRVQgSU1QTEVNRU5URURcIik7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1cGRhdGVEYXRhKTtcblx0XHQvLyBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRkcmF3KHNlbGVjdGlvbikge1xuXHRcdHZhciBvYmogPSB0aGlzO1xuXHRcdHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cdFx0dmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXHRcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdFx0dmFyIG1hbnlCb2R5ID0gdGhpcy5tYW55Qm9keTtcblx0XHR2YXIgY29sb3IgPSB0aGlzLmNvbG9yO1xuXHRcdHZhciBnZXRMaW5rSWQgPSB0aGlzLmdldExpbmtJZDtcblx0XHRzZWxlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxJdGVtID0gdGhpcztcblxuXHRcdFx0dmFyIHN2ZyA9IGQzLnNlbGVjdChzZWxJdGVtKS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG5cdFx0XHRjb25zb2xlLmxvZyhncmFwaCk7XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcblx0XHRcdFx0aWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG5cdFx0XHRcdGQuZnggPSBkLng7XG5cdFx0XHRcdGQuZnkgPSBkLnk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuXHRcdFx0XHRkLmZ4ID0gZDMuZXZlbnQueDtcblx0XHRcdFx0ZC5meSA9IGQzLmV2ZW50Lnk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG5cdFx0XHRcdGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuXHRcdFx0XHRkLmZ4ID0gbnVsbDtcblx0XHRcdFx0ZC5meSA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVudGVyTm9kZXMobm9kZSwgdCA9IG51bGwpIHtcblx0XHRcdFx0Ly8gcGFzcyBpbiB0aGUgc2VsZWN0aW9uIGZvciBlbnRlcmluZyBub2Rlc1xuXG5cdFx0XHRcdHZhciBkZWZhdWx0Q29sb3IgPSBjb2xvcigwKTtcblxuXHRcdFx0XHRzaXplU2NhbGUuZG9tYWluKGQzLmV4dGVudChncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KCdmbG93JykpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkLmZsb3c7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBbNSw1XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzaXplU2NhbGUuZG9tYWluKCkpO1xuXG5cblx0XHRcdFx0dmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwiclwiLCA1KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0dmFyIHR4ID0gKHdpZHRoLzIpICsgZC54O1xuXHRcdFx0XHRcdC8vIFx0dmFyIHR5ID0gKGhlaWdodC8yKSArIGQueTtcblx0XHRcdFx0XHQvLyBcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIHR4ICsgXCIsXCIgKyB0eSArIFwiKVwiO1xuXHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0LmNhbGwoZDMuZHJhZygpXG5cdFx0XHRcdFx0XHQub24oXCJzdGFydFwiLCBkcmFnc3RhcnRlZClcblx0XHRcdFx0XHRcdC5vbihcImRyYWdcIiwgZHJhZ2dlZClcblx0XHRcdFx0XHRcdC5vbihcImVuZFwiLCBkcmFnZW5kZWQpKTtcblxuXG5cblx0XHRcdFx0bm9kZSA9IG5vZGUubWVyZ2Uobm9kZUVudGVyKVxuXHRcdFx0XHRcdC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54ID0gKHdpZHRoLzIpICsgZC54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ID0gKGhlaWdodC8yKSArIGQueTsgfSlcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eSgnZmxvdycpKSB7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gc2l6ZVNjYWxlKGQuZmxvdyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IDU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KFwiY29sb3JfZ3JvdXBcIikpIHtcblx0XHRcdFx0XHRcdFx0ZC5jb2xvciA9IGNvbG9yKGQuY29sb3JfZ3JvdXApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkLmhhc093blByb3BlcnR5KFwiY2xfdG9wXCIpKSB7XG5cdFx0XHRcdFx0XHRcdGQuY29sb3IgPSBjb2xvcihkLmNsX3RvcCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkLmNvbG9yID0gZGVmYXVsdENvbG9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHZhciBub2RlQ2lyY2xlID0gbm9kZUVudGVyXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KVxuXHRcdFx0XHRcdC5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdFx0XHQvLyAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3I7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApO1xuXG5cdFx0XHRcdGlmICh0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gbm9kZUVudGVyLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0ZC54ID0gd2lkdGgvMjtcblx0XHRcdFx0XHQvLyBcdGQueSA9IGhlaWdodC8yO1xuXHRcdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHRcdG5vZGVcblx0XHRcdFx0XHRcdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikudHJhbnNpdGlvbih0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnID0gY29sb3IoZC5jbF90b3ApOyB9KTtcblx0XHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLmNvbG9yO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRub2RlLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnID0gY29sb3IoZC5jbF90b3ApOyB9KTtcblx0XHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLmNvbG9yO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZW50ZXJMaW5rcyhsaW5rLCB0ID0gbnVsbCkge1xuXHRcdFx0XHQvLyBwYXNzIGluIHRoZSBzZWxlY3Rpb24gZm9yIGVudGVyaW5nIGxpbmtzXG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcblx0XHRcdFx0XHQuYXR0cihcIngyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpO1xuXHRcdFx0XHRsaW5rID0gbGluay5tZXJnZShsaW5rRW50ZXIpO1xuXHRcdFx0XHRsaW5rXG5cdFx0XHRcdCAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gTWF0aC5zcXJ0KGQud2VpZ2h0KTsgfSk7XG5cblx0XHRcdFx0aWYgKHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRsaW5rRW50ZXJcblx0XHRcdFx0XHRcdC8vIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblx0XHRcdFx0XHRcdC5zdHlsZShcInN0cm9rZVwiLCBcImdyZWVuXCIpXG5cdFx0XHRcdFx0Ly8gbGlua0VudGVyLnRyYW5zaXRpb24odClcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBsaW5rO1xuXHRcdFx0fVxuXG5cblx0XHRcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHRcdFx0fSk7XG5cdFx0XHRncmFwaC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuXHRcdFx0XHQuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpLmlkKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pKVxuXHRcdFx0XHQvLyAuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpKVxuXHRcdFx0XHQuZm9yY2UoXCJjaGFyZ2VcIiwgbWFueUJvZHkpXG5cdFx0XHRcdC5mb3JjZShcImNlbnRlclwiLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuXHRcdCAgc2ltdWxhdGlvblxuXHRcdFx0ICAubm9kZXMoZ3JhcGgubm9kZXMpXG5cdFx0XHQgIC5vbihcInRpY2tcIiwgdGlja2VkKTtcblxuXHRcdCAgc2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0XHRcdCAgLmxpbmtzKGdyYXBoLmxpbmtzKTtcblxuXHRcdCAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcblxuXHRcdFx0dmFyIHNpemVTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcblx0XHRcdFx0LnJhbmdlKFs0LCAxMl0pO1xuXG5cblx0XHRcdHZhciBnID0gc3ZnLmFwcGVuZChcImdcIik7XG5cblx0XHQgIHZhciBsaW5rID0gZy5hcHBlbmQoXCJnXCIpXG5cdFx0XHQgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rc1wiKVxuXHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubGlua1wiKTtcblxuXHRcdFx0bGluayA9IGxpbmsuZGF0YShncmFwaC5saW5rcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRyZXR1cm4gZC5pZDtcblx0XHRcdH0pO1xuXG5cdFx0ICB2YXIgbm9kZSA9IGcuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0ICAuYXR0cihcImNsYXNzXCIsIFwibm9kZXNcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubm9kZVwiKTtcblxuXHRcdFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cblx0XHRcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUpO1xuXHRcdFx0bGluayA9IGVudGVyTGlua3MobGluayk7XG5cblxuXHRcdFx0Ly8gbm9kZUNpcmNsZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG5cdFx0XHQvLyBcdG5vZGUuY2xhc3NlZCgnZm9jdXMnLCBmYWxzZSk7XG5cdFx0XHQvLyBcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0Ly8gXHRub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC4xKTtcblx0XHRcdC8vIFx0bGluay5zdHlsZShcIm9wYWNpdHlcIiwgLjEpO1xuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50X2lkcyA9IGdyYXBoLmdyYXBoLmNvbm5lY3RlZF9jb21wb25lbnRzW2QuY29tcG9uZW50XTtcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudCA9IG5vZGUuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gY29tcG9uZW50X2lkcy5pbmNsdWRlcyhkLmlkKTsgfSk7XG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRMaW5rID0gbGluay5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBjb21wb25lbnRfaWRzLmluY2x1ZGVzKGQuc291cmNlLmlkKTt9KVxuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50Q29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5jbGFzc2VkKFwiZm9jdXNcIiwgdHJ1ZSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29tcG9uZW50Q29sb3IoZC5jbF9ib3R0b20pOyB9KVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTsgIC8vIHNob3cgdGhlc2UgbGFiZWxzXG5cdFx0XHQvLyBcdGNvbXBvbmVudExpbmsuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0Ly8gXHRcblx0XHRcdC8vIFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAndmlzaWJsZScgKTtcblx0XHRcdC8vIFx0YXBwbHlSYWRpb1NlbGVjdGlvbigpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0ZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gfSk7XG5cblxuXG5cdFx0ICBmdW5jdGlvbiB0aWNrZWQoKSB7XG5cdFx0XHQvLyBub2RlXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pO1xuXHRcdFx0Ly8gYWRkIGJvdW5kaW5nIGJveFxuXHRcdFx0Ly8gICBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjk0OTJcblx0XHRcdG5vZGVcblx0XHRcdFx0LmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IFxuXHRcdFx0XHRcdGQueCA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih3aWR0aCAtIGQucmFkaXVzLCBkLngpKTtcblx0XHRcdFx0XHRyZXR1cm4gZC54OyB9KVxuXHRcdFx0XHQuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0ZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHdpZHRoIC0gZC5yYWRpdXMsIGQueSkpO1xuXHRcdFx0XHRcdHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSk7XG5cblx0XHRcdGxpbmtcblx0XHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwieDJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcblx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcblx0XHQgIH1cblxuXHRcdFx0ZnVuY3Rpb24gcmVzZXRfbGF5b3V0KCkge1xuXHRcdFx0XHRub2RlLmNsYXNzZWQoXCJmb2N1c1wiLCBmYWxzZSk7XG5cdFx0XHRcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHQvLyBub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZzsgfSlcblx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHRsaW5rLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAnaGlkZGVuJyApO1xuXHRcdFx0fVxuXHRcdFx0c3ZnLm9uKFwiY2xpY2tcIiwgcmVzZXRfbGF5b3V0KTtcblxuXHRcdFx0Ly8gVE9ETyB0aGlzIGlzIGJyb2tlbi4gZml4IGl0LlxuXHRcdFx0Ly8gdmFyIGZ1c2UgPSBuZXcgRnVzZShncmFwaC5ub2RlcywgZnVzZU9wdGlvbnMpO1xuXHRcdFx0Ly8gdmFyIHJlc3VsdCA9IGZ1c2Uuc2VhcmNoKFwiZWhsb3dcIik7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0Ly8gJCggJyN0ZXh0U2VhcmNoJyApLm9uKCAnaW5wdXQnLCBmdXNlU2VsZWN0ICk7XG5cdFx0XHQvLyBmdW5jdGlvbiBmdXNlU2VsZWN0KCkge1xuXHRcdFx0Ly8gXHQvLyByZXNldCBub2RlIHNpemVzIGFuZCBzdHlsZXNcblx0XHRcdC8vIFx0ZDMuc2VsZWN0QWxsKFwiLm5vZGUgY2lyY2xlXCIpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDEpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcblx0XHRcdC8vIFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5yYWRpdXM7IH0pO1xuICAgICAgICAgICAgLy9cblx0XHRcdC8vIFx0dmFyICR0aGlzID0gJCggdGhpcyApO1xuXHRcdFx0Ly8gXHR2YXIgcXVlcnkgPSAkdGhpcy52YWwoKTtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJHRoaXMudmFsKCkpO1xuXHRcdFx0Ly8gXHRpZiAocXVlcnkubGVuZ3RoID4gMykge1xuXHRcdFx0Ly8gXHRcdHZhciByZXN1bHQgPSBmdXNlLnNlYXJjaChxdWVyeSk7XG5cdFx0XHQvLyBcdFx0aWYgKHJlc3VsdC5sZW5ndGggIT0wKSB7XG5cdFx0XHQvLyBcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHQvLyBcdFx0XHRcdHZhciBhdXRob3JJZCA9IHJlc3VsdFtpXTtcblx0XHRcdC8vIFx0XHRcdFx0bm9kZS5maWx0ZXIoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZCA9PSBhdXRob3JJZDsgfSlcblx0XHRcdC8vIFx0XHRcdFx0XHQuc2VsZWN0KFwiY2lyY2xlXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5yYWRpdXMgKiAxLjU7IH0pO1xuXHRcdFx0Ly8gXHRcdFx0fVxuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXG5cdFx0XHQvLyB1cGRhdGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHQvLyB1c2Ugd2lkdGggdG8gbWFrZSBhbnkgY2hhbmdlc1xuXHRcdFx0Ly8gXHQvL1xuXHRcdFx0Ly8gXHQvLyBOT1QgSU1QTEVNRU5URURcblx0XHRcdC8vIH07XG5cblxuXG5cblx0XHR9KTtcblx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyB1cGRhdGVEYXRhKCkge1xuXHQvLyBcdC8vIHVzZSBEMyB1cGRhdGUgcGF0dGVybiB3aXRoIGRhdGFcbiAgICAvL1xuXHQvLyBcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdC8vIFx0Z3JhcGgubm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHQvLyBcdH0pXG5cdC8vIFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZ2V0TGlua0lkKGQsIGdyYXBoLmRpcmVjdGVkKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHR0aGlzLnNpbXVsYXRpb25cblx0Ly8gXHRcdC5ub2RlcyhncmFwaC5ub2Rlcylcblx0Ly8gXHRcdC5vbihcInRpY2tcIiwgdGlja2VkKTtcbiAgICAvL1xuXHQvLyBcdHNpbXVsYXRpb24uZm9yY2UoXCJsaW5rXCIpXG5cdC8vIFx0XHQubGlua3MoZ3JhcGgubGlua3MpO1xuXHQvLyBcdGNvbnNvbGUubG9nKGdyYXBoKTtcblx0Ly8gXHRzaW11bGF0aW9uLnN0b3AoKTtcblx0Ly8gXHRub2RlID0gbm9kZS5kYXRhKGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KTtcblx0Ly8gXHR2YXIgbm9kZUV4aXQgPSBub2RlLmV4aXQoKTtcblx0Ly8gXHQvLyBub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgXCJyZWRcIik7XG5cdC8vIFx0dmFyIHQgPSBkMy50cmFuc2l0aW9uKCd1cGRhdGVEYXRhJykuZHVyYXRpb24oNTAwMCk7XG5cdC8vIFx0bm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuYXR0cihcInJcIiwgMCk7XG5cdC8vIFx0bm9kZSA9IGVudGVyTm9kZXMobm9kZSwgdCk7XG5cdC8vIFx0Ly8gbm9kZSA9IG5vZGUuY2FsbChlbnRlck5vZGVzLCB0KTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHRsaW5rID0gbGlua1xuXHQvLyBcdFx0LmRhdGEoZ3JhcGgubGlua3MsIGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdFx0Ly8gZC5pZCA9IGdldExpbmtJZChkKTtcblx0Ly8gXHRcdFx0cmV0dXJuIGQuaWQ7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR2YXIgbGlua0V4aXQgPSBsaW5rLmV4aXQoKTtcblx0Ly8gXHRsaW5rRXhpdC5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAwKS5yZW1vdmUoKTtcblx0Ly8gXHQvLyBsaW5rRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRsaW5rID0gZW50ZXJMaW5rcyhsaW5rLCB0KTtcblx0Ly8gXHRzaW11bGF0aW9uLm9uKFwidGlja1wiKS5jYWxsKCk7XG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdHQuZW5kKCkudGhlbihmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRub2RlRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvblxuXHQvLyBcdFx0XHQvLyAuYWxwaGFEZWNheSguMDAwNSlcblx0Ly8gXHRcdFx0Ly8gLnZlbG9jaXR5RGVjYXkoMC45KVxuXHQvLyBcdFx0XHQvLyAuYWxwaGEoLjEpXG5cdC8vIFx0XHRcdC8vIC5yZXN0YXJ0KCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0XG5cdC8vIFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0Ly8gXHQvLyB9LCA0MDAwKTtcblx0Ly8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlTGlua0NvYXV0aG9yc2hpcFZpcztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGlwcHlfanNfXzsiXSwic291cmNlUm9vdCI6IiJ9