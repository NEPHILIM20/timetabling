import React, { useState } from "react";
import "./CSS/AdminLogin.css";

const LogoPlaceholder =
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Cavite_State_University_%28CvSU%29_Logo.svg/1200px-Cavite_State_University_%28CvSU%29_Logo.svg.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    studentNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", credentials);
    // Add your login logic here
  };

  return (
    <div className="login-container">
      {/* Top Left Logo */}
      <div className="logo-area">
        <img src={LogoPlaceholder} alt="University Logo" className="logo-img" />
      </div>

      <div className="login-wrapper">
        {/* Header with Icon */}
        <div className="login-header">
          {/* Simple SVG Hexagon Icon to match image */}
          <svg
            className="header-icon"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l9 4.9V17L12 22l-9-4.9V6.9L12 2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <h2>Administrator Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Student Number Input */}
          <div className="form-group">
            <label htmlFor="studentNumber">Student Number</label>
            <input
              type="text"
              id="studentNumber"
              name="studentNumber"
              value={credentials.studentNumber}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>

          {/* Login Button */}
          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        {/* Footer Register Link */}
        <div className="register-text">
          Don't Have an Account?{" "}
          <a href="/register" className="register-link">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
