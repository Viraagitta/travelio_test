"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _CardBook = _interopRequireDefault(require("../components/CardBook"));
var _book = require("../store/book");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Wishlists = () => {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [wishlistData, setWishlistData] = (0, _react.useState)([]);
  const [loading, setLoading] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    const fetchData = async () => {
      try {
        const {
          data,
          error
        } = await (0, _book.wishlistBooks)();
        if (error) {
          console.error('Error fetching wishlist books:', error);
        } else {
          setWishlistData(data || []);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleHomeSearch = async event => {
    navigate('/');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-bg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-6 py-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "has-icons-right"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "title is-3 has-text-centered "
  }, "WISHLIST BOOKS"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-4 is-clickable is-right has-text-dark home-icon hoverable hoverable-custom",
    onClick: handleHomeSearch
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-home is-size-2"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "columns is-flex is-multiline"
  }, loading ? /*#__PURE__*/_react.default.createElement("p", null, "Loading...") : wishlistData.data.map(book => /*#__PURE__*/_react.default.createElement("div", {
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
var _default = exports.default = Wishlists;