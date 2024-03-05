/** @format */

import React from "react";
import { Link } from "react-router-dom";
import NCCF from "../../../assets/images/Hero-images/rural-rugged.jpg";

const CardsMop = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in linear"
        data-aos-duration="2000"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
        data-aos-delay="50"
        data-aos-once="true"
        className="items-container      w-[1000px] h-[450px]  relative top-[5rem] rounded-sm bg-white  shadow-current shadow-md  flex flex-row gap-1 justify-start items-start "
      >
        <section className="first-inline-container   flex flex-col justify-start items-start gap-6 px-4 py-4 p-2  w-[50%] ">
          <h1 className="firsst-section-heading   text-4xl w-full font-bold  text-blue-950 text-left  font-dm">
            Don't let a lack of experience hold you back
          </h1>
          <p className="first-ider-text  text-xl  w-full font-sans text-black font-semiboldtext-left  ">
            Experience immersive global training and internships with OGTIP.
            Acquire industry knowledge through remote projects and work with
            experts from all over the world from the comfort of your home.
          </p>
          <Link to=" " className="text-blue-700 font-bold text-2xl">
            See How it Work's{" "}
            <span className=" bg-blue-700  rounded-[50%] text-white p-2 w-[50px[ h-50px[ ">
              &rarr;
            </span>
          </Link>
        </section>

        <section className="second=inline-container  flex flex-col gap-2   bg-grey h-[450px] w-[50%] ">
          <div className="first-div      flex flex-col gap-3 justify-start items-start px-2"></div>
          <img
            src={NCCF}
            alt="image"
            className="w-full h-[250px] relative bottom-2"
          />
          <div className="second-div   flex flex-row gap-4 ">
            <section className="inline-second-container-first-div   flex flex-col gap-2 justify-start items-start  px-3">
              <h2 className="heading  text-2xl font-serif font-semibold text-blue-950 ">
                NCCF
              </h2>
              <p className="rider-text  text-black font-normal font-dm  w-full text-base text-left ">
                Through virtual collaboration, embark on global projects and tap
                into the expertise of professionals from diverse corners of the
                world, all from the comfort of your own home
              </p>
            </section>

            <section className="last-streight-background-section bg-blue-950 h-[205px]  relative bottom-5 w-[250px] justify-center items-center p-2 mx-auto flex flex-col">
              <Link
                to=" "
                className=" flex flex-col justify-center items-center mx-auto gap-2 "
              >
                <p className="text-white text-base  font-bold font-sans  text-center  ">
                  Get started
                </p>
                <span className=" bg-white  animate-bounce  rounded-[50%] text-blue-700 p-2 w-[50px[ h-50px[ ">
                  &rarr;
                </span>
              </Link>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsMop;
