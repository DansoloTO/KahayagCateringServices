import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card register-card">
        <h1 className="auth-title">Register</h1>
        <p className="auth-subtitle">Join the Kahayag Family</p>
        
        <form className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>

          <button type="submit" className="auth-button">Create Account</button>
        </form>

        <div className="auth-footer">
          <span>Already have an account? </span>
          <Link to="/login" className="auth-link">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;