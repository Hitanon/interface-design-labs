import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import AddToCartButton from "../ui/AddToCartButton";
import UserComment from "../customers/UserComment";
import SellerButton from "../sellers/SellerButton";
import CategoryButton from "../categories/CategoryButton";
import { Context } from "../..";
import useProducts from "../../hooks/useProducts";

import ProductInfo from "./ProductInfo";
import ProductComments from "./ProductComments";
import ProductDescription from "./ProductDesctiption";


const Product = observer(({ id }) => {
  const { product } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const { get } = useProducts();

  const loadProduct = async () => {
    setIsLoading(true);
    product.setProduct(await get(id));
    setIsLoading(false);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <CategoryButton category={product.category} />
      <ProductInfo product={product} withSlider={true} />
      <SellerButton seller={product.seller} />
      <AddToCartButton item={product} />
      <ProductDescription product={product} />
      <UserComment itemId={product.id} />
      <ProductComments comments={product.comments} />
    </>
  );
});

export default Product;
