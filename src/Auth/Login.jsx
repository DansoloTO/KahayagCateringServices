import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Login</h1>
        <p className="auth-subtitle">Welcome back to Kahayag</p>
        
        <form className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="auth-button">Sign In</button>
        </form>

        <div className="auth-footer">
          <span>Don't have an account? </span>
          <Link to="/register" className="auth-link">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;