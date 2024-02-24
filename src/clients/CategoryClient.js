import { $host } from "./index";


export const getTopCategories = async (limit) => {
  const response = await $host.get("/api/categories/top");
  return response.data;
};

export const getAllCategories = async () => {
  const response = await $host.get("/api/categories");
  return response.data;
};
