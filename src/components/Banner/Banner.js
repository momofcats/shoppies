import React from "react";
import "./Banner.css";
import banner from "../../images/banner.jpg";

function Banner({ counter }) {
  return (
    <div className="banner">
      <img className="banner__img" alt="popcorn" src={banner} />
      <div className="banner__text">You have {counter} nominees!</div>
    </div>
  );
}

export default Banner;
