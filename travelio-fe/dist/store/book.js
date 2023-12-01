"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wishlistBooks = exports.searchBooks = exports.addWishlist = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// src/store.js

const searchBooks = async keyword => {
  try {
    const response = await _axios.default.get("https://travelio-be-production.up.railway.app/search?keyword=".concat(keyword));
    return {
      data: response.data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error.message || 'An error occurred'
    };
  }
};
exports.searchBooks = searchBooks;
const wishlistBooks = async keyword => {
  try {
    const response = await _axios.default.get("https://travelio-be-production.up.railway.app/books");
    console.log(response.data, '<<ini apa');
    return {
      data: response.data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error.message || 'An error occurred'
    };
  }
};
exports.wishlistBooks = wishlistBooks;
const addWishlist = async data => {
  try {
    const url = 'https://travelio-be-production.up.railway.app/wishlist';
    const response = await _axios.default.post(url, data);
    console.log('Wishlist added successfully:', response.data);
  } catch (error) {
    console.error('Error adding wishlist:', error.message);
  }
};
exports.addWishlist = addWishlist;