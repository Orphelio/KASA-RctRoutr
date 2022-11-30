import React from "react";
import { useState } from "react";
import s from "./Carousel.module.scss";

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

  return (
    <div className={s.carousel}>
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current ? s.carousel__active : s.carousel__inactive
            }
          >
            {index === current && (
              <>
                <img src={picture} alt="" className={s.carousel__img} />
                <div className={s.carousel__length}>
                  {index + 1}/{slides.length}
                </div>
              </>
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
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
