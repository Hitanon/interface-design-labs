import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { getCustomerOrders } from "../clients/CustomerClient";

import CustomerOrder from "./CustomerOrder";


const CustomerOrders = observer(() => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    setOrders(await getCustomerOrders());
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {
        orders
          ?
          orders.map(order => <div key={order.id}><CustomerOrder order={order} /></div>)
          :
          <div>
            No orders
          </div>
      }
    </>
  );
});

export default CustomerOrders;
