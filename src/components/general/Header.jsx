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
    <nav className="container-fluid header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <Link rel="stylesheet" to={MAIN_ROUTE}>
              <img className="logo" src="/img/logo.svg" alt="Logo" />
            </Link>
          </div>

          <div className="col nav-section justify-content-center">
            <ListButton
              text={LIST_CATEGORIES_BUTTON_TEXT}
              callback={onCategoriesClick}
            />
            <SearchProductByName />
          </div>

          <div className="col-3">
            {user.isAuth ? <UserBar /> : <AuthenticateBar />}
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Header;
