import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./sections/About";
import Services from "./sections/Services";
import TradingViewWidget from "./components/TradingViewWidget";
import Client from "./sections/Client";
import Contact from "./sections/Contact";
import TradingViewTicker from "./components/TradingViewTicker";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TradingViewTicker />
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <Services />
        <TradingViewWidget />
        <Client />
        <Contact />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
