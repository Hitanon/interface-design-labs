import { useContext } from "react";

import { Context } from "..";
import { getCustomerOrders, submitAcceptOrderItem } from "../clients/CustomerClient";


const useCustomer = () => {
  const { customerProfile } = useContext(Context);

  const loadOrders = async () => {
    customerProfile.setOrders(await getCustomerOrders());
  };

  const acceptOrderItem = async (id) => {
    await submitAcceptOrderItem(id);
    await loadOrders();
  };

  return {
    loadOrders,
    acceptOrderItem,
  };
};

export default useCustomer;
