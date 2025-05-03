import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import '../styles/Cart.css';

const parsePrice = (priceString) => {
  return parseFloat(priceString.replace(/[^\d.]/g, '')) || 0;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then(res => res.json())
      .then(data => {
        const itemsWithQuantity = data.map(item => ({
          ...item,
          quantity: 1,
          weight: item.name.trim().toLowerCase() === 'slice cake' ? 1 : parseFloat(item.weight) || 1
        }));
        setCartItems(itemsWithQuantity);
      })
      .catch(err => console.log(err));
  }, []);

  const handleRemoveItem = (id) => {
    fetch(`http://localhost:5000/api/cart/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setCartItems(cartItems.filter(item => item._id !== id));
      })
      .catch(err => console.log(err));
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map(item =>
      item._id === id ? { ...item, quantity: parseInt(quantity) || 1 } : item
    );
    setCartItems(updatedItems);
  };

  const handleWeightChange = (id, weight) => {
    const updatedItems = cartItems.map(item =>
      item._id === id && item.name.trim().toLowerCase() !== 'slice cake'
        ? { ...item, weight: parseFloat(weight) || 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parsePrice(item.price);
      return !isNaN(price)
        ? total + price * item.quantity * item.weight
        : total;
    }, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    navigate('/order', { state: { cartItems } });
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
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart Icon" className="cart-icon" />
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
        <div className="cart-header">
          <h2>Your Cart</h2>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-item-list">
            {cartItems.map((item) => {
              const price = parsePrice(item.price);
              const totalPrice = (price * item.quantity * item.weight).toFixed(2);

              return (
                <div key={item._id} className="cart-item-container">
                  <div className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>

                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {item.name.trim().toLowerCase() !== 'slice cake' ? (
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label htmlFor={`weight-${item._id}`}>Weight:</label>
                            <input
                              type="number"
                              id={`weight-${item._id}`}
                              value={item.weight}
                              min="0.1"
                              step="0.1"
                              onChange={(e) => handleWeightChange(item._id, e.target.value)}
                              style={{ marginLeft: '10px', padding: '5px', width: '60px' }}
                            />
                          </div>
                        ) : (
                          <p>Weight: 1</p>
                        )}

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <label htmlFor={`quantity-${item._id}`}>Quantity:</label>
                          <input
                            type="number"
                            id={`quantity-${item._id}`}
                            value={item.quantity}
                            min="1"
                            onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px', width: '60px' }}
                          />
                        </div>
                      </div>

                      <p>
                        <strong>Total Price: ₹{totalPrice}</strong>
                      </p>

                      <button
                        onClick={() => handleRemoveItem(item._id)}
                        style={{ marginTop: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="subtotal">
            <p><strong>Subtotal:</strong> ₹{calculateSubtotal()}</p>
            <div className="buy-btn-container">
              <button onClick={handlePlaceOrder} className="buy-btn">Place Order</button>
            </div>
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
