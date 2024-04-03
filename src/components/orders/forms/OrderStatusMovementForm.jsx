import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import InputField from "../../ui/InputField";
import TextButton from "../../ui/TextButton";
import useOrders from "../../../hooks/useOrders";
import { Context } from "../../..";
import { moveToNextStatus } from "../../../clients/GeneralClient";


const OrderStatusMovementForm = observer(({ order }) => {
  const { statuses } = useContext(Context);
  const { getStatuses } = useOrders();
  const [message, setMessage] = useState("");

  const loadAvailableStatuses = async () => {
    statuses.setStatuses(await getStatuses());
  };

  const onMoveClick = async () => {
    await moveToNextStatus(order.id, message);
  };

  useEffect(() => {
    loadAvailableStatuses();
  }, []);

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
        <InputField type="text" value={message} callback={setMessage} />
        <TextButton text={"Перевести на следующий статус"} callback={onMoveClick} />
      </div>
    </>
  );
});

export default OrderStatusMovementForm;
