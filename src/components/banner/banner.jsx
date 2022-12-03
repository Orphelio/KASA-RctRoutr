import React from "react";
import s from "./Banner.module.scss";

const Banner = ({ image, title, alt }) => {
  return (
    <div className={s.banner}>
      <img src={image} alt={alt} className={s.banner__img} />
      {
        title ? 
          <div className={s.banner__title}>{title} </div> : 
          null
      }
    </div>
  );
};

export default Banner;