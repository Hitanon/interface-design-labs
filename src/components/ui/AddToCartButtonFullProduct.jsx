import { useState } from "react";

import {
  ADD_TO_CART_BUTTON_TEXT,
  DECREASE_QUANTITY_BUTTON_TEXT,
  INCREASE_QUANTITY_BUTTON_TEXT,
  MOVE_TO_CART_BUTTON_TEXT,
  PURCHASE_ORDER_ROUTE,
} from "../../utils/Consts";

import TextButton from "./TextButton";
import TextRedirectButton from "./TextRedirectButton";

import "./ui.css";

const AddToCartButtonFullProduct = ({ moveToCartButton = true }) => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setQuantity(0);
  };

  if (quantity === 0) {
    return (
      <div className="add-to-cart-button">
        <TextButton
          className="text-button"
          text={ADD_TO_CART_BUTTON_TEXT}
          callback={increase}
        />
      </div>
    );
  }

  return (
    <div className="add-to-cart-button-full-product">
      {moveToCartButton ? (
        <TextRedirectButton
          className="text-button"
          text={MOVE_TO_CART_BUTTON_TEXT}
          route={PURCHASE_ORDER_ROUTE}
        />
      ) : (
        <TextButton
          className="text-button"
          text={"Удалить из корзины"}
          callback={reset}
        />
      )}

      <div className="change-quantity-section">
        <TextButton
          className="change-quantity-button"
          text={DECREASE_QUANTITY_BUTTON_TEXT}
          callback={decrease}
        />

        <div className="quantity">{quantity}</div>

        <TextButton
          className="change-quantity-button"
          text={INCREASE_QUANTITY_BUTTON_TEXT}
          callback={increase}
        />
      </div>
    </div>
  );
};

export default AddToCartButtonFullProduct;
