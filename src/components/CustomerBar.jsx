import { CART_ROUTE, PLACE_AN_ORDER_BUTTON_TEXT } from "../utils/Consts";

import Cart from "./Cart";
import TextRedirectButton from "./ui/TextRedirectButton";
import GreetingMessage from "./GreetingMessage";


const CustomerBar = () => {
  return (
    <>
      <div>
        <GreetingMessage />
      </div>
      <Cart />
      <TextRedirectButton text={PLACE_AN_ORDER_BUTTON_TEXT} route={CART_ROUTE} />
    </>
  );
};

export default CustomerBar;
