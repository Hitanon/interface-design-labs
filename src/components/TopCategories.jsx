import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { Context } from "..";

import { CATEGORIES_ROUTE } from "../utils/Consts";

import Category from "./Category";


const TopCategories = observer(() => {
  const { topItems } = useContext(Context);

  const navigate = useNavigate();

  const onCategoryClick = (categoryId) => {
    navigate(`${CATEGORIES_ROUTE}/${categoryId}`);
  };

  return (
    <>
      <div>
        TopCategories
      </div>
      <ul>
        {
          topItems.categories.map(
            (category) =>
              <li key={category.id} onClick={() => onCategoryClick(category.id)}><Category category={category} /></li>
          )
        }
      </ul>
    </>
  );
});

export default TopCategories;
