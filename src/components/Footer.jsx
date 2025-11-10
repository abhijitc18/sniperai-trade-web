import React from "react";
import "../styles/Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      {/* About Us */}
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          With a focus on integrity and client success, we deliver personalized
          trading solutions and professional coaching.
        </p>
      </div>

      {/* Corporate Office */}
      <div className="footer-column">
        <h3>Address</h3>
        <address>
          473 Mundet Place
          <br />
          Hillside New Jersey
          <br />
          07205 United States
        </address>
      </div>
      {/* Follow On Us */}
      <div className="footer-column">
        <h3>Follow On Us</h3>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/sniperai-trade/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sniperai_trade/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61580997666678"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://t.me/sniperai_bot2025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>
      {/* Connect Us */}
      <div className="footer-column">
        <h3>Contact Us</h3>
        <div className="map-container">
          <p>sniperaitrade@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      Copyright &copy; {new Date().getFullYear()} All rights reserved | Design
      and Developed by Alivean Tech Solutoins
    </div>
  </footer>
);

export default Footer;
