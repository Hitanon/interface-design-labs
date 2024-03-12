import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";

import { getUserInfo } from "./clients/UserClient";

import AppRouter from "./components/AppRouter";
import TechnicalWorks from "./components/TechnicalWorks";
import { checkProjectHealth } from "./clients/GeneralClient";

import { Context } from ".";


const App = observer(() => {
  const [isAlive, setIsAlive] = useState(false);
  const { user } = useContext(Context);

  const checkIsAlive = async () => {
    setIsAlive(await checkProjectHealth());
  };

  const loadUserInfo = async () => {
    const userInfo = await getUserInfo();
    if (userInfo === null) {
      return;
    }
    user.setUsername(userInfo.username);
    user.setIsAuth(true);
    user.setRole(userInfo.role);
  };

  useEffect(() => {
    checkIsAlive();
    loadUserInfo();
  }, []);

  return (
    <>
      {
        isAlive
          ?
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
          :
          <TechnicalWorks />
      }
    </>
  );
});

export default App;
