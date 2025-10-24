import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./sections/About";
import Services from "./sections/Services";
import Client from "./sections/Client";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <Services />
        <Client />
        <Contact />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
