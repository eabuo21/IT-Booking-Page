import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rugged from  "../../assets/images/Hero-images/coppers.jpg";


const Carousel1: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    smooth: true,
    adaptiveHeight: false,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    useCss: true,
    useTransform: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div
          key={i}
          className={`custom-dot flex flex-col justify-center items-center hover:border-2 -red border-2     border-white  rounded-[50%]  h-[20px] p-2 transition-all transition-duration-800 ease-in-out ${
            i === activeIndex
              ? "active  bg-gradient-to-r from-[red] to-violet-950  border-t-blue-950 border-b-red border-l-red border-r-blue-950   transition-all transition-duration-800 ease-in-out"
              : "   " // Add a class for the active dot
          }`}
        ></div>
      );
    },
  };

  return (
    <>
     
      
        <Slider
          {...settings}
          className="w-full h-[400px] flex flex-row justify-between  bg-black items-start row-gap-16   p-2  "
        >
          {/*slide 1*/}
         <div className="first-slider-sectio   h-[400px] w-full   flex flex=col items-start justify-stat p-3 px-4 " style={{
          background: `url(${Rugged})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          

         }}>
<h1  className="text-black font-bold text-2xl  ">
  Welcome to NCCF
</h1>

         </div>

         
              {/*slide 1*/}
              <div className="first-slider-sectio   h-[400px] w-full   flex flex=col items-start justify-stat p-3 px-4 " style={{
          backgroundImage: `url(${Rugged})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          

         }}>
<h1  className="text-black font-bold text-2xl  ">
  Welcome to NCCF
</h1>

         </div>


              {/*slide 1*/}
              <div className="first-slider-sectio   h-[400px] w-full   flex flex=col items-start justify-stat p-3 px-4 " style={{
          backgroundImage: `url(${Rugged})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          

         }}>
<h1  className="text-black font-bold text-2xl  ">
  Welcome to NCCF
</h1>

         </div>
        </Slider>
      
    </>
  );
};

export default Carousel1;
