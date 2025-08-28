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

module.exports = router;
