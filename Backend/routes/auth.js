const express = require("express");
const db = require("../db");
const bcrypt = require("bcrypt");
const router = express.Router();

// LOGIN
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const user = results[0];

    try {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      res.status(200).json({
        message: "Login successful",
        userId: user.user_id,
      });
    } catch (e) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  });
});

// SIGNUP
router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  const checkUserQuery = "SELECT * FROM users WHERE username = ?";
  db.query(checkUserQuery, [username], async (err, results) => {
    if (err) {
      console.error("Signup DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length > 0) {
      return res.status(409).json({ error: "Username already exists" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const insertQuery =
        "INSERT INTO users (username, password) VALUES (?, ?)";

      db.query(insertQuery, [username, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });

        return res.status(201).json({
          message: "User created successfully",
          userId: result.insertId,
        });
      });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  });
});

module.exports = router;
