import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";

import Category from "./Category";


const TopCategories = observer(() => {
  const { topItems } = useContext(Context);

  return (
    <>
      <div>
        TopCategories
      </div>
      <ul>
        {
          topItems.categories.map((category) => <li key={category.id}><Category category={category} /></li>)
        }
      </ul>
    </>
  );
});

export default TopCategories;
