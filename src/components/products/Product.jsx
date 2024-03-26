import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import AddToCartButton from "../ui/AddToCartButton";
import UserComment from "../customers/UserComment";
import SellerButton from "../sellers/SellerButton";
import CategoryButton from "../categories/CategoryButton";
import { Context } from "../..";
import useProducts from "../../hooks/useProducts";

import ProductComments from "./ProductComments";
import ProductInfo from "./ProductInfo";


const Product = observer(({ id }) => {
  const { product } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const { get } = useProducts();

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
      <UserComment itemId={product.id} />
      <ProductComments comments={product.comments} />
      <hr />
      <AddToCartButton item={product} />
    </>
  );
});

export default Product;
