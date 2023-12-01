"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _Search = _interopRequireDefault(require("./pages/Search"));
var _Books = _interopRequireDefault(require("./pages/Books"));
var _Wishlists = _interopRequireDefault(require("./pages/Wishlists"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import necessary components and hooks

// Define your routes
const App = () => {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Search.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/books",
    element: /*#__PURE__*/React.createElement(_Books.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/wishlists",
    element: /*#__PURE__*/React.createElement(_Wishlists.default, null)
  })));
};
var _default = exports.default = App;