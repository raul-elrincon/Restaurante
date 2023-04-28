import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      transitionTime={500}
    >
      <div>
        <div className="carousel-container">
          <img
            className="carousel-image"
            src={require("../../images/lasagna-5994612_1280.jpg")}
            alt="Image 1"
          />
        </div>

      </div>
      <div>
        <div className="carousel-container">
          <img
            className="carousel-image"
            src={require("../../images/food-712665_1280.jpg")}
            alt="Image 2"
          />
        </div>

      </div>
      <div>
        <div className="carousel-container">
          <img
            className="carousel-image"
            src={require("../../images/food-4773380_1280.jpg")}
            alt="Image 3"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
