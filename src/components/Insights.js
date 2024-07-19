import React from "react";
import "../styles/Insights.css";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Insights = () => {
  return (
    <div className="insights-main-wrapper">
      <div className="insights-header">
        <h2>Data-Driven</h2>
        <h2>Decision Making</h2>
        <p>
          Leverage our advanced analytics and reporting tools to gain insights
          into your financial activities:
        </p>
      </div>
      <div className="insights-content">
        <div className="insights-item">
          <img
            src="static/images/insights/realtime-tracking.png"
            alt="Real-Time Tracking"
          />
          <h3>Real-Time Tracking</h3>
          <p>Monitor your financial activities as they happen.</p>
        </div>
        <div className="insights-item-two">
          <img
            src="static/images/insights/customizable-reports.png"
            alt="Customizable Reports"
          />
          <h3>Customizable Reports</h3>
          <p>Tailor reports to meet your specific needs.</p>
        </div>
        <div className="insights-item-three">
          <img
            src="static/images/insights/predictive-analytics.png"
            alt="Predictive Analytics"
          />
          <h3>Predictive Analytics</h3>
          <p>Anticipate market trends and make informed decisions.</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
