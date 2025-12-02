import React, { useState } from "react";
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
import "./App.css";
import PopupModel from "./components/PopupModal";
import partners from "./data/partners";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
