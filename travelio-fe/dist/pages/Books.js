"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _CardBook = _interopRequireDefault(require("../components/CardBook"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Books = () => {
  const location = (0, _reactRouterDom.useLocation)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const {
    searchData,
    keyword
  } = location.state || null;
  const handleHomeSearch = async event => {
    navigate('/');
  };
  const handleWishlistPage = async event => {
    navigate('/wishlists');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-bg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-6 py-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "has-icons-right"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "title is-4 is-text-overflow custom-title"
  }, "KEYWORD: ", keyword), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-4 is-clickable is-right has-text-dark home-icon hoverable hoverable-custom",
    onClick: handleHomeSearch
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-home is-size-2"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-4 is-clickable is-right has-text-dark home-icon mr-4 hoverable hoverable-custom",
    onClick: handleWishlistPage
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-heart is-size-2"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "columns is-flex is-multiline"
  }, searchData && searchData.map(book => /*#__PURE__*/_react.default.createElement("div", {
    className: "column is-one-fifth ",
    key: book.id
  }, /*#__PURE__*/_react.default.createElement(_CardBook.default, {
    title: book.title,
    author: book.author,
    rating: book.rating,
    thumbnail: book.thumbnail,
    data: book
  }))))));
};
var _default = exports.default = Books;