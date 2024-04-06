import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import InputField from "../../ui/InputField";
import TextButton from "../../ui/TextButton";
import useOrders from "../../../hooks/useOrders";
import { Context } from "../../..";
import useSeller from "../../../hooks/useSeller";


const OrderStatusMovementForm = observer(({ order }) => {
  const { statuses } = useContext(Context);
  const { getStatuses } = useOrders();
  const { moveOrder } = useSeller();
  const detailsDefaultValue = "";
  const [details, setDetails] = useState(detailsDefaultValue);

  const loadAvailableStatuses = async () => {
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

  if (isLastSellerEvent()) {
    return (
      <>
        <div>
          Order statuses:
          {order.events.map(status => <div key={status.id}>{status.name}</div>)}
        </div>
        <div>
          All statuses:
          {statuses.statuses.map(status => <div key={status.name}>{status.name}</div>)}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        Order statuses:
        {order.events.map(status => <div key={status.id}>{status.name}</div>)}
      </div>
      <div>
        All statuses:
        {statuses.statuses.map(status => <div key={status.name}>{status.name}</div>)}
      </div>
      <div>
        <InputField type="text" value={details} callback={setDetails} />
        <TextButton text={"Перевести на следующий статус"} callback={onMoveClick} />
      </div>
    </>
  );
});

export default OrderStatusMovementForm;
