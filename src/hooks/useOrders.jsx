import { useContext } from "react";

import { Context } from "..";
import { getAvailableStatuses, moveToNextStatus } from "../clients/GeneralClient";
import { getSellerProfile } from "../clients/SellerClient";


const useOrders = () => {
  const { sellerProfile } = useContext(Context);

  const getStatuses = async () => {
    return await getAvailableStatuses();
  };

  const loadOrders = async () => {
    sellerProfile.setProfile(await getSellerProfile());
  };

  const move = async (id, message) => {
    await moveToNextStatus(id, message);
    loadOrders();
  };

  return {
    getStatuses,
    move,
  };
};

export default useOrders;
