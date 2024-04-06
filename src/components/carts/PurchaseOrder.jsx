import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import TextButton from "../ui/TextButton";
import { MAIN_ROUTE, PROFILE_ROUTE, PURCHASE_BUTTON_TEXT } from "../../utils/Consts";
import useCart from "../../hooks/useCart";
import TextRedirectButton from "../ui/TextRedirectButton";

import CartItems from "./CartItems";


const PurchaseOrder = observer(() => {
  const navigate = useNavigate();
  const { cart, loadCart, purchase } = useCart();

  const onPurchaseClick = async () => {
    await purchase();
    navigate(PROFILE_ROUTE);
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (cart.items.length === 0) {
    return (
      <>
        <div>У вас нет товаров. Вы можете их добавить из главной страницы. Ждем ваших покупок :)</div>
        <TextRedirectButton text={"На главную"} route={MAIN_ROUTE} />
      </>
    );
  }

  return (
    <>
      <CartItems items={cart.items} />
      <TextButton callback={onPurchaseClick} text={PURCHASE_BUTTON_TEXT} />
    </>
  );
});

export default PurchaseOrder;
