import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";


const SellerBalance = observer(() => {
  const { sellerProfile } = useContext(Context);

  return (
    <>
      <div>
        Balance: {sellerProfile.balance}
      </div>
    </>
  );
});

export default SellerBalance;
