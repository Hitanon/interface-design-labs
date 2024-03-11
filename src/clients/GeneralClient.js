import { $host } from "./index";


export const getProjectInfo = async () => {
  const response = await $host.get("/api/project-info");
  return response.data;
};

export const checkProjectHealth = async () => {
  const response = await $host.get("/api/health");
  return response.data;
};
