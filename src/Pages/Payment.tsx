import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Payment: React.FC = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, [1]);

  return (
    <>
      <div className="payment">payment</div>
    </>
  );
};

export default Payment;
