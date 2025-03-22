import { useContext } from "react";

import { Context } from "..";

const useCart = () => {
  const { cart } = useContext(Context);

  // Обновлённые статические данные с нужными полями
  const staticItems = [
    {
      id: 1,
      name: "Старый деревянный рабочий стол",
      price: 33500,
      quantity: 1,
      images: ["/img/table.png"],
      seller: { id: 1, name: "Seller1" },
      rating: 4.8,
      unitsInStock: 5,
    },
    {
      id: 2,
      name: "Минималистичная книжная полка",
      price: 12750,
      quantity: 2,
      images: ["/img/shelf.png"],
      seller: { id: 2, name: "Seller2" },
      rating: 4.6,
      unitsInStock: 7,
    },
  ];

  const loadCart = async () => {
    cart.setItems(staticItems);
  };

  const addItem = async (id, quantity) => {
    const existing = cart.items.find((item) => item.id === id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.items.push({
        id,
        name: "Товар " + id,
        price: 1000,
        quantity,
        images: ["/img/placeholder.png"],
        seller: { id: 0, name: "Неизвестный продавец" },
        rating: 0,
        unitsInStock: 1,
      });
    }
    cart.setItems([...cart.items]);
  };

  const removeItem = async (id, quantity) => {
    const updated = cart.items
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - quantity } : item
      )
      .filter((item) => item.quantity > 0);
    cart.setItems(updated);
  };

  const purchase = async () => {
    alert("Покупка оформлена!");
    cart.setItems([]);
  };

  const get = async () => {
    return cart.items;
  };

  const isCartContains = (id) => {
    return cart.items.some((item) => item.id === id);
  };

  const getItemQuantity = (id) => {
    const item = cart.items.find((item) => item.id === id);
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
