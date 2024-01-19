import React from "react";
import Bg from "../../src/assets/images/grand.jpg";

const Hero: React.FC = () => {
  return (
    <>
      <div
        className="main-hero-container   bg-no-repeat bg-center bg-cover  h-[80vh] bg-blend-darken fle flex-col justify-center items-center   border-b border-r rounded-br-[30%] "
        style={{
          background: `url(${Bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="heading-section text-white font-bold font-dm   text-4xl text-center flex flex-col justify-center items-center relative top-[12rem] ">
          <p className="heading ">VALUE, INFLUENCE, & PROFITABILITY</p>
        </section>
      </div>
    </>
  );
};
export default Hero;
