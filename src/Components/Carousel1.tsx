import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    adaptiveHeight: true,
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
      <div className="main-slider-container p-1 flex flex-col justify-center items-center pb-8">
        <h1
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-linear"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="true"
          className="testimonial-heading font-bold font-serif text-2xl text-white"
        >
          Testimonials
        </h1>
        <p
          data-aos="fade-in"
          data-aos-anchor-placement="bottom-center"
          data-aos-easing="ease-linear"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="true"
          className="text-white  text-base font-serif text-center pb-4"
        >
          People I've worked with have said some nice things...
        </p>
        <Slider
          {...settings}
          className="w-full h-[fixed] flex flex-row justify-around  items-start gap-16 md:gap-9  p-2  "
        >
          {/*slide 1*/}
          <div className="slide-1 flex flex-col gap-3 justify-center items-center w-auto p-2 bg-black rounded-md shadow-current shadow-md    md:bg-transparent md:shadow-none ">
            <div className="image-container w-full flex flex-row justify-center items-center p-1 ">
              <img
                className="rounded-[50%] shadow-current  shadow-md w-[150px] h-[150px] "
               src="#"
                alt="testimonial-image"
              />
            </div>
            <p className="text-base font-serif text-white text-center pb-6    md:w-[45%]  md:mx-auto md:text-[21.484px]">
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans text-4xl ">
                {" "}
                “
              </span>
              Emma was an absolute delight to collaborate with, and we eagerly
              anticipate future partnerships. His professionalism and commitment
              make him a developer you can rely on to successfully lead a
              project from inception to completion.
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans  ">
                ”
              </span>
            </p>
            <h3 className="text-base font-bold font-serif text-center text-white ">
              Paul Ekunola
            </h3>
            <h5 className=" text-sm font-serif text-white font-normal text-center">
              Software Dev, Tongstong Group (Abuja Ng)
            </h5>
          </div>

          {/*slide  2*/}

          <div className="slide-1 flex flex-col gap-3 justify-center items-center w-full p-2     bg-black rounded-md shadow-current shadow-md    md:bg-transparent md:shadow-none ">
            <div className="image-container w-full flex flex-row justify-center items-center p-1 ">
              <img
                className="rounded-[50%] shadow-current  shadow-md w-[150px] h-[150px] mx-[4rem]"
                src="#"
                alt="testimonial-image"
              />
            </div>
            <p className="text-base font-serif text-white text-center pb-6      md:w-[45%]  md:mx-auto md:text-[21.484px]">
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans text-4xl">
                {" "}
                “
              </span>
              Emmanuel played an integral role in simplifying my experience
              during the Zoho CRM onboarding process. As a scheduler, his
              unwavering patience was evident as he skillfully addressed every
              question I had. His dedication significantly expedited my learning
              curve, ultimately making my work more efficient and streamlined. I
              express my sincere appreciation for his invaluable assistance.
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-950  via-[red] to-[violet] font-sans ">
                ”
              </span>
            </p>
            <h3 className="text-base font-bold font-serif text-center text-white ">
              Blessing Evah
            </h3>
            <h5 className=" text-sm font-serif text-white font-normal text-center">
              Scheduler, CoffeyCrown HCS (Toronto ON)
            </h5>
          </div>

          {/*slide  3*/}

          <div className="slide-1 flex flex-col gap-3 justify-center items-center w-full p-2   bg-black rounded-md shadow-current shadow-md    md:bg-transparent md:shadow-none ">
            <div className="image-container w-full flex flex-row justify-center items-center p-1 ">
              <img
                className="rounded-[50%] shadow-current  shadow-md w-[150px] h-[150px] mx-[4rem]"
                 src="#"
                alt="testimonial-image"
              />
            </div>
            <p className="text-base font-serif text-white text-center pb-6     md:w-[45%]  md:mx-auto md:text-[21.484px]">
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans text-4xl">
                {" "}
                “
              </span>
              As a software developer at Tongston, I have had the privilege of
              collaborating with Emmanuel from April to July 2023. Emmanuel's
              steadfast commitment to our projects, collaborative mindset, and
              remarkable technical proficiency have consistently impressed me.
              His dedication to excellence significantly contributed to the
              success of our collaborative endeavors
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-950  via-[red] to-[violet] font-sans ">
                ”
              </span>
            </p>
            <h3 className="text-base font-bold font-serif text-center text-white ">
              Otene Victor
            </h3>
            <h5 className=" text-sm font-serif text-white font-normal text-center">
              Software Dev, Tongston Group (Abuja Ng)
            </h5>
          </div>

          {/*slide  4*/}

          <div className="slide-1 flex flex-col gap-3 justify-center items-center w-full p-2   bg-black rounded-md shadow-current shadow-md    md:bg-transparent md:shadow-none ">
            <div className="image-container w-full flex flex-row justify-center items-center p-1 ">
              <img
                className="rounded-[50%] shadow-current  shadow-md w-[150px] h-[150px] mx-[4rem]"
               src="#"
                alt="testimonial-image"
              />
            </div>
            <p className="text-base font-serif text-white text-center pb-6     md:w-[45%]  md:mx-auto md:text-[21.484px]">
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans text-4xl">
                {" "}
                “
              </span>
              Emmanuel is a pleasure to work with, consistently going the extra
              mile to ensure projects are completed on time. His collaborative
              approach and commitment to excellence make him a valuable asset to
              any team. Working with Emmanuel has been a positive and productive
              experience
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-950  via-[red] to-[violet] font-sans ">
                ”
              </span>
            </p>
            <h3 className="text-base font-bold font-serif text-center text-white ">
              Charles Nwankwo
            </h3>
            <h5 className=" text-sm font-serif text-white font-normal text-center">
              Product Designer (UI/UX) , Tongston Group (Canada ON)
            </h5>
          </div>

          {/*slide  5*/}

          <div className="slide-1 flex flex-col gap-3 justify-center items-center w-full p-2   bg-black rounded-md shadow-current shadow-md    md:bg-transparent md:shadow-none ">
            <div className="image-container w-full flex flex-row justify-center items-center p-1 ">
              <img
                className="rounded-[50%] shadow-current  shadow-md w-[150px] h-[150px] mx-[4rem]"
               src="#"
                alt="testimonial-image"
              />
            </div>
            <p className="text-base font-serif text-white text-center pb-6     md:w-[45%]  md:mx-auto md:text-[21.484px]">
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[red] via-violet-950 to-[violet] font-sans text-4xl">
                {" "}
                “
              </span>
              Collaborating with Emma has been a truly delightful experience.
              His exceptional skills not only brought my designs to life with
              pixel-perfect precision but also made the entire collaborative
              process feel seamless and effortless. Emma's commitment to
              excellence and effective communication significantly contributed
              to the success of our projects. I highly value and appreciate the
              professionalism and expertise he brought to our work together.
              <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-950  via-[red] to-[violet] font-sans ">
                ”
              </span>
            </p>
            <h3 className="text-base font-bold font-serif text-center text-white ">
              Emmy Ugwuoti
            </h3>
            <h5 className=" text-sm font-serif text-white font-normal text-center">
              Product Designer (UI/UX) , Tongston Group (Abuja Ng)
            </h5>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel1;
