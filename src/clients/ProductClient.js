import { $host } from ".";


const products = [
  {
    id: 1,
    name: "product1",
    price: 100,
    unitsInStock: 10,
    seller: {
      id: 1,
      name: "seller1",
    },
  },
  {
    id: 2,
    name: "product2",
    price: 200,
    unitsInStock: 20,
    seller: {
      id: 2,
      name: "seller2",
    },
  },
];


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

export { products };
