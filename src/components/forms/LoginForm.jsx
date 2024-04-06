import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";

import useAuthenticate from "../../hooks/useAuthenticate";
import { LOGIN_ERROR_MODAL_MESSAGE, MAIN_ROUTE } from "../../utils/Consts";
import InputField from "../ui/InputField";
import TextButton from "../ui/TextButton";

import {
  LOGIN_FORM_TITLE,
  DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT,
  LOGIN_BUTTON_TEXT,
  REGISTRATION_ROUTE,
} from "../../utils/Consts";

import "./forms.css";


const LoginForm = () => {
  const [hasError, setHasError] = useState(false);
  const onOpen = () => setHasError(true);
  const onClose = () => setHasError(false);
  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("secret");
  const navigate = useNavigate();
  const { login } = useAuthenticate();

  const onLoginClick = async () => {
    try {
      await login({ email, password });
      navigate(MAIN_ROUTE);
    }
    catch (e) {
      onOpen();
    }
  };

  return (
    <>
      <div className="auth-form">
        <h2 className="auth-title">
          {LOGIN_FORM_TITLE}
        </h2>
        <div>
          <InputField className="input-auth" type="email" value={email} callback={setEmail} placeholder="E-mail" />
          <InputField className="input-auth" type="password" value={password} callback={setPassword}
            placeholder="Пароль" />
        </div>
        <div className="auth-buttons">
          <TextButton text={LOGIN_BUTTON_TEXT} callback={onLoginClick} />
          <Link className="auth-link" to={REGISTRATION_ROUTE}>
            {DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT}
          </Link>
        </div>
      </div>
      <Modal
        open={hasError}
        onClose={onClose}
      >
        <Box>
          <p>{LOGIN_ERROR_MODAL_MESSAGE}</p>
        </Box>
      </Modal>
    </>
  );
};

export default LoginForm;
