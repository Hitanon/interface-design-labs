import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { PURCHASE_ORDER_ROUTE } from "../../utils/Consts";
import { getCart } from "../../clients/CustomerClient";
import { Context } from "../..";

import "./carts.css";


const CartBar = observer(() => {
  const { cart } = useContext(Context);

  const loadCart = async () => {
    try {
      const cartItems = await getCart();
      cart.setItems(cartItems);
    }
    catch (e) {
      cart.setItems([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Link className="cart-link" to={PURCHASE_ORDER_ROUTE}>
      {cart.itemsCount > 0 && <span className="cart-counter">{cart.itemsCount}</span>}
    </Link>
  );
});

export default CartBar;
