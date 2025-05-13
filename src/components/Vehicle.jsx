import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  FaArrowLeft,
  FaArrowRight,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

import { useTheme, useMediaQuery } from "@mui/material";

import "../styles/Vehicle.css";
import innova from "../assets/innova.png";
import ertiga from "../assets/ertiga.png";
import baleno from "../assets/baleno.png";
import fortuner from "../assets/fortuner.png";
import citynew from "../assets/citynew.png";
import crysta from "../assets/crysta.png";
import xuv500 from "../assets/xuv500.png";
import traveller from "../assets/traveller.png";
import many from "../assets/many.png";

const vehicles = [
  {
    name: "XUV 500",
    image: xuv500, // Replace with actual image if available
    seats: 7,
    rate: "₹3500 (8hr/80km)",
    description: "Spacious SUV, ideal for long distance comfort.",
    className: "vehicle-card light",
  },
  {
    name: "Maruti Ertiga",
    image: ertiga,
    seats: 7,
    rate: "₹2500 (8hr/80km)",
    description: "Comfortable MPV, suited for group travel.",
    className: "vehicle-card dark",
  },
  {
    name: "Toyota Innova",
    image: innova,
    seats: 7,
    rate: "₹3000 (8hr/80km)",
    description: "Reliable SUV, perfect for family and group outings.",
    className: "vehicle-card light",
  },
  {
    name: "Toyota Fortuner",
    image: fortuner, // Replace with Fortuner image
    seats: 7,
    rate: "₹6500 (8hr/80km)",
    description: "Premium SUV, great for long tours.",
    className: "vehicle-card dark",
  },
  {
    name: "Innova Crysta",
    image: crysta, // Replace with Crysta image
    seats: 7,
    rate: "₹3500 (8hr/80km)",
    description: "Spacious, powerful, and highly comfortable ride.",
    className: "vehicle-card light",
  },
  {
    name: "Honda City New",
    image: citynew, // Replace with Honda City image
    seats: 5,
    rate: "₹6500 (8hr/80km)",
    description: "Premium sedan with excellent mileage and style.",
    className: "vehicle-card dark",
  },
  {
    name: "Baleno",
    image: baleno, // Replace with Baleno image
    seats: 5,
    rate: "₹3360 (8hr/80km)",
    description: "Stylish hatchback with comfort and economy.",
    className: "vehicle-card light",
  },
  {
    name: "Tempo Traveller",
    image: traveller,
    seats: 26,
    rate: "₹6000 (8hr/80km)",
    description:
      "Spacious and comfortable, ideal for large groups and long journeys.",
    className: "vehicle-card dark",
  },
  {
    name: "And Many More",
    image: many, // Maybe use a generic or “plus” image
    seats: "-",
    rate: "Contact Us",
    description: "Explore full range by reaching out to us.",
    className: "vehicle-card light",
  },
];

const Vehicle = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down(650));
  const TabView = useMediaQuery(theme.breakpoints.down(1100));
  return (
    <div className="vehicle-section">
      <h2>Our Range of Vehicles</h2>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div className="vehicle-carousel-container">
          <button className="swiper-button-prev custom-arrow arrow-left">
            <FaArrowLeft />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              500: { slidesPerView: mobileView ? 2 : TabView ? 3 : 4 },
            }}
            loop={true}
          >
            {vehicles.map((vehicle, index) => (
              <SwiperSlide key={index}>
                <div className={vehicle.className}>
                  <div className="vehicle-card-img-div">
                    <img src={vehicle.image} alt={vehicle.name} />
                  </div>
                  <h4>{vehicle.name}</h4>
                  <p>
                    <FaUsers /> Seats: {vehicle.seats}
                    <br />
                    {/* <FaRupeeSign /> Rate: {vehicle.rate}
                    <br /> */}
                    {vehicle.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-next custom-arrow arrow-right">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
