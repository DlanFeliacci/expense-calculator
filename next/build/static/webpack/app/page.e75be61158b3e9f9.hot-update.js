"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ti */ \"(app-client)/./node_modules/react-icons/ti/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-client)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"(app-client)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const currency = [\n        {\n            value: \"dollar\",\n            text: \"Dollar\",\n            symbol: \"$\"\n        },\n        {\n            value: \"euro\",\n            text: \"Euro\",\n            symbol: \"€\"\n        },\n        {\n            value: \"ruble\",\n            text: \"Ruble\",\n            symbol: \"₽\"\n        },\n        {\n            value: \"dinar\",\n            text: \"Dinar\",\n            symbol: \"DA\"\n        }\n    ];\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currency[0].value);\n    const handleChange = (event)=>{\n        // console.log(event.target.value);\n        setSelected(event.target.value);\n    };\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        price: \"\"\n    });\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Add item to database\n    const addItem = async (e)=>{\n        e.preventDefault();\n        if (newItem.name !== \"\" && newItem.price !== \"\") {\n            // setItems([...items, newItem])\n            try {\n                const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"items\"), {\n                    name: newItem.name.trim(),\n                    price: newItem.price\n                });\n                console.log(\"Document written with ID: \", docRef.id);\n            } catch (e) {\n                console.error(\"Error adding document: \", e);\n            }\n            setNewItem({\n                name: \"\",\n                price: \"\"\n            });\n        }\n    };\n    // Read items from database\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"items\"));\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(q, (querySnapshot)=>{\n            let itemsArr = [];\n            querySnapshot.forEach((doc)=>{\n                itemsArr.push({\n                    ...doc.data(),\n                    id: doc.id\n                });\n            });\n            setItems(itemsArr);\n            // Read total from itemsArr\n            const calculateTotal = ()=>{\n                const totalPrice = itemsArr.reduce((sum, item)=>sum + parseFloat(item.price), 0);\n                setTotal(totalPrice);\n            };\n            calculateTotal();\n            return ()=>unsubscribe;\n        });\n    }, []);\n    // Delete item from database\n    const deleteItem = async (id)=>{\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"items\", id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between sm:p-24 p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm mt-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl p-4 text-center\",\n                    children: \"Calculateur de d\\xe9penses\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-slate-800 p-4 text-white my-6  max-w-[180px] m-auto rounded\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-auto flex flex-col justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-sm text-center pb-2\",\n                                children: \"Select a currency\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                value: selected,\n                                onChange: handleChange,\n                                className: \"p-2 text-black items-center text-center rounded font-semibold\",\n                                children: currency.map((iter)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-slate-100 font-semibold\",\n                                        value: iter.symbol,\n                                        children: iter.text\n                                    }, iter.value, false, {\n                                        fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-slate-800 p-4 rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"grid grid-cols-6 items-center text-black\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"col-span-3 p-3 border border-r-slate-800 focus:outline-none bg-gray-200 focus:bg-white\",\n                                    onChange: (e)=>setNewItem({\n                                            ...newItem,\n                                            name: e.target.value\n                                        }),\n                                    value: newItem.name,\n                                    type: \"text\",\n                                    name: \"\",\n                                    placeholder: \"Article\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"col-span-2 p-3 border border-l-slate-800 focus:outline-none bg-gray-200 focus:bg-white\",\n                                    onChange: (e)=>setNewItem({\n                                            ...newItem,\n                                            price: e.target.value\n                                        }),\n                                    value: newItem.price,\n                                    type: \"number\",\n                                    name: \"\",\n                                    placeholder: \"Montant\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: addItem,\n                                    className: \"text-white bg-slate-950 hover:bg-slate-900 p-2 text-2xl font-bold\",\n                                    type: \"submit\",\n                                    children: \"+\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: items.map((item, id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"my-4 w-full flex justify-between bg-slate-950 text-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-3 w-full flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"capitalize\",\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                                    lineNumber: 146,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: [\n                                                        item.price,\n                                                        \" \",\n                                                        selected\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                                    lineNumber: 147,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                            lineNumber: 145,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>deleteItem(item.id),\n                                            className: \"group text-red-900 p-4 border-l-2 border-slate-900 hover:border-slate-700 hover:bg-slate-900 w-16\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__.TiDelete, {\n                                                    className: \"group-hover:scale-[1.3] duration-200\",\n                                                    size: 20\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                                    lineNumber: 156,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                                lineNumber: 155,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                            lineNumber: 151,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, id, true, {\n                                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this),\n                items.length < 1 ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between p-3 font-bold text-xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Total\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                            lineNumber: 170,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                total,\n                                \" \",\n                                selected,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                            lineNumber: 171,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n                    lineNumber: 169,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adlene\\\\Desktop\\\\expenses-tracker\\\\app\\\\page.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"KP5QyOrY15Y+9ra56MfypR0cjQs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0Y7QUFVZDtBQUNJO0FBRWpCLFNBQVNZOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUMsRUFJbEM7SUFFRCxNQUFNZSxXQUFXO1FBQ2Y7WUFBRUMsT0FBTztZQUFVQyxNQUFNO1lBQVVDLFFBQVE7UUFBSTtRQUMvQztZQUFFRixPQUFPO1lBQVFDLE1BQU07WUFBUUMsUUFBUTtRQUFJO1FBQzNDO1lBQUVGLE9BQU87WUFBU0MsTUFBTTtZQUFTQyxRQUFRO1FBQUk7UUFDN0M7WUFBRUYsT0FBTztZQUFTQyxNQUFNO1lBQVNDLFFBQVE7UUFBSztLQUMvQztJQUNELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQUNlLFFBQVEsQ0FBQyxFQUFFLENBQUNDO0lBQ3JELE1BQU1LLGVBQWUsQ0FBQ0M7UUFDcEIsbUNBQW1DO1FBQ25DRixZQUFZRSxNQUFNQyxPQUFPUDtJQUMzQjtJQUVBLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHekIsK0NBQVFBLENBQUM7UUFBRTBCLE1BQU07UUFBSUMsT0FBTztJQUFHO0lBQzdELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHN0IsK0NBQVFBLENBQUM7SUFFbkMsdUJBQXVCO0lBQ3ZCLE1BQU04QixVQUFVLE9BQU9DO1FBQ3JCQSxFQUFFQztRQUNGLElBQUlSLFFBQVFFLFNBQVMsTUFBTUYsUUFBUUcsVUFBVSxJQUFJO1lBQy9DLGdDQUFnQztZQUNoQyxJQUFJO2dCQUNGLE1BQU1NLFNBQVMsTUFBTTdCLDBEQUFNQSxDQUFDRCw4REFBVUEsQ0FBQ1EseUNBQUVBLEVBQUUsVUFBVTtvQkFDbkRlLE1BQU1GLFFBQVFFLEtBQUtRO29CQUNuQlAsT0FBT0gsUUFBUUc7Z0JBQ2pCO2dCQUNBUSxRQUFRQyxJQUFJLDhCQUE4QkgsT0FBT0k7WUFDbkQsRUFBRSxPQUFPTixHQUFHO2dCQUNWSSxRQUFRRyxNQUFNLDJCQUEyQlA7WUFDM0M7WUFDQU4sV0FBVztnQkFBRUMsTUFBTTtnQkFBSUMsT0FBTztZQUFHO1FBQ25DO0lBQ0Y7SUFFQSwyQkFBMkI7SUFDM0IxQixnREFBU0EsQ0FBQztRQUNSLE1BQU1zQyxJQUFJL0IseURBQUtBLENBQUNMLDhEQUFVQSxDQUFDUSx5Q0FBRUEsRUFBRTtRQUMvQixNQUFNNkIsY0FBY2pDLDhEQUFVQSxDQUFDZ0MsR0FBRyxDQUFDakM7WUFDakMsSUFBSW1DLFdBQVcsRUFBRTtZQUNqQm5DLGNBQWNvQyxRQUFRLENBQUNoQztnQkFDckIrQixTQUFTRSxLQUFLO29CQUFFLEdBQUdqQyxJQUFJa0MsTUFBTTtvQkFBRVAsSUFBSTNCLElBQUkyQjtnQkFBRztZQUM1QztZQUNBdkIsU0FBUzJCO1lBQ1QsMkJBQTJCO1lBQzNCLE1BQU1JLGlCQUFpQjtnQkFDckIsTUFBTUMsYUFBYUwsU0FBU00sT0FDMUIsQ0FBQ0MsS0FBS0MsT0FBU0QsTUFBTUUsV0FBV0QsS0FBS3RCLFFBQ3JDO2dCQUVGRSxTQUFTaUI7WUFDWDtZQUNBRDtZQUNBLE9BQU8sSUFBTUw7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLDRCQUE0QjtJQUM1QixNQUFNVyxhQUFhLE9BQU9kO1FBQ3hCLE1BQU01Qiw2REFBU0EsQ0FBQ0MsdURBQUdBLENBQUNDLHlDQUFFQSxFQUFFLFNBQVMwQjtJQUNuQztJQUVBLHFCQUNFLDhEQUFDZTtRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQTJCOzs7Ozs7OEJBRXpDLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBTUgsV0FBVTswQ0FBMkI7Ozs7OzswQ0FHNUMsOERBQUNJO2dDQUNDekMsT0FBT0c7Z0NBQ1B1QyxVQUFVckM7Z0NBQ1ZnQyxXQUFVOzBDQUVUdEMsU0FBUzRDLElBQUksQ0FBQ0MscUJBQ2IsOERBQUNDO3dDQUNDUixXQUFVO3dDQUVWckMsT0FBTzRDLEtBQUsxQztrREFFWDBDLEtBQUszQzt1Q0FIRDJDLEtBQUs1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVVwQiw4REFBQ3NDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ1M7NEJBQUtULFdBQVU7OzhDQUNkLDhEQUFDVTtvQ0FDQ1YsV0FBVTtvQ0FDVkssVUFBVSxDQUFDM0IsSUFBTU4sV0FBVzs0Q0FBRSxHQUFHRCxPQUFPOzRDQUFFRSxNQUFNSyxFQUFFUixPQUFPUDt3Q0FBTTtvQ0FDL0RBLE9BQU9RLFFBQVFFO29DQUNmc0MsTUFBSztvQ0FDTHRDLE1BQUs7b0NBQ0x1QyxhQUFZOzs7Ozs7OENBRWQsOERBQUNGO29DQUNDVixXQUFVO29DQUNWSyxVQUFVLENBQUMzQixJQUNUTixXQUFXOzRDQUFFLEdBQUdELE9BQU87NENBQUVHLE9BQU9JLEVBQUVSLE9BQU9QO3dDQUFNO29DQUVqREEsT0FBT1EsUUFBUUc7b0NBQ2ZxQyxNQUFLO29DQUNMdEMsTUFBSztvQ0FDTHVDLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQ0M7b0NBQ0NDLFNBQVNyQztvQ0FDVHVCLFdBQVU7b0NBQ1ZXLE1BQUs7OENBQ047Ozs7Ozs7Ozs7OztzQ0FJSCw4REFBQ0k7c0NBQ0V2RCxNQUFNOEMsSUFBSSxDQUFDVixNQUFNWixtQkFDaEIsOERBQUNnQztvQ0FFQ2hCLFdBQVU7O3NEQUVWLDhEQUFDQzs0Q0FBSUQsV0FBVTs7OERBQ2IsOERBQUNpQjtvREFBS2pCLFdBQVU7OERBQWNKLEtBQUt2Qjs7Ozs7OzhEQUNuQyw4REFBQzRDOzt3REFDRXJCLEtBQUt0Qjt3REFBTTt3REFBRVI7Ozs7Ozs7Ozs7Ozs7c0RBR2xCLDhEQUFDK0M7NENBQ0NDLFNBQVMsSUFBTWhCLFdBQVdGLEtBQUtaOzRDQUMvQmdCLFdBQVU7c0RBRVYsNEVBQUNDO2dEQUFJRCxXQUFVOzBEQUNiLDRFQUFDbkQsb0RBQVFBO29EQUNQbUQsV0FBVTtvREFDVmtCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWhCUGxDOzs7Ozs7Ozs7Ozs7Ozs7O2dCQXdCWnhCLE1BQU0yRCxTQUFTLElBQ2QsbUJBRUEsOERBQUNsQjtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNpQjtzQ0FBSzs7Ozs7O3NDQUNOLDhEQUFDQTs7Z0NBQ0UxQztnQ0FBTTtnQ0FBRVQ7Z0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQztHQW5Ld0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaURlbGV0ZSB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuaW1wb3J0IHtcbiAgY29sbGVjdGlvbixcbiAgYWRkRG9jLFxuICBnZXREb2MsXG4gIHF1ZXJ5U25hcHNob3QsXG4gIG9uU25hcHNob3QsXG4gIHF1ZXJ5LFxuICBkZWxldGVEb2MsXG4gIGRvYyxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtcbiAgICAvLyB7IG5hbWU6ICdDb2ZmZWUnLCBwcmljZTogNC45NSB9LFxuICAgIC8vIHsgbmFtZTogJ01vdmllJywgcHJpY2U6IDI0Ljk1IH0sXG4gICAgLy8geyBuYW1lOiAnY2FuZHknLCBwcmljZTogNy45NSB9LFxuICBdKTtcblxuICBjb25zdCBjdXJyZW5jeSA9IFtcbiAgICB7IHZhbHVlOiBcImRvbGxhclwiLCB0ZXh0OiBcIkRvbGxhclwiLCBzeW1ib2w6IFwiJFwiIH0sXG4gICAgeyB2YWx1ZTogXCJldXJvXCIsIHRleHQ6IFwiRXVyb1wiLCBzeW1ib2w6IFwi4oKsXCIgfSxcbiAgICB7IHZhbHVlOiBcInJ1YmxlXCIsIHRleHQ6IFwiUnVibGVcIiwgc3ltYm9sOiBcIuKCvVwiIH0sXG4gICAgeyB2YWx1ZTogXCJkaW5hclwiLCB0ZXh0OiBcIkRpbmFyXCIsIHN5bWJvbDogXCJEQVwiIH0sXG4gIF07XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoY3VycmVuY3lbMF0udmFsdWUpO1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFNlbGVjdGVkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgW25ld0l0ZW0sIHNldE5ld0l0ZW1dID0gdXNlU3RhdGUoeyBuYW1lOiBcIlwiLCBwcmljZTogXCJcIiB9KTtcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBBZGQgaXRlbSB0byBkYXRhYmFzZVxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG5ld0l0ZW0ubmFtZSAhPT0gXCJcIiAmJiBuZXdJdGVtLnByaWNlICE9PSBcIlwiKSB7XG4gICAgICAvLyBzZXRJdGVtcyhbLi4uaXRlbXMsIG5ld0l0ZW1dKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwiaXRlbXNcIiksIHtcbiAgICAgICAgICBuYW1lOiBuZXdJdGVtLm5hbWUudHJpbSgpLFxuICAgICAgICAgIHByaWNlOiBuZXdJdGVtLnByaWNlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCB3cml0dGVuIHdpdGggSUQ6IFwiLCBkb2NSZWYuaWQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XG4gICAgICB9XG4gICAgICBzZXROZXdJdGVtKHsgbmFtZTogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlYWQgaXRlbXMgZnJvbSBkYXRhYmFzZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHEgPSBxdWVyeShjb2xsZWN0aW9uKGRiLCBcIml0ZW1zXCIpKTtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uU25hcHNob3QocSwgKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgIGxldCBpdGVtc0FyciA9IFtdO1xuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgaXRlbXNBcnIucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XG4gICAgICB9KTtcbiAgICAgIHNldEl0ZW1zKGl0ZW1zQXJyKTtcbiAgICAgIC8vIFJlYWQgdG90YWwgZnJvbSBpdGVtc0FyclxuICAgICAgY29uc3QgY2FsY3VsYXRlVG90YWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBpdGVtc0Fyci5yZWR1Y2UoXG4gICAgICAgICAgKHN1bSwgaXRlbSkgPT4gc3VtICsgcGFyc2VGbG9hdChpdGVtLnByaWNlKSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIHNldFRvdGFsKHRvdGFsUHJpY2UpO1xuICAgICAgfTtcbiAgICAgIGNhbGN1bGF0ZVRvdGFsKCk7XG4gICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmU7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBEZWxldGUgaXRlbSBmcm9tIGRhdGFiYXNlXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSBhc3luYyAoaWQpID0+IHtcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKGRiLCBcIml0ZW1zXCIsIGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNtOnAtMjQgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIG10LThcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHAtNCB0ZXh0LWNlbnRlclwiPkNhbGN1bGF0ZXVyIGRlIGTDqXBlbnNlczwvaDE+XG4gICAgICAgIHsvKiBDaG9zZSBDdXJyZW5jeSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS04MDAgcC00IHRleHQtd2hpdGUgbXktNiAgbWF4LXctWzE4MHB4XSBtLWF1dG8gcm91bmRlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyIHBiLTJcIj5cbiAgICAgICAgICAgICAgU2VsZWN0IGEgY3VycmVuY3lcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtYmxhY2sgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHJvdW5kZWQgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW5jeS5tYXAoKGl0ZXIpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZXIudmFsdWV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlci5zeW1ib2x9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZXIudGV4dH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBMaXN0IG9mIGl0ZW1zICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTgwMCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgaXRlbXMtY2VudGVyIHRleHQtYmxhY2tcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHAtMyBib3JkZXIgYm9yZGVyLXItc2xhdGUtODAwIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1ncmF5LTIwMCBmb2N1czpiZy13aGl0ZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SXRlbSh7IC4uLm5ld0l0ZW0sIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5uYW1lfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFydGljbGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIHAtMyBib3JkZXIgYm9yZGVyLWwtc2xhdGUtODAwIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1ncmF5LTIwMCBmb2N1czpiZy13aGl0ZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICBzZXROZXdJdGVtKHsgLi4ubmV3SXRlbSwgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb250YW50XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZEl0ZW19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc2xhdGUtOTUwIGhvdmVyOmJnLXNsYXRlLTkwMCBwLTIgdGV4dC0yeGwgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICtcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpZCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTQgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGJnLXNsYXRlLTk1MCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZVwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlfSB7c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHRleHQtcmVkLTkwMCBwLTQgYm9yZGVyLWwtMiBib3JkZXItc2xhdGUtOTAwIGhvdmVyOmJvcmRlci1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtOTAwIHctMTZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VGlEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cC1ob3ZlcjpzY2FsZS1bMS4zXSBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA8IDEgPyAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0zIGZvbnQtYm9sZCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICA8c3Bhbj5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICB7dG90YWx9IHtzZWxlY3RlZH17XCIgXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaURlbGV0ZSIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJnZXREb2MiLCJxdWVyeVNuYXBzaG90Iiwib25TbmFwc2hvdCIsInF1ZXJ5IiwiZGVsZXRlRG9jIiwiZG9jIiwiZGIiLCJIb21lIiwiaXRlbXMiLCJzZXRJdGVtcyIsImN1cnJlbmN5IiwidmFsdWUiLCJ0ZXh0Iiwic3ltYm9sIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmV3SXRlbSIsInNldE5ld0l0ZW0iLCJuYW1lIiwicHJpY2UiLCJ0b3RhbCIsInNldFRvdGFsIiwiYWRkSXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY1JlZiIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwiaWQiLCJlcnJvciIsInEiLCJ1bnN1YnNjcmliZSIsIml0ZW1zQXJyIiwiZm9yRWFjaCIsInB1c2giLCJkYXRhIiwiY2FsY3VsYXRlVG90YWwiLCJ0b3RhbFByaWNlIiwicmVkdWNlIiwic3VtIiwiaXRlbSIsInBhcnNlRmxvYXQiLCJkZWxldGVJdGVtIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwibGFiZWwiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm1hcCIsIml0ZXIiLCJvcHRpb24iLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJsaSIsInNwYW4iLCJzaXplIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});