import React, { useState, useEffect, useRef } from "react";
import partners from "../data/partners";
import "../styles/OurPartner.css";

const OurPartner = ({ openModal }) => {
  const [showModal, setShowModal] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const slideWidth = 220; // Adjust for logo width plus margin
    const speed = 1; // px per frame
    let animationFrameId;

    const scrollCarousel = () => {
      if (!carousel) return;
      scrollAmount += speed;

      if (scrollAmount >= slideWidth) {
        carousel.appendChild(carousel.firstElementChild);
        scrollAmount = 0;
        carousel.style.transform = `translateX(0)`;
      } else {
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
      }
      animationFrameId = requestAnimationFrame(scrollCarousel);
    };
    animationFrameId = requestAnimationFrame(scrollCarousel);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="our-partners"
      className="partners-section"
      style={{ backgroundColor: "transparent" }}
    >
      <h2 className="partners-title">
        Our Partners
        <span className="angled-underline">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </h2>

      {/* Carousel */}
      <div className="carousel-container" style={{ margin: "40px 0" }}>
        <div className="carousel" ref={carouselRef}>
          {/* Duplicated logos for smooth infinite scroll */}
          {[...partners, ...partners].map((p, idx) => (
            <div className="partner-logo-container" key={idx}>
              <img src={p.logo} alt={p.name} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>

      <p className="partners-subtitle">
        We collaborate with trusted global brokers
      </p>
      <p className="partners-overview">
        Our carefully selected partners are leading names in the trading
        industry, each chosen for their reliability, global reach, and
        commitment to secure, innovative financial solutions. By partnering with
        these reputable brokers, we help you access world-class opportunities
        and tailored support, giving confidence to your trading journey.
      </p>

      {/* Button and Modal */}
      <button className="open-account-btn" onClick={openModal}>
        Open an account with us
      </button>
    </section>
  );
};

export default OurPartner;
