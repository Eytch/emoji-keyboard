"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/activity",{

/***/ "./components/Grid.js":
/*!****************************!*\
  !*** ./components/Grid.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Grid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Grid(props) {\n    // const filteredEmojis = props.data.filter(\n    //   (emo) =>\n    //     !emo.unicodeName.startsWith('E0') &&\n    //     !emo.unicodeName.startsWith('E1') &&\n    //     !emo.unicodeName.startsWith('E2') &&\n    //     !emo.unicodeName.startsWith('E3') &&\n    //     !emo.unicodeName.startsWith('E4') &&\n    //     !emo.unicodeName.startsWith('E5') &&\n    //     !emo.unicodeName.startsWith('E6') &&\n    //     !emo.unicodeName.startsWith('E7') &&\n    //     !emo.unicodeName.startsWith('E8') &&\n    //     !emo.unicodeName.startsWith('E9')\n    // );\n    const elements = props.data.map((emoji)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 cursor-pointer flex justify-center items-center text-base bg-midnight border border-secondary hover:border-main w-12 h-12 rounded-md transition-all ease-in-out md:text-2xl\",\n            onClick: ()=>Copied(emoji.character),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: emoji.character\n            }, void 0, false, {\n                fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        }, emoji.unicodeName, false, {\n            fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, this));\n    const noData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"No Data!\"\n        }, void 0, false, {\n            fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n    function Copied(character) {\n        navigator.clipboard.writeText(character);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Copied! \\uD83C\\uDF89\", {\n            position: \"top-right\",\n            autoClose: 1000,\n            hideProgressBar: true,\n            closeOnClick: true,\n            pauseOnHover: false,\n            draggable: true,\n            closeButton: false,\n            transition: react_toastify__WEBPACK_IMPORTED_MODULE_2__.Slide,\n            draggablePercent: 60,\n            theme: \"dark\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap gap-[10px] md:gap-3\",\n        children: [\n            elements,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                limit: 3\n            }, void 0, false, {\n                fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ahmadhesham/Code/emoji-keyboard/components/Grid.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_c = Grid;\nvar _c;\n$RefreshReg$(_c, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUM2QjtBQUNJO0FBQ1o7QUFFaEMsU0FBU08sS0FBS0MsS0FBSyxFQUFFO0lBQ2xDLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0Msd0NBQXdDO0lBQ3hDLEtBQUs7SUFFTCxNQUFNQyxXQUFXRCxNQUFNRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxzQkFDL0IsOERBQUNDO1lBRUNDLFdBQVU7WUFDVkMsU0FBUyxJQUFNQyxPQUFPSixNQUFNSyxTQUFTO3NCQUVyQyw0RUFBQ0M7MEJBQUlOLE1BQU1LLFNBQVM7Ozs7OztXQUpmTCxNQUFNTyxXQUFXOzs7OztJQVExQixNQUFNQyx1QkFDSiw4REFBQ1A7a0JBQ0MsNEVBQUNLO3NCQUFHOzs7Ozs7Ozs7OztJQUlSLFNBQVNGLE9BQU9DLFNBQVMsRUFBRTtRQUN6QkksVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNOO1FBQzlCZix5REFBYSxDQUFDLHdCQUFhO1lBQ3pCdUIsVUFBVTtZQUNWQyxXQUFXO1lBQ1hDLGlCQUFpQixJQUFJO1lBQ3JCQyxjQUFjLElBQUk7WUFDbEJDLGNBQWMsS0FBSztZQUNuQkMsV0FBVyxJQUFJO1lBQ2ZDLGFBQWEsS0FBSztZQUNsQkMsWUFBWTdCLGlEQUFLQTtZQUNqQjhCLGtCQUFrQjtZQUNsQkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3JCO1FBQUlDLFdBQVU7O1lBQ1pMOzBCQUNELDhEQUFDUiwwREFBY0E7Z0JBQUNrQyxPQUFPOzs7Ozs7Ozs7Ozs7QUFHN0IsQ0FBQztLQXJEdUI1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dyaWQuanM/OWI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgU2xpZGUsIFpvb20sIEZsaXAsIEJvdW5jZSB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcbiAgLy8gY29uc3QgZmlsdGVyZWRFbW9qaXMgPSBwcm9wcy5kYXRhLmZpbHRlcihcbiAgLy8gICAoZW1vKSA9PlxuICAvLyAgICAgIWVtby51bmljb2RlTmFtZS5zdGFydHNXaXRoKCdFMCcpICYmXG4gIC8vICAgICAhZW1vLnVuaWNvZGVOYW1lLnN0YXJ0c1dpdGgoJ0UxJykgJiZcbiAgLy8gICAgICFlbW8udW5pY29kZU5hbWUuc3RhcnRzV2l0aCgnRTInKSAmJlxuICAvLyAgICAgIWVtby51bmljb2RlTmFtZS5zdGFydHNXaXRoKCdFMycpICYmXG4gIC8vICAgICAhZW1vLnVuaWNvZGVOYW1lLnN0YXJ0c1dpdGgoJ0U0JykgJiZcbiAgLy8gICAgICFlbW8udW5pY29kZU5hbWUuc3RhcnRzV2l0aCgnRTUnKSAmJlxuICAvLyAgICAgIWVtby51bmljb2RlTmFtZS5zdGFydHNXaXRoKCdFNicpICYmXG4gIC8vICAgICAhZW1vLnVuaWNvZGVOYW1lLnN0YXJ0c1dpdGgoJ0U3JykgJiZcbiAgLy8gICAgICFlbW8udW5pY29kZU5hbWUuc3RhcnRzV2l0aCgnRTgnKSAmJlxuICAvLyAgICAgIWVtby51bmljb2RlTmFtZS5zdGFydHNXaXRoKCdFOScpXG4gIC8vICk7XG5cbiAgY29uc3QgZWxlbWVudHMgPSBwcm9wcy5kYXRhLm1hcCgoZW1vamkpID0+IChcbiAgICA8ZGl2XG4gICAgICBrZXk9e2Vtb2ppLnVuaWNvZGVOYW1lfVxuICAgICAgY2xhc3NOYW1lPSdwLTQgY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIGJnLW1pZG5pZ2h0IGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IGhvdmVyOmJvcmRlci1tYWluIHctMTIgaC0xMiByb3VuZGVkLW1kIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0IG1kOnRleHQtMnhsJ1xuICAgICAgb25DbGljaz17KCkgPT4gQ29waWVkKGVtb2ppLmNoYXJhY3Rlcil9XG4gICAgPlxuICAgICAgPGgzPntlbW9qaS5jaGFyYWN0ZXJ9PC9oMz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgY29uc3Qgbm9EYXRhID0gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+Tm8gRGF0YSE8L2gzPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGZ1bmN0aW9uIENvcGllZChjaGFyYWN0ZXIpIHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjaGFyYWN0ZXIpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoJ0NvcGllZCEg8J+OiScsIHtcbiAgICAgIHBvc2l0aW9uOiAndG9wLXJpZ2h0JyxcbiAgICAgIGF1dG9DbG9zZTogMTAwMCxcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgICB0cmFuc2l0aW9uOiBTbGlkZSxcbiAgICAgIGRyYWdnYWJsZVBlcmNlbnQ6IDYwLFxuICAgICAgdGhlbWU6ICdkYXJrJyxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIGdhcC1bMTBweF0gbWQ6Z2FwLTMnPlxuICAgICAge2VsZW1lbnRzfVxuICAgICAgPFRvYXN0Q29udGFpbmVyIGxpbWl0PXszfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIlNsaWRlIiwiWm9vbSIsIkZsaXAiLCJCb3VuY2UiLCJHcmlkIiwicHJvcHMiLCJlbGVtZW50cyIsImRhdGEiLCJtYXAiLCJlbW9qaSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb3BpZWQiLCJjaGFyYWN0ZXIiLCJoMyIsInVuaWNvZGVOYW1lIiwibm9EYXRhIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwiY2xvc2VCdXR0b24iLCJ0cmFuc2l0aW9uIiwiZHJhZ2dhYmxlUGVyY2VudCIsInRoZW1lIiwibGltaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Grid.js\n"));

/***/ })

});