import { useContext } from "react";

import { Context } from "..";
import {
  createProduct,
  getProduct,
  getTopProducts,
  searchProductsByParams,
  updateProduct,
} from "../clients/ProductClient";
import { DEFAULT_TOP_PRODUCTS_COUNT } from "../utils/Consts";
import { getSellerProfile} from "../clients/SellerClient";


const useProducts = () => {
  const { sellerProfile } = useContext(Context);

  const getTop = async (limit = DEFAULT_TOP_PRODUCTS_COUNT) => {
    return await getTopProducts(limit);
  };

  const search = async (urlParams) => {
    return await searchProductsByParams(urlParams);
  };

  const get = async (id) => {
    return await getProduct(id);
  };

  const create = async (name, description, price, unitsInStock, category) => {
    await createProduct({ name, description, price, unitsInStock, category });
    const profile = await getSellerProfile();
    sellerProfile.setProducts(profile.products);
  };

  const update = async (id, name, description, price, unitsInStock, category) => {
    await updateProduct(id, { name, description, price, unitsInStock, category });
    const profile = await getSellerProfile();
    sellerProfile.setProducts(profile.products);
  };

  return {
    getTop,
    search,
    get,
    create,
    update,
  };
};

export default useProducts;
