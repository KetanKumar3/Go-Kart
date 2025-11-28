const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,    // stored filename
});

module.exports = mongoose.model("Product", productSchema);
