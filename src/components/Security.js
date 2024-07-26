import React, { useState } from "react";
import "../styles/Security.css";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lineImages = [
  "static/images/Security/sub1_1.png",
  "static/images/Security/sub2_1.png",
  "static/images/Security/sub3_1.png",
];

const contentData = [
  {
    header: "01/ Advanced Encryption",
    text: "State-of-the-art encryption techniques to protect your data and transactions.",
    image: "static/images/Security/sub1_2.png",
  },
  {
    header: "02/ Multi-Factor Authentication",
    text: "Enhanced security with multiple layers of authentication.",
    image: "static/images/Security/sub2_2.png",
  },
  {
    header: "03/ Continuous Monitoring",
    text: "24/7 monitoring to ensure your assets are always protected.",
    image: "static/images/Security/sub3_2.png",
  },
];

const Security = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="security-main-wrapper">
      <div className="security-header">
        <h4>Security</h4>
        <h2>Uncompromising Security</h2>
        <h2>for Your Peace of Mind</h2>
        <p>Our commitment to security is unwavering:</p>
      </div>
      <div className="security-content">
        <div className="line-image-wrapper">
          <img
            key={animationKey}
            src={lineImages[currentIndex]}
            alt="Line with circles"
            className="line-image fade-in"
          />
          <button
            className="invisible-button button1"
            onClick={() => handleButtonClick(0)}
          ></button>
          <button
            className="invisible-button button2"
            onClick={() => handleButtonClick(1)}
          ></button>
          <button
            className="invisible-button button3"
            onClick={() => handleButtonClick(2)}
          ></button>
        </div>
        <div key={animationKey} className="content-section">
          {" "}
          {/* Add key to reset animation */}
          <h3 className="back-flip">{contentData[currentIndex].header}</h3>{" "}
          {/* Add back-flip class for the header */}
          <p>{contentData[currentIndex].text}</p>
          <img
            src={contentData[currentIndex].image}
            alt="Security feature"
            className="content-image fade-in"
          />
        </div>
      </div>
      <div className="security-footer-container">
        <div className="security-copyright">
          <p>Powered by Novatide Labs</p>
        </div>
      </div>
    </div>
  );
};

export default Security;
