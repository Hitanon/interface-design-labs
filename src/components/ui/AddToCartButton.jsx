import { useState } from "react";

import {
  ADD_TO_CART_BUTTON_TEXT,
  DECREASE_QUANTITY_BUTTON_TEXT,
  INCREASE_QUANTITY_BUTTON_TEXT,
  MOVE_TO_CART_BUTTON_TEXT,
  PURCHASE_ORDER_ROUTE,
} from "../../utils/Consts";

import useCart from "../../hooks/useCart";

import TextButton from "./TextButton";
import TextRedirectButton from "./TextRedirectButton";

import "./ui.css";


const AddToCartButton = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, removeItem, getItemQuantity } = useCart();

  const loadQuantity = async () => {
    const itemQuantity = getItemQuantity(item.id);
    setQuantity(itemQuantity);
  };

  const onAddToCartClick = async (quantity) => {
    if (item.unitsInStock >= getItemQuantity(item.id) + quantity) {
      await addItem(item.id, quantity);
      await loadQuantity();
    }
  };

  const onRemoveFromCartClick = async (quantity) => {
    await removeItem(item.id, quantity);
    await loadQuantity();
  };

  if (quantity === 0) {
    return (
      <div className="add-to-cart-button">
        <TextButton text={ADD_TO_CART_BUTTON_TEXT} callback={() => onAddToCartClick(1)} />
      </div>
    );
  };

  return (
    <div className="add-to-cart-button">
      <TextRedirectButton text={MOVE_TO_CART_BUTTON_TEXT} route={PURCHASE_ORDER_ROUTE} />
      <TextButton text={DECREASE_QUANTITY_BUTTON_TEXT} callback={() => onRemoveFromCartClick(1)} />
      {getItemQuantity(item.id)}
      <TextButton text={INCREASE_QUANTITY_BUTTON_TEXT} callback={() => onAddToCartClick(1)} />
    </div>
  );
};

export default AddToCartButton;
