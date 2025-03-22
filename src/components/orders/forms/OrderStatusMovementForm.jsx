import { useState } from "react";

import { TextField } from "@mui/material";

import TextButton from "../../ui/TextButton";

import OrderStatus from "./OrderStatus";

import "../orders.css";

const OrderStatusMovementForm = ({ order }) => {
  const detailsDefaultValue = "";
  const [details, setDetails] = useState(detailsDefaultValue);
  const [events, setEvents] = useState(order.events);

  const allStatuses = ["CREATED", "ACCEPTED", "PACKED", "SENT", "RECEIVED"];
  const orderStatuses = events.map((e) => e.name);
  const nonActiveStatuses = allStatuses.filter((s) => !orderStatuses.includes(s));

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
    <>
      <p className="current-status">Текущий статус</p>
      <div className="order-statuses-list">
        {orderStatuses.map((status) => (
          <OrderStatus key={status} status={status} isActive={true} />
        ))}
        {nonActiveStatuses.map((status) => (
          <OrderStatus key={status} status={status} isActive={false} />
        ))}
      </div>

      {!isLastSellerEvent() && nonActiveStatuses.length > 0 && (
        <div className="change-status-containter">
          <TextField
            type="text"
            label="Сообщение"
            placeholder="Напишите комментарий для заказчика"
            multiline
            fullWidth
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            variant="outlined"
            sx={{
              width: "700px",
              "& .MuiInputBase-root": {
                fontSize: "16px",
                fontFamily: "'Comfortaa', cursive",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                color: "black",
                fontFamily: "'Comfortaa', cursive",
                "&.Mui-focused": {
                  color: "black",
                },
              },
            }}
          />
          <TextButton
            className="change-status-button"
            text={"Перевести на следующий статус"}
            callback={onMoveClick}
          />
        </div>
      )}
    </>
  );
};

export default OrderStatusMovementForm;
