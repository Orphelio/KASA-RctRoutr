import React from "react";
import s from "./Tag.module.scss"

const Tag = ({ tag }) => {
  return (
    <div className={s.tag}>
      <p className={s.tag__text}>{tag}</p>
    </div>
  );
};

export default Tag;
