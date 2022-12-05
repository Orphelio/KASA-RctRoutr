import React from "react";
import s from "./Card.module.scss";

const Cards = ({ image, title, alt }) => {
  return (
    <div className={s.card}>
      <img src={image} alt={alt} className={s.card__img} />
      <div className={s.card__gradient}></div>
      <h2 className={s.card__title}>{title}</h2>
    </div>
  );
};

export default Cards;
