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


const HomePage: React.FC = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <div className="home-container  bg-white h-full w-full  ">
        <section className="hero-section   h-[300px] w-full "
         >
        
        </section>
      </div>
    </>
  );
};

export default HomePage;
