// src/sections/About.jsx
import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about-us.jpg";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const About = () => (
  <section id="about" className="about-section">
    <div className="about-text">
      <h2 className="about-title">
        About the trader
        <span className="angled-underline">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </h2>
      <p>
        SniperAI is a seasoned Forex trader with over 10 years of experience
        managing high-value portfolios. With a deep understanding of market
        trends and risk management, Vishal consistently achieves outstanding
        results for clients around the world.
      </p>
      <p>
        Our expertise includes trading signals, personalized coaching, and
        market analysis to help traders of all levels succeed. He is passionate
        about educating new traders and promoting disciplined trading practices.
      </p>
      <p>
        Our commitment to transparency and client success has earned him
        recognition as a trusted Forex expert in international markets.
      </p>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/vishal-yadav-a30833389"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/v_i_s_h_a_l_5001/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/vishal.yadav.768602"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
    <div className="about-image">
      <img src={aboutImg} alt="Vishal Yadav Forex Trader" />
    </div>
  </section>
);

export default About;
