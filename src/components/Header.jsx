import { useNavigate } from "react-router-dom";

import {
  CATEGORIES_ROUTE,
  LIST_CATEGORIES_BUTTON_TEXT,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE,
} from "../utils/Consts";

import ListButton from "./ui/ListButton";
import SearchBar from "./ui/SearchBar";



export const Header = () => {
  const navigate = useNavigate();

  const onCategoriesClick = () => {
    navigate(CATEGORIES_ROUTE);
  };

  const onSearchClick = () => {
    navigate(SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE);
  };

  return (
    <>
      <div>
        Header
      </div>
      <ListButton text={LIST_CATEGORIES_BUTTON_TEXT} callback={onCategoriesClick} />
      <SearchBar text={SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT} callback={onSearchClick} />
    </>
  );
};

export default Header;
