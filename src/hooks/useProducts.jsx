import { getTopProducts } from "../clients/ProductClient";


const useProducts = () => {
  const getTop = async (limit = 5) => {
    return await getTopProducts(limit);
  };

  return { getTop };
};

export default useProducts;
