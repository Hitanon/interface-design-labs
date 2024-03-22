import { useEffect, useState } from "react";
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


const AddToCartButton = observer(({ id }) => {
  const { isCartContains, addItem, removeItem, getItemQuantity } = useCart();
  const [contains, setContains] = useState(false);

  const checkIsCartContains = async () => {
    setContains(isCartContains(id));
  };

  const onAddToCartClick = async (quantity) => {
    await addItem(id, quantity);
    checkIsCartContains();
  };

  const onRemoveFromCartClick = async (quantity) => {
    await removeItem(id, quantity);
    checkIsCartContains();
  };

  useEffect(() => {
    checkIsCartContains();
  }, []);

  return (
    <>
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
    </>
  );
});

export default AddToCartButton;
