import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ImageField from "../ui/ImageField";
import { getCategory } from "../../clients/CategoryClient";
import useSearch from "../../hooks/useSearch";
import { SEARCH_PRODUCTS_ROUTE } from "../../utils/Consts";


const CategoryCard = ({ id }) => {
  const navigate = useNavigate();
  const { search, getUrlParams } = useSearch();
  const [category, setCategory] = useState({});

  const onCategoryClick = () => {
    search.addParam({name: "category", value: id});
    navigate(`${SEARCH_PRODUCTS_ROUTE}${getUrlParams()}`);
  };

  const loadCategory = async () => {
    setCategory(await getCategory(id));
  };

  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <>
      <div onClick={onCategoryClick}>
        <ImageField />

        <div>
          {category.name}
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
