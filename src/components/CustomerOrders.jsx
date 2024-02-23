import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";

import CustomerOrder from "./CustomerOrder";


const CustomerOrders = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      {user.orders.map(order => <div key={order.id}><CustomerOrder order={order} /></div>)}
    </>
  );
});

export default CustomerOrders;
