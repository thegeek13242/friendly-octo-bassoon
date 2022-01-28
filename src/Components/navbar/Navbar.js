import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-logo">
          <div className="tfSvg">
            <img
              src="/Assets/images/newLogo.png"
              alt="tantrafiesta-logo"
            />
          </div>
          <div className="logo-text">
            <h1>Indian Institute of Information Technology, Nagpur</h1>
          </div>
        </div>     
      </nav>
    </div>
  );
};

export default Navbar;
