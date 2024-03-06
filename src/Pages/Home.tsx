/** @format */

import React, { useEffect } from "react";
/*
import axios from "axios";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api"; */

import Hero from "../Components/Home/HomeHero";
import Subhero from "../Components/Home/Card/Card";
import Slider from "../Components/Home/Card/LocSlider";
import Element from "../Components/Home/Card/Elements";
import Map from "../assets/images/backgrounds/dotmap.avif";


const HomePage: React.FC = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <div className="home-container  bg-white h-screen w-full  ">
        <section className="hero-section   h-[300px] w-full ">
          <Hero />
        </section>

        <section className="bg-[#CFEAD9] w-full h-[700px]  p-4  pb-16 flex justify-center items-center ">
          <Subhero />
        </section>

        <section className="bg-white w-full h-[fixed]  p-4  pb-8 pt-8 flex justify-center items-center ">
          <Slider />
        </section>

        <section className="elements-section   h-[400px] p-4 pb-8 pt-16 ">
          <Element/>
        </section>
        

        <section className="elements-2-section bg-white h-[400px] w-full pt-8 pb-8 ">

        </section>
      </div>
    </>
  );
};

export default HomePage;
