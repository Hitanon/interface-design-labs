import { $authHost } from ".";


export const addToCart = async (id, quantity) => {
  await $authHost.post("/api/cart", {
    product: id,
    quantity,
  });
};

export const getCart = async () => {
  const response = await $authHost.get("/api/cart");
  return response.data;
};

export const purchase = async () => {
  await $authHost.post("/api/orders/purchase");
};
