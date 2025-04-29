import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate(); // For navigating to the payment page

  // Fetch cart items when component mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => console.log(err));
  }, []);

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    fetch(`http://localhost:5000/api/cart/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setCartItems(cartItems.filter(item => item.id !== id));
      })
      .catch(err => console.log(err));
  };

  // Calculate subtotal by summing the prices of the cart items
  const calculateSubtotal = () => {
    // Ensure price is a number
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      return !isNaN(price) ? total + price : total;
    }, 0).toFixed(2);
  };

  // Handle proceeding to the payment page
  const handleProceedToPay = () => {
    navigate('/payment');  // Replace '/payment' with your actual payment route
  };

  return (
    <div className="homepage" style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="https://c7.alamy.com/comp/PD2M4T/pastry-shop-logo-or-label-chef-with-cake-on-a-tray-cartoon-vector-illustration-PD2M4T.jpg"
            alt="Cake Logo"
            className="logo-image"
          />
          <h1 className="logo">The Cake World</h1>
        </div>
        <ul className="nav-list">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link></li>
          <li><Link to="/creative" className={location.pathname === '/creative' ? 'active' : ''}>Creative</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        </ul>
        <div className="navbar-text">
          <Link to="/cart" className="cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt="Cart Icon"
              className="cart-icon"
            />
          </Link>
          <Link to="/login" className="profile">
            <img
              src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
              alt="Profile Icon"
              className="profile-icon"
            />
            Profile
          </Link>
        </div>
      </nav>

      <div className="cart-container" style={{ padding: '2rem', backgroundColor: 'white', flex: 1 }}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-item-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Weight: {item.weight}</p>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove from Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Subtotal Section */}
        {cartItems.length > 0 && (
          <div className="subtotal">
            <p><strong>Subtotal:</strong> ${calculateSubtotal()}</p>
            <button onClick={handleProceedToPay} className="proceed-to-pay-btn">Proceed to Pay</button>
          </div>
        )}
      </div>

      <footer className="footer">
        <p>&copy; 2025 The Cake World. All Rights Reserved.</p>
        <p>Contact us: info@thecakeworld.com | Phone: +9524132220</p>
        <p>Follow us on <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
      </footer>
    </div>
  );
};

export default Cart;
