webpackJsonp([0],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_styles_main_less__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_styles_main_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assets_styles_main_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_root__ = __webpack_require__(29);




__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_components_root__["a" /* Root */], { name: 'Taylor' }), document.getElementById('root'));
if (false) {
    module.hot.accept('components/root.jsx', () => {
        const NewRoot = require('components/root.jsx').default;
        ReactDOM.render(React.createElement(Root, { name: 'Taylor' }), document.getElementById('root'));
    });
}

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class Root extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
            "div",
            null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                "h1",
                null,
                "Hello ",
                this.props.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                "form",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text" }),
                " ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text" }),
                " ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text" }),
                " ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text" }),
                " ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Root;


/***/ })

},[14]);
//# sourceMappingURL=bundle.js.map