import { getAllCategories, getTopCategories } from "../clients/CategoryClient";
import { DEFAULT_TOP_CATEGORIES_COUNT } from "../utils/Consts";

const useCategories = () => {
  const getTop = async (limit = DEFAULT_TOP_CATEGORIES_COUNT) => {
    return await getTopCategories(limit);
  };

  const getAll = async () => {
    return await getAllCategories();
  };

  return {
    getTop,
    getAll,
  };
};

export default useCategories;
