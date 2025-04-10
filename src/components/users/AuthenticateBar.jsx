import { Link } from "react-router-dom";

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/Consts";

import "./users.css";

const AuthenticateBar = () => {
  return (
    <ul className="menu">
      <li>
        <Link className="link login-link" aria-label="Кнопка вход"  to={LOGIN_ROUTE}></Link>
      </li>
      <li>
        <Link className="link registration-link" aria-label="Кнопка регистрация" to={REGISTRATION_ROUTE}></Link>
      </li>
    </ul>
  );
};

export default AuthenticateBar;
