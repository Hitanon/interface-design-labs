import { products } from "./ProductClient";


export const getSellerInfo = async (id) => {
  return {
    id: 1,
    name: "seller1",
    description: "description",
    rating: 5,
    sales: 100,
    sellsFrom: "2020-01-01T10:00:00",
    products: products,
  };
};
