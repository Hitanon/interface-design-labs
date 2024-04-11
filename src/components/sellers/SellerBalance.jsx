import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";

import "./sellers.css";


const SellerBalance = observer(() => {
  const { sellerProfile } = useContext(Context);

  return (
    <div className="seller-balance">
      <p>На счете</p>
      <h2 className="balance">
        {sellerProfile.balance} <span>₽</span>
      </h2>
    </div>
  );
});

export default SellerBalance;
