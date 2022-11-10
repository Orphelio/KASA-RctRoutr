import { useState } from "react";
import Banner from "../components/Banner";
import content from "../datas/communication";
import Collapse from "../components/Collapse";
import imageBanner from "../img/aboutbannerDesktop.png";
import Header from "../components/header";

function About() {
  const [count, setCount] = useState(0);
  console.log(content)
  return (
    <div className="about">
      <Header />
      <Banner image={imageBanner} />
      <div className="about__dropdowns">
        {content.map(({ title, description }, index) => {
          return (
            <Collapse key={index} title={title}>
              {description}
            </Collapse>
          );
        })}
      </div>
    </div>
  );
}

export default About;
