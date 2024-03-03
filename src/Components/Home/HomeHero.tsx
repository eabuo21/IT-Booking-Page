/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: Import Swiper Navigation styles
import "swiper/css/pagination"; // Optional: Import Swiper Pagination styles

import FamilyHouse from "../../assets/images/Hero-images/nccfhouse.jpg";
import Fellowship from "../../assets/images/Hero-images/fellowhip.jpg";

import Ruggd from "../../assets/images/Hero-images/rural-rugged.jpg";
import { Link } from "react-router-dom";

const MyCarousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
     
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div
          className="first-slide flex  flex-col  gap-4w-full bg-no-repeat h-[450px] p-2 justify-center items-center "
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${FamilyHouse})`,
            backgroundPosition: "center",
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <section className="heading-section relative flex flex-col  gap-5 top-8 ">
            <h1 className="welcome-text    text-6xl font-bold text-white font-sans   text-center ">
              WELCOME TO NCCF ABUJA CHAPTER
            </h1>
            <h4 className="sub-heading-text   text-white text-2xl font-normal font-dm text-center ">
              THE NIGERIAN CHRISTIAN COPPERS FELLOWSHIP
            </h4>
          </section>

          <section className="circle-items-container flex flex-col relative top-9  w-[30%]   ml-auto h-[200px]">
            <div className="circle-container-1  absolute  mx-auto  bg-blue-700  rounded-[50%] w-[70px] h-[70px]  left-[9rem] shadow-current shadow-md flex flex-col justify-center items-center ">
              <p className="text-white font-cur font-bold text-base "> NCCF</p>
            </div>

            <div className="circle-container    bg-white  rounded-[50%] w-[200px] h-[400px]  justify-center items-center p-2  shadow-current shadow-md  flex flex-col ">
              <Link
                to=""
                className="flex flex-col justify-center items-center "
              >
                <p className="explore-text text-blue-950 font-bold text-2xl font-sans text-left ">
                  Start Exploring
                </p>
                <span className="arrow-arrow  text-center  font-bold text-4xl  text-blue-950 ">
                  &rarr;
                </span>
              </Link>
            </div>
          </section>
        </div>
      </SwiperSlide>

      {/*slide 2*/}
      <SwiperSlide>
        <div
          className="first-slide flex w-full bg-no-repeat h-[450px] justify-start items-start  p-4"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Fellowship})`,
            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          <section className="items-container       flex flex-col gap-5 justify-start items-start px-3 p-2 gap-5">
            <h1 className="heading-for-slider  text-white font-semibold  text-5xl font-serif  text-lft w-[50%] ">
              EMBRACE THE LIGHT OF GOD'S LOVE, AND WALK IN HIS WAYS
            </h1>
            <div className="text-gif flex flex-row gap-4 ">
              <p className="under-text font-normal font-sans text-2xl text-left w-[55%] text-transparent bg-clip-text bg-gradient-to-br from-white to-white ">
                Welcome to our Christian family, where the light of God's love
                shines brightly. Join us on a journey of faith, hope, and
                community. Together, we seek to grow in His grace and share His
                love with the world.
              </p>
            </div>
            <Link to=" ">
              <button className="learn-more-button bg-white p-3 w-[fixed] h-[fixed] text-blue-700 font-bold  font-sans  text-xl text-center  border-2 border-blue-700 hover:bg-blue-700 hover:text-white hover:ease-in-out hover:transition-colors hover:duration-1000   transition:colors duration-1000 ease-in-out ">
                Learn More &rarr;
              </button>
            </Link>
          </section>
        </div>
      </SwiperSlide>

      {/*slide 3 */}

      <SwiperSlide>
        <div
          className="first-slide flex w-full bg-no-repeat h-[450px] p-2 justify-center items-center "
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Ruggd})`,
            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          <section className="items-container       flex flex-col justify-center items-center px-3 p-2 gap-3">
            <h1 className="heading-text  text-6xl font-bold font-dm text-white text-center  relative bottom-4 ">
              <span className="colored-text  text-transparent bg-clip-text bg-gradient-to-b from-white to-violet-800 font-bold   ">
                {" "}
                NCCF 2024
              </span>{" "}
              RURAL RUGGED EVANGELISM OUTREACH
            </h1>
            <h3 className="text-white font-bold  text-4xl">
              Transformative Community Outreach
            </h3>
            <p className="font-normal font-sans text-2xl text-white text-center   w-[60%]">
              Join hands with us in making a positive impact on our community.
              Through outreach programs, missions, and charitable activities, we
              strive to be the hands and feet of Jesus, bringing hope, healing,
              and love to those in need.
            </p>
            <Link to=" ">
              <button className="learn-more-button bg-white p-3 w-[fixed] h-[fixed] text-blue-700 font-bold  font-sans  text-xl text-center  border-2 border-blue-700 hover:bg-blue-700 hover:text-white hover:ease-in-out hover:transition-colors hover:duration-1000   transition:colors duration-1000 ease-in-out ">
                Join Us Today &rarr;
              </button>
            </Link>
          </section>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
