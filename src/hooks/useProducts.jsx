import { getProduct, getTopProducts, searchProductsByParams } from "../clients/ProductClient";
import { DEFAULT_TOP_PRODUCTS_COUNT } from "../utils/Consts";


const useProducts = () => {
  const getTop = async (limit = DEFAULT_TOP_PRODUCTS_COUNT) => {
    return await getTopProducts(limit);
  };

  const search = async (urlParams) => {
    return await searchProductsByParams(urlParams);
  };

  const get = async (id) => {
    return await getProduct(id);
  };

  return {
    getTop,
    search,
    get,
  };
};

export default useProducts;
