const express = require('express');
const router = express.Router();
const CartItem = require('../model/cart'); // Your model

router.get('/', async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
