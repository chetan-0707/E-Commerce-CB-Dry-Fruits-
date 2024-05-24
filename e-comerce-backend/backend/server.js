require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const almondRoutes = require("./routes/almondRouter");
const cashewnutRouter = require("./routes/cashewnutRouter");
const figRouter = require("./routes/figRouter");
const pistaRouter = require("./routes/pistaRouter");
const raisinRouter = require("./routes/raisinRouter");


const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const { connectDB } = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);
app.use("/api/almonds", almondRoutes);
app.use("/api/cashewnuts", cashewnutRouter);
app.use("/api/figs", figRouter);
app.use("/api/pistas", pistaRouter);
app.use("/api/raisins", raisinRouter);

app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
