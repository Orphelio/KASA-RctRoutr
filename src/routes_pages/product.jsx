import { useParams } from "react-router-dom";

import content from "../datas/data.json";

import Header from "../components/header/index";
import Host from "../components/host/index";
import Rating from "../components/rate/index";
import Carousel from "../components/carousel/index";
import Tags from "../components/tag/index";
import Collapse from "../components/collapse/index";
import Footer from "../components/footer/index";
import s from "../style/_pages/_Product.module.scss";
import { useMemo } from "react";

const product = () => {
  const { productId } = useParams();
  const { title, location, rating, host, equipments, description, pictures } =
    useMemo(
      () => content.find((product) => product.id === productId),
      [productId]
    );
  const product = content.find((product) => product.id === productId);

  return (
    <div className={s.body}>
      <Header />
      <div className={s.product}>
        <Carousel slides={pictures} />
        <div className={s.product__content}>
          <div className={s.product__info}>
            <h1 className={s.product__title}>{title}</h1>
            <p className={s.product__location}>{location}</p>
            <div className={s.product__tags}>
              {product.tags.map((tag, index) => (
                <Tags key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className={s.product__rating}>
            <Host host={host} />
            <Rating rating={rating} />
          </div>
        </div>
        <div className={s.product__collapse}>
          <Collapse title="Description">
            {" "}
            <div className={s.product__description}>{description} </div>
          </Collapse>
          <Collapse title="Équipement">
            {" "}
            <div className={s.product__decription}>
              {equipments.map((equipement, index) => (
                <div key={index}>{equipement}</div>
              ))}
            </div>{" "}
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default product;
