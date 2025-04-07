import { TOP_PRODUCTS_LABEL } from "../../utils/Consts";

import ProductCard from "./ProductCard";

import "./products.css";

const TopProducts = () => {
  const topProducts = [
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
    <section className="container top-products-section">
      <div className="row py-4 gy-3">
        <div className="col-12">
          <h2>{TOP_PRODUCTS_LABEL}</h2>
          <p className="top-products-text">
            для всех, кто ценит <mark>уникальные и качественные изделия</mark> с особенным
            характером
          </p>
        </div>

        <div className="col-12">
          <div className="row gy-5">
            {topProducts.map((product) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 product" key={product.id}>
                <ProductCard product={product}></ProductCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
