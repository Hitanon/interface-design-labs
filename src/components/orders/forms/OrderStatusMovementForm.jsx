import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { TextField } from "@mui/material";

import TextButton from "../../ui/TextButton";
import useOrders from "../../../hooks/useOrders";
import { Context } from "../../..";
import useSeller from "../../../hooks/useSeller";

import OrderStatus from "./OrderStatus";

import "../orders.css";


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

  if (isLastSellerEvent() || nonActiveStatuses.length === 0) {
    return (
      <>
        <p className="current-status">Текущий статус</p>
        <div className="order-statuses-list">
          {orderStatuses.map(status => <OrderStatus key={status} status={status} isActive={true} />)}
          {nonActiveStatuses.map(status => <OrderStatus key={status} status={status} isActive={false} />)}
        </div>
      </>

    );
  }

  return (
    <>
      <p className="current-status">Текущий статус</p>
      <div className="order-statuses-list">
        {orderStatuses.map(status => <OrderStatus key={status} status={status} isActive={true} />)}
        {nonActiveStatuses.map(status => <OrderStatus key={status} status={status} isActive={false} />)}
      </div>

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
        <TextButton className="change-status-button" text={"Перевести на следующий статус"} callback={onMoveClick} />
      </div>
    </>
  );
});

export default OrderStatusMovementForm;
