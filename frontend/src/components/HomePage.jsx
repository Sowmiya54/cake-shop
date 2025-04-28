import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/HomePage.css';
import bannerimg from '/banner.png';

const Homepage = () => {
  const location = useLocation();

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
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link>
          </li>
          <li>
            <Link to="/creative" className={location.pathname === '/creative' ? 'active' : ''}>Creative</Link>
          </li>
          
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </li>
        </ul>

        {/* ✅ Profile is now a clickable link */}
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

      {/* Banner Section */}
      <div className="banner">
        <img src={bannerimg} alt="Banner" className="banner-image" />
      </div>

            {/* Most Viewed Section */}
            <div className="most-viewed">
        <h2 className="section-title">Most Viewed</h2>
        <div className="cake-grid">
          {[
            { name: "Chocolate Truffle", img: "https://magicbakers.in/wp-content/uploads/2024/03/ChocolateTruffleCake.jpg", rating: "4.8★" },
            { name: "Red Velvet", img: "https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/oscar/16976464491-350x350.jpg", rating: "4.7★" },
            { name: "Black Forest", img: "https://www.hotbreads.co.in/cdn/shop/products/0I4A5479copy_1000x1000.jpg?v=1641168101", rating: "4.6★" },
            { name: "Butterscotch", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_tZnfJB5PFiFWZH6iJhprNEUiAqfwOBe8g&s", rating: "4.9★" },
            { name: "Strawberry Swirl", img: "https://img.lovepik.com/png/20231129/colorful-birthday-cake-decorated-with-melted-strawberries-strawberry-cakes-delicious_721699_wh860.png", rating: "4.5★" },
            { name: "Pineapple Delight", img: "https://liliyum.com/cdn/shop/products/Pineapple-Mousse-Cake-1.jpg?v=1630928051", rating: "4.6★" },
            { name: "Vanilla Cream", img: "https://bkmedia.bakingo.com/sq-vanilla-fruit-cake-cake894frui-AA.jpg?tr=w-500,h-500", rating: "4.4★" },
            { name: "Oreo Blast", img: "https://cdn-efohi.nitrocdn.com/nzhjCTbLRQsVpZZpEWBzEjrDSwxMfKMK/assets/images/optimized/rev-9855f81/yummycake.in/wp-content/uploads/2022/06/IMG_8754-scaled-1-376x376.jpg", rating: "4.7★" }
          ].map((cake, index) => (
            <div className="cake-box" key={index}>
              <img src={cake.img} alt={cake.name} className="cake-img" />
              <h3 className="cake-name">{cake.name}</h3>
              <p className="cake-rating">{cake.rating}</p>
            </div>
          ))}
        </div>
      </div>


            {/* Our Categories Section */}
            <div className="categories-section">
        <h2 className="section-title">Our Categories</h2>

        {/* Creative Cakes - Image Right, Text Left */}
        <div className="category-box creative">
          <div className="category-text">
            <h3>Creative Cakes</h3>
            <p>
              Unleash your imagination with our custom-designed creative cakes. From theme parties to unique
              occasions, we make your vision edible.
            </p>
          </div>
          <div className="category-image">
            <img
              src="https://weebirdiecafe.wordpress.com/wp-content/uploads/2013/09/p1060016-640x481.jpg?w=640"
              alt="Creative Cake"
            />
            <span className="image-label">Creative Cake</span>
          </div>
        </div>

        {/* Signature Cakes - Image Left, Text Right */}
        <div className="category-box signature">
          <div className="category-image">
            <img
              src="https://smoor.in/cdn/shop/collections/Signature_Cakes_-_Smoor-4711897_1200x1200.jpg?v=1729127911"
              alt="Signature Cake"
            />
            <span className="image-label">Signature Cake</span>
          </div>
          <div className="category-text">
            <h3>Signature Cakes</h3>
            <p>
              Taste our most celebrated cakes, loved by all. These signature cakes define the essence of
              The Cake World.
            </p>
          </div>
        </div>

        {/* Regular Cakes - Image Right, Text Left */}
        <div className="category-box regular">
          <div className="category-text">
            <h3>Regular Cakes</h3>
            <p>
              Perfect for everyday celebrations or simple cravings. Our regular cakes are classic,
              delightful, and always in stock!
            </p>
          </div>
          <div className="category-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDtjxAp7paHHNohlbQNphtwK3E9PoSsnNzA&s"
              alt="Regular Cake"
            />
            <span className="image-label">Regular Cake</span>
          </div>
        </div>
      </div>



      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 The Cake World. All Rights Reserved.</p>
        <p>Contact us: info@thecakeworld.com | Phone: +9524132220</p>
        <p>Follow us on <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
      </footer>
    </div>
  );
};

export default Homepage;
