import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../styles/CustomNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MobileMenuContext } from "../context/MobileMenuContext";

const CustomNavbar = ({ handleItemClick, activeItem }) => {
  const { isMenuOpen, toggleMenu } = useContext(MobileMenuContext);

  return (
    <div>
      {/* Desktop Navbar */}
      <div
        className={`navbar desktop-navbar mobile-navbar ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <div className="logo">
          <a href="https://synkpay.io">
            <img
              src="static/images/logo.png"
              alt="Synk Pay Logo"
              className="logo-image"
            />
          </a>
        </div>
        <button className={"menu-button"} onClick={() => toggleMenu()}>
          &#9776;
        </button>
        <div className={`nav-links ${isMenuOpen ? "open-links" : ""}`}>
          <button
            className={`close-button ${isMenuOpen ? "shown" : ""}`}
            onClick={() => toggleMenu()}
          >
            ⨉
          </button>
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
