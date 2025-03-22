import SellerOrders from "../orders/SellerOrders";

import SellerFormInfo from "./SellerFormInfo";
import SellerBalance from "./SellerBalance";
import SellerProducts from "./SellerProducts";

const SellerProfile = () => {
  return (
    <>
      <div className="seller-header full">
        <SellerFormInfo />
        <SellerBalance />
      </div>
      <SellerProducts />
      <SellerOrders />
    </>
  );
};

export default SellerProfile;
