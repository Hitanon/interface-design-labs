import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { Context } from "..";
import { getCart, purchase } from "../clients/CustomerClient";
import { getProjectInfo } from "../clients/ProjectInfoClient";
import { MAIN_ROUTE, PURCHASE_BUTTON_TEXT } from "../utils/Consts";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Cart = observer(() => {
  const { projectInfo, cart } = useContext(Context);

  const navigate = useNavigate();

  const loadCart = async () => {
    const cartItems = await getCart();
    cart.setItems(cartItems);
  };

  const loadProjectInfo = async () => {
    const info = await getProjectInfo();
    projectInfo.setInfo(info);
  };

  const onPurchaseClick = async () => {
    await purchase();
    const cartItems = await getCart();
    cart.setItems(cartItems);
    navigate(MAIN_ROUTE);
  };

  useEffect(() => {
    loadCart();
    loadProjectInfo();
  }, []);

  return (
    <>
      <Header />
      <hr />
      Cart

      {cart.items.map((item) => <div key={item.id}>Name: {item.id} - quantity: {item.quantity}</div>)}

      <button onClick={onPurchaseClick}>{PURCHASE_BUTTON_TEXT}</button>
      <hr />
      <Footer />
    </>
  );
});

export default Cart;
