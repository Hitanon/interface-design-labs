import { useContext } from "react";

import { Context } from "../";
import { logoutUser, getUserInfo, authenticateUser } from "../clients/UserClient";
import { ROLE } from "../utils/Consts";
import { registerCustomer } from "../clients/CustomerClient";
import { registerSeller } from "../clients/SellerClient";


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

  const register = async ({email, username, password, role}) => {
    if (role === ROLE.CUSTOMER) {
      await registerCustomer({email, username, password});
    } else {
      await registerSeller({email, username, password});
    }
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
