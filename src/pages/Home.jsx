import React, { useState } from "react";
import "../styles/Home.css";
import carImage from "../assets/car.png"; // Replace with your actual image path
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
        <section className="home-content-div">
          <HeroSection />
        </section>

        <section className="home-content-div">
          <Vehicle />
        </section>

        <section className="home-content-div">
          <AboutUs />
        </section>
      </div>
    </div>
  );
};

{
  /* Upper Half */
}
{
  /* <div className="hero">
          <h1>MAHARAJA CAR RENTAL SERVICES</h1>
          <p>Your trusted car rental service in Kolkata. Experience luxury, affordability, and comfort with our premium fleet.</p>
          <button className="book-btn">Book Now</button>
      </div> */
}

{
  /* Lower Half */
}
{
  /* <div className="car-info">
          <div className="description">
              <h2>Reliable Car Rentals in Kolkata</h2>
              <p>
                  Whether you're visiting Kolkata for business or leisure, we provide the best rental cars for your needs.
                  Choose from our wide range of well-maintained sedans, SUVs, and luxury cars at competitive prices.
                  Enjoy hassle-free booking, professional drivers, and 24/7 customer support.
              </p>
          </div>
          <div className="car-image">
              <img src={carImage} alt="Luxury Car" />
          </div>
      </div> */
}
export default Home;
