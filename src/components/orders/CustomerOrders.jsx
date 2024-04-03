import { useEffect, useState } from "react";

import { getCustomerOrders } from "../../clients/CustomerClient";

import CustomerOrder from "./CustomerOrder";


const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    setOrders(await getCustomerOrders());
  };

  useEffect(() => {
    getOrders();
  }, []);

  if (orders.length === 0) {
    return <div>No orders</div>;
  }

  return (
    <>
      {
        orders.map(order => <div key={order.id}><CustomerOrder order={order} /></div>)
      }
    </>
  );
};

export default CustomerOrders;
