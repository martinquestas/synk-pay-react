import React, { useState, useEffect, useRef, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import Solutions from "./components/Solutions";
import Compliance from "./components/Compliance";
import Security from "./components/Security";
import Integration from "./components/Integration";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import NavigationIndicator from "./components/NavigationIndicator";
import { preloadImages } from "./utils/preloadImages";
import { MobileMenuContext } from "./context/MobileMenuContext";

const imageUrls = [
  "static/images/Integration/sub_2.png",
  "static/images/Integration/sub_3.png",
  "static/images/Security/sub1_1.png",
  "static/images/Security/sub2_1.png",
  "static/images/Security/sub3_1.png",
  "static/images/Security/sub1_2.png",
  "static/images/Security/sub2_2.png",
  "static/images/Security/sub3_2.png",
];

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();
  const routes = [
    "/",
    "/solutions",
    "/compliance",
    "/security",
    "/integration",
    "/insights",
    "/contact",
  ];

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isSlidingActive, setIsSlidingActive] = useState(false);
  const [touchStartTime, setTouchStartTime] = useState(null);
  const rootRef = useRef(null);
  const { isMenuOpen, toggleMenu } = useContext(MobileMenuContext);

  const handleTitleColorChange = (index) => {
    const navbarTitles = document.querySelectorAll(".nav-links a");
    navbarTitles.forEach((title, i) => {
      if (i === index) {
        title.classList.add("active");
      } else {
        title.classList.remove("active");
      }
    });
  };

  const handleItemClick = (index) => {
    if (isMenuOpen) {
      toggleMenu();
    }
    setActiveItem(index);
    navigate(routes[index]);
    handleTitleColorChange(index);
  };

  const handleDotClick = (index) => {
    setActiveItem(index);
    navigate(routes[index]);
    handleTitleColorChange(index);
  };

  const navigateTo = (index) => {
    setActiveItem(index);
    navigate(routes[index]);
    handleTitleColorChange(index);
  };

  const handlePrev = () => {
    const newIndex = activeItem === 0 ? routes.length - 1 : activeItem - 1;
    navigateTo(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeItem === routes.length - 1 ? 0 : activeItem + 1;
    navigateTo(newIndex);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
    setTouchStartTime(Date.now());
    setIsSlidingActive(true);
  };

  const handleTouchMove = (event) => {
    if (!isSlidingActive) return;
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (!isSlidingActive || touchEndX === null) return;
    const deltaX = touchStartX - touchEndX;
    const sensitivity = 50;
    const maxDuration = 500; // Maximum duration to consider as a swipe
    const duration = Date.now() - touchStartTime;
    const minDistance = 30; // Minimum distance to consider as a swipe

    if (Math.abs(deltaX) > minDistance && duration < maxDuration) {
      if (deltaX > sensitivity) {
        handleNext();
      } else if (deltaX < -sensitivity) {
        handlePrev();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
    setIsSlidingActive(false);
    setTouchStartTime(null);
  };

  const handleMouseDown = (event) => {
    setTouchStartX(event.clientX);
    setTouchStartTime(Date.now());
    setIsSlidingActive(true);
  };

  const handleMouseMove = (event) => {
    if (!isSlidingActive) return;
    setTouchEndX(event.clientX);
  };

  const handleMouseUp = (event) => {
    if (!isSlidingActive || touchEndX === null) return;
    const deltaX = touchStartX - touchEndX;
    const sensitivity = 50;
    const maxDuration = 500; // Maximum duration to consider as a swipe
    const duration = Date.now() - touchStartTime;
    const minDistance = 30; // Minimum distance to consider as a swipe

    if (Math.abs(deltaX) > minDistance && duration < maxDuration) {
      if (deltaX > sensitivity) {
        handleNext();
      } else if (deltaX < -sensitivity) {
        handlePrev();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
    setIsSlidingActive(false);
    setTouchStartTime(null);
  };

  useEffect(() => {
    const initialIndex = routes.findIndex(
      (route) => route === window.location.pathname
    );
    setActiveItem(initialIndex !== -1 ? initialIndex : 0);
  }, []);

  useEffect(() => {
    preloadImages(imageUrls);
  }, []);

  // useEffect(() => {
  //   const rootElement = rootRef.current;
  //   rootElement.addEventListener("touchstart", handleTouchStart);
  //   rootElement.addEventListener("touchmove", handleTouchMove);
  //   rootElement.addEventListener("touchend", handleTouchEnd);
  //   rootElement.addEventListener("mousedown", handleMouseDown);
  //   rootElement.addEventListener("mousemove", handleMouseMove);
  //   rootElement.addEventListener("mouseup", handleMouseUp);
  //   return () => {
  //     rootElement.removeEventListener("touchstart", handleTouchStart);
  //     rootElement.removeEventListener("touchmove", handleTouchMove);
  //     rootElement.removeEventListener("touchend", handleTouchEnd);
  //     rootElement.removeEventListener("mousedown", handleMouseDown);
  //     rootElement.removeEventListener("mousemove", handleMouseMove);
  //     rootElement.removeEventListener("mouseup", handleMouseUp);
  //   };
  // }, [isSlidingActive, touchStartX, touchEndX]);

  return (
    <div
      ref={rootRef}
      className={`content-container ${isSlidingActive ? "sliding" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <CustomNavbar handleItemClick={handleItemClick} activeItem={activeItem} />
      <Routes>
        <Route
          path="/"
          element={<Home isSlidingActive={isSlidingActive} />}
          exact
        />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/security" element={<Security />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <NavigationIndicator
        activeIndex={activeItem}
        handleDotClick={handleDotClick}
      />
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
