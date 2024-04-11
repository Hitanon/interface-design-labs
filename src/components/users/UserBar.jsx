import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate, Link } from "react-router-dom";

import { Context } from "../..";
import { LOGOUT_BUTTON_TEXT, MAIN_ROUTE, PROFILE_ROUTE, ROLE } from "../../utils/Consts";
import useAuthenticate from "../../hooks/useAuthenticate";

import GreetingMessage from "../general/GreetingMessage";
import CustomerBar from "../customers/CustomerBar";

import "./users.css";


const UserBar = observer(() => {
  const { user } = useContext(Context);
  const { logout } = useAuthenticate();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    logout();
    navigate(MAIN_ROUTE);
  };

  return (
    <>
      <ul className="menu auth-bar">
        <li>
          <GreetingMessage />
        </li>
        <li>
          <Link className="link login-link" to={PROFILE_ROUTE}></Link>
        </li>
        <li>
          <button className="link logout" text={LOGOUT_BUTTON_TEXT} onClick={onLogoutClick} />
        </li>
        <li>
          {
            user.role === ROLE.CUSTOMER
              && <CustomerBar />
          }
        </li>
      </ul>
    </>
  );
});

export default UserBar;
