import { useState } from "react";
import { observer } from "mobx-react-lite";

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


const AddToCartButton = observer(({ item }) => {
  const [contains, setContains] = useState(false);
  const { isCartContains, addItem, removeItem, getItemQuantity } = useCart();

  const checkIsCartContains = async () => {
    setContains(isCartContains(item.id));
  };

  const onAddToCartClick = async (quantity) => {
    if (item.unitsInStock >= getItemQuantity(item.id) + quantity) {
      await addItem(item.id, quantity);
      checkIsCartContains();
    }
  };

  const onRemoveFromCartClick = async (quantity) => {
    await removeItem(item.id, quantity);
    checkIsCartContains();
  };

  const getQuantity = () => {
    return getItemQuantity(item.id);
  };

  if (contains) {
    return (
      <>
        <TextRedirectButton text={MOVE_TO_CART_BUTTON_TEXT} route={PURCHASE_ORDER_ROUTE} />
        <TextButton text={DECREASE_QUANTITY_BUTTON_TEXT} callback={() => onRemoveFromCartClick(1)} />
        {getQuantity()}
        <TextButton text={INCREASE_QUANTITY_BUTTON_TEXT} callback={() => onAddToCartClick(1)} />
      </>
    );
  };

  return (
    <div className="add-to-cart-button">
      {
        contains
          ?
          <div>
            <TextRedirectButton text={MOVE_TO_CART_BUTTON_TEXT} route={PURCHASE_ORDER_ROUTE} />
            <TextButton text={DECREASE_QUANTITY_BUTTON_TEXT} callback={() => onRemoveFromCartClick(1)} />
            {getItemQuantity(id)}
            <TextButton text={INCREASE_QUANTITY_BUTTON_TEXT} callback={() => onAddToCartClick(1)} />
          </div>
          :
          <TextButton text={ADD_TO_CART_BUTTON_TEXT} callback={() => onAddToCartClick(1)} />
      }
    </div>
  );
});

export default AddToCartButton;
