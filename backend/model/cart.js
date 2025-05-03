const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      cakeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cake', required: true },
      name: String,
      weight: String,
      price: String,
      image: String,
      quantity: { type: Number, default: 1 },
    }
  ],
});

module.exports = mongoose.model('Cart', cartSchema);
