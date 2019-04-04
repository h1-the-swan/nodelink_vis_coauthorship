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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2RlbGlua192aXNfY29hdXRob3JzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvY29hdXRob3JzaGlwX3Rvb2x0aXBzLmpzIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vbm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL25vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXAvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRpcHB5LmpzXCIsXCJjb21tb25qczJcIjpcInRpcHB5LmpzXCIsXCJhbWRcIjpcInRpcHB5LmpzXCIsXCJyb290XCI6XCJ0aXBweVwifSJdLCJuYW1lcyI6WyIkIiwiYWN0aXZhdGVUb29sdGlwcyIsInNldERlZmF1bHRzIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImZpbGxIdG1sIiwiJHRlbXBsYXRlIiwiY2xhc3NuYW1lIiwidGV4dENvbnRlbnQiLCJmaW5kIiwidGV4dCIsImQzIiwic2VsZWN0QWxsIiwiZWFjaCIsImQiLCIkdG9vbHRpcE5vZGUiLCJjbG9uZSIsImF0dHIiLCJoYXNPd25Qcm9wZXJ0eSIsInRpcHB5SW5zdGFuY2UiLCJfdGlwcHkiLCJhdXRob3JfbmFtZSIsImFmZmlsX25hbWUiLCJsZW5ndGgiLCJoaWRlIiwiJHBhcGVyVGl0bGVzIiwicGFwZXJzIiwic29ydCIsImEiLCJiIiwiYXNjZW5kaW5nIiwidGl0bGUiLCJpIiwibGVuIiwiJGxpc3RJdGVtIiwiYXBwZW5kIiwic2V0Q29udGVudCIsImh0bWwiLCJOb2RlTGlua0NvYXV0aG9yc2hpcFZpcyIsIm9wdHMiLCJkZWZhdWx0cyIsImVsIiwiZGF0YSIsIndpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwiZm9yY2VTdHJlbmd0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsIm1hbnlCb2R5IiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiaW5pdCIsImRyYXciLCJsaW5rIiwiZGlyZWN0ZWQiLCJzb3VyY2UiLCJ0b1N0cmluZyIsInRhcmdldCIsIml0ZW1zIiwic2VwIiwidmFsdWUiLCJhcmd1bWVudHMiLCJzZWxlY3Rpb24iLCJvYmoiLCJncmFwaCIsImdldExpbmtJZCIsInNlbEl0ZW0iLCJzdmciLCJzZWxlY3QiLCJkcmFnc3RhcnRlZCIsImV2ZW50IiwiYWN0aXZlIiwic2ltdWxhdGlvbiIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwieCIsImZ5IiwieSIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbnRlck5vZGVzIiwibm9kZSIsInQiLCJkZWZhdWx0Q29sb3IiLCJzaXplU2NhbGUiLCJkb21haW4iLCJleHRlbnQiLCJub2RlcyIsImZsb3ciLCJub2RlRW50ZXIiLCJlbnRlciIsImNhbGwiLCJkcmFnIiwib24iLCJtZXJnZSIsInJhZGl1cyIsImNsX3RvcCIsIm5vZGVDaXJjbGUiLCJ0cmFuc2l0aW9uIiwiZW50ZXJMaW5rcyIsImxpbmtFbnRlciIsIk1hdGgiLCJzcXJ0Iiwid2VpZ2h0Iiwic3R5bGUiLCJmb3JFYWNoIiwiaWQiLCJsaW5rcyIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZm9yY2VDZW50ZXIiLCJ0aWNrZWQiLCJzY2FsZUxpbmVhciIs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OiJub2RlbGlua192aXNfY29hdXRob3JzaGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIiksIHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJ0aXBweS5qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm5vZGVsaW5rX3Zpc19jb2F1dGhvcnNoaXBcIiwgW1wiZDNcIiwgXCJqUXVlcnlcIiwgXCJ0aXBweS5qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJub2RlbGlua192aXNfY29hdXRob3JzaGlwXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIiksIHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJ0aXBweS5qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibm9kZWxpbmtfdmlzX2NvYXV0aG9yc2hpcFwiXSA9IGZhY3Rvcnkocm9vdFtcImQzXCJdLCByb290W1wialF1ZXJ5XCJdLCByb290W1widGlwcHlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90aXBweV9qc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuLy8gY29uc3QgdGlwcHkgPSByZXF1aXJlKCcuLi9ub2RlX21vZHVsZXMvdGlwcHkuanMvJyk7XG5pbXBvcnQgJ3RpcHB5LmpzL3RoZW1lcy9saWdodC1ib3JkZXIuY3NzJztcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZhdGVUb29sdGlwcztcblxudGlwcHkuc2V0RGVmYXVsdHMoe1xuXHQndGhlbWUnOiAnbGlnaHQtYm9yZGVyJyxcblx0J2FuaW1hdGVGaWxsJzogZmFsc2UsXG5cdCdhbmltYXRpb24nOiAnZmFkZScsXG59KTtcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2x0aXAtdGVtcGxhdGUnKTtcblxuZnVuY3Rpb24gYWN0aXZhdGVUb29sdGlwcygpIHtcblx0Y29uc29sZS5sb2coJ2FjdGl2YXRlVG9vbHRpcHMoKScpO1xuXG5cdGZ1bmN0aW9uIGZpbGxIdG1sKCR0ZW1wbGF0ZSwgY2xhc3NuYW1lLCB0ZXh0Q29udGVudCkge1xuXHRcdCR0ZW1wbGF0ZS5maW5kKCAnLicgKyBjbGFzc25hbWUgKS5maW5kKCAnLnRlbXBsYXRlLWNvbnRlbnQnICkudGV4dCh0ZXh0Q29udGVudCk7XG5cdH1cblxuXHRkMy5zZWxlY3RBbGwoJy5ub2RlIGNpcmNsZScpLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdHZhciAkdG9vbHRpcE5vZGUgPSAkKHRlbXBsYXRlKS5jbG9uZSgpLmF0dHIoXCJpZFwiLCBudWxsKTtcblx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIl90aXBweVwiKSkge1xuXHRcdFx0dmFyIHRpcHB5SW5zdGFuY2UgPSB0aGlzLl90aXBweTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHRpcHB5SW5zdGFuY2UgPSB0aXBweSh0aGlzKTtcblx0XHR9XG5cdFx0ZmlsbEh0bWwoJHRvb2x0aXBOb2RlLCAnYXV0aG9yX25hbWUnLCBkLmF1dGhvcl9uYW1lKTtcblx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eSgnYWZmaWxfbmFtZScpICYmIGQuYWZmaWxfbmFtZS5sZW5ndGgpIHtcblx0XHRcdGZpbGxIdG1sKCR0b29sdGlwTm9kZSwgJ2FmZmlsX25hbWUnLCBkLmFmZmlsX25hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9vbHRpcE5vZGUuZmluZCgnLmFmZmlsX25hbWUnKS5oaWRlKCk7XG5cdFx0fVxuXHRcdC8vIGlmIChkLmhhc093blByb3BlcnR5KCdjbF9ib3R0b20nKSkgZmlsbEh0bWwoJHRvb2x0aXBOb2RlLCAnY2x1c3Rlcl9pZCcsIGQuY2xfYm90dG9tKTtcblx0XHR2YXIgJHBhcGVyVGl0bGVzID0gJHRvb2x0aXBOb2RlLmZpbmQoICcucGFwZXJfdGl0bGVzJyApLmZpbmQoICcudGVtcGxhdGUtY29udGVudCcgKTtcblx0XHR2YXIgcGFwZXJzID0gZC5wYXBlcnM7XG5cdFx0Ly8gc29ydCBwYXBlcnMgYWxwaGFiZXRpY2FsbHlcblx0XHRwYXBlcnMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBkMy5hc2NlbmRpbmcoYS50aXRsZSwgYi50aXRsZSk7IH0pO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXBlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciAkbGlzdEl0ZW0gPSAkKCAnPGxpIGNsYXNzPVwicGFwZXJfdGl0bGVcIj4nICkudGV4dChwYXBlcnNbaV0udGl0bGUpO1xuXHRcdFx0JHBhcGVyVGl0bGVzLmFwcGVuZCggJGxpc3RJdGVtICk7XG5cdFx0fVxuXHRcdHRpcHB5SW5zdGFuY2Uuc2V0Q29udGVudCgkdG9vbHRpcE5vZGUuaHRtbCgpKTtcblx0fSk7XG59XG4iLCJpbXBvcnQgTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXMgZnJvbSAnLi92aXMuanMnO1xuaW1wb3J0IGFjdGl2YXRlVG9vbHRpcHMgZnJvbSAnLi9jb2F1dGhvcnNoaXBfdG9vbHRpcHMuanMnO1xuZXhwb3J0IHsgTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXMsIGFjdGl2YXRlVG9vbHRpcHMgfTtcblxuIiwiLy8gTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXNcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuY29uc3QgJCA9IGpRdWVyeTtcblxuXG5cbi8vIHJldXNhYmxlIGNoYXJ0IHBhdHRlcm4gaW5zcGlyZWQgYnk6XG4vLyBodHRwczovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9jaGFydC9cbi8vIGFuZFxuLy8gaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kMy1qcy90b3dhcmRzLXJldXNhYmxlLWQzLWpzLWNoYXJ0c1xuY2xhc3MgTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXMge1xuXHRjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdGVsOiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRjb2xvcjogZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApLFxuXHRcdFx0Zm9yY2VTdHJlbmd0aDogLTIsXG5cdFx0fTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRzKTsgIC8vIG9wdHMgd2lsbCBvdmVyd3JpdGUgZGVmYXVsdHNcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5kYXRhO1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMudXBkYXRlRGF0YTtcblx0XHRpZiAodHlwZW9mIHRoaXMuaGVpZ2h0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAuNjI1ICogdGhpcy53aWR0aDtcblx0XHR9XG5cdFx0dGhpcy5tYW55Qm9keSA9IGQzLmZvcmNlTWFueUJvZHkoKVxuXHRcdFx0XHRcdFx0XHQuc3RyZW5ndGgodGhpcy5mb3JjZVN0cmVuZ3RoKTtcblx0XHR0aGlzLmluaXQgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLl9kYXRhKTtcblx0XHRpZiAodGhpcy5lbCAhPT0gbnVsbCAmJiB0aGlzLl9kYXRhICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGdldExpbmtJZChsaW5rLCBkaXJlY3RlZCA9IGZhbHNlKSB7XG5cdFx0Ly8gbGluayBJRCB3aWxsIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBzb3VyY2UgSUQgYW5kIHRhcmdldCBJRCwgc2VwYXJhdGVkIGJ5IFwiLSYtXCJcblx0XHQvLyBJZiB0aGUgZ3JhcGggaXMgdW5kaXJlY3RlZCwgdGhlIElEcyB3aWxsIGJlIHNvcnRlZCBBTFBIQUJFVElDQUxMWSB1c2luZyB0aGUgc3RyaW5nIHZhbHVlcyBvZiB0aGUgSURcblx0XHR2YXIgc291cmNlID0gbGluay5zb3VyY2UudG9TdHJpbmcoKTtcblx0XHR2YXIgdGFyZ2V0ID0gbGluay50YXJnZXQudG9TdHJpbmcoKTtcblx0XHR2YXIgaXRlbXMgPSBbc291cmNlLCB0YXJnZXRdO1xuXHRcdHZhciBzZXAgPSBcIi0mLVwiO1xuXHRcdGlmIChkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0aXRlbXMuc29ydCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbXNbMF0gKyBzZXAgKyBpdGVtc1sxXTtcblx0fVxuXG5cdHVwZGF0ZURhdGEodmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9kYXRhO1xuXHRcdHRoaXMuX2RhdGEgPSB2YWx1ZTtcblx0XHRpZiAodGhpcy5pbml0ID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhpcy51cGRhdGVEYXRhKCk7XG5cdFx0XHQvLyBOT1QgSU1QTEVNRU5URURcblx0XHRcdGNvbnNvbGUubG9nKFwiVVBEQVRJTkcgREFUQSBOT1QgWUVUIElNUExFTUVOVEVEXCIpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyh0eXBlb2YgdXBkYXRlRGF0YSk7XG5cdFx0Ly8gaWYgKHR5cGVvZiB1cGRhdGVEYXRhID09PSAnZnVuY3Rpb24nKSB1cGRhdGVEYXRhKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0ZHJhdyhzZWxlY3Rpb24pIHtcblx0XHR2YXIgb2JqID0gdGhpcztcblx0XHR2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXHRcdHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblx0XHR2YXIgZ3JhcGggPSB0aGlzLl9kYXRhO1xuXHRcdHZhciBtYW55Qm9keSA9IHRoaXMubWFueUJvZHk7XG5cdFx0dmFyIGNvbG9yID0gdGhpcy5jb2xvcjtcblx0XHR2YXIgZ2V0TGlua0lkID0gdGhpcy5nZXRMaW5rSWQ7XG5cdFx0c2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsSXRlbSA9IHRoaXM7XG5cblx0XHRcdHZhciBzdmcgPSBkMy5zZWxlY3Qoc2VsSXRlbSkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXHRcdFx0Y29uc29sZS5sb2coZ3JhcGgpO1xuXG5cdFx0XHRmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG5cdFx0XHRcdGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuXHRcdFx0XHRkLmZ4ID0gZC54O1xuXHRcdFx0XHRkLmZ5ID0gZC55O1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcblx0XHRcdFx0ZC5meCA9IGQzLmV2ZW50Lng7XG5cdFx0XHRcdGQuZnkgPSBkMy5ldmVudC55O1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuXHRcdFx0XHRpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcblx0XHRcdFx0ZC5meCA9IG51bGw7XG5cdFx0XHRcdGQuZnkgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBlbnRlck5vZGVzKG5vZGUsIHQgPSBudWxsKSB7XG5cdFx0XHRcdC8vIHBhc3MgaW4gdGhlIHNlbGVjdGlvbiBmb3IgZW50ZXJpbmcgbm9kZXNcblxuXHRcdFx0XHR2YXIgZGVmYXVsdENvbG9yID0gY29sb3IoMCk7XG5cblx0XHRcdFx0c2l6ZVNjYWxlLmRvbWFpbihkMy5leHRlbnQoZ3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eSgnZmxvdycpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZC5mbG93O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWzUsNV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdFx0Y29uc29sZS5sb2coc2l6ZVNjYWxlLmRvbWFpbigpKTtcblxuXG5cdFx0XHRcdHZhciBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQvLyAuYXR0cihcInJcIiwgNSlcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdHZhciB0eCA9ICh3aWR0aC8yKSArIGQueDtcblx0XHRcdFx0XHQvLyBcdHZhciB0eSA9IChoZWlnaHQvMikgKyBkLnk7XG5cdFx0XHRcdFx0Ly8gXHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0eCArIFwiLFwiICsgdHkgKyBcIilcIjtcblx0XHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRcdC5jYWxsKGQzLmRyYWcoKVxuXHRcdFx0XHRcdFx0Lm9uKFwic3RhcnRcIiwgZHJhZ3N0YXJ0ZWQpXG5cdFx0XHRcdFx0XHQub24oXCJkcmFnXCIsIGRyYWdnZWQpXG5cdFx0XHRcdFx0XHQub24oXCJlbmRcIiwgZHJhZ2VuZGVkKSk7XG5cblxuXG5cdFx0XHRcdG5vZGUgPSBub2RlLm1lcmdlKG5vZGVFbnRlcilcblx0XHRcdFx0XHQuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueCA9ICh3aWR0aC8yKSArIGQueDsgfSlcblx0XHRcdFx0XHQuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueSA9IChoZWlnaHQvMikgKyBkLnk7IH0pXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0aWYgKGQuaGFzT3duUHJvcGVydHkoJ2Zsb3cnKSkge1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IHNpemVTY2FsZShkLmZsb3cpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZC5yYWRpdXMgPSA1O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eShcImNsX3RvcFwiKSkge1xuXHRcdFx0XHRcdFx0XHRkLmNvbG9yID0gY29sb3IoZC5jbF90b3ApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZC5jb2xvciA9IGRlZmF1bHRDb2xvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR2YXIgbm9kZUNpcmNsZSA9IG5vZGVFbnRlclxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSlcblx0XHRcdFx0XHQuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcblx0XHRcdFx0XHQvLyAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmNvbG9yOyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiclwiLCAwKTtcblxuXHRcdFx0XHRpZiAodCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIG5vZGVFbnRlci5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdGQueCA9IHdpZHRoLzI7XG5cdFx0XHRcdFx0Ly8gXHRkLnkgPSBoZWlnaHQvMjtcblx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0XHRub2RlXG5cdFx0XHRcdFx0XHQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnRyYW5zaXRpb24odClcblx0XHRcdFx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLnJhZGl1cztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZyA9IGNvbG9yKGQuY2xfdG9wKTsgfSk7XG5cdFx0XHRcdFx0XHQuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZC5jb2xvcjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bm9kZS5zZWxlY3RBbGwoXCJjaXJjbGVcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLnJhZGl1cztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZyA9IGNvbG9yKGQuY2xfdG9wKTsgfSk7XG5cdFx0XHRcdFx0XHQuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZC5jb2xvcjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVudGVyTGlua3MobGluaywgdCA9IG51bGwpIHtcblx0XHRcdFx0Ly8gcGFzcyBpbiB0aGUgc2VsZWN0aW9uIGZvciBlbnRlcmluZyBsaW5rc1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKCkuYXBwZW5kKFwibGluZVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwieDFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueDsgfSlcblx0XHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueTsgfSlcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGlua1wiKTtcblx0XHRcdFx0bGluayA9IGxpbmsubWVyZ2UobGlua0VudGVyKTtcblx0XHRcdFx0bGlua1xuXHRcdFx0XHQgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIE1hdGguc3FydChkLndlaWdodCk7IH0pO1xuXG5cdFx0XHRcdGlmICh0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0bGlua0VudGVyXG5cdFx0XHRcdFx0XHQvLyAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJzdHJva2VcIiwgXCJncmVlblwiKVxuXHRcdFx0XHRcdC8vIGxpbmtFbnRlci50cmFuc2l0aW9uKHQpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbGluaztcblx0XHRcdH1cblxuXG5cdFx0XHRncmFwaC5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5pZCA9IGQuaWQudG9TdHJpbmcoKTtcblx0XHRcdH0pO1xuXHRcdFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGQuaWQgPSBnZXRMaW5rSWQoZCwgZ3JhcGguZGlyZWN0ZWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcblx0XHRcdFx0LmZvcmNlKFwibGlua1wiLCBkMy5mb3JjZUxpbmsoKS5pZChmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KSlcblx0XHRcdFx0Ly8gLmZvcmNlKFwibGlua1wiLCBkMy5mb3JjZUxpbmsoKSlcblx0XHRcdFx0LmZvcmNlKFwiY2hhcmdlXCIsIG1hbnlCb2R5KVxuXHRcdFx0XHQuZm9yY2UoXCJjZW50ZXJcIiwgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cblx0XHQgIHNpbXVsYXRpb25cblx0XHRcdCAgLm5vZGVzKGdyYXBoLm5vZGVzKVxuXHRcdFx0ICAub24oXCJ0aWNrXCIsIHRpY2tlZCk7XG5cblx0XHQgIHNpbXVsYXRpb24uZm9yY2UoXCJsaW5rXCIpXG5cdFx0XHQgIC5saW5rcyhncmFwaC5saW5rcyk7XG5cblx0XHQgIHRoaXMuc2ltdWxhdGlvbiA9IHNpbXVsYXRpb247XG5cblx0XHRcdHZhciBzaXplU2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG5cdFx0XHRcdC5yYW5nZShbNCwgMTJdKTtcblxuXG5cdFx0XHR2YXIgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpO1xuXG5cdFx0ICB2YXIgbGluayA9IGcuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0ICAuYXR0cihcImNsYXNzXCIsIFwibGlua3NcIilcblx0XHRcdC8vIC5zZWxlY3RBbGwoXCJsaW5lXCIpXG5cdFx0XHQuc2VsZWN0QWxsKFwiLmxpbmtcIik7XG5cblx0XHRcdGxpbmsgPSBsaW5rLmRhdGEoZ3JhcGgubGlua3MsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0cmV0dXJuIGQuaWQ7XG5cdFx0XHR9KTtcblxuXHRcdCAgdmFyIG5vZGUgPSBnLmFwcGVuZChcImdcIilcblx0XHRcdCAgLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVzXCIpXG5cdFx0XHQuc2VsZWN0QWxsKFwiLm5vZGVcIik7XG5cblx0XHRcdG5vZGUgPSBub2RlLmRhdGEoZ3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pO1xuXG5cdFx0XHRub2RlID0gZW50ZXJOb2Rlcyhub2RlKTtcblx0XHRcdGxpbmsgPSBlbnRlckxpbmtzKGxpbmspO1xuXG5cblx0XHRcdC8vIG5vZGVDaXJjbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0Ly8gXHRub2RlLmNsYXNzZWQoJ2ZvY3VzJywgZmFsc2UpO1xuXHRcdFx0Ly8gXHRub2RlLnNlbGVjdEFsbChcInRleHRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdC8vIFx0bm9kZUNpcmNsZS5hdHRyKFwiZmlsbFwiLCBcImJsYWNrXCIpXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAuMSk7XG5cdFx0XHQvLyBcdGxpbmsuc3R5bGUoXCJvcGFjaXR5XCIsIC4xKTtcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudF9pZHMgPSBncmFwaC5ncmFwaC5jb25uZWN0ZWRfY29tcG9uZW50c1tkLmNvbXBvbmVudF07XG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnQgPSBub2RlLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGNvbXBvbmVudF9pZHMuaW5jbHVkZXMoZC5pZCk7IH0pO1xuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50TGluayA9IGxpbmsuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gY29tcG9uZW50X2lkcy5pbmNsdWRlcyhkLnNvdXJjZS5pZCk7fSlcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudENvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuXHRcdFx0Ly8gXHRjb21wb25lbnQuY2xhc3NlZChcImZvY3VzXCIsIHRydWUpO1xuXHRcdFx0Ly8gXHRjb21wb25lbnQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGNvbXBvbmVudENvbG9yKGQuY2xfYm90dG9tKTsgfSlcblx0XHRcdC8vIFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0Ly8gXHRjb21wb25lbnQuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7ICAvLyBzaG93IHRoZXNlIGxhYmVsc1xuXHRcdFx0Ly8gXHRjb21wb25lbnRMaW5rLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdC8vIFx0XG5cdFx0XHQvLyBcdCQoICcjbm9kZWxhYi1mb3JtJyApLmNzcyggJ3Zpc2liaWxpdHknICwgJ3Zpc2libGUnICk7XG5cdFx0XHQvLyBcdGFwcGx5UmFkaW9TZWxlY3Rpb24oKTtcblx0XHRcdC8vXG5cdFx0XHQvLyBcdGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIH0pO1xuXG5cblxuXHRcdCAgZnVuY3Rpb24gdGlja2VkKCkge1xuXHRcdFx0Ly8gbm9kZVxuXHRcdFx0Ly8gICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KVxuXHRcdFx0Ly8gICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55OyB9KTtcblx0XHRcdC8vIGFkZCBib3VuZGluZyBib3hcblx0XHRcdC8vICAgaHR0cHM6Ly9ibC5vY2tzLm9yZy9tYm9zdG9jay8xMTI5NDkyXG5cdFx0XHRub2RlXG5cdFx0XHRcdC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyBcblx0XHRcdFx0XHRkLnggPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4od2lkdGggLSBkLnJhZGl1cywgZC54KSk7XG5cdFx0XHRcdFx0cmV0dXJuIGQueDsgfSlcblx0XHRcdFx0LmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IFxuXHRcdFx0XHRcdGQueSA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih3aWR0aCAtIGQucmFkaXVzLCBkLnkpKTtcblx0XHRcdFx0XHRyZXR1cm4gZC55OyB9KVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IH0pO1xuXG5cdFx0XHRsaW5rXG5cdFx0XHRcdC8vIC5zZWxlY3RBbGwoXCJsaW5lXCIpXG5cdFx0XHRcdC5hdHRyKFwieDFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueDsgfSlcblx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuXHRcdFx0XHQuYXR0cihcIngyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG5cdFx0XHRcdC5hdHRyKFwieTJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueTsgfSk7XG5cdFx0ICB9XG5cblx0XHRcdGZ1bmN0aW9uIHJlc2V0X2xheW91dCgpIHtcblx0XHRcdFx0bm9kZS5jbGFzc2VkKFwiZm9jdXNcIiwgZmFsc2UpO1xuXHRcdFx0XHRub2RlLnNlbGVjdEFsbChcInRleHRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0Ly8gbm9kZUNpcmNsZS5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmNvbG9yX29yaWc7IH0pXG5cdFx0XHRcdC8vIFx0LnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdFx0bGluay5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdCQoICcjbm9kZWxhYi1mb3JtJyApLmNzcyggJ3Zpc2liaWxpdHknICwgJ2hpZGRlbicgKTtcblx0XHRcdH1cblx0XHRcdHN2Zy5vbihcImNsaWNrXCIsIHJlc2V0X2xheW91dCk7XG5cblx0XHRcdC8vIFRPRE8gdGhpcyBpcyBicm9rZW4uIGZpeCBpdC5cblx0XHRcdC8vIHZhciBmdXNlID0gbmV3IEZ1c2UoZ3JhcGgubm9kZXMsIGZ1c2VPcHRpb25zKTtcblx0XHRcdC8vIHZhciByZXN1bHQgPSBmdXNlLnNlYXJjaChcImVobG93XCIpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdC8vICQoICcjdGV4dFNlYXJjaCcgKS5vbiggJ2lucHV0JywgZnVzZVNlbGVjdCApO1xuXHRcdFx0Ly8gZnVuY3Rpb24gZnVzZVNlbGVjdCgpIHtcblx0XHRcdC8vIFx0Ly8gcmVzZXQgbm9kZSBzaXplcyBhbmQgc3R5bGVzXG5cdFx0XHQvLyBcdGQzLnNlbGVjdEFsbChcIi5ub2RlIGNpcmNsZVwiKVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAxKVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcInN0cm9rZVwiLCBcIndoaXRlXCIpXG5cdFx0XHQvLyBcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQucmFkaXVzOyB9KTtcbiAgICAgICAgICAgIC8vXG5cdFx0XHQvLyBcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcblx0XHRcdC8vIFx0dmFyIHF1ZXJ5ID0gJHRoaXMudmFsKCk7XG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKCR0aGlzLnZhbCgpKTtcblx0XHRcdC8vIFx0aWYgKHF1ZXJ5Lmxlbmd0aCA+IDMpIHtcblx0XHRcdC8vIFx0XHR2YXIgcmVzdWx0ID0gZnVzZS5zZWFyY2gocXVlcnkpO1xuXHRcdFx0Ly8gXHRcdGlmIChyZXN1bHQubGVuZ3RoICE9MCkge1xuXHRcdFx0Ly8gXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0Ly8gXHRcdFx0XHR2YXIgYXV0aG9ySWQgPSByZXN1bHRbaV07XG5cdFx0XHQvLyBcdFx0XHRcdG5vZGUuZmlsdGVyKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQgPT0gYXV0aG9ySWQ7IH0pXG5cdFx0XHQvLyBcdFx0XHRcdFx0LnNlbGVjdChcImNpcmNsZVwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAyKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQucmFkaXVzICogMS41OyB9KTtcblx0XHRcdC8vIFx0XHRcdH1cblx0XHRcdC8vIFx0XHR9XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH1cblxuXHRcdFx0Ly8gdXBkYXRlV2lkdGggPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0Ly8gdXNlIHdpZHRoIHRvIG1ha2UgYW55IGNoYW5nZXNcblx0XHRcdC8vIFx0Ly9cblx0XHRcdC8vIFx0Ly8gTk9UIElNUExFTUVOVEVEXG5cdFx0XHQvLyB9O1xuXG5cblxuXG5cdFx0fSk7XG5cdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gdXBkYXRlRGF0YSgpIHtcblx0Ly8gXHQvLyB1c2UgRDMgdXBkYXRlIHBhdHRlcm4gd2l0aCBkYXRhXG4gICAgLy9cblx0Ly8gXHR2YXIgZ3JhcGggPSB0aGlzLl9kYXRhO1xuXHQvLyBcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0ZC5pZCA9IGQuaWQudG9TdHJpbmcoKTtcblx0Ly8gXHR9KVxuXHQvLyBcdGdyYXBoLmxpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0dGhpcy5zaW11bGF0aW9uXG5cdC8vIFx0XHQubm9kZXMoZ3JhcGgubm9kZXMpXG5cdC8vIFx0XHQub24oXCJ0aWNrXCIsIHRpY2tlZCk7XG4gICAgLy9cblx0Ly8gXHRzaW11bGF0aW9uLmZvcmNlKFwibGlua1wiKVxuXHQvLyBcdFx0LmxpbmtzKGdyYXBoLmxpbmtzKTtcblx0Ly8gXHRjb25zb2xlLmxvZyhncmFwaCk7XG5cdC8vIFx0c2ltdWxhdGlvbi5zdG9wKCk7XG5cdC8vIFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cdC8vIFx0dmFyIG5vZGVFeGl0ID0gbm9kZS5leGl0KCk7XG5cdC8vIFx0Ly8gbm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmF0dHIoXCJmaWxsXCIsIFwicmVkXCIpO1xuXHQvLyBcdHZhciB0ID0gZDMudHJhbnNpdGlvbigndXBkYXRlRGF0YScpLmR1cmF0aW9uKDUwMDApO1xuXHQvLyBcdG5vZGVFeGl0LnNlbGVjdEFsbChcImNpcmNsZVwiKS5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLmF0dHIoXCJyXCIsIDApO1xuXHQvLyBcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUsIHQpO1xuXHQvLyBcdC8vIG5vZGUgPSBub2RlLmNhbGwoZW50ZXJOb2RlcywgdCk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG5cdC8vIFx0bGluayA9IGxpbmtcblx0Ly8gXHRcdC5kYXRhKGdyYXBoLmxpbmtzLCBmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRcdC8vIGQuaWQgPSBnZXRMaW5rSWQoZCk7XG5cdC8vIFx0XHRcdHJldHVybiBkLmlkO1xuXHQvLyBcdFx0fSk7XG5cdC8vIFx0dmFyIGxpbmtFeGl0ID0gbGluay5leGl0KCk7XG5cdC8vIFx0bGlua0V4aXQuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIikudHJhbnNpdGlvbih0KS5zdHlsZShcIm9wYWNpdHlcIiwgMCkucmVtb3ZlKCk7XG5cdC8vIFx0Ly8gbGlua0V4aXQucmVtb3ZlKCk7XG5cdC8vIFx0bGluayA9IGVudGVyTGlua3MobGluaywgdCk7XG5cdC8vIFx0c2ltdWxhdGlvbi5vbihcInRpY2tcIikuY2FsbCgpO1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHR0LmVuZCgpLnRoZW4oZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0bm9kZUV4aXQucmVtb3ZlKCk7XG5cdC8vIFx0XHQvLyBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb25cblx0Ly8gXHRcdFx0Ly8gLmFscGhhRGVjYXkoLjAwMDUpXG5cdC8vIFx0XHRcdC8vIC52ZWxvY2l0eURlY2F5KDAuOSlcblx0Ly8gXHRcdFx0Ly8gLmFscGhhKC4xKVxuXHQvLyBcdFx0XHQvLyAucmVzdGFydCgpO1xuXHQvLyBcdH0pO1xuXHQvLyBcdFxuXHQvLyBcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdC8vIFx0Ly8gfSwgNDAwMCk7XG5cdC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZUxpbmtDb2F1dGhvcnNoaXBWaXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RpcHB5X2pzX187Il0sInNvdXJjZVJvb3QiOiIifQ==