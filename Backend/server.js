const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
