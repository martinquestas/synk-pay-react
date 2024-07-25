import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/CustomNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = ({ handleItemClick, activeItem }) => {
  return (
    <div>
      {/* Desktop Navbar */}
      <div className="navbar desktop-navbar">
        <div className="logo">
          <a href="https://synkpay.io">
            <img
              src="static/images/logo.png"
              alt="Synk Pay Logo"
              className="logo-image"
            />
          </a>
        </div>
        <div className="nav-links">
          <NavLink
            to="/"
            exact
            className={activeItem === 0 ? "active" : ""}
            onClick={() => handleItemClick(0)}
          >
            Synchronise
          </NavLink>
          <NavLink
            to="/solutions"
            className={activeItem === 1 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            Solutions
          </NavLink>
          <NavLink
            to="/compliance"
            className={activeItem === 2 ? "active" : ""}
            onClick={() => handleItemClick(2)}
          >
            Compliance
          </NavLink>
          <NavLink
            to="/security"
            className={activeItem === 3 ? "active" : ""}
            onClick={() => handleItemClick(3)}
          >
            Security
          </NavLink>
          <NavLink
            to="/integration"
            className={activeItem === 4 ? "active" : ""}
            onClick={() => handleItemClick(4)}
          >
            Integration
          </NavLink>
          <NavLink
            to="/insights"
            className={activeItem === 5 ? "active" : ""}
            onClick={() => handleItemClick(5)}
          >
            Insights
          </NavLink>
          <NavLink
            to="/contact"
            className={activeItem === 6 ? "active" : ""}
            onClick={() => handleItemClick(6)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
