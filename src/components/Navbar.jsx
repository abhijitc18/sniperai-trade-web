// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import SniperLogo from "../assets/sniper_ai.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed-top ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="logo">
        <img
          src={SniperLogo}
          alt="Sniper AI Logo"
          style={{ height: "60px", width: "auto" }}
        />
      </div>
      <ul className="nav-links">
        {["About", "Services", "Clients", "Contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
      <button className="cta">Get Started</button>
    </nav>
  );
};

export default Navbar;
