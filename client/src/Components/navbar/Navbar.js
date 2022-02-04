import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="parent-container">
      <div className="navbar-container">
        <nav className="navbar">
          <div className="nav-logo">
            <div className="iiitn-logo">
              <Link to="/">
                <img src="/Assets/images/newLogo.png" alt="iiitn-logo" />
              </Link>
            </div>
            <div className="nav-title">
              <div className="logo-text">
                <h1>Indian Institute of Information Technology, Nagpur</h1>
              </div>
              <div className="tagline">
                <h2>
                  An Institution of National Importance By An Act of Parliament
                </h2>
              </div>
            </div>{
              user ? (
                <ul className="list">
                  <li className="listItem">
                    <img 
                      src={user.photos[0].value}  
                      style={{marginLeft:"15rem"}} 
                      alt="UserAvatar" 
                      className="avatar" />
                  </li>
                  <li style={{marginLeft:"2rem"}} className="listItem">{user.displayName}</li>
                  <li style={{marginLeft:"2rem"}} className="listItem" onClick={logout}>Logout</li>
                </ul>
              ) : (" ")
            }
            
          </div>
        </nav>
      </div>
      <hr className="nav-divider" />
    </div>
  );
};

export default Navbar;
