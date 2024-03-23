import { $host } from ".";


export const getTopProducts = async (limit) => {
  const response = await $host.get("/api/products/top");
  return response.data;
};

export const getProduct = async (id) => {
  const response = await $host.get(`/api/products/${id}`);
  return response.data;
};


export const searchProductsByParams = async (urlParams) => {
  const response = await $host.get(`/api/products${urlParams}`);
  return response.data;
};
