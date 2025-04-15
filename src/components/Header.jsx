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
        <a href="#">
          <FaHome /> Home
        </a>
        <a href="#">
          <FaInfoCircle /> About
        </a>
        <a href="#">
          <FaCar /> Vehicles
        </a>
        <a href="#">
          <FaPhone /> Contact
        </a>
      </div>
      {/* <div className="navbar-book-btn-div"> */}
        <button className="navbar-book-btn">Book Now</button>
      {/* </div> */}
    </div>
  );
};
{
  /* Mobile Menu Icon */
}
{
  /* <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div> */
}

export default Header;
