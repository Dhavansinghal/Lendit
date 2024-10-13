"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ \"(app-pages-browser)/./components/Footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sidebar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        className: \"mb-12 cursor-pointer flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: \"icon/logo.svg\",\n                                width: 34,\n                                height: 34,\n                                alt: \"HomeWork Logo\",\n                                className: \"size-[24px]  max-xl:size-14\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"sidebar-logo\",\n                                children: \"LendIt\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    _constants__WEBPACK_IMPORTED_MODULE_1__.sidebarLinks.map((item)=>{\n                        const isActive = pathname === item.route || pathname.startsWith(\"\".concat(item.route, \"/\"));\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: item.route,\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"sidebar-link\", {\n                                \"bg-bank-gradient\": isActive\n                            }),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative size-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        src: item.imgURL,\n                                        alt: item.label,\n                                        fill: true,\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)({\n                                            \"brightness-[3] invert-0\": isActive\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"sidebar-label\", {\n                                        \"!text-white\": isActive\n                                    }),\n                                    children: item.label\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, item.label, true, {\n                            fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 23\n                        }, undefined);\n                    }),\n                    \"USER\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                user: user,\n                type: \"desktop\"\n            }, void 0, false, {\n                fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/Lendit/components/Sidebar.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBDO0FBQ2Q7QUFDRTtBQUNMO0FBQ087QUFDYTtBQUNoQjtBQUU3QixNQUFNTyxVQUFVO1FBQUMsRUFBQ0MsSUFBSSxFQUFnQjs7SUFDcEMsTUFBTUMsV0FBV0osNERBQVdBO0lBRTVCLHFCQUNFLDhEQUFDSztRQUFRQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDVixpREFBSUE7d0JBQUNZLE1BQUs7d0JBQUlGLFdBQVU7OzBDQUN2Qiw4REFBQ1Qsa0RBQUtBO2dDQUNKWSxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFJO2dDQUNKTixXQUFVOzs7Ozs7MENBRVYsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUFlOzs7Ozs7Ozs7Ozs7b0JBSWhDWCxvREFBWUEsQ0FBQ21CLEdBQUcsQ0FBQyxDQUFDQzt3QkFDakIsTUFBTUMsV0FBV1osYUFBYVcsS0FBS0UsS0FBSyxJQUFJYixTQUFTYyxVQUFVLENBQUMsR0FBYyxPQUFYSCxLQUFLRSxLQUFLLEVBQUM7d0JBRTlFLHFCQUFRLDhEQUFDckIsaURBQUlBOzRCQUNUWSxNQUFNTyxLQUFLRSxLQUFLOzRCQUVoQlgsV0FBV1AsOENBQUVBLENBQUMsZ0JBQWU7Z0NBQUMsb0JBQW9CaUI7NEJBQVE7OzhDQUcxRCw4REFBQ0c7b0NBQUliLFdBQVU7OENBQ2IsNEVBQUNULGtEQUFLQTt3Q0FDSlksS0FBS00sS0FBS0ssTUFBTTt3Q0FDaEJSLEtBQUtHLEtBQUtNLEtBQUs7d0NBQ2ZDLElBQUk7d0NBQ0poQixXQUFXUCw4Q0FBRUEsQ0FBQzs0Q0FBQywyQkFBMkJpQjt3Q0FBUTs7Ozs7Ozs7Ozs7OENBR3RELDhEQUFDTztvQ0FBRWpCLFdBQVdQLDhDQUFFQSxDQUFDLGlCQUFnQjt3Q0FBQyxlQUFlaUI7b0NBQVE7OENBQUtELEtBQUtNLEtBQUs7Ozs7Ozs7MkJBWm5FTixLQUFLTSxLQUFLOzs7OztvQkFlckI7b0JBQUc7Ozs7Ozs7MEJBTVAsOERBQUNwQiwrQ0FBTUE7Z0JBQUNFLE1BQU1BO2dCQUFNcUIsTUFBSzs7Ozs7Ozs7Ozs7O0FBR2pDO0dBL0NNdEI7O1FBQ2FGLHdEQUFXQTs7O0tBRHhCRTtBQWlETiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIudHN4PzZiYTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHNpZGViYXJMaW5rcyB9IGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5jb25zdCBTaWRlYmFyID0gKHt1c2VyfTogU2lkZXJiYXJQcm9wcykgPT4ge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NpZGViYXInPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtNCc+XG4gICAgICAgICAgICA8TGluayBocmVmPScvJyBjbGFzc05hbWU9J21iLTEyIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yJz5cbiAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgIHNyYz0naWNvbi9sb2dvLnN2ZydcbiAgICAgICAgICAgICAgICB3aWR0aD17MzR9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszNH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJIb21lV29yayBMb2dvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpemUtWzI0cHhdICBtYXgteGw6c2l6ZS0xNCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3NpZGViYXItbG9nbyc+XG4gICAgICAgICAgICAgICAgICBMZW5kSXRcbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge3NpZGViYXJMaW5rcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZSA9PT0gaXRlbS5yb3V0ZSB8fCBwYXRobmFtZS5zdGFydHNXaXRoKGAke2l0ZW0ucm91dGV9L2ApO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoPExpbmsgXG4gICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnJvdXRlfSBcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ3NpZGViYXItbGluaycseydiZy1iYW5rLWdyYWRpZW50JzogaXNBY3RpdmV9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBzaXplLTYnPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nVVJMfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbih7J2JyaWdodG5lc3MtWzNdIGludmVydC0wJzogaXNBY3RpdmV9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbignc2lkZWJhci1sYWJlbCcseychdGV4dC13aGl0ZSc6IGlzQWN0aXZlfSl9PntpdGVtLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICBVU0VSXG5cblxuICAgICAgICA8L25hdj5cbiAgICAgICAgPEZvb3RlciB1c2VyPXt1c2VyfSB0eXBlPSdkZXNrdG9wJyAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIl0sIm5hbWVzIjpbInNpZGViYXJMaW5rcyIsIkxpbmsiLCJJbWFnZSIsIlJlYWN0IiwiY24iLCJ1c2VQYXRobmFtZSIsIkZvb3RlciIsIlNpZGViYXIiLCJ1c2VyIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJtYXAiLCJpdGVtIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJkaXYiLCJpbWdVUkwiLCJsYWJlbCIsImZpbGwiLCJwIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});