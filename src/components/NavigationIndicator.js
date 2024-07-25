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
    <div className="justify-content-center indicator-container">
      {renderDots()}
    </div>
  );
};

export default NavigationIndicator;
