/** @format */

import React from "react";
import Control from "../../../Components/Home/Card/Card";

function Cardsx() {
  const cards = [
    {
      Background: "",
      icon: "",
      description: "",
    },
  ];

  return (
    <div className="   ">
      {cards.map((card, index) => (
        <div key={index}>
          <Control
            Background={card.Background}
            icon={card.icon}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Cardsx;
