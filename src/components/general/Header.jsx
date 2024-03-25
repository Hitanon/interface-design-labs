import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

import {
  CATEGORIES_ROUTE,
  LIST_CATEGORIES_BUTTON_TEXT,
  MAIN_ROUTE,
} from "../../utils/Consts";
import { Context } from "../..";

import ListButton from "../ui/ListButton";
import UserBar from "../users/UserBar";
import AuthenticateBar from "../users/AuthenticateBar";
import SearchProductByName from "../products/filters/SearchProductByName";

import "./general.css";

const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const onCategoriesClick = () => {
    navigate(CATEGORIES_ROUTE);
  };

  return (
    <nav className="header">
      <Link rel="stylesheet" to={MAIN_ROUTE}>
        <img className="logo" src="/img/logo.svg" alt="Logo" />
      </Link>
      <div className="nav-section">
        <ListButton
          text={LIST_CATEGORIES_BUTTON_TEXT}
          callback={onCategoriesClick}
        />
        <SearchProductByName />
      </div>
      {user.isAuth ? <UserBar /> : <AuthenticateBar />}
    </nav>
  );
});

export default Header;
