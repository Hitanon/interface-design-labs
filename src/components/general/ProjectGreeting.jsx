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
    <>
      <div>
        {projectInfo.name}
      </div>
      <div>
        {projectInfo.greeting}
      </div>
      <div>
        <TextRedirectButton text={LIST_CATEGORIES_BUTTON_TEXT} route={CATEGORIES_ROUTE} />
      </div>
    </>
  );
});

export default ProjectGreeting;
