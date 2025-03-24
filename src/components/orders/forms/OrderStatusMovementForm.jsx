import { useState } from "react";
import TextButton from "../../ui/TextButton";
import OrderStatus from "./OrderStatus";
import "../orders.css";

const OrderStatusMovementForm = ({ order }) => {
  const detailsDefaultValue = "";
  const [details, setDetails] = useState(detailsDefaultValue);
  const [events, setEvents] = useState(order.events);

  const allStatuses = ["CREATED", "ACCEPTED", "PACKED", "SENT", "RECEIVED"];
  const orderStatuses = events.map((e) => e.name);
  const nonActiveStatuses = allStatuses.filter(
    (s) => !orderStatuses.includes(s)
  );

  const isLastSellerEvent = () => {
    return orderStatuses.length === allStatuses.length;
  };

  const onMoveClick = () => {
    if (nonActiveStatuses.length > 0) {
      const nextStatus = nonActiveStatuses[0];
      setEvents([...events, { name: nextStatus }]);
      setDetails(detailsDefaultValue);
    }
  };

  return (
    <div className="row gy-3 py-5">
      <p className="col-12 current-status">Текущий статус</p>
      {orderStatuses.map((status) => (
        <OrderStatus key={status} status={status} isActive={true} />
      ))}
      {nonActiveStatuses.map((status) => (
        <OrderStatus key={status} status={status} isActive={false} />
      ))}

      {!isLastSellerEvent() && nonActiveStatuses.length > 0 && (
        <div className="change-status-containter">
          <label htmlFor="status-message" className="form-label">
            Сообщение
          </label>
          <textarea
            id="status-message"
            placeholder="Напишите комментарий для заказчика"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            className="status-textarea"
            style={{ minHeight: "150px", maxHeight: "300px", }}
          />
          <TextButton
            className="change-status-button"
            text={"Перевести на следующий статус"}
            callback={onMoveClick}
          />
        </div>
      )}
    </div>
  );
};

export default OrderStatusMovementForm;
