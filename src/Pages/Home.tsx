import React, {useEffect } from "react";
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
        <section className="hero-section   h-[300px] w-full "
         >
        <Hero/>
        </section>

        <section className="bg-[#CFEAD9] w-full h-[600px]  p-4  pb-8 flex justify-center items-center ">
       <Subhero/>
        </section>
      </div>
    </>
  );
};

export default HomePage;
