import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import useProjectInfo from "../hooks/useProjectInfo";


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
    </>
  );
});

export default ProjectGreeting;
