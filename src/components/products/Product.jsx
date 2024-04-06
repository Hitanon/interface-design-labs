import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import AddToCartButton from "../ui/AddToCartButton";
import UserComment from "../customers/UserComment";
import SellerButton from "../sellers/SellerButton";
import CategoryButton from "../categories/CategoryButton";
import { Context } from "../..";
import useProducts from "../../hooks/useProducts";

import ProductInfo from "./ProductInfo";
import ProductComment from "./ProductComment";


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
      <ProductInfo product={product} withSlider={true} />
      <CategoryButton category={product.category} />
      <SellerButton seller={product.seller} />
      <UserComment itemId={product.id} />
      {product.comments.map((comment) => <div key={comment.id}><ProductComment comment={comment} /></div>)}
      <AddToCartButton item={product} />
    </>
  );
});

export default Product;
