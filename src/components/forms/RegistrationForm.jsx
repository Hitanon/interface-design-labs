import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Box, Modal } from "@mui/material";

import InputField from "../ui/InputField";
import TextButton from "../ui/TextButton";
import useAuthenticate from "../../hooks/useAuthenticate";

import {
  REGISTRATION_FORM_TITLE,
  HAVE_AN_ACCOUNT_BUTTON_TEXT,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_BUTTON_TEXT,
  ROLE,
} from "../../utils/Consts";


const RegistrationForm = () => {
  const [hasError, setHasError] = useState(false);
  const onOpen = () => setHasError(true);
  const onClose = () => setHasError(false);
  const [email, setEmail] = useState("admin@test.com");
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("secret");
  const [isSeller, setIsSeller] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuthenticate();

  const onRegisterClick = async () => {
    const role = isSeller ? ROLE.SELLER : ROLE.CUSTOMER;
    try {
      await register({ email, username, password, role });
      navigate(MAIN_ROUTE);
    }
    catch {
      onOpen();
    }
  };

  return (
    <>
      <div className="auth-form">
        <h2 className="auth-title">
          {REGISTRATION_FORM_TITLE}
        </h2>
        <div>
          <InputField className="input-auth" type="email" value={email} callback={setEmail} placeholder="E-mail" />
          <InputField className="input-auth" type="text" value={username} callback={setUsername} placeholder="Имя" />
          <InputField className="input-auth" type="password" value={password} callback={setPassword}
            placeholder="Пароль" />
        </div>
        <div className="checkbox-section">
          <input type="checkbox" id="seller-checkbox" checked={isSeller} onChange={() => setIsSeller(!isSeller)} />
          <label className="checkbox-label" htmlFor="seller-checkbox">Я продавец</label>
        </div>
        <div className="auth-buttons">
          <TextButton text={REGISTRATION_BUTTON_TEXT} callback={onRegisterClick} />
          <Link className="auth-link" to={LOGIN_ROUTE}>
            {HAVE_AN_ACCOUNT_BUTTON_TEXT}
          </Link>
        </div>
      </div>
      <Modal
        open={hasError}
        onClose={onClose}
      >
        <Box>
          <p>Wrong email or password</p>
        </Box>
      </Modal>
    </>
  );
};

export default RegistrationForm;
