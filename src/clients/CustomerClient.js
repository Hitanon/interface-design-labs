let cart = [{
  id: 1,
  quantity: 1,
}];

export const addToCart = async (id, quantity) => {
  cart.findIndex(item => item.id === id) === -1
    ? cart.push({ id, quantity })
    : cart[cart.findIndex(item => item.id === id)].quantity += quantity;
};

export const getCart = async () => {
  console.log(cart);
  return cart;
};

export const purchase = async () => {
  console.log(`Purchase: ${JSON.stringify(cart)}`);
  cart = [];
};
