import { useContext } from "react";

import { Context } from "../..";


const SellerBalance = () => {
  const { sellerProfile } = useContext(Context);

  return (
    <>
      <div>
        Balance: {sellerProfile.balance}
      </div>
    </>
  );
};

export default SellerBalance;
