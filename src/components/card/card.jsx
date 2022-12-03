import React from "react";
import s from "./Card.module.scss";

const Stickers = ({ image, title }) => {
  return (
    <div className={s.card}>
      <img src={image} alt="" className={s.card__img} />
      <div className={s.card__overlay}></div>
      <h2 className={s.card__title}>{title}</h2>
    </div>
  );
};

export default Stickers;