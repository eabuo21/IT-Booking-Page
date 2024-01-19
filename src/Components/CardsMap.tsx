import React from "react ";
import Cards from "../Components/Cards";

const maps: React.FC = () => {
  const Card = [
    {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

    {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

    {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

    {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

    {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

    {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

    {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

     {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

       {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

         {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },

      {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt" ,
    },

      {
      icon: "",
      heading: "heading",
      text: "tetexttexttexttexttextte tetexttexttexttexttexttextxt tetexttexttexttexttexttextxtxtxt",
    },
  ];

  return (
    <>
      <div className="items-alignment-boxes     grid grid-cols-2   flex-wrap  gap-1  justify-start  w-f[50%]  items-start  md:grid md:grid-cols-4  md:mx-auto md:justify-center md:items-center ">
        {Card.map((card, index) => (
          <div key={index} className="   ">
            <Cards icon={card.icon} heading={card.heading} text={card.text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default maps;
