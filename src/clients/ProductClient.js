import { $host, $authHost } from ".";


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

export const createProduct = async (data) => {
  await $authHost.post("/api/products", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateProduct = async (id, data) => {
  await $authHost.put(`/api/products/${id}`, data);
};

export const deleteProduct = async (id) => {
  await $authHost.delete(`/api/products/${id}`);
};
