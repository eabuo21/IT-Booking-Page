/** @format */

import React from "react";

const Card: React.FC = ({ Background, icon, description }) => {
  return (
    <React.Fragment>
      <div
        className="main-container   h-[100px] w-[100px] rounded-md  shadow-current shadow-md   flex flex-row  gap-3 p-2 justify-center items-center "
        style={{
          background: Background,
        }}
      >
        <img src={icon} alt="image" className="h-[40px] w-[40px] " />
        <p className="text-white  text-xl font-bold text-center font-dm ">
          {description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Card;
