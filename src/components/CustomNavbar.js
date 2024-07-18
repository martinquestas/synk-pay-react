import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/CustomNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
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
          <NavLink to="/" exact activeClassName="active">
            Synchronise
          </NavLink>
          <NavLink to="/solutions" activeClassName="active">
            Solutions
          </NavLink>
          <NavLink to="/compliance" activeClassName="active">
            Compliance
          </NavLink>
          <NavLink to="/security" activeClassName="active">
            Security
          </NavLink>
          <NavLink to="/integration" activeClassName="active">
            Integration
          </NavLink>
          <NavLink to="/insights" activeClassName="active">
            Insights
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default CustomNavbar;
