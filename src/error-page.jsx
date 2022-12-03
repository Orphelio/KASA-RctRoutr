import { Link } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import s from "./style/_pages/_Errorpage.module.scss";

export default function ErrorPage() {
  return (
    <div className={s.body}>
      <Header />
      <div className={s.error}>
        <div className={s.error__body}>
          <p className={s.error__title}>404</p>
          <p className={s.error__text}>
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className={s.error__link}>
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
