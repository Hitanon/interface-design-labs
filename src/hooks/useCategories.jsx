import { getAllCategories, getCategory, getTopCategories } from "../clients/CategoryClient";
import { DEFAULT_TOP_CATEGORIES_COUNT } from "../utils/Consts";

const useCategories = () => {
  const get = async (id) => {
    return await getCategory(id);
  };

  const getTop = async (limit = DEFAULT_TOP_CATEGORIES_COUNT) => {
    return await getTopCategories(limit);
  };

  const getAll = async () => {
    return await getAllCategories();
  };

  return {
    get,
    getTop,
    getAll,
  };
};

export default useCategories;
