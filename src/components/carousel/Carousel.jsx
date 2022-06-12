import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
    </div>
  );
};

export default Carousel;
