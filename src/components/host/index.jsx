import React, { useMemo } from "react";
import s from "./Host.module.scss";

const Host = ({ host, alt }) => {
  const { name, lastname } = useMemo(() => {
    const [name, lastname] = host.name.split(" ");
    return {
      name: name.trim(),
      lastname: lastname.trim(),
    };
  }, [host.name]);

  return (
    <div className={s.host}>
      <div className={s.host__name}>
        <p className={s.host__firstname}>{name}</p>
        <p className={s.host__lastname}>{lastname}</p>
      </div>

      <img src={host.picture} alt={alt} className={s.host__img} />
    </div>
  );
};

export default Host;
