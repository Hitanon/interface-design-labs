import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import {
  ADD_TO_CART_BUTTON_TEXT,
  DECREASE_QUANTITY_BUTTON_TEXT,
  INCREASE_QUANTITY_BUTTON_TEXT,
  MOVE_TO_CART_BUTTON_TEXT,
  PURCHASE_ORDER_ROUTE,
  ROLE,
} from "../../utils/Consts";

import useCart from "../../hooks/useCart";
import { Context } from "../..";

import TextButton from "./TextButton";
import TextRedirectButton from "./TextRedirectButton";

import "./ui.css";


const AddToCartButtonFullProduct = observer(({ item, moveToCartButton = true }) => {
  const { user } = useContext(Context);
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

  const onDeleteClick = async () => {
    await removeItem(item.id, getItemQuantity(item.id));
  };

  useEffect(() => {
    loadQuantity();
  }, []);

  if (user.role !== ROLE.CUSTOMER) {
    return;
  }

  if (quantity === 0) {
    return (
      <div className="add-to-cart-button">
        <TextButton className="text-button" text={ADD_TO_CART_BUTTON_TEXT} callback={() => onAddToCartClick(1)} />
      </div>
    );
  };

  return (
    <div className="add-to-cart-button-full-product">

      {
        moveToCartButton
          ?
          <TextRedirectButton className="text-button"
            text={MOVE_TO_CART_BUTTON_TEXT}
            route={PURCHASE_ORDER_ROUTE} />
          :
          <TextButton className="text-button" text={"Удалить из корзины"} callback={onDeleteClick} />
      }

      <div className="change-quantity-section">

        <TextButton className="change-quantity-button"
          text={DECREASE_QUANTITY_BUTTON_TEXT}
          callback={() => onRemoveFromCartClick(1)} />

        <div className="quantity">{getItemQuantity(item.id)}</div>

        <TextButton className="change-quantity-button"
          text={INCREASE_QUANTITY_BUTTON_TEXT}
          callback={() => onAddToCartClick(1)} />
          
      </div>

    </div>
  );
});

export default AddToCartButtonFullProduct;
