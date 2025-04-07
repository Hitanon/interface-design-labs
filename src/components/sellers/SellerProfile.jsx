import SellerOrders from "../orders/SellerOrders";

import SellerFormInfo from "./SellerFormInfo";
import SellerBalance from "./SellerBalance";
import SellerProducts from "./SellerProducts";

const SellerProfile = () => {
  return (
    <div className="container-fluid">
      <section className="container">
        <section className="row">
          <SellerFormInfo />
          <SellerBalance />
        </section>

        <SellerProducts />
        <SellerOrders />
      </section>
    </div>
  );
};

export default SellerProfile;
