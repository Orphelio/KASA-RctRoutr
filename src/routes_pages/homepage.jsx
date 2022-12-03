import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/index";
import image from "../img/KASA_BANNER.png";
import products from "../datas/data.json";
import Banner from "../components/banner/index";
import Cards from "../components/card/index";
import Footer from "../components/footer/index";

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
                  <Cards image={product.cover} title={product.title} />
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
