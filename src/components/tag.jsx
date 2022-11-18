import React from "react";
import s from "./Tag.module.scss"

const Tag = ({ getTag }) => {
  return (
    <div className={s.tag}>
      <p className={s.tag__text}>{getTag}</p>
    </div>
  );
};

export default Tag;
