import { useEffect, useState } from "react";

import { TOP_PRODUCTS_LABEL } from "../../utils/Consts";

import useProducts from "../../hooks/useProducts";

import ProductCard from "./ProductCard";

import "./products.css";


const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);
  const { getTop } = useProducts();

  const loadTopProducts = async () => {
    setTopProducts(await getTop());
  };

  useEffect(() => {
    loadTopProducts();
  }, []);

  return (
    <div className="top-products-section">
      <div className="top-products-info">
        <h2 className="top-products-title">
          {TOP_PRODUCTS_LABEL}
        </h2>
        <p className="top-products-text">
          для всех, кто ценит уникальные и качественные изделия с особенным характером
        </p>
      </div >
      <div className="top-products-list">
        {
          topProducts.map((product) =>
            <div className="product" key={product.id}><ProductCard product={product}></ProductCard></div>)
        }
      </div>
    </div>
  );
};

export default TopProducts;
