import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";

import CartItem from "./CartItem";


const CartItems = observer(() => {
  const { cart } = useContext(Context);

  const calculateTotal = () => {
    return cart.items.reduce((a, b) => a + b.price * b.quantity, 0);
  };

  return (
    <>
      {
        cart.items.slice().sort((a, b) => a.id - b.id).map(
          item => <div key={item.id}>
            <CartItem item={item} />
          </div>
        )
      }
      <div>
        Total: {calculateTotal()}
      </div>
    </>
  );
});

export default CartItems;
