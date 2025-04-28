import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import About from './components/About';
import Creative from './components/Creative';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'; // ✅ Add this line

function App() {
  return (
    <CartProvider> {/* ✅ Wrap everything inside CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
