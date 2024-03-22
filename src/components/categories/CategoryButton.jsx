import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCategory } from "../../clients/CategoryClient";
import useSearch from "../../hooks/useSearch";
import { SEARCH_PRODUCTS_ROUTE } from "../../utils/Consts";


const CategoryButton = ({ id }) => {
  const [category, setCategory] = useState({});
  const { search, getUrlParams } = useSearch();
  const navigate = useNavigate();

  const loadCategory = async () => {
    setCategory(await getCategory(id));
  };

  const onCategoryClick = () => {
    search.addParam({name: "category", value: id});
    navigate(`${SEARCH_PRODUCTS_ROUTE}${getUrlParams()}`);
  };

  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <>
      <div onClick={onCategoryClick}>
        Category: {category.name}
      </div>
    </>
  );
};

export default CategoryButton;
