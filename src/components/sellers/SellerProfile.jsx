import SellerOrders from "../orders/SellerOrders";

import SellerFormInfo from "./SellerFormInfo";
import SellerBalance from "./SellerBalance";
import SellerProducts from "./SellerProducts";

const SellerProfile = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <SellerFormInfo />
          <SellerBalance />
        </div>

        <SellerProducts />
        <SellerOrders />
      </div>
    </div>
  );
};

export default SellerProfile;
