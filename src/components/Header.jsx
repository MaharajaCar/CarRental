import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCar,
} from "react-icons/fa";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="nav-links">
      <div className="navbar-buttons">
      <div >
        <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
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
