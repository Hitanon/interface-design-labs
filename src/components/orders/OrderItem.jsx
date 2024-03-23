import OrderStatus from "./OrderStatus";


const OrderItem = ({ item }) => {
  return (
    <>
      <div>
        <div>
          Name: {item.id}
        </div>
        {
          item.statuses.map(status => <ul key={status.id}><li><OrderStatus status={status} /></li></ul>)
        }
      </div>
    </>
  );
};

export default OrderItem;
