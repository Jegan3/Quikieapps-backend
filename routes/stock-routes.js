const express = require("express");
const router = express.Router();
const Stock = require("../model/Stock");
const StocksController = require("../controllers/stocks-controller");

router.get("/", StocksController.getAllStock);
router.post("/", StocksController.addStock);
router.delete("/:id", StocksController.deleteStock);
module.exports = router;
