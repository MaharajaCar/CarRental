import React, { useState } from "react";
import "../styles/AboutUs.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import about from "../assets/aboutus.png";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="about-us-wrapper">
      <div className="top-section">
          <h2>Adventure Awaits. We've Got the Wheels.</h2>
          <div className="about-us-content-div">
            <div className="description-box">
              <p className="description">
                Looking for a premium ride to elevate your next trip? Whether
                you're dreaming of a stress-free family vacation, organizing a
                wedding with a royal entrance, or craving a spontaneous weekend
                road trip to the coast—
                <strong>Maharaja Car Rental Services</strong> is your go-to
                travel companion.
                <br />
                <br />
                Based in the vibrant heart of Kolkata's Park Circus, we
                specialize in delivering reliable, self-drive car rental
                experiences tailored to your every need. From sleek sedans to
                spacious SUVs, our fleet is prepped to turn every journey into a
                celebration.
              </p>
              <div className="contact-info">
                <div className="contact-details-div">
                  <div className="contact-details">
                    <FaPhoneAlt className="contact-icon" />
                    <span className="contact-text">
                      Call Us:
                      <a href="tel:+918100035886">+91 81000 35886</a>
                    </span>
                  </div>
                  <div className="contact-details">
                    <FaEnvelope className="contact-icon" />
                    <span className="contact-text">
                      Email:
                      <a href="mailto:info@maharajacars.in">
                        info@maharajacars.in
                      </a>
                    </span>
                  </div>
                </div>
                <div>

                <button className="contact-location-btn" onClick={toggleModal}>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span className="contact-text">View Location</span>
                </button>
                </div>
              </div>
            </div>

          <div className="about-image-div">
            <img src={about} alt="About Us" className="about-image" />
          </div>
          </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>

            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.878751319235!2d88.3664009!3d22.546214300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770042cd2301%3A0x698e6c4d9f4693dc!2sMaharaja%20Car%20Rental%20Service!5e0!3m2!1sen!2sin!4v1744710928783!5m2!1sen!2sin"
              width="100%"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="model-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
