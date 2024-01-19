import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Hero from "../Components/Hero";
import SubHero from "../Components/Subhero";
import Cards from "../Components/CardsMap";
import Carousel1 from "../Components/Carousel1";

const HomePage: React.FC = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    handleScroll();
  }, [1]);

  return (
    <>
      <div className="home-container   ">
        <section className="hero-section w-full  pb-2 ">
          <Hero />
        </section>

        <section className="sub-hero-section w-full pb-8">
          <SubHero />
        </section>

        <section className="cards-section w-full pb-8">
          <Cards />
        </section>
              <section className="carousel-1-section w-full pb-8">
                  <Carousel1/>
        </section>
      </div>
    </>
  );
};

export default HomePage;
