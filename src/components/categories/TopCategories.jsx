import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { TOP_CATEGORIES_LABEL } from "../../utils/Consts";
import useCategories from "../../hooks/useCategories";

import Categories from "./Categories";

import "./categories.css";


const TopCategories = observer(() => {
  const [topCategories, setTopCategories] = useState([]);
  const { getTop } = useCategories();

  const loadTopCategories = async () => {
    setTopCategories(await getTop());
  };

  useEffect(() => {
    loadTopCategories();
  }, []);

  return (
    <div className="top-categories-section">
      <h2 className="top-categories-title">
        {TOP_CATEGORIES_LABEL}
      </h2>
      <Categories categories={topCategories} />
    </div>
  );
});

export default TopCategories;
