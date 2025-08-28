const express = require("express");
const db = require("../db");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const user = results[0];

    // Use this if password is plain-text
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Uncomment this if you're using bcrypt
    // const match = await bcrypt.compare(password, user.password);
    // if (!match) {
    //   return res.status(401).json({ error: "Invalid username or password" });
    // }

    res.json({ message: "Login successful", userId: user.user_id });
  });
});

router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  const checkUserQuery = "SELECT * FROM users WHERE username = ?";
  db.query(checkUserQuery, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length > 0) {
      return res.status(401).json({ error: "User name already exists" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertQuery =
        "INSERT INTO users (username, password) VALUES (?, ?)";
      db.query(insertQuery, [username, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });

        return res.status(200).json({
          message: "Successfully Added",
          userId: result.user_id,
        });
      });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  });
});

module.exports = router;
