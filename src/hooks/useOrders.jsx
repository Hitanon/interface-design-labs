import { getAvailableStatuses } from "../clients/GeneralClient";


const useOrders = () => {
  const getStatuses = async () => {
    return await getAvailableStatuses();
  };

  const moveToNextStatus = (id) => {

  };

  return {
    getStatuses,
    moveToNextStatus,
  };
};

export default useOrders;
