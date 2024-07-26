import React, { useState } from "react";
import "../styles/Integration.css";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "static/images/Integration/sub_2.png",
  "static/images/Integration/sub_3.png",
  "static/images/Integration/sub_2.png",
];

const Integration = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  const handleButtonClick = (index) => {
    setBackgroundImage(images[index]);
  };

  return (
    <div className="integration-main-wrapper">
      <div className="integration-header">
        <h4>Integration</h4>
        <h2>One Wallet for All</h2>
        <h2>Your Needs</h2>
        <p>
          Synk Pay offers a groundbreaking solution that integrates both
          cryptocurrency and fiat currency within a single wallet:
        </p>
      </div>
      <div
        className="integration-image-wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <button
          className="integration-invisible-button integration-button1"
          onClick={() => handleButtonClick(0)}
        ></button>
        <button
          className="integration-invisible-button integration-button2"
          onClick={() => handleButtonClick(1)}
        ></button>
        <button
          className="integration-invisible-button integration-button3"
          onClick={() => handleButtonClick(2)}
        ></button>
      </div>
      <div className="integration-footer-container">
        <div className="integration-copyright">
          <p>Powered by Novatide Labs</p>
        </div>
      </div>
    </div>
  );
};

export default Integration;
