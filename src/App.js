import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./sections/About";
import Services from "./sections/Services";
import OurPartner from "./sections/OurPartner";
import TradingViewWidget from "./components/TradingViewWidget";
import Client from "./sections/Client";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import TradingViewTicker from "./components/TradingViewTicker";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import PopupModel from "./components/PopupModal";
import partners from "./data/partners";
import Trader from "./sections/Trader";
import "./App.css";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TradingViewTicker />
      <Navbar openModal={() => setShowModal(true)} />
      <main>
        <HeroSlider />
        <About />
        <Services />
        <OurPartner openModal={() => setShowModal(true)} />
        <TradingViewWidget />
        <Client />
        <Gallery />
        <Contact />
        <PopupModel
          show={showModal}
          onClose={() => setShowModal(false)}
          partners={partners}
        />
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Trader Landing Page */}
          <Route path="/trader" element={<Trader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
