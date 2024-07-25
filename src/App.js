import React, { useState, useEffect, useRef } from "react";
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
  const rootRef = useRef(null);

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
    setIsSlidingActive(true);
  };

  const handleTouchMove = (event) => {
    if (!isSlidingActive) return;
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isSlidingActive || touchEndX === null) return;
    const deltaX = touchStartX - touchEndX;
    const sensitivity = 50;
    if (deltaX > sensitivity) {
      handleNext();
    } else if (deltaX < -sensitivity) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setIsSlidingActive(false);
  };

  const handleMouseDown = (event) => {
    setTouchStartX(event.clientX);
    setIsSlidingActive(true);
  };

  const handleMouseMove = (event) => {
    if (!isSlidingActive) return;
    setTouchEndX(event.clientX);
  };

  const handleMouseUp = () => {
    if (!isSlidingActive || touchEndX === null) return;
    const deltaX = touchStartX - touchEndX;
    const sensitivity = 50;
    if (deltaX > sensitivity) {
      handleNext();
    } else if (deltaX < -sensitivity) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setIsSlidingActive(false);
  };

  useEffect(() => {
    const initialIndex = routes.findIndex(
      (route) => route === window.location.pathname
    );
    setActiveItem(initialIndex !== -1 ? initialIndex : 0);
  }, []);

  useEffect(() => {
    const rootElement = rootRef.current;
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
  }, [isSlidingActive, touchStartX, touchEndX]);

  return (
    <div
      ref={rootRef}
      className={`content-container ${isSlidingActive ? "sliding" : ""}`}
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
