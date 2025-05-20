const express = require('express');
const router = express.Router();
const CartItem = require('../model/cart'); // Adjust path if needed
const mongoose = require('mongoose');

// Add item to cart
router.post('/add-to-cart', async (req, res) => {
  const { userId, cakeId, name, weight, price, image, quantity } = req.body;

  try {
    // Find existing cart for the user
    let cart = await CartItem.findOne({ userId });

    // If no cart exists, create a new one
    if (!cart) {
      cart = new CartItem({ userId, items: [] });
    }

    // Check if the item already exists in the cart
    const itemIndex = cart.items.findIndex(item => item.cakeId.toString() === cakeId);
    if (itemIndex > -1) {
      // If item exists, update quantity
      cart.items[itemIndex].quantity += quantity;
    } else {
      // Otherwise, add the new item to the cart
      cart.items.push({ cakeId, name, weight, price, image, quantity });
    }

    // Save or update the cart
    await cart.save();

    res.status(200).json({ message: 'Item added to cart successfully', cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET all cart items for a user
router.get('/:userId', async (req, res) => {
  try {
    const cart = await CartItem.findOne({ userId: req.params.userId }).populate('items.cakeId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart.items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a cart item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
