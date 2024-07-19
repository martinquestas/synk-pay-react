import React from "react";
import "../styles/Solutions.css";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Solutions = () => {
  return (
    <div className="solutions-main-wrapper">
      <div className="solutions-header">
        <h2>Business Banking Designed</h2>
        <h2>By Business People</h2>
        <p>
          Experience a new era of financial management with Synk Pay's tailored
          solutions - our solutions are designed by business leaders rather than
          consultants or finance people:
        </p>
      </div>
      <div className="solutions-content">
        <div className="solutions-item">
          <div className="image-container-behind">
            <img src="static/images/solutions/sub1.png" alt="Solution 1" />
            <img
              src="static/images/solutions/sub1_sub.png"
              alt="Overlay 1"
              className="overlay-image-behind"
            />
          </div>
          <h3>Unified Currency Management</h3>
          <p>
            Effortlessly manage both cryptocurrency and fiat currency from a
            single platform.
          </p>
        </div>
        <div className="solutions-item">
          <div className="image-container">
            <img src="static/images/solutions/sub2.png" alt="Solution 2" />
            <img
              src="static/images/solutions/sub2_sub.png"
              alt="Overlay 2"
              className="overlay-image"
            />
          </div>
          <h3>Secure Digital Wallets</h3>
          <p>Safeguard your assets with our advanced security features</p>
        </div>
        <div className="solutions-item">
          <div className="image-container">
            <img src="static/images/solutions/sub3.png" alt="Solution 3" />
            <img
              src="static/images/solutions/sub3_sub.png"
              alt="Overlay 3"
              className="overlay-image"
            />
          </div>
          <h3>Treasury Management</h3>
          <p>
            Optimise your cash flows, liquidity, and foreign exchange exposures
            with our sophisticated tools.
          </p>
        </div>
        <div className="solutions-item">
          <div className="image-container-movedup">
            <img src="static/images/solutions/sub4.png" alt="Solution 4" />
            <img
              src="static/images/solutions/sub4_sub.png"
              alt="Overlay 4"
              className="overlay-image"
            />
          </div>
          <h3>Corporate Accounts</h3>
          <p>
            Implement precise spending controls and permissions for employees
            and teams.
          </p>
        </div>
        <div className="solutions-item">
          <div className="image-container">
            <img src="static/images/solutions/sub5_edit.png" alt="Solution 5" />
          </div>
          <h3>Seamless Currency Conversion</h3>
          <p>
            Enjoy real-time exchange rates and automated conversions to maximise
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
