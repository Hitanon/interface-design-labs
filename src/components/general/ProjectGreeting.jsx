import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { CATEGORIES_ROUTE, LIST_CATEGORIES_BUTTON_TEXT } from "../../utils/Consts";
import useProjectInfo from "../../hooks/useProjectInfo";

import TextRedirectButton from "../ui/TextRedirectButton";



const ProjectGreeting = observer(() => {
  const { loadProjectInfo, projectInfo } = useProjectInfo();

  useEffect(() => {
    loadProjectInfo();
  }, []);

  return (
    <div className="greeting-section">
      <div>
        <h1 className="greeting-section-title">
          {projectInfo.name}
        </h1>

        <div className="gretting-section-text">
          {projectInfo.greeting}
        </div>
        <div>
          <TextRedirectButton className="text-button greeting-button"
            text={LIST_CATEGORIES_BUTTON_TEXT} route={CATEGORIES_ROUTE} />
        </div>
      </div>

      <div className="gretting-images">
        <img src="/img/greeting-section/image1.png" alt="" />
        <img className="main-image" src="/img/greeting-section/image2.png" alt="" />
        <img src="/img/greeting-section/image3.png" alt="" />
      </div>

    </div>
  );
});

export default ProjectGreeting;
