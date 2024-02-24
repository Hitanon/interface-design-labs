const cart = [];

export const addToCart = async (id, quantity) => {
  cart.findIndex(item => item.id === id) === -1
    ? cart.push({id, quantity})
    : cart[cart.findIndex(item => item.id === id)].quantity += quantity;
};

export const getCart = async () => {
  console.log(cart);
  return cart;
};
