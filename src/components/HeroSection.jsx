import React from "react";
import "../styles/HeroSection.css";
import car from "../assets/car1.png";

const HeroSection = () => {
  return (
    <div className="hero-section-background">
      <div className="hero-section">
        <div className="hero-heading">
          <strong>MAHARAJA <br />
          CAR RENTAL</strong>
        </div>
        {/* <div className="hero-book-btn-div"> */}
          <button className="hero-book-btn"><a style={{color:"white"}} href="tel:+918100035886">Call Now:<br/> +91 8100035886</a></button>
        {/* </div> */}
      </div>
      <img src={car} alt="Car" className="car-image" />
    </div>
  );
};

export default HeroSection;
