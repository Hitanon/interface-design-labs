import ProductCard from "./ProductCard";


const Products = ({ products }) => {
  if (products.length === 0) {
    return (
      <>
        No Products
      </>
    );
  }

  return (
    <>
      {
        products.map(product => <div key={product.id}><ProductCard product={product} /></div>)
      }
    </>
  );
};

export default Products;
