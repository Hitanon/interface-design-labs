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
    <div className="col-12">
      <div className="row">
        <div className="col-12 order-section">
          <h2 className="order-price">
            {" "}
            Сумма: {calculateTotal()} <span>₽</span>
          </h2>
          <TextButton
            className="cart-order-button"
            callback={callBack}
            text={PURCHASE_BUTTON_TEXT}
          />
        </div>

        <div className="row gy-4">
          {items.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={item.id}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
