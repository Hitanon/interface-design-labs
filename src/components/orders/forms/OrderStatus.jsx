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
    <div className={isActive ? "status status-active" : "status status-inactive"}>
      {translateStatus(status)}
    </div>
  );
};

export default OrderStatus;
