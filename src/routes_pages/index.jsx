import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import image from "../img/KASA_BANNER.png";
import products from "../datas/data.json";
import communication from "../datas/communication";
import Banner from "../components/banner";
import Stickers from "../components/stickers";

const slogan = communication.slogan;

function Products() {
  return (
    <div className="home">
      <Header />
      <div className="home__banner">
        <Banner image={image} title={slogan} />
      </div>{" "}
      <section className="home__products">
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
  );
};

export default Products;