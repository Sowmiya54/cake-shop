const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// User schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Cart item schema and model
const cartItemSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  image: String,
  weight: String,
  price: String,
});
const CartItem = mongoose.model('CartItem', cartItemSchema);

// Order schema and model
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

// Register route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid email' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

// Add to Cart
app.post('/api/cart', async (req, res) => {
  const { name, image, weight, price, userId } = req.body;
  const newCartItem = new CartItem({ userId, name, image, weight, price });
  await newCartItem.save();
  res.json({ message: 'Item added to cart successfully!' });
});

// Get Cart Items
app.get('/api/cart', async (req, res) => {
  const { userId } = req.query;
  const items = await CartItem.find({ userId });
  res.json(items);
});

// Delete Cart Item
app.delete('/api/cart/:id', async (req, res) => {
  try {
    const deletedItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting item', error: err.message });
  }
});

// ✅ Place Order (without userId)
app.post('/api/orders', async (req, res) => {
  const { cartItems, totalAmount, deliveryDetails } = req.body;

  console.log('📦 Incoming order data:', req.body); // ✅ Debug log

  const newOrder = new Order({
    cartItems,
    totalAmount,
    deliveryDetails,
  });

  try {
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', orderId: newOrder._id });
  } catch (err) {
    console.error('❌ Error placing order:', err); // ✅ Log full error
    res.status(500).json({ message: 'Failed to place order', error: err.message });
  }
});

// ✅ Get Orders (without userId)
app.get('/api/orders', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.log(`❌ MongoDB connection error: ${err.message}`));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
