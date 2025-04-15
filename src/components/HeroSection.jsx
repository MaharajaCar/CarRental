import React from "react";
import "../styles/HeroSection.css";
import car from "../assets/car1.png";

const HeroSection = () => {
  return (
    <div className="tg">
      <div className="hero-section">
        <div className="hero-heading">
          MAHARAJA <br />
          CAR RENTAL
        </div>
        <div className="hero-book-btn-div">
          <button className="hero-book-btn">Call Now</button>
        </div>
      </div>
      {/* Hero Section Section */}
      <img src={car} alt="Car" className="car-image" />
    </div>
  );
};

export default HeroSection;
