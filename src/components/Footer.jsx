import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

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
      {/* Google Map Integration */}
      <div className="footer-column">
        <h3>Google Map</h3>
        <div className="map-container">
          {/* Example location: Mumbai, India */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4732.798848507315!2d73.78565429999999!3d18.560545700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3719362a51%3A0x7181739e1e370b38!2sSniper%20AI!5e1!3m2!1sen!2sin!4v1760083446596!5m2!1sen!2sin"
            width="100%"
            height="150"
            style={{ border: 0, borderRadius: "7px" }}
            allowfullscreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>
      {/* Corporate Office */}
      <div className="footer-column">
        <h3>Corporate Office</h3>
        <address>
          Sniper AI
          <br />
          Flat No A8, Floor No 2nd,
          <br />
          Primrose, Block Sector, near Datta Mandir,
          <br />
          Baner, Pune, Maharashtra 411069
        </address>
      </div>
      {/* Connect Us */}
      <div className="footer-column">
        <h3>Connect Us</h3>
        <div className="footer-social">
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
            href="https://www.linkedin.com/in/vishal-yadav-a30833389"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Alivean Tech Solutoins | All rights
      reserved.
    </div>
  </footer>
);

export default Footer;
