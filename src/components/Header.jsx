import { useNavigate } from "react-router-dom";

import {
  CATEGORIES_ROUTE,
  LIST_CATEGORIES_BUTTON_TEXT,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE,
  PROFILE_ROUTE,
  MAIN_ROUTE,
} from "../utils/Consts";

import ListButton from "./ui/ListButton";
import SearchBar from "./ui/SearchBar";


const Header = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate(MAIN_ROUTE);
  };

  const onProfileClick = () => {
    navigate(PROFILE_ROUTE);
  };

  const onCategoriesClick = () => {
    navigate(CATEGORIES_ROUTE);
  };

  const onSearchClick = () => {
    navigate(SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE);
  };

  return (
    <>
      <div onClick={onLogoClick}>Logo</div>
      <button onClick={onProfileClick}>Profile</button>
      <ListButton text={LIST_CATEGORIES_BUTTON_TEXT} callback={onCategoriesClick} />
      <SearchBar text={SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT} callback={onSearchClick} />
    </>
  );
};

export default Header;
