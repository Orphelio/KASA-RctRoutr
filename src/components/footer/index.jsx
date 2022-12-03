import React from "react";
import s from "./Footer.module.scss";

import logo from "../../img/LOGO_footer.png";

const footer = ({ alt }) => {
  return (
    <footer className={s.footer}>
      <img src={logo} alt={alt} className={s.footer__img} />
      <p className={s.footer__text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default footer;
