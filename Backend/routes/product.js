// routes/product.js
const express = require("express");
const db = require("../db");
const router = express.Router();

// Get ALL products
router.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
    res.status(200).json(results);
  });
});

// Get LIMITED number of products
router.get("/products/:limit", (req, res) => {
  const limit = parseInt(req.params.limit, 10);
  db.query("SELECT * FROM products LIMIT ?", [limit], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
