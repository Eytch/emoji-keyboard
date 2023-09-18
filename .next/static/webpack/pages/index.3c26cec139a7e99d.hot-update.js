"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Grid.js":
/*!****************************!*\
  !*** ./components/Grid.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Grid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Grid(props) {\n    const filteredEmojis = props.data.filter((emo)=>!emo.unicodeName.startsWith(\"E0\") && !emo.unicodeName.startsWith(\"E1\") && !emo.unicodeName.startsWith(\"E2\") && !emo.unicodeName.startsWith(\"E3\") && !emo.unicodeName.startsWith(\"E4\") && !emo.unicodeName.startsWith(\"E5\") && !emo.unicodeName.startsWith(\"E6\") && !emo.unicodeName.startsWith(\"E7\") && !emo.unicodeName.startsWith(\"E8\") && !emo.unicodeName.startsWith(\"E9\"));\n    const elements = filteredEmojis.map((emoji)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 cursor-pointer flex justify-center items-center text-base bg-midnight border border-secondary hover:border-main w-12 h-12 rounded-md transition-all ease-in-out md:text-2xl\",\n            onClick: ()=>Copied(emoji.character),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: emoji.character\n            }, void 0, false, {\n                fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        }, emoji.unicodeName, false, {\n            fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, this));\n    const noData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"No Data!\"\n        }, void 0, false, {\n            fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n    function Copied(character) {\n        navigator.clipboard.writeText(character);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Copied! \\uD83C\\uDF89\", {\n            position: \"top-right\",\n            autoClose: 1000,\n            hideProgressBar: true,\n            closeOnClick: true,\n            pauseOnHover: false,\n            draggable: true,\n            closeButton: false,\n            transition: react_toastify__WEBPACK_IMPORTED_MODULE_2__.Slide,\n            draggablePercent: 60,\n            theme: \"dark\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap gap-[10px] md:gap-3\",\n        children: [\n            elements,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                limit: 3\n            }, void 0, false, {\n                fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_c = Grid;\nvar _c;\n$RefreshReg$(_c, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUM2QjtBQUNJO0FBQ1o7QUFFaEMsU0FBU08sS0FBS0MsS0FBSyxFQUFFO0lBQ2xDLE1BQU1DLGlCQUFpQkQsTUFBTUUsSUFBSSxDQUFDQyxNQUFNLENBQ3RDLENBQUNDLE1BQ0MsQ0FBQ0EsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUMsU0FDNUIsQ0FBQ0YsSUFBSUMsV0FBVyxDQUFDQyxVQUFVLENBQUM7SUFHaEMsTUFBTUMsV0FBV04sZUFBZU8sR0FBRyxDQUFDLENBQUNDLHNCQUNuQyw4REFBQ0M7WUFFQ0MsV0FBVTtZQUNWQyxTQUFTLElBQU1DLE9BQU9KLE1BQU1LLFNBQVM7c0JBRXJDLDRFQUFDQzswQkFBSU4sTUFBTUssU0FBUzs7Ozs7O1dBSmZMLE1BQU1KLFdBQVc7Ozs7O0lBUTFCLE1BQU1XLHVCQUNKLDhEQUFDTjtrQkFDQyw0RUFBQ0s7c0JBQUc7Ozs7Ozs7Ozs7O0lBSVIsU0FBU0YsT0FBT0MsU0FBUyxFQUFFO1FBQ3pCRyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0w7UUFDOUJwQix5REFBYSxDQUFDLHdCQUFhO1lBQ3pCMkIsVUFBVTtZQUNWQyxXQUFXO1lBQ1hDLGlCQUFpQixJQUFJO1lBQ3JCQyxjQUFjLElBQUk7WUFDbEJDLGNBQWMsS0FBSztZQUNuQkMsV0FBVyxJQUFJO1lBQ2ZDLGFBQWEsS0FBSztZQUNsQkMsWUFBWWpDLGlEQUFLQTtZQUNqQmtDLGtCQUFrQjtZQUNsQkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3BCO1FBQUlDLFdBQVU7O1lBQ1pKOzBCQUNELDhEQUFDZCwwREFBY0E7Z0JBQUNzQyxPQUFPOzs7Ozs7Ozs7Ozs7QUFHN0IsQ0FBQztLQXJEdUJoQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dyaWQuanM/OWI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgU2xpZGUsIFpvb20sIEZsaXAsIEJvdW5jZSB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcbiAgY29uc3QgZmlsdGVyZWRFbW9qaXMgPSBwcm9wcy5kYXRhLmZpbHRlcihcbiAgICAoZW1vKSA9PlxuICAgICAgIWVtby51bmljb2RlTmFtZS5zdGFydHNXaXRoKCdFMCcpICYmXG4gICAgICAhZW1vLnVuaWNvZGVOYW1lLnN0YXJ0c1dpdGgoJ0UxJykgJiZcbiAgICAgICFlbW8udW5pY29kZU5hbWUuc3RhcnRzV2l0aCgnRTInKSAmJlxuICAgICAgIWVtby51bmljb2RlTmFtZS5zdGFydHNXaXRoKCdFMycpICYmXG4gICAgICAhZW1vLnVuaWNvZGVOYW1lLnN0YXJ0c1dpdGgoJ0U0JykgJiZcbiAgICAgICFlbW8udW5pY29kZU5hbWUuc3RhcnRzV2l0aCgnRTUnKSAmJlxuICAgICAgIWVtby51bmljb2RlTmFtZS5zdGFydHNXaXRoKCdFNicpICYmXG4gICAgICAhZW1vLnVuaWNvZGVOYW1lLnN0YXJ0c1dpdGgoJ0U3JykgJiZcbiAgICAgICFlbW8udW5pY29kZU5hbWUuc3RhcnRzV2l0aCgnRTgnKSAmJlxuICAgICAgIWVtby51bmljb2RlTmFtZS5zdGFydHNXaXRoKCdFOScpXG4gICk7XG5cbiAgY29uc3QgZWxlbWVudHMgPSBmaWx0ZXJlZEVtb2ppcy5tYXAoKGVtb2ppKSA9PiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtlbW9qaS51bmljb2RlTmFtZX1cbiAgICAgIGNsYXNzTmFtZT0ncC00IGN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtYmFzZSBiZy1taWRuaWdodCBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSBob3Zlcjpib3JkZXItbWFpbiB3LTEyIGgtMTIgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBtZDp0ZXh0LTJ4bCdcbiAgICAgIG9uQ2xpY2s9eygpID0+IENvcGllZChlbW9qaS5jaGFyYWN0ZXIpfVxuICAgID5cbiAgICAgIDxoMz57ZW1vamkuY2hhcmFjdGVyfTwvaDM+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIGNvbnN0IG5vRGF0YSA9IChcbiAgICA8ZGl2PlxuICAgICAgPGgzPk5vIERhdGEhPC9oMz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBmdW5jdGlvbiBDb3BpZWQoY2hhcmFjdGVyKSB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY2hhcmFjdGVyKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdDb3BpZWQhIPCfjoknLCB7XG4gICAgICBwb3NpdGlvbjogJ3RvcC1yaWdodCcsXG4gICAgICBhdXRvQ2xvc2U6IDEwMDAsXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxuICAgICAgdHJhbnNpdGlvbjogU2xpZGUsXG4gICAgICBkcmFnZ2FibGVQZXJjZW50OiA2MCxcbiAgICAgIHRoZW1lOiAnZGFyaycsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBnYXAtWzEwcHhdIG1kOmdhcC0zJz5cbiAgICAgIHtlbGVtZW50c31cbiAgICAgIDxUb2FzdENvbnRhaW5lciBsaW1pdD17M30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJTbGlkZSIsIlpvb20iLCJGbGlwIiwiQm91bmNlIiwiR3JpZCIsInByb3BzIiwiZmlsdGVyZWRFbW9qaXMiLCJkYXRhIiwiZmlsdGVyIiwiZW1vIiwidW5pY29kZU5hbWUiLCJzdGFydHNXaXRoIiwiZWxlbWVudHMiLCJtYXAiLCJlbW9qaSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb3BpZWQiLCJjaGFyYWN0ZXIiLCJoMyIsIm5vRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsImNsb3NlQnV0dG9uIiwidHJhbnNpdGlvbiIsImRyYWdnYWJsZVBlcmNlbnQiLCJ0aGVtZSIsImxpbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Grid.js\n"));

/***/ })

});