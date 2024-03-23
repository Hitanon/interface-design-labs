import { PURCHASE_ORDER_ROUTE, PLACE_AN_ORDER_BUTTON_TEXT } from "../../utils/Consts";

import CartBar from "../carts/CartBar";
import TextRedirectButton from "../ui/TextRedirectButton";
import GreetingMessage from "../general/GreetingMessage";


const CustomerBar = () => {
  return (
    <>
      <div>
        <GreetingMessage />
      </div>
      <CartBar />
      <TextRedirectButton text={PLACE_AN_ORDER_BUTTON_TEXT} route={PURCHASE_ORDER_ROUTE} />
    </>
  );
};

export default CustomerBar;
