// src/components/HeroSlider.jsx
import React, { useState, useEffect } from "react";
import "../styles/HeroSlider.css";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpeg";
import banner3 from "../assets/banner-3.jpeg";
import banner4 from "../assets/banner-4.jpeg";

const slides = [
  {
    id: 1,
    title: "Sniper AI - 4+ Years in Forex Trading",
    subtext: "Managed $5M+ Portfolios",
    cta: "Learn More",
    backgroundStyle: {
      backgroundImage: `url(${banner1}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "#services",
  },
  {
    id: 2,
    title: "Expert Forex Services",
    subtext: "Signals, Consultations, Training",
    cta: "Get Started",
    backgroundStyle: {
      backgroundImage: `url(${banner2}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "#services",
  },
  {
    id: 3,
    title: "200% Average Profit for Clients",
    subtext: '"Quote from Client X"',
    cta: "",
    backgroundStyle: {
      backgroundImage: `url(${banner3}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "",
  },
  {
    id: 4,
    title: "Ready to Trade? Contact Me!",
    subtext: "",
    cta: "Reach Out",
    backgroundStyle: {
      backgroundImage: `url(${banner4}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "#contact",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ ...slide.backgroundStyle }}
        >
          <h1>{slide.title}</h1>
          {slide.subtext && <p>{slide.subtext}</p>}
          {slide.cta && (
            <a href={slide.ctaLink} className="cta-button">
              {slide.cta}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
