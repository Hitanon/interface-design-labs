import { observer } from "mobx-react-lite";


import "./sellers.css";


const SellerBalance = observer(() => {

  return (
    <div className="seller-balance">
      <p>На счете</p>
      <h2 className="balance">
        102 530 <span>₽</span>
      </h2>
    </div>
  );
});

export default SellerBalance;
