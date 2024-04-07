import { useState } from "react";
import { Pagination } from "@mui/material";

import { PRODUCTS_PER_PAGE } from "../../utils/Consts";

import ProductCard from "./ProductCard";

import "./products.css";


const Products = ({ products }) => {
  const [page, setPage] = useState(1);

  const getPagedProducts = () => {
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return products.slice(startIndex, endIndex);
  };

  if (products.length === 0) {
    return (
      <h3>
        Нет товаров
      </h3>
    );
  }

  return (
    <>
      <div className="products-list">
        {
          getPagedProducts().map(product =>
            <div className="product" key={product.id}>
              <ProductCard product={product} />
            </div>
          )
        }
      </div>
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
