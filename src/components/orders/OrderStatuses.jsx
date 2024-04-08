import { translateStatus } from "../../utils/StatusTranslations";

import "./orders.css";


const OrderStatuses = ({ statuses }) => {
  const lastStatus = statuses[0];

  const formatDate = (date) => {
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    let month = date.getMonth();
    if (month < 10) {
      month = `0${month + 1}`;
    }
    return `${day}.${month}.${date.getFullYear()}`;
  };

  return (
    <>
      <p className="order-status-section">
        {translateStatus(lastStatus.name)} с {formatDate(new Date(lastStatus.dateFrom))}
      </p>
      <p className="order-status-details">
        {lastStatus.details}
      </p>
    </>
  );
};

export default OrderStatuses;
