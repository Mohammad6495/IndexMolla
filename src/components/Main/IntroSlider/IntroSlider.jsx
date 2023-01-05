import React from "react";

import "./IntroSlider.css";

const IntroSlider = () => {
  const backImage = {
    backgroundImage: 'url("./assest/images/slider/slide-1.jpg")',
  };
  return (
    <div
      className="intro-slider d-flex align-items-center justify-content-center flex-column"
      style={backImage}
    >
      <h3 className="intro-info-slider">از دست ندهید</h3>
      <h1 className="big-title my-4">پیشنهاد های شگفت انگیز</h1>
      <div className="intro-text mb-4">فقط آنلاین</div>
      <a href="#" className="intro-btn-slider">
        مشاهده
      </a>
    </div>
  );
};

export default IntroSlider;
