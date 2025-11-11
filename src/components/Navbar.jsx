// import React, { useState, useEffect } from "react";
// import "../styles/Navbar.css";
// import SniperLogo from "../assets/sniperai_logo.png";

// const Navbar = ({ openModal }) => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = ["About", "Services", "Our Partners", "Clients", "Contact"];

//   const handleSmoothScroll = (e, id) => {
//     e.preventDefault();
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <nav className={`navbar fixed-top ${scrolled ? "navbar-scrolled" : ""}`}>
//       <div className="logo">
//         <img
//           src={SniperLogo}
//           alt="Sniper AI Logo"
//           style={{ height: "60px", width: "auto", cursor: "pointer" }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         />
//       </div>
//       <ul className="nav-links">
//         {menuItems.map((section) => {
//           const id = `#${section.toLowerCase().replace(/\s+/g, "-")}`;
//           return (
//             <li key={section}>
//               <a
//                 href={id}
//                 onClick={(e) => handleSmoothScroll(e, id)}
//                 style={{ color: "inherit", textDecoration: "none" }}
//               >
//                 {section}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//       <button className="cta" onClick={openModal}>
//         Get Started
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import SniperLogo from "../assets/sniperai_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ openModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["About", "Services", "Our Partners", "Clients", "Contact"];

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar fixed-top ${scrolled ? "navbar-scrolled" : ""}`}>
      <div
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={SniperLogo} alt="Sniper AI Logo" className="navbar-logo" />
      </div>

      {/* Desktop Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {menuItems.map((section) => {
          const id = `#${section.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <li key={section}>
              <a href={id} onClick={(e) => handleSmoothScroll(e, id)}>
                {section}
              </a>
            </li>
          );
        })}
        <button className="cta mobile-cta" onClick={openModal}>
          Get Started
        </button>
      </ul>

      {/* Desktop CTA */}
      <button className="cta desktop-cta" onClick={openModal}>
        Get Started
      </button>

      {/* Hamburger Menu Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
