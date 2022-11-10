//import { useState } from "react";
import { useParams } from "react-router-dom";
// import { redirect } from "react-router-dom"

import content from "../datas/data.json";

import Header from "../components/header"
import Host from "../components/host";
import Rating from "../components/rate";
import Carousel from "../components/carousel";
import Tags from "../components/tag";
import Collapse from "../components/Collapse";

const product = () => {
  const { productId } = useParams();
  const product = content.find((product) => product.id === productId);
  const { title, location, rating, host, equipments, description, pictures } =
    product;

//    content.forEach(element => {
//  console.log(element)
//    });

  return (
    <div className="product">
      <Header />
      <Carousel slides={pictures} />
      <div className="product__content">
        <div className="product__info">
          <h1 className="product__title">{title}</h1>
          <p className="product__location">{location}</p>
          <div className="product__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="product__rating-host">
          <Rating rating={rating} />
          <Host host={host} />
        </div>
      </div>
      <div className="product__collapse">
        <Collapse title="description" children={description} />
        <Collapse title="équipement" children={equipments} />
      </div>
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
