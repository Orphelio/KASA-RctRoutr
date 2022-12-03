import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

import Logo from "../../img/LOGO.png";

const header = ({ alt }) => {
  return (
    <nav className={s.nav}>
      <Link to="/">
        <img src={Logo} alt={alt} className={s.nav__img} />
      </Link>
      <div className={s.nav__links}>
        <Link className={s.nav__link} to="/">
          Accueil
        </Link>
        <Link className={s.nav__link} to="/about">
          À Propos
        </Link>
      </div>
    </nav>
  );
};

export default header;
