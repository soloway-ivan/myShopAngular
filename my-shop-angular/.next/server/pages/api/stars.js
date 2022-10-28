"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stars";
exports.ids = ["pages/api/stars"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBRWhELElBQUlHLElBQXNDLEVBQUVELE9BQU9ELE1BQU0sR0FBR0E7QUFFNUQsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zaG9wLWFuZ3VsYXIvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/stars.js":
/*!****************************!*\
  !*** ./pages/api/stars.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ assetHandler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function assetHandler(req, res) {\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const stars = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].star.findMany();\n                res.status(200).json(stars);\n            } catch (e) {\n                console.error(\"Request error\", e);\n                res.status(500).json({\n                    error: \"Error fetching posts\"\n                });\n            }\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUM7QUFFdEIsZUFBZUMsYUFBYUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDbkQsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFFbkIsT0FBUUU7UUFDTixLQUFLO1lBQ0gsSUFBSTtnQkFDRixNQUFNQyxRQUFRLE1BQU1MLGlFQUFvQjtnQkFDeENHLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKO1lBQ3ZCLEVBQUUsT0FBT0ssR0FBRztnQkFDVkMsUUFBUUMsS0FBSyxDQUFDLGlCQUFpQkY7Z0JBQy9CUCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRyxPQUFPO2dCQUF1QjtZQUN2RDtZQUNBLEtBQUs7UUFDUDtZQUNFVCxJQUFJVSxTQUFTLENBQUMsU0FBUztnQkFBQzthQUFNO1lBQzlCVixJQUFJSyxNQUFNLENBQUMsS0FBS00sR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFVixPQUFPLFlBQVksQ0FBQztZQUNsRCxLQUFLO0lBQ1Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktc2hvcC1hbmd1bGFyLy4vcGFnZXMvYXBpL3N0YXJzLmpzPzRhMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXNzZXRIYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcVxyXG5cclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSAnR0VUJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFycyA9IGF3YWl0IHByaXNtYS5zdGFyLmZpbmRNYW55KClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzdGFycylcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlcXVlc3QgZXJyb3InLCBlKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBmZXRjaGluZyBwb3N0cycgfSlcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKVxyXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcclxuICAgICAgYnJlYWtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiYXNzZXRIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhcnMiLCJzdGFyIiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/stars.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stars.js"));
module.exports = __webpack_exports__;

})();