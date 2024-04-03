const OrderStatus = ({ status }) => {
  return (
    <>
      <div>
        Name: {status.name}
      </div>
      <div>
        Start Date: {status.dateFrom}
        <div>
          {status.dateTo !== null ? <div>End Date: {status.dateTo}</div> : null}
        </div>
        Status: {status.dateTo === null ? "active" : "ended"}
      </div>
      <div>
        {status.details ? `Message: ${status.details}` : null}
      </div>
    </>
  );
};

export default OrderStatus;
