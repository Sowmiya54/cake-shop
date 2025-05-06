const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  
  cartItems: [{
    name: String,
    image: String,
    weight: String,
    price: String,
    quantity: Number,
  }],
  totalAmount: { type: Number, required: true },
  deliveryDetails: {
    name: String,
    address: String,
    phoneNumber: String,
    deliveryDate: Date,
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
