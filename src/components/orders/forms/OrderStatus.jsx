const OrderStatus = ({ status, isActive }) => {
  const translateStatus = (status) => {
    if (status === "CREATED") {
      return "Создан";
    }
    if (status === "ACCEPTED") {
      return "Принят";
    }
    if (status === "PACKED") {
      return "Упакован";
    }
    if (status === "SENT") {
      return "Отправлен";
    }
    if (status === "RECEIVED") {
      return "Получен";
    }
  };

  return (
    <div className="col-4 col-xl-3">
      <div
        className={
          isActive
            ? "text-center status status-active"
            : "text-center status status-inactive"
        }
      >
        {translateStatus(status)}
      </div>
    </div>
  );
};

export default OrderStatus;
