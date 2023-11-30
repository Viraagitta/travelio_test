const express = require("express");
const Controller = require("../controllers/bookController");
const router = express.Router();

router.get("/search", Controller.searchBooks);
router.get("/books", Controller.getDatabaseBooks);
router.post("/wishlist", Controller.createWishlist);

module.exports = router;