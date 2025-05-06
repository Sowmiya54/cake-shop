import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Order.css";

const Order = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    deliveryDate: "",
  });

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
      return total + price * item.quantity * item.weight;
    }, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      
      cartItems,
      totalAmount: parseFloat(calculateTotal()),
      deliveryDetails: {
        name: formData.name,
        address: formData.address,
        phoneNumber: formData.phone,
        deliveryDate: formData.deliveryDate,
      },
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error placing order.");
    }
  };

  return (
    <div className="homepage order-page">
      {/* Header */}
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/creative">Creative</Link></li>
          <li><Link to="/about">About</Link></li>
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

      {/* Green popup message */}
      {showSuccess && (
        <div className="green-popup">Placed Order Successfully!</div>
      )}

      {/* Main Content */}
      <div className="order-content">
        <h2 className="order-title">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>No items to show.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => {
              const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
              return (
                <div className="order-item" key={index}>
                  {item.image && (
                    <img src={item.image} alt={item.name} className="order-item-img" />
                  )}
                  <div>
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Weight: {item.weight}</p>
                    <p>Price: ₹{numericPrice}</p>
                  </div>
                </div>
              );
            })}
            <h3>Total: ₹{calculateTotal()}</h3>
          </div>
        )}

        {/* Order Form */}
        <div className="order-form-wrapper">
          <h2 className="form-title">Delivery Details</h2>
          <form className="order-form" onSubmit={handlePlaceOrder}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Delivery Address"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
            />
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Place Order</button>
          </form>
        </div>
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

export default Order;
