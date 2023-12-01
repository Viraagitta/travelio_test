"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../styles/Search.css");
var _book = require("../store/book");
var _reactRouterDom = require("react-router-dom");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Search = () => {
  const [keyword, setKeyword] = (0, _react.useState)('');
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleKeywordChange = event => {
    setKeyword(event.target.value);
  };
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearchBooks();
    }
  };
  const handleSearchBooks = async event => {
    const {
      data,
      loading,
      error
    } = await (0, _book.searchBooks)(keyword);
    if (data.data.length) {
      console.log(data.data, keyword, '<<ini data di search');
      navigate('/books', {
        state: {
          searchData: data.data,
          keyword
        }
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "hero is-fullheight custom-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-body "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "column is-half is-offset-one-quarter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box has-background-white-ter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "control"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "control has-icons-right"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "input is-half",
    type: "text",
    id: "keyword",
    value: keyword,
    onChange: handleKeywordChange,
    onKeyDown: handleKeyDown,
    placeholder: "Search Book Title"
  }), /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleSearchBooks,
    className: "icon is-medium is-right has-text-danger is-clickable"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-search"
  })))))))));
};
var _default = exports.default = Search;