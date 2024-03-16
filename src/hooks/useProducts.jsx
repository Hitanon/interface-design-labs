import { getTopProducts, searchProductsByParams } from "../clients/ProductClient";
import { DEFAULT_TOP_PRODUCTS_COUNT } from "../utils/Consts";


const useProducts = () => {
  const getTop = async (limit = DEFAULT_TOP_PRODUCTS_COUNT) => {
    return await getTopProducts(limit);
  };

  const search = async (urlParams) => {
    return await searchProductsByParams(urlParams);
  };

  return {
    getTop,
    search,
  };
};

export default useProducts;
