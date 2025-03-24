import { useState } from "react";
import { Pagination } from "@mui/material";

import { CREATE_PRODUCT_ROUTE, PRODUCTS_PER_PAGE } from "../../utils/Consts";
import EditSellerProductForm from "../forms/EditSellerProductForm";
import TextRedirectButton from "../ui/TextRedirectButton";

import "./sellers.css";

const SellerProducts = () => {
  const [page, setPage] = useState(1);

  const staticProducts = [
    {
      id: 1,
      name: "Старый деревянный рабочий стол",
      description: "Прочный рабочий стол из массива дуба.",
      price: 33500,
      unitsInStock: 5,
      rating: 4.8,
      images: ["/img/table.png"],
      category: { id: 2, name: "Мебель" },
    },
    {
      id: 2,
      name: "Минималистичная книжная полка",
      description: "Стильная полка в скандинавском стиле.",
      price: 12750,
      unitsInStock: 3,
      rating: 4.6,
      images: ["/img/shelf.png"],
      category: { id: 2, name: "Мебель" },
    },
    {
      id: 3,
      name: "Винтажный кожаный офисный стул",
      description: "Эргономичный стул с антикварной отделкой.",
      price: 18900,
      unitsInStock: 7,
      rating: 4.9,
      images: ["/img/chair.png"],
      category: { id: 2, name: "Мебель" },
    },
  ];

  const getPagedProducts = () => {
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return staticProducts.slice(startIndex, endIndex);
  };

  return (
    <div className="col-12 py-5">
      <div className="seller-products-title">
        <h2>Товары</h2>
        <TextRedirectButton className="add-product-button" text="+" route={CREATE_PRODUCT_ROUTE} />
      </div>
      <div className="row gy-4 py-3">
        {getPagedProducts().map((product) => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
            <EditSellerProductForm product={product} />
          </div>
        ))}
      </div>

      {staticProducts.length / PRODUCTS_PER_PAGE > 1 && (
        <Pagination
          count={Math.ceil(staticProducts.length / PRODUCTS_PER_PAGE)}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      )}
    </div>
  );
};

export default SellerProducts;
