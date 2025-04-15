import React, { useState } from "react";
import "../styles/Home.css";
import Header from "../components/Header"; // Import the Header component
import HeroSection from "../components/HeroSection"; // Import the HeroSection component
import Vehicle from "../components/Vehicle";
import AboutUs from "../components/AboutUs";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-div">
      <Header />
      <div className="home-container">
        <section id="Home" className="home-content-div">
          <HeroSection />
        </section>

        <section id="Vehicle" className="home-content-div">
          <Vehicle />
        </section>

        <section id="About" className="home-content-div">
          <AboutUs />
        </section>
      </div>
    </div>
  );
};

export default Home;
