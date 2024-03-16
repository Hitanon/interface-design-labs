import { useState } from "react";

import useSearch from "../../hooks/useSearch";
import { SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT } from "../../utils/Consts";


const SearchProductName = () => {
  const { search, applyFilters } = useSearch();
  const [productName, setProductName] = useState("");

  const onSearchClick = async () => {
    search.addParam({name: "name", value: productName});
    await applyFilters();
  };

  return (
    <>
      <input
        type="text"
        placeholder={SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT}
        onChange={e => setProductName(e.target.value)}
      />
      <button onClick={onSearchClick}>Search</button>
    </>
  );
};

export default SearchProductName;
