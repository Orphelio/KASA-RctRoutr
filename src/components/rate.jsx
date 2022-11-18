import React from "react";
import s from "./Rate.module.scss"

import redstar from "../img/redStar.svg";
import greystar from "../img/greyStar.svg";

const Rate = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={s.rate}>
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className={s.rate__icon__red}
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className={s.rate__icon__grey}
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rate;
