const mongoose = require("mongoose");

const saleItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  title: { type: String, required: true },
  newPrice: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  off: { type: Number, required: false },
});

const saleItem = mongoose.model("saleItem", saleItemSchema);

module.exports = saleItem;
