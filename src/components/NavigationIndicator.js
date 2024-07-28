import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavigationIndicator.css";

const NavigationIndicator = ({ activeIndex, handleDotClick }) => {
  const renderDots = () => {
    const dots = [];
    const routes = [
      "/",
      "/solutions",
      "/compliance",
      "/security",
      "/integration",
      "/insights",
      "/contact",
    ];
    for (let i = 0; i < routes.length; i++) {
      dots.push(
        <Link
          key={i}
          to={routes[i]}
          className={`dot ${activeIndex === i ? "active" : ""}`}
          onClick={() => handleDotClick && handleDotClick(i)}
        ></Link>
      );
    }
    return dots;
  };

  return (
    <div className="navigation-wrapper">
      <img
        src="static/images/Navigation/arrow-left.png"
        alt="Left Arrow"
        className="arrow left-arrow"
      />
      <div className="justify-content-center indicator-container">
        {renderDots()}
      </div>
      <img
        src="static/images/Navigation/arrow-right.png"
        alt="Right Arrow"
        className="arrow right-arrow"
      />
    </div>
  );
};

export default NavigationIndicator;
