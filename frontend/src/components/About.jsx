import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  const location = useLocation();

  return (
    <div className="about-page">
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
  {/* Cart Icon */}
  <Link to="/cart" className="cart">
    <img
      src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
      alt="Cart Icon"
      className="cart-icon"
    />
  </Link>

  {/* Profile Icon */}
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

      {/* About Content */}
      <div className="about-wrapper">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to The Cake World! We specialize in custom cakes, pastries, and baked treats for every occasion.
          </p>
          <p>
            Our mission is to make your celebrations sweeter and more memorable. With a team of passionate bakers and artists, we bring your cake dreams to life.
          </p>
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

export default About;
