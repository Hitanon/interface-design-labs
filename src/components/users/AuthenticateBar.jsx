import { Link } from "react-router-dom";

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/Consts";

import "./users.css";

const AuthenticateBar = () => {
  return (
    <ul>
      <li>
        <Link className="link login-link" to={LOGIN_ROUTE}></Link>
      </li>
      <li>
        <Link className="link registration-link" to={REGISTRATION_ROUTE}></Link>
      </li>
    </ul>
  );
};

export default AuthenticateBar;
