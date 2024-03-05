/** @format */

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import House from "../../../assets/images/Hero-images/nccfhouse.jpg";
import { Link } from "react-router-dom";

const Carousel1: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    smooth: true,
    adaptiveHeight: false,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    useCss: true,
    useTransform: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div
          key={i}
          className={`custom-dot flex flex-col justify-center items-center     border-black  border-2 rounded-[50%]  h-[20px] p-2 transition-all transition-duration-800 ease-in-out ${
            i === activeIndex
              ? "active  bg-gradient-to-r from-blue-700 to-blue-950  border-t-blue-950 border-b-black border-l-blue-700 border-r-black   transition-all transition-duration-800 ease-in-out"
              : "   " // Add a class for the active dot
          }`}
        ></div>
      );
    },
  };

  return (
    <>
      <div className="main-slider-container p-1 flex flex-col justify-center items-center pb-12 pt-8">
        <h1
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-linear"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="true"
          className="testimonial-heading font-bold font-[cursive]  text-opacity-40 text-4xl text-blue-950"
        >
          EXPLORE & DISCOVER OUR LOCATIONS
        </h1>
        <p
          data-aos="fade-in"
          data-aos-anchor-placement="bottom-center"
          data-aos-easing="ease-linear"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="true"
          className="text-blue-950  text-3xl font-[cursive] text-center pb-4"
        >
          Don't Get Stranded After Camp
        </p>
        <Link to=" " className=" pb-12">
          <button
            data-aos="zoom-out"
            data-aos-easing="ease-in linear"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
            data-aos-once="true"
            className="booking-button  bg-gradient-to-br from-blue-950 to-[tomato]    hover:bg-gradient-to-br hover:from--[tomato] hover:to-[magenta]  hover:transition-all hover:duration-1000 hover:ease-in-out  duration-1000 ase-in-out transition-all text-white font-bold text-xl  p-3 w-auto h-auto justify-center items-center flex "
          >
            Book Accommodation
          </button>
        </Link>
        <Slider
          {...settings}
          className="w-[1000px] h-[350px] transform-skew-x-9 flex flex-row justify-center  items-center   p-2    "
        >
          {/*slide 1*/}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in linear"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
            data-aos-once="true"
            className="slide-1 flex flex-col gap-3 justify-center items-center w-auto  h-[300px] p-2 bg-black rounded-md shadow-current shadow-md    md:bg-transparent md:shadow-none "
          >
            <div className="box-containing-carousel-items  bg-gradient-to-br from-blue-950 to-[tomato]    w-[465px] h-[300px]  shadow-current shadow-md   transform-skew-x-9 ">
              <img
                src={House}
                alt="carousel-image"
                className=" location-image transform-skew-x-9  w-[465px] h-[300px]"
              />
              <p className="descriptive-text-element  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity duration-700">
                {" "}
                NCCF KUBWA FAMILY HOUSE ABUJA NIGERIA{" "}
              </p>
            </div>
          </div>

          {/*slide  2*/}

          <div
            data-aos="fade-up"
            data-aos-easing="ease-in linear"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
            data-aos-once="true"
            className="slide-1 flex flex-col gap-3 justify-center items-center w-full p-2     bg-black rounded-md shadow-current shadow-md    md:bg-transparent md:shadow-none "
          >
            <div className="box-containing-carousel-items     w-[465px] h-[300px]  shadow-current shadow-md   bg-gradient-to-br from-blue-950 to-[tomato] ">
              <img
                src={House}
                alt="carousel-image"
                className=" w-[465px] h-[300px] location-image"
              />
              <p className="descriptive-text-element  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity duration-700">
                {" "}
                NCCF KUBWA FAMILY HOUSE ABUJA NIGERIA{" "}
              </p>
            </div>
          </div>

          {/*slide  3*/}

          <div
            data-aos="fade-up"
            data-aos-easing="ease-in linear"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
            data-aos-once="true"
            className="slide-1 flex flex-col gap-3 justify-center items-center w-full p-2   bg-black rounded-md shadow-current shadow-md    md:bg-transparent md:shadow-none "
          >
            <div className="box-containing-carousel-items     w-[465px] h-[300px]  shadow-current shadow-md   bg-gradient-to-br from-blue-950 to-[tomato] ">
              <img
                src={House}
                alt="carousel-image"
                className=" w-[465px] h-[300px]   location-image"
              />
              <p className="descriptive-text-element  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity duration-700 ">
                {" "}
                NCCF KUBWA FAMILY HOUSE ABUJA NIGERIA{" "}
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel1;
