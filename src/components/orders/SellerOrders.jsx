import { useContext } from "react";

import { Context } from "../..";

import SellerOrder from "./SellerOrder";
import { observer } from "mobx-react-lite";


const SellerOrders = observer(() => {
  const { sellerProfile } = useContext(Context);

  return (
    <>
      {sellerProfile.orders.map(order => <div key={order.id}><SellerOrder order={order} /></div>)}
    </>
  );
});

export default SellerOrders;
