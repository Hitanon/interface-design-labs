import { translateStatus } from "../../utils/StatusTranslations";


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
      <div>
        {translateStatus(lastStatus.name)} с {formatDate(new Date(lastStatus.dateFrom))}
      </div>
      <div>
        {lastStatus.details}
      </div>
    </>
  );
};

export default OrderStatuses;
