import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/HomePage.css';

const Menu = () => {
  const [cakes, setCakes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then(res => res.json())
      .then(data => setCakes(data))
      .catch(err => console.log(err));
  }, []);

  const handleAddToCart = (cake) => {
    fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cake),
    })
    .then(res => res.json())
    .then(data => {
      alert(`${cake.name} added to cart!`);
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="homepage" style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navbar */}
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

      {/* Menu Content */}
      <div className="menu-container" style={{ padding: '2rem', backgroundColor: 'white', flex: 1 }}>
        <h2>Our Menu</h2>
        {cakes.length === 0 ? (
          <p>No cakes available.</p>
        ) : (
          <div className="cake-grid">
            {cakes.map((cake, index) => (
              <div key={index} className="cake-item">
                <img src={cake.image} alt={cake.name} />
                <h3>{cake.name}</h3>
                <p>Weight: {cake.weight}</p>
                <p>Price: {cake.price}</p>
                <button onClick={() => handleAddToCart(cake)}>Add to Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 The Cake World. All Rights Reserved.</p>
        <p>Contact us: info@thecakeworld.com | Phone: +9524132220</p>
        <p>Follow us on <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
      </footer>
    </div>
  );
};

export default Menu;
