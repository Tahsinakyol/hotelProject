import React from "react";
import Slider from "react-slick";

const SliderMain = ({ children }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="sliderMain">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderMain;
