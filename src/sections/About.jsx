// src/sections/About.jsx
import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about-us.jpg";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";

const About = () => (
  <section id="about" className="about-section">
    <div className="about-text">
      <h2 className="about-title">
        About SniperAI
        <span className="angled-underline">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </h2>
      <p>
        SniperAI is an experienced Forex trader with over 10 years of expertise
        in managing large portfolios. With strong knowledge of market trends and
        risk control. We consistently delivers great results for clients
        worldwide.
      </p>
      <p>
        Our services include trading signals, one-on-one coaching, and market
        insights to help traders at every level grow. SniperAI is dedicated to
        teaching beginners and encouraging disciplined trading habits.
      </p>
      <p>
        Our focus on honesty and client success has made him a respected and
        trusted Forex professional across global markets.
      </p>

      <div className="social-icons">
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
    <div className="about-image">
      <img src={aboutImg} alt="SniperAI Trade" />
    </div>
  </section>
);

export default About;
