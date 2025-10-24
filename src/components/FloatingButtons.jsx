import React, { useState, useEffect } from "react";
import "../styles/FloatingButtons.css";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "+918600815001"; // Use your WhatsApp number

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {showScroll && (
        <button
          className="floating-btn top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
      <a
        className="floating-btn whatsapp-btn"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default FloatingButtons;
