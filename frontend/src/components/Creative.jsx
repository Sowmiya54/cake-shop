import React from "react";
import "../styles/HomePage.css";
import "../styles/Creative.css";
import { Link, useLocation } from "react-router-dom";
import cakeData from "../components/Creative.json";
import axios from "axios";

const Creative = () => {
  const location = useLocation();
  const [category, setCategory] = React.useState("wedding");

  const handleAddToCart = async (cake) => {
  try {
    const response = await axios.post("http://localhost:5000/api/cart", {
      cakeId: cake._id || cake.name,
      name: cake.name,
      weight: cake.weight,
      price: cake.price,
      image: cake.image,
      quantity: 1,
    });
    alert("Item added to cart!");
  } catch (error) {
    console.error("Add to cart failed", error);
    alert("Failed to add item to cart");
  }
};

  return (
    <div className="homepage">
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

      <div className="cake-body">
        <div className="cake-options">
          <button onClick={() => setCategory('wedding')}>Wedding</button>
          <button onClick={() => setCategory('birthday')}>Birthday</button>
          <button onClick={() => setCategory('anniversary')}>Anniversary</button>
          <button onClick={() => setCategory('newyear')}>New Year</button>
          <button onClick={() => setCategory('festivals')}>Festivals</button>
          <button onClick={() => setCategory('parties')}>Parties</button>
          <button onClick={() => setCategory('storelaunch')}>Store Launch</button>
        </div>

        <div className="cake-display">
          {cakeData[category].map((cake, index) => (
            <div className="cake-item" key={index}>
              <img src={cake.image} alt={cake.name} />
              <p className="cake-name">{cake.name}</p>
              <p>Weight: {cake.weight}</p>
              <p>Price: {cake.price}</p>
              <button className="buy-button" onClick={() => handleAddToCart(cake)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 The Cake World. All Rights Reserved.</p>
        <p>Contact us: info@thecakeworld.com | Phone: +9524132220</p>
        <p>Follow us on <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
      </footer>
    </div>
  );
};

export default Creative;
