import React, { useState } from "react";
import "./ImageSlider.css"; 

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="left-arrow">
        &#10094;
      </button>
      <div className="slider-image">
        <img src={images[currentIndex]} alt="slide" />
      </div>
      <button onClick={nextSlide} className="right-arrow">
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
