import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import TextButton from "../ui/TextButton";
import { MAIN_ROUTE, PURCHASE_BUTTON_TEXT } from "../../utils/Consts";
import useCart from "../../hooks/useCart";

import CartItems from "./CartItems";


const PurchaseOrder = observer(() => {
  const navigate = useNavigate();
  const { cart, loadCart, purchase } = useCart();

  const onPurchaseClick = async () => {
    await purchase();
    navigate(MAIN_ROUTE);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <CartItems items={cart.items} />
      {
        cart.items.length === 0
          ?
          <div>Empty cart</div>
          :
          <TextButton callback={onPurchaseClick} text={PURCHASE_BUTTON_TEXT} />
      }
    </>
  );
});

export default PurchaseOrder;
