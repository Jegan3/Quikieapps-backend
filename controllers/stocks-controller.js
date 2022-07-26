const Stock = require("../model/Stock");

const getAllStock = async (req, res, next) => {
  let stocks;
  try {
    stocks = await Stock.find();
  } catch (err) {
    console.log(err);
  }

  if (!stocks) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ stocks });
};

const addStock = async (req, res, next) => {
  const { name,  symbol, max_supply } = req.body;
  let stock;
  try {
    stock = new Stock({
      name,
      symbol,
      max_supply,
    });
    await stock.save();
  } catch (err) {
    console.log(err);
  }

  if (!stock) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ stock });
};

const deleteStock = async (req, res, next) => {
  const id = req.params.id;
  let stock;
  try {
    stock = await Stock.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!stock) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllStock = getAllStock;
exports.addStock = addStock;
exports.deleteStock = deleteStock;
