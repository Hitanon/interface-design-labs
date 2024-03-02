import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

import {
  CATEGORIES_ROUTE,
  LIST_CATEGORIES_BUTTON_TEXT,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE,
  MAIN_ROUTE,
} from "../utils/Consts";
import { Context } from "..";

import ListButton from "./ui/ListButton";
import SearchBar from "./ui/SearchBar";
import UserBar from "./UserBar";
import AuthenticateBar from "./AuthenticateBar";
import ImageButton from "./ui/ImageButton";


const Header = observer(() => {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const onCategoriesClick = () => {
    navigate(CATEGORIES_ROUTE);
  };

  const onSearchClick = () => {
    navigate(SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE);
  };

  return (
    <>
      <ImageButton src="img/logo.png" alt="logo" route={MAIN_ROUTE} />
      <ListButton text={LIST_CATEGORIES_BUTTON_TEXT} callback={onCategoriesClick} />
      <SearchBar text={SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT} callback={onSearchClick} />
      {
        user.isAuth
          ? <UserBar />
          : <AuthenticateBar />
      }
    </>
  );
});

export default Header;
