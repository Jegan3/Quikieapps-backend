const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/stock-routes");
const app = express();
const cors = require("cors");
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/stocks", router); 

mongoose
  .connect("mongodb://127.0.0.1:27017/StockDatas")
  .then(() => console.log("Connected To Datavase"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
