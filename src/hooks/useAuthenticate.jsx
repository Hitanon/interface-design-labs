import { useContext } from "react";

import { Context } from "../";
import { logoutUser, getUserInfo, registerUser, authenticateUser } from "../clients/UserClient";


const useAuthenticate = () => {
  const { user } = useContext(Context);

  const getInfo = async () => {
    const info = await getUserInfo();
    if (info === null) {
      return;
    }
    user.setUsername(info.username);
    user.setRole(info.role);
    user.setIsAuth(true);
  };

  const login = async ({email, password}) => {
    const token = await authenticateUser({email, password});
    localStorage.setItem("token", token);
    await getInfo();
  };

  const register = async ({email, username, password}) => {
    await registerUser({email, username, password});
    await login({email, password});
  };

  const logout = async () => {
    await logoutUser();
    user.setIsAuth(false);
    user.setUsername("");
    localStorage.removeItem("token");
  };

  return {
    login: login,
    register: register,
    logout: logout,
    getInfo: getInfo,
  };
};

export default useAuthenticate;
