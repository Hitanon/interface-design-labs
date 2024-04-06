const OrderStatus = ({ status, isActive }) => {
  return (
    <>
      <div style={{ fontWeight: isActive ? "bold" : "normal" }}>{status}</div>
    </>
  );
};

export default OrderStatus;
