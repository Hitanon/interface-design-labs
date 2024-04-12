import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";

import "./general.css";


const AboutUs = observer(() => {
  const { projectInfo } = useContext(Context);

  return (
    <div className="about-us-section">
      <h1>О нас</h1>
      <p className="about-us-text">{projectInfo.about}</p>
    </div>
  );
});

export default AboutUs;
