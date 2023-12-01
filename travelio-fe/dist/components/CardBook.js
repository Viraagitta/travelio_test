"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _raterJs = _interopRequireDefault(require("rater-js"));
var _book = require("../store/book");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CardBooks = _ref => {
  let {
    title,
    author,
    rating,
    thumbnail,
    data
  } = _ref;
  const raterRef = (0, _react.useRef)(null);
  const [isHeartClicked, setHeartClicked] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    let myRater;
    if (raterRef.current) {
      const options = {
        element: raterRef.current,
        rateCallback: function (newRating, done) {
          console.log("New Rating: ".concat(rating));
          //   myRater.current.setRating(3);
          done();
        },
        max: rating || 0,
        starSize: 25,
        ratingText: 'test',
        disableText: 'Read-only',
        readOnly: true
      };
      myRater = (0, _raterJs.default)(options);
    }
    return () => {
      if (myRater) {
        myRater.dispose();
      }
    };
  }, [rating, isHeartClicked]);
  const handleHeartClick = async () => {
    if (!isHeartClicked) {
      await (0, _book.addWishlist)(data);
    }
    setHeartClicked(!isHeartClicked);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card height-card my-4 mx-2 custom-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "image img-height"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: thumbnail,
    alt: "Book Cover"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-content has-icons-right"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "title is-5 is-text-overflow mb-2"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "is-7 content is-truncated is-text-overflow mb-4"
  }, author), rating ? /*#__PURE__*/_react.default.createElement("div", {
    ref: raterRef
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "content has-text-grey is-size-7"
  }, "No Ratings"), /*#__PURE__*/_react.default.createElement("div", {
    className: " is-clickable is-right heart-icon m-3 ".concat(isHeartClicked ? 'has-text-danger' : 'has-text-grey'),
    onClick: handleHeartClick
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-heart is-size-4"
  }))));
};
var _default = exports.default = CardBooks;