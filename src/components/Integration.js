import React, { useEffect, useState } from "react";
import "../styles/Integration.css";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "static/images/Integration/sub_1.png",
  "static/images/Integration/sub_3.png",
  "static/images/Integration/sub_2.png",
];

const CONTENT = [
  {
    title: "Multi-Currency Support",
    description:
      "Manage a wide range of digital and traditional currencies seamlessly.",
  },
  {
    title: "Effortless Integration",
    description:
      "Our platform integrates smoothly with your existing financial systems, providing a unified experience.",
  },
  {
    title: "Comprehensive Control",
    description:
      "Full control over your financial assets with easy access, secure storage, and seamless transactions across multiple currencies.",
  },
];

const Integration = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Local state for touch positions
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setBackgroundImage(
          "static/images/Integration/mobile_integration_image_1.png"
        );
      } else {
        setBackgroundImage(images[0]);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = (index, event) => {
    event.stopPropagation();
    setActiveIndex(index);
    setTouchStartX(null);
    setTouchEndX(null);
    setIsTouching(false);
    if (window.matchMedia("(max-width: 768px)").matches) {
      return;
    } else {
      setBackgroundImage(images[index]);
    }
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
    setIsTouching(false); // Reset isTouching on button interactions
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
    setIsTouching(true);
  };

  const handleTouchMove = (event) => {
    if (!isTouching) return;
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (!isTouching) return;
    const deltaX = touchStartX - touchEndX;
    const sensitivity = 50;
    if (Math.abs(deltaX) > sensitivity) {
      // Trigger scroll only if swipe distance is greater than sensitivity
      setTouchStartX(null);
      setTouchEndX(null);
      setIsTouching(false);
    } else {
      setTouchStartX(null);
      setTouchEndX(null);
      setIsTouching(false);
    }
  };

  const handleMouseDown = (event) => {
    setTouchStartX(event.clientX);
    setIsTouching(true);
  };

  const handleMouseMove = (event) => {
    if (!isTouching) return;
    setTouchEndX(event.clientX);
  };

  const handleMouseUp = (event) => {
    if (!isTouching) return;
    const deltaX = touchStartX - touchEndX;
    const sensitivity = 50;
    if (Math.abs(deltaX) > sensitivity) {
      // Trigger scroll only if swipe distance is greater than sensitivity
      setTouchStartX(null);
      setTouchEndX(null);
      setIsTouching(false);
    } else {
      setTouchStartX(null);
      setTouchEndX(null);
      setIsTouching(false);
    }
  };

  useEffect(() => {
    const rootElement = document.querySelector(".integration-main-wrapper");
    rootElement.addEventListener("touchstart", handleTouchStart);
    rootElement.addEventListener("touchmove", handleTouchMove);
    rootElement.addEventListener("touchend", handleTouchEnd);
    rootElement.addEventListener("mousedown", handleMouseDown);
    rootElement.addEventListener("mousemove", handleMouseMove);
    rootElement.addEventListener("mouseup", handleMouseUp);
    return () => {
      rootElement.removeEventListener("touchstart", handleTouchStart);
      rootElement.removeEventListener("touchmove", handleTouchMove);
      rootElement.removeEventListener("touchend", handleTouchEnd);
      rootElement.removeEventListener("mousedown", handleMouseDown);
      rootElement.removeEventListener("mousemove", handleMouseMove);
      rootElement.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouching, touchStartX, touchEndX]);

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
        key={animationKey} // Add key to trigger animation
        className="integration-image-wrapper fade-in"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <button
          className={`integration-invisible-button integration-button1 ${
            activeIndex === 0 ? "active" : ""
          }`}
          onClick={(e) => handleButtonClick(0, e)}
          onTouchStart={stopPropagation}
          onTouchEnd={stopPropagation}
          onMouseDown={stopPropagation}
          onMouseUp={stopPropagation}
        ></button>
        <button
          className={`integration-invisible-button integration-button2 ${
            activeIndex === 1 ? "active" : ""
          }`}
          onClick={(e) => handleButtonClick(1, e)}
          onTouchStart={stopPropagation}
          onTouchEnd={stopPropagation}
          onMouseDown={stopPropagation}
          onMouseUp={stopPropagation}
        ></button>
        <button
          className={`integration-invisible-button integration-button3 ${
            activeIndex === 2 ? "active" : ""
          }`}
          onClick={(e) => handleButtonClick(2, e)}
          onTouchStart={stopPropagation}
          onTouchEnd={stopPropagation}
          onMouseDown={stopPropagation}
          onMouseUp={stopPropagation}
        ></button>
        <>
          <div
            className={`active-circle circle-${activeIndex} circle-anim-${activeIndex}`}
          ></div>
          <div className={`line-vertical line-${activeIndex}`}></div>
          <div className={`line-horizontal line-h-${activeIndex}`}></div>
          <div className={`line-horizontal line-h-mid-${activeIndex}`}></div>
          <div className={`line-vertical line-mid-${activeIndex}`}></div>
        </>
      </div>
      <div className="integration-description-container">
        <h3>{CONTENT[activeIndex].title}</h3>
        <p>{CONTENT[activeIndex].description}</p>
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
