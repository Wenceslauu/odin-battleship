/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow-right-thin.png */ "./src/assets/arrow-right-thin.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow-down-thin.png */ "./src/assets/arrow-down-thin.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --border-radius: 10px;\n    --light-blue: #dbeafe;\n    --hover-light-blue: #bfdbfe;\n    --dark-blue: #1e40af;\n    --red: #991b1b;\n    --green: #22c55e;\n    --light-grey: #e4e4e7;\n    --grey: #71717a;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%;\n    position: relative;\n}\n\nbody {\n    height: 100%;\n    font-family: 'Bebas Neue', cursive;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.header {\n    background-color: var(--dark-blue);\n    padding: 25px;\n    text-align: center;\n    color: white;\n    font-size: 3rem;\n}\n\n.main-content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.fleet {\n    position: absolute;\n    top: 26%;\n    left: 5%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    width: 230px;\n    height: 375px;\n    background-color: var(--light-grey);\n    padding-top: 13px;\n    border: 4px solid var(--grey)\n}\n\n.ship-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 13px;\n}\n\n.ship {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.fleet input {\n    display: none;\n}\n\n.toggle-container {\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    width:  60px;\n    height: 30px;\n}\n\n.toggle-label {\n    position: relative;\n    display: block;\n    width:  60px;\n    height: 30px;\n    cursor: pointer;\n}\n\n.sliding-groove {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--light-blue);\n    background: var(--light-blue) 85% no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    outline: 2px solid var(--grey);\n    border-radius: 20px;\n    transition: all 0.3s ease;\n}\n\n.sliding-groove::after {\n    position: absolute;\n    content: '';\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: white;\n    top: 1px;\n    left: 1px;\n    transition: all 0.3s ease;\n}\n\ninput:checked + .sliding-groove {\n    background: var(--light-blue) 15% no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\ninput:checked + .sliding-groove::after {\n    transform: translateX(30px);\n}\n\n.game {\n    flex: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n\n    padding-top: 30px;\n}\n\n.board {\n    text-align: center;\n}\n\n.board p {\n    font-size: 2rem;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 40px);\n    cursor: crosshair;\n}\n\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: var(--light-blue);\n    border: 1px solid black;\n}\n\n.cell:hover {\n    background-color: var(--hover-light-blue);\n}\n\n.cell:-moz-drag-over {\n    background-color: var(--grey);\n}\n\n.cell.isShip {\n    background-color: var(--grey);\n}\n\n.cell.hit {\n    background-color: var(--green);\n}\n\n.cell.miss {\n    background-color: var(--red);\n}\n\n.subtitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n\n    padding-bottom: 50px;\n    font-size: 1.2rem;\n}\n\n.subtitle .sample {\n    text-align: center;\n}\n\n.modal {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 1;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: whitesmoke;\n    border-radius: var(--border-radius);\n\n    transform: translate(-50%, -50%) scale(0);\n    transition: 0.2s ease-in-out;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.modal.start {\n    background-color: black;\n}\n\n.modal.end {\n    font-size: 3rem;\n    padding: 50px;\n    gap: 25px;\n}\n\nbutton {\n    font-family: 'Bebas Neue', cursive;\n    font-size: 2.5rem;\n    padding: 10px 30px;\n    border-radius: var(--border-radius);\n    border: 4px solid black;\n    background-color: #3b82f6;\n    color: white;\n    cursor: pointer;\n}\n\nbutton:active {\n    transform: scale(0.98);\n    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0, 0, 0, 0.5);\n    display: none\n}\n\n.overlay.active {\n    display: block;\n}\n\n.main-content > button {\n    position: fixed;\n    bottom: 15px;\n    right: 20px;\n\n    font-family: 'Bebas Neue', cursive;\n    font-size: 1.7rem;\n    padding: 10px 30px;\n    background-color: var(--red);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');\n\n:root {\n    --border-radius: 10px;\n    --light-blue: #dbeafe;\n    --hover-light-blue: #bfdbfe;\n    --dark-blue: #1e40af;\n    --red: #991b1b;\n    --green: #22c55e;\n    --light-grey: #e4e4e7;\n    --grey: #71717a;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%;\n    position: relative;\n}\n\nbody {\n    height: 100%;\n    font-family: 'Bebas Neue', cursive;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.header {\n    background-color: var(--dark-blue);\n    padding: 25px;\n    text-align: center;\n    color: white;\n    font-size: 3rem;\n}\n\n.main-content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.fleet {\n    position: absolute;\n    top: 26%;\n    left: 5%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    width: 230px;\n    height: 375px;\n    background-color: var(--light-grey);\n    padding-top: 13px;\n    border: 4px solid var(--grey)\n}\n\n.ship-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 13px;\n}\n\n.ship {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.fleet input {\n    display: none;\n}\n\n.toggle-container {\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    width:  60px;\n    height: 30px;\n}\n\n.toggle-label {\n    position: relative;\n    display: block;\n    width:  60px;\n    height: 30px;\n    cursor: pointer;\n}\n\n.sliding-groove {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--light-blue);\n    background: var(--light-blue) 85% no-repeat url('./assets/arrow-right-thin.png');\n    outline: 2px solid var(--grey);\n    border-radius: 20px;\n    transition: all 0.3s ease;\n}\n\n.sliding-groove::after {\n    position: absolute;\n    content: '';\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: white;\n    top: 1px;\n    left: 1px;\n    transition: all 0.3s ease;\n}\n\ninput:checked + .sliding-groove {\n    background: var(--light-blue) 15% no-repeat url('./assets/arrow-down-thin.png');\n}\n\ninput:checked + .sliding-groove::after {\n    transform: translateX(30px);\n}\n\n.game {\n    flex: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n\n    padding-top: 30px;\n}\n\n.board {\n    text-align: center;\n}\n\n.board p {\n    font-size: 2rem;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 40px);\n    cursor: crosshair;\n}\n\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: var(--light-blue);\n    border: 1px solid black;\n}\n\n.cell:hover {\n    background-color: var(--hover-light-blue);\n}\n\n.cell:-moz-drag-over {\n    background-color: var(--grey);\n}\n\n.cell.isShip {\n    background-color: var(--grey);\n}\n\n.cell.hit {\n    background-color: var(--green);\n}\n\n.cell.miss {\n    background-color: var(--red);\n}\n\n.subtitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n\n    padding-bottom: 50px;\n    font-size: 1.2rem;\n}\n\n.subtitle .sample {\n    text-align: center;\n}\n\n.modal {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 1;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: whitesmoke;\n    border-radius: var(--border-radius);\n\n    transform: translate(-50%, -50%) scale(0);\n    transition: 0.2s ease-in-out;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.modal.start {\n    background-color: black;\n}\n\n.modal.end {\n    font-size: 3rem;\n    padding: 50px;\n    gap: 25px;\n}\n\nbutton {\n    font-family: 'Bebas Neue', cursive;\n    font-size: 2.5rem;\n    padding: 10px 30px;\n    border-radius: var(--border-radius);\n    border: 4px solid black;\n    background-color: #3b82f6;\n    color: white;\n    cursor: pointer;\n}\n\nbutton:active {\n    transform: scale(0.98);\n    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0, 0, 0, 0.5);\n    display: none\n}\n\n.overlay.active {\n    display: block;\n}\n\n.main-content > button {\n    position: fixed;\n    bottom: 15px;\n    right: 20px;\n\n    font-family: 'Bebas Neue', cursive;\n    font-size: 1.7rem;\n    padding: 10px 30px;\n    background-color: var(--red);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/arrow-down-thin.png":
/*!****************************************!*\
  !*** ./src/assets/arrow-down-thin.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e9c3ba7474551fc0768.png";

/***/ }),

/***/ "./src/assets/arrow-right-thin.png":
/*!*****************************************!*\
  !*** ./src/assets/arrow-right-thin.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53d3d7c8a03bc1f98471.png";

/***/ }),

/***/ "./src/components/boards.js":
/*!**********************************!*\
  !*** ./src/components/boards.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var renderGrid = function renderGrid(board, player) {
  var grid;
  if (player.name === 'human') grid = document.querySelector('.board.left .grid');else {
    grid = document.querySelector('.board.right .grid');
  }
  grid.innerHTML = '';

  for (var i = 0; i < board.sideSize; i += 1) {
    for (var j = 0; j < board.sideSize; j += 1) {
      var cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-x', j);
      cell.setAttribute('data-y', i);
      grid.appendChild(cell);

      if (player.name === 'human') {
        var squareStatus = board.squares[i][j][0];

        switch (squareStatus) {
          case 0:
            break;

          case 1:
            cell.classList.add('isShip');
            break;

          case "X":
            cell.classList.add('hit');
            break;

          case "O":
            cell.classList.add('miss');
            break;

          default:
            console.log('unexpected behavior');
        }
      } else {
        var _squareStatus = board.opponentView[i][j];

        switch (_squareStatus) {
          case 0:
            break;

          case "X":
            cell.classList.add('hit');
            break;

          case "O":
            cell.classList.add('miss');
            break;

          default:
            console.log('unexpected behavior');
        }
      }
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGrid);

/***/ }),

/***/ "./src/factories/game.js":
/*!*******************************!*\
  !*** ./src/factories/game.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/factories/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/factories/player.js");
/* harmony import */ var _components_boards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/boards */ "./src/components/boards.js");
/* harmony import */ var _helpers_keepGameRunning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/keepGameRunning */ "./src/helpers/keepGameRunning.js");
/* harmony import */ var _helpers_dragAndDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/dragAndDrop */ "./src/helpers/dragAndDrop.js");
/* harmony import */ var _helpers_handleDirection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/handleDirection */ "./src/helpers/handleDirection.js");
/* harmony import */ var _helpers_fillShipContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/fillShipContainer */ "./src/helpers/fillShipContainer.js");








var Game = function Game() {
  var board1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(10);
  var board2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(10);
  var human = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('human', board1, board2);
  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('computer', board2, board1);

  var setUpGrids = function setUpGrids() {
    (0,_components_boards__WEBPACK_IMPORTED_MODULE_2__["default"])(board1, human);
    (0,_components_boards__WEBPACK_IMPORTED_MODULE_2__["default"])(board2, computer);
  };

  var startGameFlow = function startGameFlow() {
    (0,_helpers_keepGameRunning__WEBPACK_IMPORTED_MODULE_3__["default"])(human, computer, 'dragover');
    (0,_helpers_keepGameRunning__WEBPACK_IMPORTED_MODULE_3__["default"])(human, computer, 'dragenter');
    (0,_helpers_keepGameRunning__WEBPACK_IMPORTED_MODULE_3__["default"])(human, computer, 'drop');
  };

  var playAgain = function playAgain() {
    board1.reset();
    board2.reset();
    human = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('human', board1, board2);
    computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('computer', board2, board1);
    (0,_helpers_fillShipContainer__WEBPACK_IMPORTED_MODULE_6__["default"])();
    setUpGrids();
    (0,_helpers_handleDirection__WEBPACK_IMPORTED_MODULE_5__.handleDirection)();
    (0,_helpers_dragAndDrop__WEBPACK_IMPORTED_MODULE_4__["default"])();
    startGameFlow();
  };

  return {
    setUpGrids: setUpGrids,
    startGameFlow: startGameFlow,
    playAgain: playAgain
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Gameboard = function Gameboard(sideSize) {
  var squares = Array.from({
    length: sideSize
  }, function () {
    return Array.from({
      length: sideSize
    }, function () {
      return [0, [null, null]];
    });
  });
  var opponentView = Array.from({
    length: sideSize
  }, function () {
    return Array.from({
      length: sideSize
    }, function () {
      return 0;
    });
  });
  var __placedShips = [];

  var __calculateSquares = function __calculateSquares() {
    __placedShips.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          coords = _ref2[0],
          ship = _ref2[1];

      for (var i = 0; i < ship.health.length; i += 1) {
        if (ship.direction === 'horizontal') {
          squares[coords[1]][coords[0] + i][0] = ship.health[i];
          squares[coords[1]][coords[0] + i][1][0] = ship;
          squares[coords[1]][coords[0] + i][1][1] = i;
        } else {
          squares[coords[1] + i][coords[0]][0] = ship.health[i];
          squares[coords[1] + i][coords[0]][1][0] = ship;
          squares[coords[1] + i][coords[0]][1][1] = i;
        }
      }
    });
  };

  var __isPlacementPossible = function __isPlacementPossible(coords, ship) {
    if (ship.direction === 'horizontal' && sideSize < coords[0] + ship.health.length || ship.direction === 'vertical' && sideSize < coords[1] + ship.health.length) return false;

    for (var i = 0; i < ship.health.length; i += 1) {
      if (ship.direction === 'horizontal') {
        if (squares[coords[1]][coords[0] + i][1][0] !== null) return false;
      } else if (ship.direction === 'vertical') {
        if (squares[coords[1] + i][coords[0]][1][0] !== null) return false;
      }
    }

    return true;
  };

  var __makeRandomShips = function __makeRandomShips() {
    var directions = ['horizontal', 'vertical'];
    var carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, directions[Math.floor(Math.random() * directions.length)]);
    var battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, directions[Math.floor(Math.random() * directions.length)]);
    var submarine1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, directions[Math.floor(Math.random() * directions.length)]);
    var submarine2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, directions[Math.floor(Math.random() * directions.length)]);
    var destroyer1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, directions[Math.floor(Math.random() * directions.length)]);
    var destroyer2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, directions[Math.floor(Math.random() * directions.length)]);
    return [carrier, battleship, submarine1, submarine2, destroyer1, destroyer2];
  };

  var placeShip = function placeShip(coords, ship) {
    if (__isPlacementPossible(coords, ship)) {
      __placedShips.push([coords, ship]);

      __calculateSquares();
    } else {
      throw Error('cannot place ship');
    }
  };

  var placeRandomShips = function placeRandomShips() {
    var shipsToPlace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __makeRandomShips();
    shipsToPlace.forEach(function (ship) {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        try {
          placeShip([Math.floor(Math.random() * sideSize), Math.floor(Math.random() * sideSize)], ship);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  };

  var receiveAttack = function receiveAttack(coords) {
    if (squares[coords[1]][coords[0]][0] === 'X' || squares[coords[1]][coords[0]][0] === 'O') {
      throw Error('cannot shoot the same square twice');
    } else if (squares[coords[1]][coords[0]][1][0] === null) {
      squares[coords[1]][coords[0]][0] = 'O';
      opponentView[coords[1]][coords[0]] = 'O';
    } else {
      squares[coords[1]][coords[0]][1][0].hit(squares[coords[1]][coords[0]][1][1]);
      opponentView[coords[1]][coords[0]] = 'X';

      __calculateSquares();
    }
  };

  var receiveRandomAttack = function receiveRandomAttack() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        receiveAttack([Math.floor(Math.random() * sideSize), Math.floor(Math.random() * sideSize)]);
        break;
      } catch (e) {
        console.log(e);
      }
    }
  };

  var allSunk = function allSunk() {
    if (__placedShips.length === 0) throw Error('there are no ships yet'); // eslint-disable-next-line no-restricted-syntax

    var _iterator = _createForOfIteratorHelper(__placedShips),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var data = _step.value;
        var ship = data[1];
        if (!ship.isSunk()) return false;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return true;
  };

  var reset = function reset() {
    for (var i = 0; i < sideSize; i += 1) {
      for (var j = 0; j < sideSize; j += 1) {
        squares[i][j] = [0, [null, null]];
        opponentView[i][j] = 0;
      }
    }

    __placedShips.length = 0;
  };

  return {
    sideSize: sideSize,
    squares: squares,
    allSunk: allSunk,
    placeShip: placeShip,
    placeRandomShips: placeRandomShips,
    receiveAttack: receiveAttack,
    receiveRandomAttack: receiveRandomAttack,
    opponentView: opponentView,
    reset: reset
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Player = function Player(name, allyBoard, oppBoard) {
  var isTurn = true;

  if (name === 'computer') {
    allyBoard.placeRandomShips();
    isTurn = false;
  }

  return {
    name: name,
    allyBoard: allyBoard,
    oppBoard: oppBoard,
    isTurn: isTurn
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Ship = function Ship(size, direction) {
  var health = Array.from({
    length: size
  }, function () {
    return 1;
  });

  var isSunk = function isSunk() {
    return !health.includes(1);
  };

  var hit = function hit(index) {
    if (Number.isNaN(index) || index > size - 1) throw new Error('range invalid');
    health.splice(index, 1, 'X');
  };

  return {
    direction: direction,
    health: health,
    isSunk: isSunk,
    hit: hit
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/helpers/changeTurns.js":
/*!************************************!*\
  !*** ./src/helpers/changeTurns.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var changeTurns = function changeTurns(player1, player2) {
  console.log(player1.isTurn);
  console.log(player2.isTurn);
  console.log('');

  if (player1.isTurn) {
    player1.isTurn = false;
    player2.isTurn = true;
  } else {
    player1.isTurn = true;
    player2.isTurn = false;
  }

  console.log(player1.isTurn);
  console.log(player2.isTurn);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTurns);

/***/ }),

/***/ "./src/helpers/clearModal.js":
/*!***********************************!*\
  !*** ./src/helpers/clearModal.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clearModal = function clearModal() {
  var modal = document.querySelector('.modal');
  modal.classList.remove('start');
  modal.classList.remove('ship-selection');
  modal.innerHTML = '';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearModal);

/***/ }),

/***/ "./src/helpers/countChildElements.js":
/*!*******************************************!*\
  !*** ./src/helpers/countChildElements.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var countChildElements = function countChildElements(nodelist) {
  var counter = 0;
  nodelist.forEach(function (node) {
    if (node.nodeType === Node.ELEMENT_NODE) counter += 1;
  });
  return counter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countChildElements);

/***/ }),

/***/ "./src/helpers/dragAndDrop.js":
/*!************************************!*\
  !*** ./src/helpers/dragAndDrop.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _handleDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDirection */ "./src/helpers/handleDirection.js");


var addDragListeners = function addDragListeners() {
  var ships = document.querySelectorAll('.ship');
  ships.forEach(function (ship) {
    ship.setAttribute('draggable', 'true');
    ship.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('text/plain', "{\"shipType\": \"".concat(ship.classList.item(1), "\", \"shipDirection\": \"").concat(_handleDirection__WEBPACK_IMPORTED_MODULE_0__.placementDirection, "\"}"));
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragListeners);

/***/ }),

/***/ "./src/helpers/fillShipContainer.js":
/*!******************************************!*\
  !*** ./src/helpers/fillShipContainer.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fillShipContainer = function fillShipContainer() {
  var shipContainer = document.querySelector('.ship-container');
  shipContainer.innerHTML = '';
  var carrier = document.createElement('div');
  carrier.classList.add('ship');
  carrier.classList.add('carrier');
  shipContainer.appendChild(carrier);

  for (var i = 0; i < 5; i += 1) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add('isShip');
    carrier.appendChild(cell);
  }

  var battleship = document.createElement('div');
  battleship.classList.add('ship');
  battleship.classList.add('battleship');
  shipContainer.appendChild(battleship);

  for (var _i = 0; _i < 4; _i += 1) {
    var _cell = document.createElement('div');

    _cell.classList.add('cell');

    _cell.classList.add('isShip');

    battleship.appendChild(_cell);
  }

  var submarine1 = document.createElement('div');
  submarine1.classList.add('ship');
  submarine1.classList.add('submarine');
  shipContainer.appendChild(submarine1);

  for (var _i2 = 0; _i2 < 3; _i2 += 1) {
    var _cell2 = document.createElement('div');

    _cell2.classList.add('cell');

    _cell2.classList.add('isShip');

    submarine1.appendChild(_cell2);
  }

  var submarine2 = document.createElement('div');
  submarine2.classList.add('ship');
  submarine2.classList.add('submarine');
  shipContainer.appendChild(submarine2);

  for (var _i3 = 0; _i3 < 3; _i3 += 1) {
    var _cell3 = document.createElement('div');

    _cell3.classList.add('cell');

    _cell3.classList.add('isShip');

    submarine2.appendChild(_cell3);
  }

  var destroyer1 = document.createElement('div');
  destroyer1.classList.add('ship');
  destroyer1.classList.add('destroyer');
  shipContainer.appendChild(destroyer1);

  for (var _i4 = 0; _i4 < 2; _i4 += 1) {
    var _cell4 = document.createElement('div');

    _cell4.classList.add('cell');

    _cell4.classList.add('isShip');

    destroyer1.appendChild(_cell4);
  }

  var destroyer2 = document.createElement('div');
  destroyer2.classList.add('ship');
  destroyer2.classList.add('destroyer');
  shipContainer.appendChild(destroyer2);

  for (var _i5 = 0; _i5 < 2; _i5 += 1) {
    var _cell5 = document.createElement('div');

    _cell5.classList.add('cell');

    _cell5.classList.add('isShip');

    destroyer2.appendChild(_cell5);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillShipContainer);

/***/ }),

/***/ "./src/helpers/gameEnds.js":
/*!*********************************!*\
  !*** ./src/helpers/gameEnds.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearModal */ "./src/helpers/clearModal.js");


var gameEnds = function gameEnds(winnerName) {
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.overlay');
  (0,_clearModal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var p = document.createElement('p');
  if (winnerName === 'human') p.textContent = "Congratulations ".concat(winnerName, ", you won!");else p.textContent = "You lost, ".concat(winnerName, " beat you :(");
  modal.appendChild(p);
  modal.classList.add('active');
  modal.classList.add('end');
  overlay.classList.add('active');
  overlay.addEventListener('click', function () {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameEnds);

/***/ }),

/***/ "./src/helpers/handleDirection.js":
/*!****************************************!*\
  !*** ./src/helpers/handleDirection.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleDirection": () => (/* binding */ handleDirection),
/* harmony export */   "placementDirection": () => (/* binding */ placementDirection)
/* harmony export */ });
// eslint-disable-next-line import/no-mutable-exports
var placementDirection = 'horizontal';

var handleDirection = function handleDirection() {
  var checkbox = document.getElementById('direction');
  checkbox.addEventListener('change', function () {
    if (this.checked) placementDirection = 'vertical';else placementDirection = 'horizontal';
  });
};



/***/ }),

/***/ "./src/helpers/keepGameRunning.js":
/*!****************************************!*\
  !*** ./src/helpers/keepGameRunning.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_boards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/boards */ "./src/components/boards.js");
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/ship */ "./src/factories/ship.js");
/* harmony import */ var _popShipFromSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popShipFromSelection */ "./src/helpers/popShipFromSelection.js");
/* harmony import */ var _changeTurns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeTurns */ "./src/helpers/changeTurns.js");
/* harmony import */ var _countChildElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countChildElements */ "./src/helpers/countChildElements.js");
/* harmony import */ var _gameEnds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameEnds */ "./src/helpers/gameEnds.js");
/* eslint-disable no-use-before-define */







var checkNextPhase = function checkNextPhase(player1, player2) {
  var shipContainer = document.querySelector('.ship-container');
  console.log((0,_countChildElements__WEBPACK_IMPORTED_MODULE_4__["default"])(shipContainer.childNodes));

  if ((0,_countChildElements__WEBPACK_IMPORTED_MODULE_4__["default"])(shipContainer.childNodes) > 0) {
    // Ship placement phase
    keepGameRunning(player1, player2, 'dragover');
    keepGameRunning(player1, player2, 'dragenter');
    keepGameRunning(player1, player2, 'drop');
  } else if (player2.allyBoard.allSunk()) {
    // Check for human win condition 
    (0,_gameEnds__WEBPACK_IMPORTED_MODULE_5__["default"])(player1.name);
  } else if (player1.allyBoard.allSunk()) {
    // Check for computer win condition
    (0,_gameEnds__WEBPACK_IMPORTED_MODULE_5__["default"])(player2.name);
  } else if (player1.isTurn) {
    // Player 1(human) attack phase
    (0,_changeTurns__WEBPACK_IMPORTED_MODULE_3__["default"])(player1, player2);
    keepGameRunning(player2, player1, 'click');
  } else if (player2.isTurn) {
    // Player 2(computer) attack phase
    (0,_changeTurns__WEBPACK_IMPORTED_MODULE_3__["default"])(player1, player2);
    player1.allyBoard.receiveRandomAttack();
    (0,_components_boards__WEBPACK_IMPORTED_MODULE_0__["default"])(player1.allyBoard, player1);
    checkNextPhase(player1, player2);
  }
};

function keepGameRunning(player1, player2, action) {
  var board = player1.allyBoard;
  var grid;

  if (player1.name === 'human') {
    grid = document.querySelector('.board.left .grid');
  } else {
    grid = document.querySelector('.board.right .grid');
  }

  var cells = grid.childNodes;
  cells.forEach(function (cell) {
    var x = parseInt(cell.dataset.x, 10);
    var y = parseInt(cell.dataset.y, 10);
    cell.addEventListener(action, function (event) {
      if (action === 'click') {
        try {
          console.log("x=".concat(x, "y=").concat(y));
          board.receiveAttack([x, y]);
          (0,_components_boards__WEBPACK_IMPORTED_MODULE_0__["default"])(board, player1); // Change turns

          checkNextPhase(player2, player1);
        } catch (e) {
          console.log(e);
        }
      } else if (action === 'dragover' || action === 'dragenter') {
        event.preventDefault();
      } else if (action === 'drop') {
        var obj = JSON.parse(event.dataTransfer.getData('text/plain'));

        switch (obj.shipType) {
          case 'carrier':
            var carrier = (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, obj.shipDirection);

            try {
              board.placeShip([x, y], carrier);
              (0,_popShipFromSelection__WEBPACK_IMPORTED_MODULE_2__["default"])('carrier');
              (0,_components_boards__WEBPACK_IMPORTED_MODULE_0__["default"])(board, player1);
              checkNextPhase(player1, player2);
            } catch (e) {
              console.log(e);
            }

            break;

          case 'battleship':
            var battleship = (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, obj.shipDirection);

            try {
              board.placeShip([x, y], battleship);
              (0,_popShipFromSelection__WEBPACK_IMPORTED_MODULE_2__["default"])('battleship');
              (0,_components_boards__WEBPACK_IMPORTED_MODULE_0__["default"])(board, player1);
              checkNextPhase(player1, player2);
            } catch (e) {
              console.log(e);
            }

            break;

          case 'submarine':
            var submarine = (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, obj.shipDirection);

            try {
              board.placeShip([x, y], submarine);
              (0,_popShipFromSelection__WEBPACK_IMPORTED_MODULE_2__["default"])('submarine');
              (0,_components_boards__WEBPACK_IMPORTED_MODULE_0__["default"])(board, player1);
              checkNextPhase(player1, player2);
            } catch (e) {
              console.log(e);
            }

            break;

          case 'destroyer':
            var destroyer = (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, obj.shipDirection);

            try {
              board.placeShip([x, y], destroyer);
              (0,_popShipFromSelection__WEBPACK_IMPORTED_MODULE_2__["default"])('destroyer');
              (0,_components_boards__WEBPACK_IMPORTED_MODULE_0__["default"])(board, player1);
              checkNextPhase(player1, player2);
            } catch (e) {
              console.log(e);
            }

            break;

          default:
            console.log('unexpected behavior');
        }
      }
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keepGameRunning);

/***/ }),

/***/ "./src/helpers/popShipFromSelection.js":
/*!*********************************************!*\
  !*** ./src/helpers/popShipFromSelection.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var popShipFromSelection = function popShipFromSelection(shipType) {
  var shipContainer = document.querySelector('.ship-container');
  var shipOnBox = document.querySelector(".ship.".concat(shipType));
  shipContainer.removeChild(shipOnBox);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popShipFromSelection);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _helpers_fillShipContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/fillShipContainer */ "./src/helpers/fillShipContainer.js");
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/game */ "./src/factories/game.js");
/* harmony import */ var _helpers_handleDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/handleDirection */ "./src/helpers/handleDirection.js");
/* harmony import */ var _helpers_dragAndDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/dragAndDrop */ "./src/helpers/dragAndDrop.js");





var startBtn = document.querySelector('.modal.start button');
var endBtn = document.querySelector('.main-content > button');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var game = (0,_factories_game__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Listen to start button

startBtn.addEventListener('click', function () {
  game.startGameFlow();
  modal.classList.remove('active');
  overlay.classList.remove('active');
});
(0,_helpers_fillShipContainer__WEBPACK_IMPORTED_MODULE_1__["default"])();
game.setUpGrids();
(0,_helpers_handleDirection__WEBPACK_IMPORTED_MODULE_3__.handleDirection)();
(0,_helpers_dragAndDrop__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Listen to restart button

endBtn.addEventListener('click', function () {
  game.playAgain();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8s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LEVBRUE7O0FBQ0F1RyxRQUFRLENBQUNsQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0VBQ3JDb0MsSUFBSSxDQUFDbkcsYUFBTDtFQUNBbUQsS0FBSyxDQUFDeEUsU0FBTixDQUFnQnlFLE1BQWhCLENBQXVCLFFBQXZCO0VBQ0FrQixPQUFPLENBQUMzRixTQUFSLENBQWtCeUUsTUFBbEIsQ0FBeUIsUUFBekI7QUFDSCxDQUpEO0FBTUEzRCxzRUFBaUI7QUFDakIwRyxJQUFJLENBQUNwRyxVQUFMO0FBQ0FQLHlFQUFlO0FBQ2ZELGdFQUFnQixJQUVoQjs7QUFDQTJHLE1BQU0sQ0FBQ25DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07RUFDbkNvQyxJQUFJLENBQUNsRyxTQUFMO0FBQ0gsQ0FGRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvYm9hcmRzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvY2hhbmdlVHVybnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvY2xlYXJNb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaGVscGVycy9jb3VudENoaWxkRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvZHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvZmlsbFNoaXBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvZ2FtZUVuZHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvaGFuZGxlRGlyZWN0aW9uLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzL2tlZXBHYW1lUnVubmluZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaGVscGVycy9wb3BTaGlwRnJvbVNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYXJyb3ctcmlnaHQtdGhpbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9hcnJvdy1kb3duLXRoaW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC0tbGlnaHQtYmx1ZTogI2RiZWFmZTtcXG4gICAgLS1ob3Zlci1saWdodC1ibHVlOiAjYmZkYmZlO1xcbiAgICAtLWRhcmstYmx1ZTogIzFlNDBhZjtcXG4gICAgLS1yZWQ6ICM5OTFiMWI7XFxuICAgIC0tZ3JlZW46ICMyMmM1NWU7XFxuICAgIC0tbGlnaHQtZ3JleTogI2U0ZTRlNztcXG4gICAgLS1ncmV5OiAjNzE3MTdhO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZmxlZXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjYlO1xcbiAgICBsZWZ0OiA1JTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDM3NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWdyZXkpXFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEzcHg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGVldCBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2dnbGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDVweDtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgd2lkdGg6ICA2MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi50b2dnbGUtbGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogIDYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGluZy1ncm9vdmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJsdWUpIDg1JSBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uc2xpZGluZy1ncm9vdmU6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkaW5nLWdyb292ZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJsdWUpIDE1JSBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkaW5nLWdyb292ZTo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XFxufVxcblxcbi5nYW1lIHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG5cXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDBweCk7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodC1ibHVlKTtcXG59XFxuXFxuLmNlbGw6LW1vei1kcmFnLW92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmNlbGwuaXNTaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi5jZWxsLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLmNlbGwubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnN1YnRpdGxlIC5zYW1wbGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ubW9kYWwuc3RhcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1vZGFsLmVuZCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDJweCAyMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1haW4tY29udGVudCA+IGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAxNXB4O1xcbiAgICByaWdodDogMjBweDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQzs7SUFFbEMsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xC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O0lBQ2pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLS1saWdodC1ibHVlOiAjZGJlYWZlO1xcbiAgICAtLWhvdmVyLWxpZ2h0LWJsdWU6ICNiZmRiZmU7XFxuICAgIC0tZGFyay1ibHVlOiAjMWU0MGFmO1xcbiAgICAtLXJlZDogIzk5MWIxYjtcXG4gICAgLS1ncmVlbjogIzIyYzU1ZTtcXG4gICAgLS1saWdodC1ncmV5OiAjZTRlNGU3O1xcbiAgICAtLWdyZXk6ICM3MTcxN2E7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5mbGVldCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNiU7XFxuICAgIGxlZnQ6IDUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogMzc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tZ3JleSlcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTNweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsZWV0IGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICByaWdodDogNXB4O1xcbiAgICB3aWR0aDogIDYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnRvZ2dsZS1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAgNjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkaW5nLWdyb292ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmx1ZSkgODUlIG5vLXJlcGVhdCB1cmwoJy4vYXNzZXRzL2Fycm93LXJpZ2h0LXRoaW4ucG5nJyk7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLnNsaWRpbmctZ3Jvb3ZlOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRvcDogMXB4O1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGluZy1ncm9vdmUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ibHVlKSAxNSUgbm8tcmVwZWF0IHVybCgnLi9hc3NldHMvYXJyb3ctZG93bi10aGluLnBuZycpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRpbmctZ3Jvb3ZlOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG59XFxuXFxuLmdhbWUge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcblxcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4uY2VsbDotbW96LWRyYWctb3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uY2VsbC5pc1NoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmNlbGwuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uY2VsbC5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc3VidGl0bGUgLnNhbXBsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5tb2RhbC5zdGFydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubW9kYWwuZW5kIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICBib3gtc2hhZG93OiAzcHggMnB4IDIycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBub25lXFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50ID4gYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDE1cHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcblxcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmVuZGVyR3JpZCA9IGZ1bmN0aW9uKGJvYXJkLCBwbGF5ZXIpIHtcbiAgICBsZXQgZ3JpZFxuICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gJ2h1bWFuJykgXG4gICAgICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQubGVmdCAuZ3JpZCcpXG4gICAgZWxzZSB7XG4gICAgICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQucmlnaHQgLmdyaWQnKVxuICAgIH1cblxuICAgIGdyaWQuaW5uZXJIVE1MID0gJydcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuc2lkZVNpemU7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkLnNpZGVTaXplOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJylcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBqKVxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIGkpXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNlbGwpXG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0YXR1cyA9IGJvYXJkLnNxdWFyZXNbaV1bal1bMF1cblxuICAgICAgICAgICAgICAgIHN3aXRjaChzcXVhcmVTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpc1NoaXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJPXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGJlaGF2aW9yJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0YXR1cyA9IGJvYXJkLm9wcG9uZW50Vmlld1tpXVtqXVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN3aXRjaChzcXVhcmVTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJPXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGJlaGF2aW9yJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdyaWRcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHJlbmRlckdyaWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYm9hcmRzXCI7XG5pbXBvcnQga2VlcEdhbWVSdW5uaW5nIGZyb20gXCIuLi9oZWxwZXJzL2tlZXBHYW1lUnVubmluZ1wiO1xuaW1wb3J0IGFkZERyYWdMaXN0ZW5lcnMgZnJvbSBcIi4uL2hlbHBlcnMvZHJhZ0FuZERyb3BcIjtcbmltcG9ydCB7IGhhbmRsZURpcmVjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2hhbmRsZURpcmVjdGlvblwiO1xuaW1wb3J0IGZpbGxTaGlwQ29udGFpbmVyIGZyb20gXCIuLi9oZWxwZXJzL2ZpbGxTaGlwQ29udGFpbmVyXCI7XG5cbmNvbnN0IEdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBib2FyZDEgPSBHYW1lYm9hcmQoMTApXG4gICAgY29uc3QgYm9hcmQyID0gR2FtZWJvYXJkKDEwKVxuXG4gICAgbGV0IGh1bWFuID0gUGxheWVyKCdodW1hbicsIGJvYXJkMSwgYm9hcmQyKVxuICAgIGxldCBjb21wdXRlciA9IFBsYXllcignY29tcHV0ZXInLCBib2FyZDIsIGJvYXJkMSlcblxuICAgIGNvbnN0IHNldFVwR3JpZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVuZGVyR3JpZChib2FyZDEsIGh1bWFuKVxuICAgICAgICByZW5kZXJHcmlkKGJvYXJkMiwgY29tcHV0ZXIpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRHYW1lRmxvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBrZWVwR2FtZVJ1bm5pbmcoaHVtYW4sIGNvbXB1dGVyLCAnZHJhZ292ZXInKVxuICAgICAgICBrZWVwR2FtZVJ1bm5pbmcoaHVtYW4sIGNvbXB1dGVyLCAnZHJhZ2VudGVyJylcbiAgICAgICAga2VlcEdhbWVSdW5uaW5nKGh1bWFuLCBjb21wdXRlciwgJ2Ryb3AnKVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBib2FyZDEucmVzZXQoKVxuICAgICAgICBib2FyZDIucmVzZXQoKVxuXG4gICAgICAgIGh1bWFuID0gUGxheWVyKCdodW1hbicsIGJvYXJkMSwgYm9hcmQyKVxuICAgICAgICBjb21wdXRlciA9IFBsYXllcignY29tcHV0ZXInLCBib2FyZDIsIGJvYXJkMSlcblxuICAgICAgICBmaWxsU2hpcENvbnRhaW5lcigpXG4gICAgICAgIHNldFVwR3JpZHMoKVxuICAgICAgICBoYW5kbGVEaXJlY3Rpb24oKVxuICAgICAgICBhZGREcmFnTGlzdGVuZXJzKClcbiAgICAgICAgc3RhcnRHYW1lRmxvdygpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VXBHcmlkcyxcbiAgICAgICAgc3RhcnRHYW1lRmxvdyxcbiAgICAgICAgcGxheUFnYWluLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVxuXG5cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCdcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24oc2lkZVNpemUpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiBzaWRlU2l6ZX0sICgpID0+IEFycmF5LmZyb20oe2xlbmd0aDogc2lkZVNpemV9LCAoKSA9PiBbMCwgW251bGwsIG51bGxdXSkpICAgXG5cbiAgICBjb25zdCBvcHBvbmVudFZpZXcgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHNpZGVTaXplfSwgKCkgPT4gQXJyYXkuZnJvbSh7bGVuZ3RoOiBzaWRlU2l6ZX0sICgpID0+IDApKSBcblxuICAgIGNvbnN0IF9fcGxhY2VkU2hpcHMgPSBbXVxuXG4gICAgY29uc3QgX19jYWxjdWxhdGVTcXVhcmVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF9fcGxhY2VkU2hpcHMuZm9yRWFjaCgoW2Nvb3Jkcywgc2hpcF0pID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oZWFsdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2Nvb3Jkc1sxXV1bY29vcmRzWzBdICsgaV1bMF0gPSBzaGlwLmhlYWx0aFtpXVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2Nvb3Jkc1sxXV1bY29vcmRzWzBdICsgaV1bMV1bMF0gPSBzaGlwXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbY29vcmRzWzFdXVtjb29yZHNbMF0gKyBpXVsxXVsxXSA9IGlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2Nvb3Jkc1sxXSArIGldW2Nvb3Jkc1swXV1bMF0gPSBzaGlwLmhlYWx0aFtpXVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2Nvb3Jkc1sxXSArIGldW2Nvb3Jkc1swXV1bMV1bMF0gPSBzaGlwXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbY29vcmRzWzFdICsgaV1bY29vcmRzWzBdXVsxXVsxXSA9IGlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgX19pc1BsYWNlbWVudFBvc3NpYmxlID0gZnVuY3Rpb24oY29vcmRzLCBzaGlwKSB7XG4gICAgICAgIGlmICgoc2hpcC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiBzaWRlU2l6ZSA8IGNvb3Jkc1swXSArIHNoaXAuaGVhbHRoLmxlbmd0aCkgXG4gICAgICAgICAgICB8fCAoc2hpcC5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgJiYgc2lkZVNpemUgPCBjb29yZHNbMV0gKyBzaGlwLmhlYWx0aC5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhlYWx0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tjb29yZHNbMV1dW2Nvb3Jkc1swXSArIGldWzFdWzBdICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tjb29yZHNbMV0gKyBpXVtjb29yZHNbMF1dWzFdWzBdICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgX19tYWtlUmFuZG9tU2hpcHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddXG5cbiAgICAgICAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJlY3Rpb25zLmxlbmd0aCldKVxuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZTEgPSBTaGlwKDMsIGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9ucy5sZW5ndGgpXSlcbiAgICAgICAgY29uc3Qgc3VibWFyaW5lMiA9IFNoaXAoMywgZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJlY3Rpb25zLmxlbmd0aCldKVxuICAgICAgICBjb25zdCBkZXN0cm95ZXIxID0gU2hpcCgyLCBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgIGNvbnN0IGRlc3Ryb3llcjIgPSBTaGlwKDIsIGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9ucy5sZW5ndGgpXSlcblxuICAgICAgICByZXR1cm4gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIHN1Ym1hcmluZTEsIHN1Ym1hcmluZTIsIGRlc3Ryb3llcjEsIGRlc3Ryb3llcjJdXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gZnVuY3Rpb24oY29vcmRzLCBzaGlwKSB7XG4gICAgICAgIGlmIChfX2lzUGxhY2VtZW50UG9zc2libGUoY29vcmRzLCBzaGlwKSkge1xuICAgICAgICAgICAgX19wbGFjZWRTaGlwcy5wdXNoKFtjb29yZHMsIHNoaXBdKVxuICAgICAgICAgICAgX19jYWxjdWxhdGVTcXVhcmVzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdjYW5ub3QgcGxhY2Ugc2hpcCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gZnVuY3Rpb24oc2hpcHNUb1BsYWNlPV9fbWFrZVJhbmRvbVNoaXBzKCkpIHsgICAgICAgIFxuICAgICAgICBzaGlwc1RvUGxhY2UuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXAoW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpZGVTaXplKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2lkZVNpemUpXSwgc2hpcClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICAgIGlmIChzcXVhcmVzW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXVswXSA9PT0gJ1gnIHx8IHNxdWFyZXNbY29vcmRzWzFdXVtjb29yZHNbMF1dWzBdID09PSAnTycpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdjYW5ub3Qgc2hvb3QgdGhlIHNhbWUgc3F1YXJlIHR3aWNlJylcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXVsxXVswXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3F1YXJlc1tjb29yZHNbMV1dW2Nvb3Jkc1swXV1bMF0gPSAnTydcbiAgICAgICAgICAgIG9wcG9uZW50Vmlld1tjb29yZHNbMV1dW2Nvb3Jkc1swXV0gPSAnTydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxdWFyZXNbY29vcmRzWzFdXVtjb29yZHNbMF1dWzFdWzBdLmhpdChzcXVhcmVzW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXVsxXVsxXSlcbiAgICAgICAgICAgIG9wcG9uZW50Vmlld1tjb29yZHNbMV1dW2Nvb3Jkc1swXV0gPSAnWCdcbiAgICAgICAgICAgIF9fY2FsY3VsYXRlU3F1YXJlcygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlUmFuZG9tQXR0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZUF0dGFjayhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2lkZVNpemUpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaWRlU2l6ZSldKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFsbFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF9fcGxhY2VkU2hpcHMubGVuZ3RoID09PSAwKSB0aHJvdyBFcnJvcigndGhlcmUgYXJlIG5vIHNoaXBzIHlldCcpXG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiBfX3BsYWNlZFNoaXBzKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gZGF0YVsxXVxuXG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCByZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGVTaXplOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2lkZVNpemU7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIHNxdWFyZXNbaV1bal0gPSBbMCwgW251bGwsIG51bGxdXVxuICAgICAgICAgICAgICAgIG9wcG9uZW50Vmlld1tpXVtqXSA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9fcGxhY2VkU2hpcHMubGVuZ3RoID0gMFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNpZGVTaXplLFxuICAgICAgICBzcXVhcmVzLFxuICAgICAgICBhbGxTdW5rLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHBsYWNlUmFuZG9tU2hpcHMsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHJlY2VpdmVSYW5kb21BdHRhY2ssXG4gICAgICAgIG9wcG9uZW50VmlldyxcbiAgICAgICAgcmVzZXQsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQiLCJjb25zdCBQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBhbGx5Qm9hcmQsIG9wcEJvYXJkKSB7XG4gICAgbGV0IGlzVHVybiA9IHRydWVcblxuICAgIGlmIChuYW1lID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgIGFsbHlCb2FyZC5wbGFjZVJhbmRvbVNoaXBzKClcblxuICAgICAgICBpc1R1cm4gPSBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFsbHlCb2FyZCxcbiAgICAgICAgb3BwQm9hcmQsXG4gICAgICAgIGlzVHVybixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllciIsImNvbnN0IFNoaXAgPSBmdW5jdGlvbihzaXplLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBoZWFsdGggPSBBcnJheS5mcm9tKHtsZW5ndGg6IHNpemV9LCAoKSA9PiAxKVxuICAgIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gIWhlYWx0aC5pbmNsdWRlcygxKVxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oaW5kZXgpIHx8IGluZGV4ID4gc2l6ZSAtIDEpIHRocm93IG5ldyBFcnJvcigncmFuZ2UgaW52YWxpZCcpXG5cbiAgICAgICAgaGVhbHRoLnNwbGljZShpbmRleCwgMSwgJ1gnKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgaGVhbHRoLFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIGhpdCxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBcbiIsImNvbnN0IGNoYW5nZVR1cm5zID0gZnVuY3Rpb24ocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnNvbGUubG9nKHBsYXllcjEuaXNUdXJuKVxuICAgIGNvbnNvbGUubG9nKHBsYXllcjIuaXNUdXJuKVxuICAgIGNvbnNvbGUubG9nKCcnKVxuICAgIGlmIChwbGF5ZXIxLmlzVHVybikge1xuICAgICAgICBwbGF5ZXIxLmlzVHVybiA9IGZhbHNlXG4gICAgICAgIHBsYXllcjIuaXNUdXJuID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllcjEuaXNUdXJuID0gdHJ1ZVxuICAgICAgICBwbGF5ZXIyLmlzVHVybiA9IGZhbHNlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBsYXllcjEuaXNUdXJuKVxuICAgIGNvbnNvbGUubG9nKHBsYXllcjIuaXNUdXJuKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VUdXJucyIsImNvbnN0IGNsZWFyTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtc2VsZWN0aW9uJylcblxuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyTW9kYWwiLCJjb25zdCBjb3VudENoaWxkRWxlbWVudHMgPSBmdW5jdGlvbihub2RlbGlzdCkge1xuICAgIGxldCBjb3VudGVyID0gMFxuICAgIG5vZGVsaXN0LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKVxuICAgICAgICAgICAgY291bnRlciArPSAxXG4gICAgfSlcblxuICAgIHJldHVybiBjb3VudGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50Q2hpbGRFbGVtZW50cyIsImltcG9ydCB7IHBsYWNlbWVudERpcmVjdGlvbiB9IGZyb20gXCIuL2hhbmRsZURpcmVjdGlvblwiXG5cbmNvbnN0IGFkZERyYWdMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJylcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJylcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGB7XCJzaGlwVHlwZVwiOiBcIiR7c2hpcC5jbGFzc0xpc3QuaXRlbSgxKX1cIiwgXCJzaGlwRGlyZWN0aW9uXCI6IFwiJHtwbGFjZW1lbnREaXJlY3Rpb259XCJ9YClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGREcmFnTGlzdGVuZXJzXG4iLCJjb25zdCBmaWxsU2hpcENvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKVxuXG4gICAgc2hpcENvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgY2FycmllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2Fycmllci5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICBjYXJyaWVyLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FycmllcilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2lzU2hpcCcpXG4gICAgICAgIGNhcnJpZXIuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgIGJhdHRsZXNoaXAuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpXG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVzaGlwKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaXNTaGlwJylcbiAgICAgICAgYmF0dGxlc2hpcC5hcHBlbmRDaGlsZChjZWxsKVxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1hcmluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN1Ym1hcmluZTEuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgc3VibWFyaW5lMS5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnKVxuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2lzU2hpcCcpXG4gICAgICAgIHN1Ym1hcmluZTEuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtYXJpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzdWJtYXJpbmUyLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgIHN1Ym1hcmluZTIuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJylcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZTIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJylcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpc1NoaXAnKVxuICAgICAgICBzdWJtYXJpbmUyLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRlc3Ryb3llcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc3Ryb3llcjEuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgZGVzdHJveWVyMS5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXInKVxuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzdHJveWVyMSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2lzU2hpcCcpXG4gICAgICAgIGRlc3Ryb3llcjEuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXN0cm95ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXN0cm95ZXIyLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgIGRlc3Ryb3llcjIuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJylcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3Ryb3llcjIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJylcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpc1NoaXAnKVxuICAgICAgICBkZXN0cm95ZXIyLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaWxsU2hpcENvbnRhaW5lciIsImltcG9ydCBjbGVhck1vZGFsIGZyb20gJy4vY2xlYXJNb2RhbCdcblxuY29uc3QgZ2FtZUVuZHMgPSBmdW5jdGlvbih3aW5uZXJOYW1lKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXG4gICAgY2xlYXJNb2RhbCgpXG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaWYgKHdpbm5lck5hbWUgPT09ICdodW1hbicpXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHVsYXRpb25zICR7d2lubmVyTmFtZX0sIHlvdSB3b24hYFxuICAgIGVsc2VcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGBZb3UgbG9zdCwgJHt3aW5uZXJOYW1lfSBiZWF0IHlvdSA6KGAgICAgXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQocClcblxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZW5kJylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUVuZHMiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHBsYWNlbWVudERpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xuXG5jb25zdCBoYW5kbGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24nKVxuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpXG4gICAgICAgICAgICBwbGFjZW1lbnREaXJlY3Rpb24gPSAndmVydGljYWwnXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBsYWNlbWVudERpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xuICAgIH0pXG59XG5cbmV4cG9ydCB7IGhhbmRsZURpcmVjdGlvbiwgcGxhY2VtZW50RGlyZWN0aW9uIH0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHJlbmRlckdyaWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYm9hcmRzXCJcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9mYWN0b3JpZXMvc2hpcFwiXG5pbXBvcnQgcG9wU2hpcEZyb21TZWxlY3Rpb24gZnJvbSBcIi4vcG9wU2hpcEZyb21TZWxlY3Rpb25cIlxuaW1wb3J0IGNoYW5nZVR1cm5zIGZyb20gXCIuL2NoYW5nZVR1cm5zXCJcbmltcG9ydCBjb3VudENoaWxkRWxlbWVudHMgZnJvbSBcIi4vY291bnRDaGlsZEVsZW1lbnRzXCJcbmltcG9ydCBnYW1lRW5kcyBmcm9tIFwiLi9nYW1lRW5kc1wiXG5cbmNvbnN0IGNoZWNrTmV4dFBoYXNlID0gZnVuY3Rpb24ocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKVxuICAgIGNvbnNvbGUubG9nKGNvdW50Q2hpbGRFbGVtZW50cyhzaGlwQ29udGFpbmVyLmNoaWxkTm9kZXMpKVxuICAgIGlmIChjb3VudENoaWxkRWxlbWVudHMoc2hpcENvbnRhaW5lci5jaGlsZE5vZGVzKSA+IDApIHsgLy8gU2hpcCBwbGFjZW1lbnQgcGhhc2VcbiAgICAgICAga2VlcEdhbWVSdW5uaW5nKHBsYXllcjEsIHBsYXllcjIsICdkcmFnb3ZlcicpXG4gICAgICAgIGtlZXBHYW1lUnVubmluZyhwbGF5ZXIxLCBwbGF5ZXIyLCAnZHJhZ2VudGVyJylcbiAgICAgICAga2VlcEdhbWVSdW5uaW5nKHBsYXllcjEsIHBsYXllcjIsICdkcm9wJylcbiAgICB9IGVsc2UgaWYgKHBsYXllcjIuYWxseUJvYXJkLmFsbFN1bmsoKSkgeyAvLyBDaGVjayBmb3IgaHVtYW4gd2luIGNvbmRpdGlvbiBcbiAgICAgICAgZ2FtZUVuZHMocGxheWVyMS5uYW1lKVxuICAgIH0gZWxzZSBpZiAocGxheWVyMS5hbGx5Qm9hcmQuYWxsU3VuaygpKSB7IC8vIENoZWNrIGZvciBjb21wdXRlciB3aW4gY29uZGl0aW9uXG4gICAgICAgIGdhbWVFbmRzKHBsYXllcjIubmFtZSlcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuaXNUdXJuKSB7IC8vIFBsYXllciAxKGh1bWFuKSBhdHRhY2sgcGhhc2VcbiAgICAgICAgY2hhbmdlVHVybnMocGxheWVyMSwgcGxheWVyMilcbiAgICAgICAga2VlcEdhbWVSdW5uaW5nKHBsYXllcjIsIHBsYXllcjEsICdjbGljaycpIFxuICAgIH0gZWxzZSBpZiAocGxheWVyMi5pc1R1cm4pIHsgLy8gUGxheWVyIDIoY29tcHV0ZXIpIGF0dGFjayBwaGFzZVxuICAgICAgICBjaGFuZ2VUdXJucyhwbGF5ZXIxLCBwbGF5ZXIyKVxuICAgICAgICBwbGF5ZXIxLmFsbHlCb2FyZC5yZWNlaXZlUmFuZG9tQXR0YWNrKClcbiAgICAgICAgcmVuZGVyR3JpZChwbGF5ZXIxLmFsbHlCb2FyZCwgcGxheWVyMSlcbiAgICAgICAgY2hlY2tOZXh0UGhhc2UocGxheWVyMSwgcGxheWVyMilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtlZXBHYW1lUnVubmluZyhwbGF5ZXIxLCBwbGF5ZXIyLCBhY3Rpb24pIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllcjEuYWxseUJvYXJkXG4gICAgbGV0IGdyaWRcbiAgICBpZiAocGxheWVyMS5uYW1lID09PSAnaHVtYW4nKSB7XG4gICAgICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQubGVmdCAuZ3JpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5yaWdodCAuZ3JpZCcpXG4gICAgfVxuXG4gICAgY29uc3QgY2VsbHMgPSBncmlkLmNoaWxkTm9kZXNcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmRhdGFzZXQueCwgMTApXG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmRhdGFzZXQueSwgMTApXG5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHg9JHt4fXk9JHt5fWApXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJHcmlkKGJvYXJkLCBwbGF5ZXIxKSAvLyBDaGFuZ2UgdHVybnNcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tOZXh0UGhhc2UocGxheWVyMiwgcGxheWVyMSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdkcmFnb3ZlcicgfHwgYWN0aW9uID09PSAnZHJhZ2VudGVyJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnZHJvcCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJykpXG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iai5zaGlwVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYXJyaWVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUsIG9iai5zaGlwRGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoW3gsIHldLCBjYXJyaWVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcFNoaXBGcm9tU2VsZWN0aW9uKCdjYXJyaWVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJHcmlkKGJvYXJkLCBwbGF5ZXIxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTmV4dFBoYXNlKHBsYXllcjEsIHBsYXllcjIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgb2JqLnNoaXBEaXJlY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChbeCwgeV0sIGJhdHRsZXNoaXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wU2hpcEZyb21TZWxlY3Rpb24oJ2JhdHRsZXNoaXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckdyaWQoYm9hcmQsIHBsYXllcjEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tOZXh0UGhhc2UocGxheWVyMSwgcGxheWVyMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3VibWFyaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgb2JqLnNoaXBEaXJlY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChbeCwgeV0sIHN1Ym1hcmluZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BTaGlwRnJvbVNlbGVjdGlvbignc3VibWFyaW5lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJHcmlkKGJvYXJkLCBwbGF5ZXIxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTmV4dFBoYXNlKHBsYXllcjEsIHBsYXllcjIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rlc3Ryb3llcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDIsIG9iai5zaGlwRGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoW3gsIHldLCBkZXN0cm95ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wU2hpcEZyb21TZWxlY3Rpb24oJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyR3JpZChib2FyZCwgcGxheWVyMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja05leHRQaGFzZShwbGF5ZXIxLCBwbGF5ZXIyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgYmVoYXZpb3InKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KSAgIFxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQga2VlcEdhbWVSdW5uaW5nIiwiY29uc3QgcG9wU2hpcEZyb21TZWxlY3Rpb24gPSBmdW5jdGlvbihzaGlwVHlwZSkge1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKVxuXG4gICAgY29uc3Qgc2hpcE9uQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXAuJHtzaGlwVHlwZX1gKVxuXG4gICAgc2hpcENvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwT25Cb3gpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvcFNoaXBGcm9tU2VsZWN0aW9uIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgZmlsbFNoaXBDb250YWluZXIgZnJvbSAnLi9oZWxwZXJzL2ZpbGxTaGlwQ29udGFpbmVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZmFjdG9yaWVzL2dhbWUnO1xuaW1wb3J0IHsgaGFuZGxlRGlyZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL2hhbmRsZURpcmVjdGlvbic7XG5pbXBvcnQgYWRkRHJhZ0xpc3RlbmVycyBmcm9tICcuL2hlbHBlcnMvZHJhZ0FuZERyb3AnO1xuXG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5zdGFydCBidXR0b24nKVxuY29uc3QgZW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCA+IGJ1dHRvbicpXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxuXG5jb25zdCBnYW1lID0gR2FtZSgpXG5cbi8vIExpc3RlbiB0byBzdGFydCBidXR0b25cbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbWUuc3RhcnRHYW1lRmxvdygpXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG59KVxuXG5maWxsU2hpcENvbnRhaW5lcigpXG5nYW1lLnNldFVwR3JpZHMoKVxuaGFuZGxlRGlyZWN0aW9uKClcbmFkZERyYWdMaXN0ZW5lcnMoKVxuXG4vLyBMaXN0ZW4gdG8gcmVzdGFydCBidXR0b25cbmVuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgZ2FtZS5wbGF5QWdhaW4oKVxufSlcblxuXG5cbiJdLCJuYW1lcyI6WyJyZW5kZXJHcmlkIiwiYm9hcmQiLCJwbGF5ZXIiLCJncmlkIiwibmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImkiLCJzaWRlU2l6ZSIsImoiLCJjZWxsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwic3F1YXJlU3RhdHVzIiwic3F1YXJlcyIsImNvbnNvbGUiLCJsb2ciLCJvcHBvbmVudFZpZXciLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJrZWVwR2FtZVJ1bm5pbmciLCJhZGREcmFnTGlzdGVuZXJzIiwiaGFuZGxlRGlyZWN0aW9uIiwiZmlsbFNoaXBDb250YWluZXIiLCJHYW1lIiwiYm9hcmQxIiwiYm9hcmQyIiwiaHVtYW4iLCJjb21wdXRlciIsInNldFVwR3JpZHMiLCJzdGFydEdhbWVGbG93IiwicGxheUFnYWluIiwicmVzZXQiLCJTaGlwIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiX19wbGFjZWRTaGlwcyIsIl9fY2FsY3VsYXRlU3F1YXJlcyIsImZvckVhY2giLCJjb29yZHMiLCJzaGlwIiwiaGVhbHRoIiwiZGlyZWN0aW9uIiwiX19pc1BsYWNlbWVudFBvc3NpYmxlIiwiX19tYWtlUmFuZG9tU2hpcHMiLCJkaXJlY3Rpb25zIiwiY2FycmllciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImJhdHRsZXNoaXAiLCJzdWJtYXJpbmUxIiwic3VibWFyaW5lMiIsImRlc3Ryb3llcjEiLCJkZXN0cm95ZXIyIiwicGxhY2VTaGlwIiwicHVzaCIsIkVycm9yIiwicGxhY2VSYW5kb21TaGlwcyIsInNoaXBzVG9QbGFjZSIsImUiLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwicmVjZWl2ZVJhbmRvbUF0dGFjayIsImFsbFN1bmsiLCJkYXRhIiwiaXNTdW5rIiwiYWxseUJvYXJkIiwib3BwQm9hcmQiLCJpc1R1cm4iLCJzaXplIiwiaW5jbHVkZXMiLCJpbmRleCIsIk51bWJlciIsImlzTmFOIiwic3BsaWNlIiwiY2hhbmdlVHVybnMiLCJwbGF5ZXIxIiwicGxheWVyMiIsImNsZWFyTW9kYWwiLCJtb2RhbCIsInJlbW92ZSIsImNvdW50Q2hpbGRFbGVtZW50cyIsIm5vZGVsaXN0IiwiY291bnRlciIsIm5vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJwbGFjZW1lbnREaXJlY3Rpb24iLCJzaGlwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsIml0ZW0iLCJzaGlwQ29udGFpbmVyIiwiZ2FtZUVuZHMiLCJ3aW5uZXJOYW1lIiwib3ZlcmxheSIsInAiLCJ0ZXh0Q29udGVudCIsImNoZWNrYm94IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwicG9wU2hpcEZyb21TZWxlY3Rpb24iLCJjaGVja05leHRQaGFzZSIsImNoaWxkTm9kZXMiLCJhY3Rpb24iLCJjZWxscyIsIngiLCJwYXJzZUludCIsImRhdGFzZXQiLCJ5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsImdldERhdGEiLCJzaGlwVHlwZSIsInNoaXBEaXJlY3Rpb24iLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJzaGlwT25Cb3giLCJyZW1vdmVDaGlsZCIsInN0YXJ0QnRuIiwiZW5kQnRuIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=