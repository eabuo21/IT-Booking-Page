import React from "react";

const SubHero: React.FC = () => {
  return (
    <>
      <div className="sub-hero-container bg-white h-[70vh]  flex flex-col  gap-4 justify-center  items-center ">
        <section className="items-container flex flex-col gap-3  px-auto mx-auto  justify-center items-center">
          <h1 className="first-heading text-black font-normal font-serif text-3xl text-center pb-0 ">
            TONGSTON ENTREPRENEURSHIP
          </h1>
          <h2 className="group-text text-red font-bold text-4xl text-vcenter font-sans ">
            GROUP
          </h2>
          <p className="under-text   text-xl text-black font-semibold  text-center  pb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            distinctio praesentium eligendi?
          </p>
          <p className="under-text   text-xl text-red font-semibold  text-center  pb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
      </div>
    </>
  );
};

export default SubHero;
