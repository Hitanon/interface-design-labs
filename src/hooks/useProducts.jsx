import { getTopProducts } from "../clients/ProductClient";
import { DEFAULT_TOP_PRODUCTS_COUNT } from "../utils/Consts";


const useProducts = () => {
  const getTop = async (limit = DEFAULT_TOP_PRODUCTS_COUNT) => {
    return await getTopProducts(limit);
  };

  return { getTop };
};

export default useProducts;
