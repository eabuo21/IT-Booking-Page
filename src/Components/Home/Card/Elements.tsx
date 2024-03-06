/** @format */

import React from "react";
import Pastor from "../../../assets/images/Hero-images/pastor-removebg-preview.png";
import Icon1 from "../../../assets/images/icons/green-travel-svgrepo-com.svg";

//other icns import goes here
import Books from "../../../assets/images/Hero-images/books-removebg-preview.png";

const Element: React.FC = () => {
  return (
    <>
      <div className="main-container  flex flex-col gap-6 p-3 justify-start items-start  ">
        <h1 className="heading-element-1    mx-auto  text-5xl font-bold font-dm text-blue-950 tet-center ">
          Lorem ipsum dolor sit amet.
        </h1>
        <section className="section-containing-two-fle-elements  flex flex-row gap-1 justify-start items-start   w-full ">
          <div className="first-div-element     flex flex-col  justify-center items-center mx-auto w-full ">
            <img src={Pastor} alt="image" className="w-[500px] h-[350px] " />
            <div className="box-container  w-[300px] h-[150px]  bg-white  rounded-t-[90%]  shadow-current shadow-md  relative bottom-8 flex flex-col justify-center items-center transition-all  duration-1000 ease-in-in hover:transition-all  hover:duration-1000 hover:ease-in-out hover:bg-[tomato] ">
              <p className="text-in-box  text-xl text-blue-700 font-bold font-serif  w-[50%]">
                CARRY ON THE HELMET OF CHRIST
              </p>
              <img src={Icon1} alt="car" className="w-[40px] h-[40px] " />
            </div>
          </div>

          <div className="second-div-element   bg-[#D4F1F4]  flex flex-row gap-3  w-full h-[350px]  relative top-16 shadow-current shadow-md mr-[3rem] ">
            <div className="container-1-items  flex flex-col justify-center items-center ">
              <img src={Books} alt="image" className="w-[200px] h-70px]" />
            </div>
            <div className="container-2-items flex flex-col gap-9 justify-start items-center   w-[60%] ml-auto ">
              <h2 className="text-4xl text-blue-950 font-semibold font-dm  text-left tracking-1 py-2">
                World’s largest ed-tech platform for students and professionals
              </h2>
              <div className="icons-container   flex flex-row gap-3 justify-start items-start  mr-auto  relative right-5">
                <div
                  data-aos="flip-right"
                  data-aos-easing="ease-in cubic"
                  data-aos-duration="2000"
                  data-aos-delay="50"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="left-right"
                  className="bg-[tomato] w-[80px] h-[70px] flex flex-col justify-center items-center  p-2 shadow-current shadow-xl"
                >
                  <img src="" alt="icon" className=" " />
                  <p className="text-white font-bold font-dm text-sm text-center ">
                    Lorem, ipsum.
                  </p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-easing="ease-in cubic"
                  data-aos-duration="2000"
                  data-aos-delay="50"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="left-right"
                  className="bg-[blue] w-[80px] h-[70px] flex flex-col justify-center items-center  p-2 shadow-current shadow-xl"
                >
                  <img src="" alt="icon" className=" " />
                  <p className="text-white font-bold font-dm text-sm text-center ">
                    Lorem, ipsum.
                  </p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-easing="ease-in cubic"
                  data-aos-duration="2000"
                  data-aos-delay="50"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="left-right"
                  className="bg-violet-950 w-[80px] h-[70px] flex flex-col justify-center items-center  p-2 shadow-current shadow-xl"
                >
                  <img src="" alt="icon" className=" " />
                  <p className="text-white font-bold font-dm text-sm text-center ">
                    Lorem, ipsum.
                  </p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-easing="ease-in cubic"
                  data-aos-duration="2000"
                  data-aos-delay="50"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="left-right"
                  className="bg-white w-[80px] h-[70px] flex flex-col justify-center items-center  p-2 shadow-current shadow-xl"
                >
                  <img src="" alt="icon" className=" " />
                  <p className="text-blue-950 font-bold font-dm text-sm text-center ">
                    Lorem, ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Element;
