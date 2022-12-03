import React from "react";
import s from "./Rate.module.scss";

import redstar from "../../img/redStar.svg";
import greystar from "../../img/greyStar.svg";

const stars = [1, 2, 3, 4, 5];

const Rate = ({ rating, alt }) => {
  return (
    <div className={s.rate}>
      {}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className={s.rate__icon__red}
            src={redstar}
            alt={alt}
          />
        ) : (
          <img
            key={star.toString()}
            className={s.rate__icon__grey}
            src={greystar}
            alt={alt}
          />
        )
      )}
    </div>
  );
};

export default Rate;
