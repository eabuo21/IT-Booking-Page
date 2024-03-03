import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: Import Swiper Navigation styles
import "swiper/css/pagination"; // Optional: Import Swiper Pagination styles
import Coppers from "../../assets/images/Hero-images/coppers.jpg";
import Nysc from "../../assets/images/Hero-images/nysc.png";
import Nccf from "../../assets/images/Hero-images/nccf.png";

const MyCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div
          className="first-slide flex  flex-col  gap-4w-full bg-no-repeat h-[400px] p-2 justify-center items-center "
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Coppers})`,
            backgroundPosition: "center",
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <section className="heading-section relative flex flex-col  gap-5 top-8 ">
          <h1 className="welcome-text    text-5xl font-bold text-white font-passion   text-center ">
            WELCOME TO NCCF ABUJA CHAPTER
          </h1>
          <h4 className="sub-heading-text   text-white text-3xl font-bold font-dm text-center ">
            THE NIGERIAN CHRISTIAN COPPERS FELLOWSHIP
          </h4>
          </section>

          <section className="circle-items-container flex flex-col relative top-9  w-[30%]   ml-auto h-[200px]">

          <div className="circle-container absolute  mx-auto  bg-blue-700  rounded-[50%] w-[70px] h-[70px]  left-[9rem] shadow-current shadow-md "></div>

<div className="circle-container    bg-white  rounded-[50%] w-[200px] h-[400px]  justify-center items-center p-2  shadow-current shadow-md  flex flex-col ">
<p className="explore-text text-black font-bold text-xl font-sans text-left ">
  Start Exploring  &rarr;
</p>

</div>
          </section>
        </div>
      </SwiperSlide>



      <SwiperSlide>
        <div
          className="first-slide flex w-full bg-no-repeat h-[400px] p-2 justify-center items-center "
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Nysc})`,
            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          <p className="text-white">Slider 2</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="first-slide flex w-full bg-no-repeat h-[400px] p-2 justify-center items-center "
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Nccf})`,
            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          <p className="text-white">Slider 3</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
