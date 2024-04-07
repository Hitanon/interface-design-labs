import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Pagination } from "@mui/material";

import { Context } from "../..";
import { CREATE_PRODUCT_ROUTE, PRODUCTS_PER_PAGE } from "../../utils/Consts";
import EditSellerProductForm from "../forms/EditSellerProductForm";
import TextRedirectButton from "../ui/TextRedirectButton";


const SellerProducts = observer(() => {
  const [page, setPage] = useState(1);
  const { sellerProfile } = useContext(Context);

  const getPagedProducts = () => {
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return sellerProfile.products.slice(startIndex, endIndex);
  };

  return (
    <>
      <TextRedirectButton text="Добавить продукт" route={CREATE_PRODUCT_ROUTE} />
      <hr />
      {
        getPagedProducts().map(product =>
          <div key={product.id}><EditSellerProductForm product={product} /></div>
        )
      }
      {
        sellerProfile.products.length / PRODUCTS_PER_PAGE > 1
          ?
          <Pagination
            count={Math.ceil(sellerProfile.products.length / PRODUCTS_PER_PAGE)}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
          :
          <></>
      }
    </>
  );
});

export default SellerProducts;
