import { useState } from "react";
import Banner from "../components/Banner";
import content from "../datas/communication";
import Collapse from "../components/Collapse";
import imageBanner from "../img/aboutbannerDesktop.png";
import Header from "../components/header";
import Footer from "../components/footer";
import s from "../style/_pages/_About.module.scss";

function About() {
  const [count, setCount] = useState(0);
  console.log(content);
  return (
    <div className={s.body}>
      <Header />
      <div className={s.about}>
        <div className={s.about__banner}>
          <Banner image={imageBanner} title={false}/>
        </div>
        <div className={s.about__collapse}>
          {content.map(({ title, description }, index) => {
            return (
              <Collapse key={index} title={title}>
                <div className={s.about__description}>{description} </div>
              </Collapse>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
