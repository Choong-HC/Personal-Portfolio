import React from 'react';
import './FooterStyles.css';
import { FaHome, FaMailBulk, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="left">
          <h2>Let's Get in Touch</h2>
        </div>

        {/* Right Section */}
        <div className="right">
          <div className="row">
            {/* Location */}
            <div className="section">
              <h3>Location</h3>
              <div className="item">
                <FaHome className="footer-icon" />
                <p>Selangor/Kuala Lumpur</p>
              </div>
            </div>

            {/* Mail */}
            <div className="section">
              <h3>Mail</h3>
              <div className="item">
                <FaMailBulk className="footer-icon" />
                <a
                  href="mailto:choonghc0623@gmail.com"
                  className="email-link"
                >
                  choonghc0623@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Web Address */}
            <div className="section">
              <h3>Web Address</h3>
              <div className="item">
                <a
                  href="https://www.linkedin.com/in/hoi-chun-choong-49159124a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <FaLinkedin className="footer-icon" />
                  Visit LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;