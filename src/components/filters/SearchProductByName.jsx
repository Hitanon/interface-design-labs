import { useState } from "react";

import useSearch from "../../hooks/useSearch";
import { SEARCH_PRODUCTS_BUTTON_TEXT, SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT } from "../../utils/Consts";
import InputField from "../ui/InputField";
import TextButton from "../ui/TextButton";


const SearchProductByName = () => {
  const { search, applyFilters } = useSearch();
  const [productName, setProductName] = useState("");

  const onSearchClick = async () => {
    if (productName.length !== 0) {
      search.addParam({ name: "name", value: productName });
    }
    await applyFilters();
  };

  return (
    <>
      <InputField
        type="text"
        placeholder={SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT}
        value={productName}
        callback={setProductName}
      />
      <TextButton text={SEARCH_PRODUCTS_BUTTON_TEXT} callback={onSearchClick} />
    </>
  );
};

export default SearchProductByName;
