import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { getCart } from "../clients/CustomerClient";
import { Context } from "..";


const Cart = observer(() => {
  const { cart } = useContext(Context);

  const loadCart = async () => {
    const cartItems = await getCart();
    cart.setItems(cartItems);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      Cart ({cart.itemsCount})
    </>
  );
});

export default Cart;
