import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT,
  LOGIN_BUTTON_TEXT,
  LOGIN_FORM_TITLE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/Consts";
import useAuthenticate from "../hooks/useAuthenticate";
import TextButton from "../components/ui/TextButton";
import TextRedirectButton from "../components/ui/TextRedirectButton";
import InputField from "../components/ui/InputField";


const Login = () => {
  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("secret");
  const navigate = useNavigate();
  const { login } = useAuthenticate();

  const onLoginClick = async () => {
    await login({ email, password });
    navigate(MAIN_ROUTE);
  };

  return (
    <>
      <div>
        {LOGIN_FORM_TITLE}
      </div>
      <div>
        <InputField type="email" value={email} callback={setEmail} />
        <InputField type="password" value={password} callback={setPassword} />
      </div>
      <div>
        <TextButton text={LOGIN_BUTTON_TEXT} callback={onLoginClick} />
        <TextRedirectButton text={DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT} route={REGISTRATION_ROUTE} />
      </div>
    </>
  );
};

export default Login;
