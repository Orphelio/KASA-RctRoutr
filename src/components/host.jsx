import React from "react";
import s from "./Host.module.scss"

const Host = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className={s.host}>
      <div className={s.host__name}>
        <p className={s.host__firstname}>{name.trim()}</p>
        <p className={s.host__lastname}>{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className={s.host__img} />
    </div>
  );
};

export default Host;
