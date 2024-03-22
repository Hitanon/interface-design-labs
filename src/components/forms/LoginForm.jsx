import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuthenticate from "../../hooks/useAuthenticate";
import { MAIN_ROUTE } from "../../utils/Consts";
import InputField from "../ui/InputField";
import TextButton from "../ui/TextButton";
import TextRedirectButton from "../ui/TextRedirectButton";

import {
  DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT,
  LOGIN_BUTTON_TEXT,
  REGISTRATION_ROUTE,
} from "../utils/Consts";


const LoginForm = () => {
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

export default LoginForm;
