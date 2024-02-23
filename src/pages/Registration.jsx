import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "..";
import { login, register } from "../clients/UserClient";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/Consts";


const Registration = () => {
  const { user } = useContext(Context);

  const [ credentials, setCredentials ] = useState({
    email: "admin@test.com",
    username: "admin",
    password: "secret",
  });

  const navigate = useNavigate();

  const onRegisterClick = async () => {
    await register(credentials);
    const response = await login({email: credentials.email, password: credentials.password});
    setAuthToken(response.token);
    authorizeUser(response.username);
    navigate(MAIN_ROUTE);
  };

  const onHaveAccount = () => {
    navigate(LOGIN_ROUTE);
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
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        />
      </div>
      <div>
        Username:
        <input
          type="text"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
      </div>
      <button onClick={onRegisterClick}>Register</button>
      <button onClick={onHaveAccount}>Have an account?</button>
    </>
  );
};

export default Registration;
