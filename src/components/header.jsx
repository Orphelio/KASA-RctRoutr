import React from "react";
import { Link } from "react-router-dom";

//Style
import Logo from "../img/LOGO.png";

const header = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="Logo" className="nav__img" />
      </Link>
      <div>
        <Link className="nav__link" to="/">
          Accueil
        </Link>
        <Link className="nav__link" to="/about">
          À Propos
        </Link>
      </div>
    </nav>
  );
};

export default header;