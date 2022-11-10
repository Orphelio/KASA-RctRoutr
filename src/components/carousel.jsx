import React from 'react';
import {useState} from 'react'

import arrowBack from "../img/arrowBack.svg";
import arrowForward from "../img/arrowForward.svg";

const Carousel = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
	  setCurrent(current === length - 1 ? 0 : current + 1);
	};
  
	const prevSlide = () => {
	  setCurrent(current === 0 ? length - 1 : current - 1);
	};  
	
//	if (!Array.isArray(slides) || slides.length <= 0){
//        return null;  
//	};
 

return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowBack} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowForward} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};
  
  export default Carousel;