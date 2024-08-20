import React, { useState } from "react";
import Arrow from "../../../images/arrow-icon-square.png";

const Slideshow = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length,
    );
  };

  return (
    <div className="slideshow">
      <img className="slideshow__slide" src={pictures[currentIndex]} alt={title} />
      {pictures.length > 1 && (
        <div>
          <button className="slideshow__leftarrow" onClick={goToPreviousSlide}>
            <img src={Arrow} alt="Flèche vers la gauche" />
          </button>
          <button className="slideshow__rightarrow" onClick={goToNextSlide}>
            <img src={Arrow} alt="Flèche vers la droite" />
          </button>
          <span className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
