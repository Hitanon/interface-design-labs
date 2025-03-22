import { useContext } from "react";

import { Context } from "../";
import { ROLE } from "../utils/Consts";

const useAuthenticate = () => {
  const { user } = useContext(Context);

  // Статичные пользователи
  const staticUsers = [
    {
      email: "admin@email.com",
      password: "admin123",
      username: "Admin",
      role: ROLE.ADMIN,
    },
    {
      email: "seller@email.com",
      password: "seller123",
      username: "Seller",
      role: ROLE.SELLER,
    },
    {
      email: "customer@email.com",
      password: "customer123",
      username: "Customer",
      role: ROLE.CUSTOMER,
    },
  ];

  const login = async ({ email, password }) => {
    const foundUser = staticUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error("Пользователь с такими данными не найден");
    }

    localStorage.setItem("token", "mock-token");
    user.setUsername(foundUser.username);
    user.setRole(foundUser.role);
    user.setIsAuth(true);
  };

  const register = async ({ email, username, password, role }) => {

    await login({ email, password });
  };

  const logout = async () => {
    user.setIsAuth(false);
    user.setUsername("");
    user.setRole(null);
    localStorage.removeItem("token");
  };

  const getInfo = async () => {
  };

  return {
    login,
    register,
    logout,
    getInfo,
  };
};

export default useAuthenticate;
