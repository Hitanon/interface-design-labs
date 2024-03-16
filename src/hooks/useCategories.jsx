import { getTopCategories } from "../clients/CategoryClient";
import { DEFAULT_TOP_CATEGORIES_COUNT } from "../utils/Consts";

const useCategories = () => {
  const getTop = async (limit = DEFAULT_TOP_CATEGORIES_COUNT) => {
    return await getTopCategories(limit);
  };

  return { getTop };
};

export default useCategories;
