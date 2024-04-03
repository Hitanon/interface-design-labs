import { useContext } from "react";

import { Context } from "..";
import { addToCart, getCart, purchaseOrder, removeFromCart } from "../clients/CustomerClient";


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

  const get = async () => {
    return await getCart();
  };

  const purchase = async () => {
    await purchaseOrder();
    await loadCart();
  };

  const isCartContains = (id) => {
    return cart.items.some(item => item.id === id);
  };

  const getItemQuantity = (id) => {
    const item = cart.items.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  return {
    cart,
    get,
    purchase,
    loadCart,
    removeItem,
    addItem,
    isCartContains,
    getItemQuantity,
  };
};

export default useCart;
