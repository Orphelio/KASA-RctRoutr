import React from "react";
import s from "./Banner.module.scss";

const Banner = ({ image, title }) => {
  return (
    <div className={s.banner}>
      <img src={image} alt="" className={s.banner__img} />
      {
        title ? 
          <div className={s.banner__title}>{title} </div> : 
          <></>
      }
    </div>
  );
};

export default Banner;