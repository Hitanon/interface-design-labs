import { getTopCategories } from "../clients/CategoryClient";

const useCategories = () => {
  const getTop = async (limit = 5) => {
    return await getTopCategories(limit);
  };

  return { getTop };
};

export default useCategories;
