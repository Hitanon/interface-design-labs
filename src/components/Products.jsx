import { observer } from "mobx-react-lite";

import ProductCard from "./products/ProductCard";


const Products = observer(({ products }) => {
  return (
    <>
      Products
      {
        products.map(product => <div key={product.id}><ProductCard id={product.id} /></div>)
      }
    </>
  );
});

export default Products;
