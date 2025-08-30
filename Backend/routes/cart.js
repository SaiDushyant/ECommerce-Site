const express = require("express");
const db = require("../db");
const router = express.Router();

// Get all cart items for a user
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM cart WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch Cart" });
    }
    res.status(200).json(results);
  });
});

// Add an item to cart
router.post("/add", (req, res) => {
  const { userId, itemId } = req.body;

  const checkQuery = "SELECT * FROM cart WHERE user_id = ? AND item_id = ?";
  db.query(checkQuery, [userId, itemId], (err, results) => {
    if (err) return res.status(500).json({ error: "DB error" });

    if (results.length > 0) {
      const updateQuery =
        "UPDATE cart SET quantity = quantity + 1 WHERE user_id = ? AND item_id = ?";
      db.query(updateQuery, [userId, itemId], (err) => {
        if (err) return res.status(500).json({ error: "Update failed" });
        return res.json({ message: "Quantity increased" });
      });
    } else {
      const insertQuery =
        "INSERT INTO cart (user_id, item_id, quantity) VALUES (?, ?, 1)";
      db.query(insertQuery, [userId, itemId], (err) => {
        if (err) return res.status(500).json({ error: "Insert failed" });
        return res.json({ message: "Item added to cart" });
      });
    }
  });
});

// Remove an item completely
router.post("/remove", (req, res) => {
  const { userId, itemId } = req.body;

  const deleteQuery = "DELETE FROM cart WHERE user_id = ? AND item_id = ?";
  db.query(deleteQuery, [userId, itemId], (err) => {
    if (err) return res.status(500).json({ error: "Delete failed" });
    res.json({ message: "Item removed from cart" });
  });
});

// Increase quantity by 1
router.post("/increase", (req, res) => {
  const { userId, itemId } = req.body;

  const query =
    "UPDATE cart SET quantity = quantity + 1 WHERE user_id = ? AND item_id = ?";
  db.query(query, [userId, itemId], (err, result) => {
    if (err)
      return res.status(500).json({ error: "Failed to increase quantity" });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    res.json({ message: "Quantity increased" });
  });
});

// Decrease quantity by 1 (remove if 0)
router.post("/decrease", (req, res) => {
  const { userId, itemId } = req.body;

  const checkQuery =
    "SELECT quantity FROM cart WHERE user_id = ? AND item_id = ?";
  db.query(checkQuery, [userId, itemId], (err, results) => {
    if (err) return res.status(500).json({ error: "DB error" });

    if (results.length === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    const currentQuantity = results[0].quantity;

    if (currentQuantity > 1) {
      const updateQuery =
        "UPDATE cart SET quantity = quantity - 1 WHERE user_id = ? AND item_id = ?";
      db.query(updateQuery, [userId, itemId], (err) => {
        if (err) return res.status(500).json({ error: "Update failed" });
        res.json({ message: "Quantity decreased" });
      });
    } else {
      const deleteQuery = "DELETE FROM cart WHERE user_id = ? AND item_id = ?";
      db.query(deleteQuery, [userId, itemId], (err) => {
        if (err) return res.status(500).json({ error: "Delete failed" });
        res.json({ message: "Item removed from cart" });
      });
    }
  });
});

module.exports = router;
