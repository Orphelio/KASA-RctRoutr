import React from "react";
import s from "./Banner.module.scss";

const Banner = ({ image, title }) => {
  return (
    <div className={s.banner}>
      <img src={image} alt="" className={s.banner__img} />
      <div className={s.banner__title}>{"Chez vous, partout et ailleurs"}</div>
    </div>
  );
};

export default Banner;