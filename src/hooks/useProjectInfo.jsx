import { useContext } from "react";

import { getProjectInfo } from "../clients/GeneralClient";
import { Context } from "..";


const useProjectInfo = () => {
  const { projectInfo } = useContext(Context);

  const loadProjectInfo = async () => {
    projectInfo.setInfo(await getProjectInfo());
  };

  return {
    loadProjectInfo,
    projectInfo,
  };
};

export default useProjectInfo;
