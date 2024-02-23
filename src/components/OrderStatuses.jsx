import OrderStatus from "./OrderStatus";

const OrderStatuses = ({ statuses }) => {
  return (
    <>
      Statuses
      <ul>
        {statuses.map(status => <li key={status.id}><OrderStatus status={status} /></li>)}
      </ul>
    </>
  );
};

export default OrderStatuses;
