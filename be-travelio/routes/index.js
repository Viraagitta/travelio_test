const express = require("express");
const Controller = require("../controllers/bookController");
const router = express.Router();

router.get("/search", Controller.searchBooks);
router.get("/books", Controller.getWishlistBooks);
router.post("/wishlist", Controller.createWishlist);

module.exports = router;