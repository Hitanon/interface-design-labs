import { useEffect, useState } from "react";

import { observer } from "mobx-react-lite";

import { TOP_PRODUCTS_LABEL } from "../../utils/Consts";

import useProducts from "../../hooks/useProducts";

import ProductCard from "./ProductCard";


const TopProducts = observer(() => {
  const [topProducts, setTopProducts] = useState([]);
  const { getTop } = useProducts();

  const loadTopProducts = async () => {
    setTopProducts(await getTop());
  };

  useEffect(() => {
    loadTopProducts();
  }, []);

  return (
    <>
      <div>
        {TOP_PRODUCTS_LABEL}
      </div>
      {
        topProducts.map((product) => <div key={product.id}><ProductCard id={product.id}></ProductCard></div>)
      }
    </>
  );
});

export default TopProducts;
