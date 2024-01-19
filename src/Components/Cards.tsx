import React from "react";
import { Link } from "react-router-dom";

const Cards: React.FC = ({ icon, heading, text }) => {
  return (
    <>
      <div className="main-wrapper  flex  h-[fixed] p-1  flex-row gap-5  justify-start items-start  w-full  ">
        <section className=" card-section-items flex flex-col gap-2 justify-start items-start  w-[fixed]">
          <div className="rounded-image-bg bg-yellow-300 shadow-inherit shadow-xl  rounded-[70%] ">
            <img className="card-icon  w-auto h-auto " src={icon} alt="icon" />
          </div>

          <section className="red-background-text bg-red  justify-center  items-center w-full ">
            <p className="text-inside-background  text-white font-serif text-base  font-normal  text-center ">
              {heading}
            </p>
          </section>

          <section className="red-background-text  justify-start  items-start    ">
            <p className="text-inside-background  text-black font-serif text-sm  font-semibold  text-justify ">
              {text}
            </p>
          </section>
        </section>
      </div>
    </>
  );
};

export default Cards;
