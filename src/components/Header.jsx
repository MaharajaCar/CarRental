import React from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCar,
  FaPhone,
} from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  let menuOpen;
  return (
    <div className={menuOpen ? "nav-links mobile-menu" : "nav-links"}>
      <div className="navbar-buttons">
        <a href="#Home">
          <FaHome /> Home
        </a>
        <a href="#Vehicle">
          <FaCar /> Vehicles
        </a>
        <a href="#About">
          <FaInfoCircle /> About
        </a>
      </div>
        <button className="navbar-book-btn"><a style={{color: "white"}} href="tel:+918100035886">Call Now</a></button>
    </div>
  );
};

export default Header;
