import { $host } from "./index";


export const getCategory = async (id) => {
  const response = await $host.get(`/api/categories/${id}`);
  return response.data;
};

export const getTopCategories = async (limit) => {
  const response = await $host.get(`/api/categories/top?limit=${limit}`);
  return response.data;
};

export const getAllCategories = async () => {
  const response = await $host.get("/api/categories");
  return response.data;
};
