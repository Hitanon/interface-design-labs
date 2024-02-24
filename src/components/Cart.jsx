import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";


const Cart = observer(() => {
  const { cart } = useContext(Context);

  return (
    <>
      Cart ({cart.itemsCount})
    </>
  );
});

export default Cart;
