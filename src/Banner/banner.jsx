import React from "react";
import "./banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/fb28e3e1d22e6da2.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/74f0ad81e44e6e6f.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/8b9174109572b3e4.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/dbd07c8f0d822f95.jpg?q=60",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
   
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img
                src={img}
                alt={`Banner ${index}`}
               className="banner-image"
              />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
