import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { TOP_CATEGORIES_LABEL } from "../../utils/Consts";
import useCategories from "../../hooks/useCategories";

import Categories from "./Categories";


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
    <>
      <div>
        {TOP_CATEGORIES_LABEL}
      </div>
      <Categories categories={topCategories} />
    </>
  );
});

export default TopCategories;
