import SellerOrder from "./SellerOrder";


const SellerOrders = ({ orders }) => {
  return (
    <>
      {orders.map(order => <div key={order.id}><SellerOrder order={order} /></div>)}
    </>
  );
};

export default SellerOrders;
