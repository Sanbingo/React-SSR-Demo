/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/routes */ \"./src/routes.js\");\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/server/index.js\";\n\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\n/*\n// 渲染静态内容\napp.get('/*', (req, res) => {\n  const context = {};\n  const app = ReactDOMServer.renderToString(\n    <StaticRouter location={req.url} context={context}>\n      <App />\n    </StaticRouter>\n  );\n\n  const indexFile = path.resolve('./build/index.html');\n  fs.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong: ', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    if (context.status === 404) {\n      res.status(404);\n    }\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n\n    return res.send(\n      data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`)\n    );\n  });\n});\n*/\n\n/*\n// 渲染时加载初始化数据\napp.get('/*', (req, res) => {\n  const currentRoute =\n    Routes.find(route => matchPath(req.url, route)) || {};\n  let promise;\n\n  if (currentRoute.loadData) {\n    promise = currentRoute.loadData();\n  } else {\n    promise = Promise.resolve(null);\n  }\n\n  promise.then(data => {\n    // Let's add the data to the context\n    const context = { data };\n\n    const app = ReactDOMServer.renderToString(\n      <StaticRouter location={req.url} context={context}>\n        <App />\n      </StaticRouter>\n    );\n\n    const indexFile = path.resolve('./build/index.html');\n    fs.readFile(indexFile, 'utf8', (err, indexData) => {\n      if (err) {\n        console.error('Something went wrong:', err);\n        return res.status(500).send('Oops, better luck next time!');\n      }\n\n      if (context.status === 404) {\n        res.status(404);\n      }\n      if (context.url) {\n        return res.redirect(301, context.url);\n      }\n\n      return res.send(\n        indexData\n          .replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`)\n          .replace(\n            '</body>',\n            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`\n          )\n      );\n    });\n  });\n});\n*/\n// 改进，使用macthRoutes代替matchPath\n\napp.get('/*', (req, res) => {\n  const matchingRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"matchRoutes\"])(_src_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"], req.url);\n  let promises = [];\n  matchingRoutes.forEach(item => {\n    if (item.route && item.route.loadData) {\n      promises.push(item.route.loadData());\n    }\n  });\n  Promise.all(promises).then(dataArr => {\n    const context = {};\n    matchingRoutes.forEach((item, index) => {\n      if (item.match && item.match.path) {\n        const pathname = item.match.path;\n        context[pathname] = dataArr[index];\n      }\n    });\n    const data = context[req.url] || {};\n    const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n      location: req.url,\n      context: data,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125\n      },\n      __self: undefined\n    })));\n    const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n    fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, indexData) => {\n      if (err) {\n        console.error('Something went wrong:', err);\n        return res.status(500).send('Oops, better luck next time!');\n      }\n\n      if (context.status === 404) {\n        res.status(404);\n      }\n\n      if (context.url) {\n        return res.redirect(301, context.url);\n      }\n\n      return res.send(indexData.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")).replace('</body>', \"<script>window.__ROUTE_DATA__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data), \"</script></body>\")));\n    });\n  });\n});\napp.listen(PORT, () => {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts */ \"./src/posts.js\");\n/* harmony import */ var _notfound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound */ \"./src/notfound.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/App.js\";\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/todos\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19\n    },\n    __self: undefined\n  }, \"Todos\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/posts\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22\n    },\n    __self: undefined\n  }, \"Posts\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26\n    },\n    __self: undefined\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])));\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/Home.js\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: undefined\n  }, \"Hello \", props.name);\n});\n\n//# sourceURL=webpack:///./src/Home.js?");

/***/ }),

/***/ "./src/NotFound.js":
/*!*************************!*\
  !*** ./src/NotFound.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/NotFound.js\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  staticContext = {}\n}) => {\n  staticContext.status = 404;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5\n    },\n    __self: undefined\n  }, \"Oops, nothing here !\");\n});\n\n//# sourceURL=webpack:///./src/NotFound.js?");

/***/ }),

/***/ "./src/Posts.js":
/*!**********************!*\
  !*** ./src/Posts.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/Posts.js\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3\n  },\n  __self: undefined\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3\n  },\n  __self: undefined\n}, \"Posts...\")));\n\n//# sourceURL=webpack:///./src/Posts.js?");

/***/ }),

/***/ "./src/Todos.js":
/*!**********************!*\
  !*** ./src/Todos.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_loadData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/loadData */ \"./src/helpers/loadData.js\");\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/Todos.js\";\n\n\n\nclass Todos extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    if (props.staticContext && props.staticContext.data) {\n      this.state = {\n        data: props.staticContext.data\n      };\n    } else {\n      this.state = {\n        data: []\n      };\n    }\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      if (window.__ROUTE_DATA__) {\n        this.setState({\n          data: window.__ROUTE_DATA__\n        });\n        delete window.__ROUTE_DATA__;\n      } else {\n        Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todos').then(data => {\n          this.setState({\n            data\n          });\n        });\n      }\n    }, 0);\n  }\n\n  render() {\n    const data = this.state.data;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    }, data.map(todo => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: todo.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    }, todo.title)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\n//# sourceURL=webpack:///./src/Todos.js?");

/***/ }),

/***/ "./src/helpers/loadData.js":
/*!*********************************!*\
  !*** ./src/helpers/loadData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resourceType => {\n  return fetch(\"https://jsonplaceholder.typicode.com/\".concat(resourceType)).then(res => {\n    return res.json();\n  }).then(data => {\n    // only keep 10 first results\n    return data.filter((_, idx) => idx < 10);\n  });\n});\n\n//# sourceURL=webpack:///./src/helpers/loadData.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/home.js\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: undefined\n  }, \"Hello \", props.name);\n});\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/notfound.js":
/*!*************************!*\
  !*** ./src/notfound.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/notfound.js\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  staticContext = {}\n}) => {\n  staticContext.status = 404;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5\n    },\n    __self: undefined\n  }, \"Oops, nothing here !\");\n});\n\n//# sourceURL=webpack:///./src/notfound.js?");

/***/ }),

/***/ "./src/posts.js":
/*!**********************!*\
  !*** ./src/posts.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/posts.js\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3\n  },\n  __self: undefined\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3\n  },\n  __self: undefined\n}, \"Posts...\")));\n\n//# sourceURL=webpack:///./src/posts.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts */ \"./src/Posts.js\");\n/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todos */ \"./src/Todos.js\");\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound */ \"./src/NotFound.js\");\n/* harmony import */ var _helpers_loadData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/loadData */ \"./src/helpers/loadData.js\");\n\n\n\n\n\n\nconst Routes = [{\n  path: '/',\n  exact: true,\n  component: _Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/posts',\n  component: _Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  loadData: () => Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('posts')\n}, {\n  path: '/todos',\n  component: _Todos__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  loadData: () => Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('todos')\n}, {\n  component: _NotFound__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_loadData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/loadData */ \"./src/helpers/loadData.js\");\nvar _jsxFileName = \"/Users/san/Project/react-ssr-demo/src/todos.js\";\n\n\n\nclass Todos extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    if (props.staticContext && props.staticContext.data) {\n      this.state = {\n        data: props.staticContext.data\n      };\n    } else {\n      this.state = {\n        data: []\n      };\n    }\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      if (window.__ROUTE_DATA__) {\n        this.setState({\n          data: window.__ROUTE_DATA__\n        });\n        delete window.__ROUTE_DATA__;\n      } else {\n        Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todos').then(data => {\n          this.setState({\n            data\n          });\n        });\n      }\n    }, 0);\n  }\n\n  render() {\n    const data = this.state.data;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    }, data.map(todo => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: todo.id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    }, todo.title)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\n//# sourceURL=webpack:///./src/todos.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });