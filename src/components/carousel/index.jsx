import React, { useCallback } from "react";
import { useState } from "react";
import s from "./Carousel.module.scss";

import arrowBack from "../../img/arrowBack.svg";
import arrowForward from "../../img/arrowForward.svg";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  return (
    <div className={s.carousel}>
      {slides.map((picture, index) => {
        if (index !== current) {
          return null;
        }
        return (
          <div key={index} className={s.carousel__active}>
            <img src={picture} alt="" className={s.carousel__img} />
            <div className={s.carousel__length}>
              {index + 1}/{slides.length}
            </div>
          </div>
        );
      })}
      {slides.length ? (
        <>
          <div className={s.carousel__previous} onClick={prevSlide}>
            <img src={arrowBack} alt="" className={s.carousel__previous_icon} />
          </div>
          <div className={s.carousel__next} onClick={nextSlide}>
            <img src={arrowForward} alt="" className={s.carousel__next_icon} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
