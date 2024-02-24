import { useContext } from "react";

import { Context } from "../..";
import { ADD_TO_CART_BUTTON_TEXT } from "../../utils/Consts";
import { addToCart, getCart } from "../../clients/CustomerClient";


const AddToCartButton = ({ productId }) => {
  const { cart } = useContext(Context);

  const onAddToCartClick = async () => {
    await addToCart(productId, 1);
    const cartItems = await getCart();
    cart.setItems(cartItems);
  };

  return (
    <button onClick={onAddToCartClick}>
      {ADD_TO_CART_BUTTON_TEXT}
    </button>
  );
};

export default AddToCartButton;
