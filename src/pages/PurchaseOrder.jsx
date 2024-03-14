import { useNavigate } from "react-router-dom";

import { purchase } from "../clients/CustomerClient";
import { MAIN_ROUTE, PURCHASE_BUTTON_TEXT } from "../utils/Consts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartItems from "../components/CartItems";
import TextButton from "../components/ui/TextButton";
import useCart from "../hooks/useCart";


const PurchaseOrder = () => {
  const { loadCart } = useCart();

  const navigate = useNavigate();

  const onPurchaseClick = async () => {
    await purchase();
    await loadCart();
    navigate(MAIN_ROUTE);
  };

  return (
    <>
      <Header />
      <hr />
      <CartItems />
      <TextButton callback={onPurchaseClick} text={PURCHASE_BUTTON_TEXT} />
      <hr />
      <Footer />
    </>
  );
};

export default PurchaseOrder;
