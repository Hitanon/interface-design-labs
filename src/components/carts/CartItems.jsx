import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";

import CartItem from "./CartItem";


const CartItems = observer(() => {
  const { cart } = useContext(Context);

  return (
    <>
      {
        cart.items.slice().sort((a, b) => a.id - b.id).map(
          item => <div key={item.id}>
            <CartItem item={item} />
          </div>
        )
      }
    </>
  );
});

export default CartItems;
