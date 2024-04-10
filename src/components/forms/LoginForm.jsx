import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, Modal, IconButton, InputAdornment, TextField } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import useAuthenticate from "../../hooks/useAuthenticate";
import {
  LOGIN_ERROR_MODAL_MESSAGE, MAIN_ROUTE, REGISTRATION_ROUTE,
  LOGIN_FORM_TITLE, DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT, LOGIN_BUTTON_TEXT,
} from "../../utils/Consts";
import TextButton from "../ui/TextButton";

import "./forms.css";

const LoginForm = () => {
  const [hasError, setHasError] = useState(false);
  const onOpen = () => setHasError(true);
  const onClose = () => setHasError(false);
  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("secret");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthenticate();

  const onLoginClick = async () => {
    try {
      await login({ email, password });
      navigate(MAIN_ROUTE);
    } catch (e) {
      onOpen();
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="auth-form">
        <h2 className="auth-title">
          {LOGIN_FORM_TITLE}
        </h2>
        <div>
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            fullWidth
            variant="standard"
            sx={{
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
            }}
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
            }}
            sx={{
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
            }}
          />
        </div>
        <div className="auth-buttons">
          <TextButton className="text-button" text={LOGIN_BUTTON_TEXT} callback={onLoginClick} />
          <Link className="auth-link" to={REGISTRATION_ROUTE}>
            {DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT}
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
          <p>{LOGIN_ERROR_MODAL_MESSAGE}</p>
        </Box>
      </Modal>
    </>
  );
};

export default LoginForm;
