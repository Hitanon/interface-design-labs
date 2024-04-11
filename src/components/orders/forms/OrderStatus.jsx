const OrderStatus = ({ status, isActive }) => {
  return (
    <div className={isActive ? "status status-active" : "status status-inactive"}>
      {status}
    </div>
  );
};

export default OrderStatus;
