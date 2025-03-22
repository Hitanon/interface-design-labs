import ProductCard from "./ProductCard";
import "./products.css";

const Products = () => {
  const products = [
    {
      id: 0,
      images: ["/img/table.png"],
      price: 33500,
      name: "Старый деревянный рабочий стол",
      raiting: 4.76,
      seller: { id: 0, name: "Seller1" },
      unitsInStock: 10,
    },
    {
      id: 1,
      images: ["/img/shelf.png"],
      price: 12750,
      name: "Минималистичная книжная полка",
      raiting: 4.68,
      seller: { id: 1, name: "Seller2" },
      unitsInStock: 3,
    },
    {
      id: 2,
      images: ["/img/chair.png"],
      price: 18900,
      name: "Винтажный кожаный офисный стул",
      raiting: 4.84,
      seller: { id: 2, name: "Seller3" },
      unitsInStock: 5,
    },
  ];

  return (
    <div className="products-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
