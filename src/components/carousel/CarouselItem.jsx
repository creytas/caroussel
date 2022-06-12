import React from "react";

const CarouselItem = ({
  picture,
  title,
  description,
  link,
  startSlide,
  stopSlide,
}) => {
  return (
    <div
      className="carousel-item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <article className="article">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <img src={picture} alt={title} />
        </div>
      </article>
    </div>
  );
};

export default CarouselItem;
