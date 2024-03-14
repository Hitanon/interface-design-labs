import { useState } from "react";

import useCart from "../hooks/useCart";


const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, removeItem } = useCart();


  return (
    <>
      <div>
        Name: {item.id} - quantity: {item.quantity}
      </div>
      <button onClick={() => addItem(item.id, quantity)}>+</button>
      <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button onClick={() => removeItem(item.id, quantity)}>-</button>
    </>
  );
};

export default CartItem;
