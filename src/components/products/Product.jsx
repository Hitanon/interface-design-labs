import { useContext, useEffect, useState } from "react";

import AddToCartButton from "../ui/AddToCartButton";
import UserComment from "../customers/UserComment";
import SellerButton from "../sellers/SellerButton";
import CategoryButton from "../categories/CategoryButton";
import { Context } from "../..";
import useProducts from "../../hooks/useProducts";

import ProductComments from "./ProductComments";
import ProductInfo from "./ProductInfo";


const Product = ({ id }) => {
  const { product } = useContext(Context);
  const { get } = useProducts();
  const [isLoading, setIsLoading] = useState(true);

  const loadProduct = async () => {
    product.setProduct(await get(id));
  };

  useEffect(() => {
    setIsLoading(true);
    loadProduct();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <ProductInfo product={product} />
      <CategoryButton category={product.category} />
      <SellerButton seller={product.seller} />
      <UserComment />
      <ProductComments comments={product.comments} />
      <hr />
      <AddToCartButton id={product.id} />
    </>
  );
};

export default Product;
