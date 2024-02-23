import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

import {
  CATEGORIES_ROUTE,
  LIST_CATEGORIES_BUTTON_TEXT,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE,
  PROFILE_ROUTE,
  MAIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/Consts";
import { Context } from "..";
import { logout } from "../clients/UserClient";

import ListButton from "./ui/ListButton";
import SearchBar from "./ui/SearchBar";


const Header = observer(() => {
  const { user } = useContext(Context);

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

  const onLoginClick = () => {
    navigate(LOGIN_ROUTE);
  };

  const onRegisterClick = () => {
    navigate(REGISTRATION_ROUTE);
  };

  const onLogoutClick = async () => {
    user.setIsAuth(false);
    user.setUsername("");
    await logout();
    localStorage.removeItem("token");
  };

  return (
    <>
      <div onClick={onLogoClick}>Logo</div>
      <button onClick={onProfileClick}>Profile</button>
      <ListButton text={LIST_CATEGORIES_BUTTON_TEXT} callback={onCategoriesClick} />
      <SearchBar text={SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT} callback={onSearchClick} />

      {
        user.isAuth
          ?
          <div>
            <div>
              Username: {user.username}
            </div>
            <button onClick={onLogoutClick}>Logout</button>
          </div>
          :
          <div>
            <button onClick={onLoginClick}>Login</button>
            <button onClick={onRegisterClick}>Register</button>
          </div>
      }

    </>
  );
});

export default Header;
