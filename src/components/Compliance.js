import React from "react";
import "../styles/Compliance.css";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Compliance = () => {
  return (
    <div className="compliance-main-wrapper">
      <div className="compliance-header">
        <h4>Compliance</h4>
        <h2>Leading with</h2>
        <h2>Compliance and Security</h2>
        <p>
          At Synk Pay, we prioritise your peace of mind by ensuring full
          compliance with stringent regulations:
        </p>
      </div>
      <div className="compliance-content">
        <div className="compliance-item">
          <img src="static/images/Compliance/mica.png" alt="MiCA Regulations" />
          <h3>MiCA Regulations</h3>
          <p>
            Comprehensive adherence to the Markets in Crypto-Assets regulations,
            providing a solid legal foundation for all operations.
          </p>
        </div>
        <div className="compliance-item">
          <img src="static/images/Compliance/aml.png" alt="AML/CTF Measures" />
          <h3>AML/CTF Measures</h3>
          <p>
            Implementing rigorous Anti-Money Laundering and Counter-Terrorist
            Financing protocols, including KYC procedures, transaction
            monitoring, and reporting to the Financial Crime Investigation
            Service.
          </p>
        </div>
        <div className="compliance-item">
          <img src="static/images/Compliance/gdpr.png" alt="GDPR Compliance" />
          <h3>GDPR Compliance</h3>
          <p>
            Protecting personal data with full compliance to the General Data
            Protection Regulation, ensuring data accuracy, security, and user
            rights to access, rectify, and erase their data.
          </p>
        </div>
      </div>
      <div className="compliance-footer-container">
        <div className="compliance-copyright">
          <p>Powered by Novatide Labs</p>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
