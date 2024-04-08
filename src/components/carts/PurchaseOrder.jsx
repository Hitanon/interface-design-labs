import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { MAIN_ROUTE, PROFILE_ROUTE } from "../../utils/Consts";
import useCart from "../../hooks/useCart";
import TextRedirectButton from "../ui/TextRedirectButton";

import CartItems from "./CartItems";

import "./carts.css";


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
      <div className="section-without-items">
        <h3>У вас нет товаров. Вы можете их добавить из главной страницы. Ждем ваших покупок :)</h3>
        <TextRedirectButton className="to-main-button" text={"На главную"} route={MAIN_ROUTE} />
      </div>
    );
  }

  return (
    <div className="section-with-items">
      <h1>Корзина</h1>
      <CartItems items={cart.items} callBack={onPurchaseClick} />
    </div>
  );
});

export default PurchaseOrder;
