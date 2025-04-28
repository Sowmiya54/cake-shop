// models/Cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  name: String,
  weight: String,
  price: String,
  image: String
});

module.exports = mongoose.model('Cart', cartSchema);
