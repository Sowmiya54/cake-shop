import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import About from './components/About';
import Creative from './components/Creative';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'; 
import AdminPage from './components/Admin'; 
import Order from './components/Order'; // Import Order page

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/order" element={<Order />} /> {/* Add the Order page route here */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
