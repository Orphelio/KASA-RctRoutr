import { useState } from "react";
import Banner from "../components/Banner";
import content from "../datas/communication";
import Collapse from "../components/Collapse";
import imageBanner from "../img/aboutbannerDesktop.png";
import Header from "../components/header";
import Footer from "../components/footer";
import s from "../style/_pages/_About.module.scss"
import arrowDown from "../img/arrowDown.png";

function About() {
  const [count, setCount] = useState(0);
  console.log(content)
  return (
    <div className={s.about}>
      <Header />
      <Banner image={imageBanner} />
      <div className={s.about_collapse}>
        {content.map(({ title, description }, index) => {
          return (
            <Collapse key={index} title={title}>
              {description}
            </Collapse>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default About;
