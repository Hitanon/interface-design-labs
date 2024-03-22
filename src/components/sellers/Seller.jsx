import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import SellerHeader from "../SellerHeader";
import { getSellerInfo } from "../../clients/SellerClient";
import Products from "../Products";


const SellerInfo = observer(({ id }) => {
  const [seller, setSeller] = useState({products: []});

  const loadSeller = async () => {
    setSeller(await getSellerInfo(id));
  };

  useEffect(() => {
    loadSeller();
  }, []);

  return (
    <>
      <SellerHeader seller={seller} />
      <Products products={seller.products} />
    </>
  );
});

export default SellerInfo;
