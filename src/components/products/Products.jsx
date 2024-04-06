import { useState } from "react";

import ProductCard from "./ProductCard";
import { Pagination } from "@mui/material";
import { PRODUCTS_PER_PAGE } from "../../utils/Consts";


const Products = ({ products }) => {
  const [page, setPage] = useState(1);

  const getPagedProducts = () => {
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return products.slice(startIndex, endIndex);
  };

  if (products.length === 0) {
    return (
      <>
        Нет товаров
      </>
    );
  }

  return (
    <>
      {
        getPagedProducts().map(product => <div key={product.id}><ProductCard product={product} /></div>)
      }
      {
        products.length / PRODUCTS_PER_PAGE > 1
          ?
          <Pagination
            count={Math.ceil(products.length / PRODUCTS_PER_PAGE)}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
          :
          <></>
      }
    </>
  );
};

export default Products;
