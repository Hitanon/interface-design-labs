import TextButton from "../ui/TextButton";

import { PURCHASE_BUTTON_TEXT } from "../../utils/Consts";

import CartItem from "./CartItem";

import "./carts.css";

import "../products/products.css";


const CartItems = ({ items, callBack }) => {
  const calculateTotal = () => {
    return items.reduce((a, b) => a + b.price * b.quantity, 0);
  };

  return (
    <div className="cart-items">
      <div className="order-section">
        <h2 className="order-price"> Сумма: {calculateTotal()} <span>₽</span></h2>
        <TextButton className="cart-order-button" callback={callBack} text={PURCHASE_BUTTON_TEXT} />
      </div>

      <div className="products-list">
        {items.map(item => <div key={item.id}><CartItem className="product" item={item} /></div>)}
      </div>
    </div>
  );
};

export default CartItems;
