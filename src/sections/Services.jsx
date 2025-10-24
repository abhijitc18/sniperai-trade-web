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
    <h2 className="services-header">Services</h2>
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
