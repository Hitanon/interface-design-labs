import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

import { getUserInfo } from "./clients/UserClient";

import AppRouter from "./components/general/AppRouter";

import { Context } from ".";


const App = observer(() => {
  // const { user } = useContext(Context);

  // const loadUserInfo = async () => {
  //   const userInfo = await getUserInfo();
  //   if (userInfo === null) {
  //     return;
  //   }
  //   user.setUsername(userInfo.username);
  //   user.setIsAuth(true);
  //   user.setRole(userInfo.role);
  // };

  // useEffect(() => {
  //   loadUserInfo();
  // }, []);


  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
});

export default App;
