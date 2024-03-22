import { useContext } from "react";

import { Context } from "..";
import { addToCart, getCart, removeFromCart } from "../clients/CustomerClient";


const useCart = () => {
  const { cart } = useContext(Context);

  const removeItem = async (id, quantity) => {
    await removeFromCart(id, quantity);
    await loadCart();
  };

  const addItem = async (id, quantity) => {
    await addToCart(id, quantity);
    await loadCart();
  };

  const loadCart = async () => {
    const cartItems = await getCart();
    cart.setItems(cartItems);
  };

  const isCartContains = (id) => {
    return cart.items.some(item => item.id === id);
  };

  return {
    loadCart,
    removeItem,
    addItem,
    isCartContains,
  };
};

export default useCart;
