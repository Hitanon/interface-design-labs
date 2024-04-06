import CartItem from "./CartItem";


const CartItems = ({ items }) => {
  const calculateTotal = () => {
    return items.reduce((a, b) => a + b.price * b.quantity, 0);
  };

  return (
    <>
      {items.map(item => <div key={item.id}><CartItem item={item} /></div>)}
      <div>
        В сумме: {calculateTotal()}
      </div>
    </>
  );
};

export default CartItems;
