const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  company: String,
  phone: String,
  rating: Number,
});

module.exports = mongoose.model("products", productSchema);
