import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/header";
import image from "../img/KASA_BANNER.png";
import products from "../datas/data.json";
import Banner from "../components/banner/banner";
import Stickers from "../components/card/card";
import Footer from "../components/footer/footer";

//import s from '../style/_pages/_homepage.scss';
//import s from './homepage.module.scss';
import s from "../style/_pages/_Homepage.module.scss";

function Products() {
  return (
    <div className={s.body}>
      <Header />
      <div className={s.home}>
        <div className={s.home__banner}>
          <Banner image={image} title={"Chez vous, partout et ailleurs"} />
        </div>{" "}
        <section className={s.home__products}>
          {products.map((product) => {
            return (
              <article key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <Stickers image={product.cover} title={product.title} />
                </Link>
              </article>
            );
          })}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
