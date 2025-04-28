import "../styles/HomePage.css";
import "../styles/Creative.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const Creative = () => {
  const location = useLocation();
  const [category, setCategory] = React.useState("wedding");

  const cakes = {
    wedding: [
      { name: "Classic Wedding Cake", image: "https://cakexpo-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/07/07173036/IMG_20211113_151945-scaled.jpg" },
      { name: "Elegant Rose Cake", image: "https://www.deliciaecakes.com/static/47fa15f73ed5e7e398ed23a6cad4733b/33aa5/dsc07973.jpg" },
      { name: "Royal Layered Cake", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wedding_cake_with_pillar_supports%2C_2009.jpg/1200px-Wedding_cake_with_pillar_supports%2C_2009.jpg" },
      { name: "Romantic Floral Cake", image: "https://shop.aubree.in/cdn/shop/products/Floral_Pink_Wedding_Cake_bfeeeb8c-4ffb-408c-987d-b85baed7b118.jpg?v=1656072277" },
      { name: "White Lace Cake", image: "https://alittlecake.com/wp-content/uploads/2023/07/Hand-Painted-Flowers-On-Red-Fondant-Wedding-Cake.jpg" },
      { name: "Ornate Pink Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5c7VLtwnpaUv6Vr9vI0JMAR-0HmkBbVCtQ&s" },
      { name: "Diamond Heart Cake", image: "https://www.expressluv.com/cdn/shop/files/IMG-20220614-WA0001.jpg?v=1706122923" },
      { name: "Vintage Gold Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrx60i_sMdaHpcw6_ruuXvKN42T9IHQDcrD4mw8euHGaxEJ38pYnP0ggcPwrRVc3SPu1w&usqp=CAU" },
      { name: "Garden Style Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CrIL1pHfqsJ5fW74PGcpSHXwEmcCID97QcAcLUedmQ9Q8AW7szp_lJaBUqBduKW6MU0&usqp=CAU" },
      { name: "Chic Pearl Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZZpjDAm_4UbDyaN3s_NzfEuolhmFgsP8eg&s" },
      { name: "Floral Fusion Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN4UCyY4_DjO7hojOFI4fAzjiPOqW8azFpKiy9TXxMowlZffXi_UCtZWg5tMq_vjfCdc&usqp=CAU" },
      { name: "Swan Lake Cake", image: "https://www.fabmood.com/inspiration/wp-content/uploads/2024/08/685274756.jpg" }
    ],
    birthday: [
      { name: "Chocolate Birthday Cake", image: "https://5.imimg.com/data5/NI/IH/QU/ANDROID-90366522/img-20190619-153251-jpg-500x500.jpg" },
      { name: "Sprinkle Fun Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1mBC-EFDrjKu5Cc_IwCesYSgUL5qT0KfRQ&s" },
      { name: "Rainbow Confetti Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzQG60kZrx_znEFqJKMHegYCiB0JQApfTkg&s" },
      { name: "Buttercream Stars Cake", image: "https://t3.ftcdn.net/jpg/01/10/26/34/360_F_110263419_6d9oWmooHp0tLqQrG6ypqQk7KRqxIkSE.jpg" },
      { name: "Cartoon Theme Cake", image: "https://dy9wzeeht8myy.cloudfront.net/images/catalog/flowers/CH443-350x350.jpg" },
      { name: "Photo Print Cake", image: "https://example.com/birthday6.jpg" },
      { name: "Pinata Smash Cake", image: "https://example.com/birthday7.jpg" },
      { name: "Mini Tiered Cake", image: "https://example.com/birthday8.jpg" },
      { name: "Animal Jungle Cake", image: "https://example.com/birthday9.jpg" },
      { name: "Cute Panda Cake", image: "https://example.com/birthday10.jpg" }
    ],
    anniversary: [
      { name: "Heart Delight Cake", image: "https://i0.wp.com/cakeseries.com/wp-content/uploads/2022/11/happy-marriage-anniversary-cake-six-delightful.jpg?fit=1080%2C1080&ssl=1" },
      { name: "Red Velvet Love Cake", image: "https://static.wixstatic.com/media/8874ce_1ec2e90085104b4998dc4ade85194c56~mv2.jpg/v1/fill/w_560,h_638,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8874ce_1ec2e90085104b4998dc4ade85194c56~mv2.jpg" },
      { name: "Couple Figurine Cake", image: "https://images.unsplash.com/photo-1670388429858-881804cbc864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5uaXZlcnNhcnklMjBjYWtlfGVufDB8fDB8fHww" },
      { name: "Roses & Ribbons Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlHdN-ENGjzT9Uwb7cenFY3KzNMhPD0EHrQ&s" },
      { name: "Golden Heart Cake", image: "https://www.harvardsweetboutique.com/cdn/shop/files/GoldenBirthdayHeartCake.jpg?v=1716299662" },
      { name: "Pearl Anniversary Cake", image: "https://example.com/anniversary6.jpg" },
      { name: "Elegant Cream Cake", image: "https://example.com/anniversary7.jpg" },
      { name: "Love Birds Cake", image: "https://example.com/anniversary8.jpg" },
      { name: "Forever Together Cake", image: "https://example.com/anniversary9.jpg" },
      { name: "Diamond Ring Cake", image: "https://example.com/anniversary10.jpg" }
    ],
    newyear: [
      { name: "New Year Sparkle Cake", image: "https://example.com/newyear1.jpg" },
      { name: "Champagne Celebration Cake", image: "https://example.com/newyear2.jpg" },
      { name: "Clock Countdown Cake", image: "https://example.com/newyear3.jpg" },
      { name: "Party Hat Cake", image: "https://example.com/newyear4.jpg" },
      { name: "Fireworks Cake", image: "https://example.com/newyear5.jpg" },
      { name: "Glitter Theme Cake", image: "https://example.com/newyear6.jpg" },
      { name: "2025 Number Cake", image: "https://example.com/newyear7.jpg" },
      { name: "Disco Ball Cake", image: "https://example.com/newyear8.jpg" },
      { name: "Celebration Bubbles Cake", image: "https://example.com/newyear9.jpg" },
      { name: "Bright Lights Cake", image: "https://example.com/newyear10.jpg" }
    ],
    festivals: [
      { name: "Diwali Delight Cake", image: "https://example.com/festival1.jpg" },
      { name: "Holi Rainbow Cake", image: "https://example.com/festival2.jpg" },
      { name: "Raksha Bandhan Cake", image: "https://example.com/festival3.jpg" },
      { name: "Eid Celebration Cake", image: "https://example.com/festival4.jpg" },
      { name: "Navratri Special Cake", image: "https://example.com/festival5.jpg" },
      { name: "Onam Flower Cake", image: "https://example.com/festival6.jpg" },
      { name: "Ganesh Chaturthi Cake", image: "https://example.com/festival7.jpg" },
      { name: "Lohri Fire Cake", image: "https://example.com/festival8.jpg" },
      { name: "Christmas Tree Cake", image: "https://example.com/festival9.jpg" },
      { name: "Pongal Pot Cake", image: "https://example.com/festival10.jpg" }
    ],
    parties: [
      { name: "Party Popper Cake", image: "https://example.com/party1.jpg" },
      { name: "Fun Fiesta Cake", image: "https://example.com/party2.jpg" },
      { name: "Balloon Bash Cake", image: "https://example.com/party3.jpg" },
      { name: "Music Vibe Cake", image: "https://example.com/party4.jpg" },
      { name: "Glow Night Cake", image: "https://example.com/party5.jpg" },
      { name: "Color Burst Cake", image: "https://example.com/party6.jpg" },
    ],
    storelaunch: [
      { name: "Grand Opening Cake", image: "https://example.com/launch1.jpg" },
      { name: "Ribbon Cut Cake", image: "https://example.com/launch2.jpg" },
      { name: "Shop Theme Cake", image: "https://example.com/launch3.jpg" },
      { name: "Welcome Cake", image: "https://example.com/launch4.jpg" },
      { name: "New Venture Cake", image: "https://example.com/launch5.jpg" },
      { name: "Logo Printed Cake", image: "https://example.com/launch6.jpg" },
      { name: "Success Start Cake", image: "https://example.com/launch7.jpg" },
    ]
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
          {cakes[category].map((cake, index) => (
            <div className="cake-item" key={index}>
              <img src={cake.image} alt={cake.name} />
              <p>{cake.name}</p>
              <Link to="/cart">
                <button className="buy-button">Add to Cart</button>
              </Link>
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
