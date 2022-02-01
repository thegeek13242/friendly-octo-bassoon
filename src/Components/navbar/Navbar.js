import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="parent-container">
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-logo">
          <div className="iiitn-logo">
            <Link to="/">
            <img
              src="/Assets/images/newLogo.png"
              alt="iiitn-logo"
            />
            </Link>
          </div>
          <div className="nav-title">
          <div className="logo-text">
            <h1>Indian Institute of Information Technology, Nagpur</h1>
          </div>
          <div className="tagline">
            <h2>An Institution of National Importance By An Act of Parliament</h2>
          </div>
          </div>
        </div>   
      </nav>
    </div>
    <hr className="nav-divider" />  
    </div>
  );
};

export default Navbar;
