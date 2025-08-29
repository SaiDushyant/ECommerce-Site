// routes/product.js
const express = require("express");
const db = require("../db");
const router = express.Router();

// Get ALL products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
    res.status(200).json(results);
  });
});

// Get LIMITED number of products (use query param instead of param)
router.get("/limit/:limit", (req, res) => {
  const limit = parseInt(req.params.limit, 10);
  if (isNaN(limit)) {
    return res.status(400).json({ error: "Invalid limit parameter" });
  }
  db.query("SELECT * FROM products LIMIT ?", [limit], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
    res.status(200).json(results);
  });
});

// Get product by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
  db.query("SELECT * FROM products WHERE item_id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch product" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(result[0]);
  });
});

module.exports = router;
