import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };
  const nextSlide = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      console.log("currentSlide", currentSlide);
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem
            picture={slide.picture}
            title={slide.title}
            description={slide.description}
            key={index}
          />
        ))}
      </div>
      <CarouselControls previous={previousSlide} next={nextSlide} />
    </div>
  );
};

export default Carousel;
