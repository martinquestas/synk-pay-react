import React from "react";
import "../styles/Contact.css";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {
  return (
    <div className="contact-main-wrapper">
      <div className="contact-page">
        <h2>Get in Touch</h2>
        <p>
          Discover how Synk Pay can transform your business's financial
          operations. Reach out to our team to learn more and start optimising
          your financial management with our innovative solutions.
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Location</h3>
          <p>
            Sherman,
            <br /> Calle Wallaby 42, Sidney
          </p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>email@email.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone number</h3>
          <p>+00 123 456 789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
