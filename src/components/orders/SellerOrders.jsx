import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";

import SellerOrder from "./SellerOrder";


const SellerOrders = observer(() => {
  const { sellerOrders } = useContext(Context);

  return (
    <>
      <ul>
        {sellerOrders.orders.map((order) => <li key={order.id}><SellerOrder order={order} /></li>)}
      </ul>
    </>
  );
});

export default SellerOrders;
