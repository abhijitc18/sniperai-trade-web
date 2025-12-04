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
    title: "4+ Years of Proven Forex Performance",
    subtext: "$5M+ Portfolios Managed",
    cta: "Join Our Telegram Channel Now",
    backgroundStyle: {
      backgroundImage: `url(${banner1}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "https://t.me/Sniperaitrade",
  },
  {
    id: 2,
    title: "Empowering Traders with AI Precision",
    subtext: "Signals • Insights • Proven Results",
    cta: "Join Our Telegram Channel Now",
    backgroundStyle: {
      backgroundImage: `url(${banner2}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "https://t.me/Sniperaitrade",
  },
  {
    id: 3,
    title: "Comprehensive Forex Solutions",
    subtext:
      '"Expert Signals | Personalized Consultations | Professional Training"',
    cta: "Join Our Telegram Channel Now",
    backgroundStyle: {
      backgroundImage: `url(${banner3}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ctaLink: "https://t.me/Sniperaitrade",
  },
  {
    id: 4,
    title: "Ready to Profit? Talk to Our Experts!",
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
            <a
              href={slide.ctaLink}
              className="cta-button"
              target={slide.ctaLink === "#contact" ? undefined : "_blank"}
              rel={
                slide.ctaLink === "#contact" ? undefined : "noopener noreferrer"
              }
            >
              {slide.cta}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
