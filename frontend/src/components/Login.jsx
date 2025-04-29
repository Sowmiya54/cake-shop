import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });

      alert(res.data.message);

      // Assuming the response contains a 'role' property that determines if it's 'admin' or 'user'
      const userRole = res.data.role;

      // Redirect based on role
      if (userRole === 'admin') {
        navigate('/admin'); // Redirect to Admin page if the role is admin
      } else {
        navigate('/admin'); // Redirect to User Dashboard if it's a regular user
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="forgot-password">Forgot Password?</p>
        <button onClick={handleLogin}>Login</button>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
