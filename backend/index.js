require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/health", (req, res) => {
  res.json({ ok: true, database: mongoose.connection.readyState === 1 });
});

app.use("/api/auth", authRoute);



app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = await OrdersModel.create({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Order creation failed:", error);
    res.status(500).json({ message: "Unable to save order" });
  }
});

async function startServer() {
  try {
    if (!uri) throw new Error("MONGO_URL is not configured");
    await mongoose.connect(uri);
    app.listen(PORT, () => console.log(`API started on port ${PORT}`));
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exitCode = 1;
  }
}

startServer();