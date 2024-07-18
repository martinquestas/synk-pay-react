import React from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div className="home-main-wrapper">
      <div className="home-page">
        <h2>Synchronise Your</h2>
        <h2>Business Finances</h2>
        <p>
          Welcome to Synk Pay, where innovation meets security in digital
          finance.
        </p>{" "}
      </div>
    </div>
  );
};

export default Home;
