import ProductCard from "./products/ProductCard";


const Products = ({ products }) => {
  return (
    <>
      {
        products.map(product => <div key={product.id}><ProductCard id={product.id} /></div>)
      }
    </>
  );
};

export default Products;
