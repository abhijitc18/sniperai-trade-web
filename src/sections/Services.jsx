import React from "react";
import "../styles/Services.css";

import signalImg from "../assets/TradingSignals.jpeg";
import riskImg from "../assets/RiskManagement.jpg";
import coachingImg from "../assets/PersonalCoaching.jpg";

const services = [
  {
    title: "Trading Signals",
    description:
      "Receive accurate and timely forex trading signals tailored to market trends, helping you make informed decisions.",
    image: signalImg,
  },
  {
    title: "Risk Management",
    description:
      "Comprehensive strategies to manage risk effectively, protecting your investments and maximizing returns.",
    image: riskImg,
  },
  {
    title: "Personal Coaching",
    description:
      "One-on-one coaching sessions to refine your trading skills and strategies with personalized guidance.",
    image: coachingImg,
  },
];

const Services = () => (
  <section id="services" className="services-section">
    <div className="service-heading">
      <h2 className="services-title">
        Services
        <span className="angled-underline">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </h2>
      <p>
        At SniperAI.trade, we empower traders with intelligent forex solutions
        designed for success. Our Trading Signals provide precise, data-driven
        insights to help you make confident market moves. Through Risk
        Management, we guide you in protecting capital and optimizing
        performance with disciplined strategies. And with Personal Coaching, our
        experts offer one-on-one mentorship to help you master trading
        psychology, strategy, and execution.
      </p>
    </div>
    <div className="services-grid">
      {services.map((service) => (
        <div className="service-card" key={service.title}>
          <img
            src={service.image}
            className="service-image"
            alt={service.title}
          />
          <div className="service-title">{service.title}</div>
          <div className="service-desc">{service.description}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
