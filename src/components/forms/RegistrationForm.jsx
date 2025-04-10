import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Modal,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import TextButton from "../ui/TextButton";
import useAuthenticate from "../../hooks/useAuthenticate";

import {
  REGISTRATION_FORM_TITLE,
  HAVE_AN_ACCOUNT_BUTTON_TEXT,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_BUTTON_TEXT,
  ROLE,
  REGISTRATION_ERROR_MODAL_MESSAGE,
} from "../../utils/Consts";

import "./forms.css";

const RegistrationForm = () => {
  const [hasError, setHasError] = useState(false);
  const onOpen = () => setHasError(true);
  const onClose = () => setHasError(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuthenticate();

  const onRegisterClick = async () => {
    const role = isSeller ? ROLE.SELLER : ROLE.CUSTOMER;
    try {
      await register({ email, username, password, role });
      navigate(MAIN_ROUTE);
    } catch {
      onOpen();
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <div className="auth-form">
        <h2 className="auth-title">{REGISTRATION_FORM_TITLE}</h2>
        <div>
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            fullWidth
            variant="standard"
            InputProps={{
              style: {
                fontFamily: "'Comfortaa', cursive",
              },
            }}
            sx={textFieldStyle}
          />
          <TextField
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Имя пользователя"
            fullWidth
            variant="standard"
            InputProps={{
              style: {
                fontFamily: "'Comfortaa', cursive",
              },
            }}
            sx={textFieldStyle}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            fullWidth
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                        outline: "none",
                      },
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                fontFamily: "'Comfortaa', cursive",
              },
            }}
            sx={textFieldStyle}
          />
        </div>

        {/* <div className="checkbox-section">
          <input
            type="checkbox"
            id="seller-checkbox"
            checked={isSeller}
            onChange={() => setIsSeller(!isSeller)}
          />
          <label htmlFor="seller-checkbox">Я продавец</label>
        </div> */}
        <FormControlLabel
          className="checkbox-section"
          control={
            <Checkbox
              checked={isSeller}
              onChange={() => setIsSeller(!isSeller)}
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          }
          label="Я продавец"
          sx={{
            marginTop: "15px",
            fontFamily: "'Comfortaa', cursive",
            color: "black",
            "& .MuiFormControlLabel-label": {
              fontFamily: "'Comfortaa', cursive",
            },
          }}
        />

        <div className="registration-buttons">
          <TextButton
            className="text-button"
            text={REGISTRATION_BUTTON_TEXT}
            callback={onRegisterClick}
          />
          <Link className="auth-link" to={LOGIN_ROUTE}>
            {HAVE_AN_ACCOUNT_BUTTON_TEXT}
          </Link>
        </div>
      </div>
      <Modal
        open={hasError}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <ErrorIcon color="error" sx={{ fontSize: 40 }} />
          <p>{REGISTRATION_ERROR_MODAL_MESSAGE}</p>
        </Box>
      </Modal>
    </>
  );
};

const textFieldStyle = {
  fontFamily: "'Comfortaa', cursive",
  marginTop: "15px",
  "& .MuiInput-underline:before": {
    borderBottom: "1px solid black",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottom: "2px solid black",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "2px solid black",
  },
  "& .Mui-focused": {
    color: "black",
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
  },
};

export default RegistrationForm;
