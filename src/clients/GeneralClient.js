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

export const getAvailableStatuses = async () => {
  const response = await $host.get("/api/orders/statuses");
  return response.data;
};

export const moveToNextStatus = async (id, message) => {
  await $host.post(`/api/orders/items/${id}/move`, { message });
};
