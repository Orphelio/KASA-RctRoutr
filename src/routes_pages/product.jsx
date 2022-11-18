//import { useState } from "react";
import { useParams } from "react-router-dom";
// import { redirect } from "react-router-dom"

import content from "../datas/data.json";

import Header from "../components/header";
import Host from "../components/host";
import Rating from "../components/rate";
import Carousel from "../components/carousel";
import Tags from "../components/tag";
import Collapse from "../components/Collapse";
import Footer from "../components/footer";
import s from "../style/_pages/_Product.module.scss";

const product = () => {
  const { productId } = useParams();
  const product = content.find((product) => product.id === productId);
  const { title, location, rating, host, equipments, description, pictures } =
    product;

//    content.forEach(element => {
//  console.log(element)
//    });

  return (
    <div className={s.product}>
      <Header />
      <Carousel slides={pictures} />
      <div className={s.product__content}>
        <div className={s.product__info}>
          <h1 className={s.product__title}>{title}</h1>
          <p className={s.product__location}>{location}</p>
          <div className={s.product__tags}>
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className={s.product__rating}>
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className={s.product__collapse}>
        <Collapse title="Description" children={description} />
        <Collapse title="Équipement" children={equipments} />
      </div>
      <Footer />
    </div>
  );
};

export default product;

/*
      </div>
      <div className="product__collapse">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </div>
*/