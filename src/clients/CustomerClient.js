import { $authHost } from ".";


const buildCartItem = (id, quantity) => {
  return {
    product: id,
    quantity,
  };
};


export const addToCart = async (id, quantity) => {
  await $authHost.post("/api/cart", buildCartItem(id, quantity));
};

export const removeFromCart = async (id, quantity) => {
  await $authHost.delete("/api/cart", buildCartItem(id, quantity));
};

export const getCart = async () => {
  const response = await $authHost.get("/api/cart");
  return response.data;
};

export const purchase = async () => {
  await $authHost.post("/api/orders/purchase");
};
