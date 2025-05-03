import "../styles/Menu.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import menuData from "../components/Menu.json"; 

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("buttercream");

  const addToCart = async (cake) => {
    try {
      await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cake),
      });
      alert("Product added to cart!");
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const renderCakes = (cakes) => (
    <div className="image-grid">
      {cakes.map((cake, index) => (
        <div key={index} className="cake-item">
          <img src={cake.image} alt={cake.name} className="cake-img" />
          <div className="cake-details">
            <h3>{cake.name}</h3>
            {/* Conditionally render weight */}
            {selectedCategory !== "slicecakes" && <p>Weight: {cake.weight}</p>}
            <p>Price: {cake.price}</p>
            <button
              className="buy-button"
              onClick={() => addToCart(cake)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

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

      <div className="category-section">
        <div className="menu-buttons">
          <button onClick={() => setSelectedCategory("buttercream")}>Buttercream Cakes</button>
          <button onClick={() => setSelectedCategory("freshcream")}>Fresh Cream Cakes</button>
          <button onClick={() => setSelectedCategory("slicecakes")}>Slice Cakes</button>
        </div>

        {selectedCategory === "buttercream" && renderCakes(menuData.buttercreamCakes)}
        {selectedCategory === "freshcream" && renderCakes(menuData.freshCreamCakes)}
        {selectedCategory === "slicecakes" && renderCakes(menuData.sliceCakes)}
      </div>

      <footer className="footer">
        <p>&copy; 2025 The Cake World. All Rights Reserved.</p>
        <p>Contact us: info@thecakeworld.com | Phone: +9524132220</p>
        <p>Follow us on <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
      </footer>
    </div>
  );
};

export default Menu;
