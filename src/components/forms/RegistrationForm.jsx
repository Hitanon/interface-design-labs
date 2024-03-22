import { useNavigate } from "react-router-dom";
import { useState } from "react";

import InputField from "../ui/InputField";
import TextButton from "../ui/TextButton";
import TextRedirectButton from "../ui/TextRedirectButton";
import useAuthenticate from "../../hooks/useAuthenticate";

import {
  HAVE_AN_ACCOUNT_BUTTON_TEXT,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_BUTTON_TEXT,
} from "../../utils/Consts";


const RegistrationForm = () => {
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

export default RegistrationForm;
