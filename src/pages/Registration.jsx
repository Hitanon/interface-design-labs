import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  HAVE_AN_ACCOUNT_BUTTON_TEXT,
  LOGIN_ROUTE, MAIN_ROUTE,
  REGISTRATION_BUTTON_TEXT,
  REGISTRATION_FORM_TITLE,
} from "../utils/Consts";
import useAuthenticate from "../hooks/useAuthenticate";
import TextRedirectButton from "../components/ui/TextRedirectButton";
import TextButton from "../components/ui/TextButton";
import InputField from "../components/ui/InputField";


const Registration = () => {
  const [email, setEmail] = useState("admin@test.com");
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("secret");
  const navigate = useNavigate();
  const { register } = useAuthenticate();


  const onRegisterClick = async () => {
    await register({email, username, password});
    navigate(MAIN_ROUTE);
  };

  return (
    <>
      <div>
        {REGISTRATION_FORM_TITLE}
      </div>
      <div>
        <InputField type="email" value={email} callback={setEmail}/>
        <InputField type="text" value={username} callback={setUsername}/>
        <InputField type="password" value={password} callback={setPassword}/>
      </div>
      <div>
        <TextButton text={REGISTRATION_BUTTON_TEXT} callback={onRegisterClick}/>
        <TextRedirectButton text={HAVE_AN_ACCOUNT_BUTTON_TEXT} route={LOGIN_ROUTE} />
      </div>
    </>
  );
};

export default Registration;
