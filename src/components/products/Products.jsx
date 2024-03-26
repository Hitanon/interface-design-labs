import ProductCard from "./ProductCard";


const Products = ({ products }) => {
  return (
    <>
      {
        products.map(product => <div key={product.id}><ProductCard product={product} /></div>)
      }
    </>
  );
};

export default Products;
