import { useState } from "react";

import useSearch from "../../../hooks/useSearch";
import { SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT } from "../../../utils/Consts";
import InputField from "../../ui/InputField";

import "../../../index.css";


const SearchProductByName = () => {
  const { search, applyFilters } = useSearch();
  const [productName, setProductName] = useState("");

  const onSearchClick = async () => {
    if (productName.length !== 0) {
      search.addParam({ name: "name", value: productName });
    }
    await applyFilters();
  };

  const setName = (name) => {
    setProductName(name);
    search.addParam({ name: "name", value: name });
  };

  return (
    <search>
      <InputField
        type="text"
        placeholder={SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT}
        value={productName}
        callback={setName}
      />
      <button className="search-button" onClick={onSearchClick}></button>
    </search>
  );
};

export default SearchProductByName;
