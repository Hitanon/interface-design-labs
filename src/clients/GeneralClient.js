import { $host } from "./index";


export const getProjectInfo = async () => {
  const response = await $host.get("/api/project-info");
  return response.data;
};

export const checkProjectHealth = async () => {
  try {
    await $host.get("/api/health");
    return true;
  } catch (e) {
    return false;
  }
};
