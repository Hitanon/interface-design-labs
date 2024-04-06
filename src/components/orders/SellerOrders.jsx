import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";

import SellerOrder from "./SellerOrder";


const SellerOrders = observer(() => {
  const { sellerProfile } = useContext(Context);

  return (
    <>
      {sellerProfile.orders.map(order => <div key={order.id}><SellerOrder order={order} /></div>)}
    </>
  );
});

export default SellerOrders;
