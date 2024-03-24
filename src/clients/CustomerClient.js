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
  await $authHost.post("/api/cart", buildCartItem(id, -quantity));
};

export const getCart = async () => {
  const response = await $authHost.get("/api/cart");
  return response.data;
};

export const purchase = async () => {
  await $authHost.post("/api/orders");
};

export const getCustomerOrders = async () => {
  const response = await $authHost.get("/api/orders");
  return response.data;
};

export const updateProductComment = async (id, rating, message) => {
  await $authHost.put(`/api/comments/${id}`, { rating, message });
};

export const createProductComment = async (productId, rating, message) => {
  await $authHost.post(`/api/products/${productId}/comments`, { rating, message });
};

export const deleteProductComment = async (id) => {
  await $authHost.delete(`/api/comments/${id}`);
};

export const getProductOrder = async (id) => {
  const response = await $authHost.get(`/api/orders/items/${id}`);
  const data = response.data;
  data.statuses.sort((b, a) => a.id - b.id);
  return data;
};

export const submitAcceptOrderItem = async (id) => {
  await $authHost.post(`/api/orders/items/${id}/accept`);
};

// export const getCustomerOrder = async (id) => {
//   const response = await $authHost.get(`/api/orders/${id}`);
//   return response.data;
// };
