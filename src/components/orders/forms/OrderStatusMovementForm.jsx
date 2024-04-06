import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import InputField from "../../ui/InputField";
import TextButton from "../../ui/TextButton";
import useOrders from "../../../hooks/useOrders";
import { Context } from "../../..";
import useSeller from "../../../hooks/useSeller";

import OrderStatus from "./OrderStatus";


const OrderStatusMovementForm = observer(({ order }) => {
  const { statuses } = useContext(Context);
  const { getStatuses } = useOrders();
  const { moveOrder } = useSeller();
  const detailsDefaultValue = "";
  const [details, setDetails] = useState(detailsDefaultValue);

  const loadAvailableStatuses = async () => {
    if (statuses.statuses.length > 0) {
      return;
    }
    statuses.setStatuses(await getStatuses());
  };

  const onMoveClick = async () => {
    moveOrder(order.id, details);
    setDetails(detailsDefaultValue);
  };

  const isLastSellerEvent = () => {
    return order.events.length === statuses.statuses.length - 1;
  };

  useEffect(() => {
    loadAvailableStatuses();
  }, []);

  const orderStatuses = order.events.map(x => x.name);
  const allStatuses = statuses.statuses.map(x => x.name);
  const nonActiveStatuses = allStatuses.filter(x => !orderStatuses.includes(x));

  if (isLastSellerEvent()) {
    return (
      <>
        {orderStatuses.map(status => <OrderStatus key={status} status={status} isActive={true} />)}
        {nonActiveStatuses.map(status => <OrderStatus key={status} status={status} isActive={false} />)}
      </>
    );
  }

  return (
    <>
      {orderStatuses.map(status => <OrderStatus key={status} status={status} isActive={true} />)}
      {nonActiveStatuses.map(status => <OrderStatus key={status} status={status} isActive={false} />)}
      <div>
        <InputField type="text" value={details} callback={setDetails} />
        <TextButton text={"Перевести на следующий статус"} callback={onMoveClick} />
      </div>
    </>
  );
});

export default OrderStatusMovementForm;
