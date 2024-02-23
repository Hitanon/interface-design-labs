import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MAIN_ROUTE, REGISTRATION_ROUTE } from "../utils/Consts";
import { login } from "../clients/UserClient";
import { Context } from "..";


const Login = () => {
  const { user } = useContext(Context);

  const [credentials, setCredentials] = useState({
    email: "admin@test.com",
    password: "secret",
  });;

  const navigate = useNavigate();

  const onLoginClick = async () => {
    const response = await login(credentials);
    setAuthToken(response.token);
    authorizeUser(response.username);
    navigate(MAIN_ROUTE);
  };

  const onDontHaveAccount = () => {
    navigate(REGISTRATION_ROUTE);
  };

  const setAuthToken = (token) => {
    localStorage.setItem("token", token);
  };

  const authorizeUser = (username) => {
    user.setUsername(username);
    user.setIsAuth(true);
  };

  return (
    <>
      <div>
        Email:
        <input
          type="email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </div>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onDontHaveAccount}>Doesn't have an account?</button>
    </>
  );
};

export default Login;
