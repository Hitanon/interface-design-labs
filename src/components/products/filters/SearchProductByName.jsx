import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT } from "../../../utils/Consts";
import InputField from "../../ui/InputField";


const SearchProductByName = () => {
  const [productName, setProductName] = useState("");
  const navigate = useNavigate();

  const onSearchClick = () => {
    navigate("/products/search");
  };

  const setName = (name) => {
    setProductName(name);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearchClick();
    }
  };

  return (
    <search>
      <InputField
        type="text"
        placeholder={SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT}
        value={productName}
        callback={setName}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button className="search-button" onClick={onSearchClick}></button>
    </search>
  );
};

export default SearchProductByName;
