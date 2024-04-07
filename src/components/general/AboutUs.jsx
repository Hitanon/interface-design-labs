import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";


const AboutUs = observer(() => {
  const { projectInfo } = useContext(Context);

  return (
    <>
      <p>{projectInfo.about}</p>
    </>
  );
});

export default AboutUs;
