const OrderStatus = ({ status }) => {
  return (
    <>
      <div>
        Name: {status.name}
      </div>
      <div>
        Start Date: {status.startAt}
        {status.endedAt !== null ? <div>End Date: {status.endedAt}</div> : null}
        Status: {status.endedAt === null ? "active" : "ended"}
      </div>
    </>
  );
};

export default OrderStatus;
