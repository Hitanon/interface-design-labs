import { useState } from "react";
import { TextField } from "@mui/material";

import TextButton from "../ui/TextButton";

import "./sellers.css";

const SellerFormInfo = () => {
  const staticSeller = {
    name: "Магазин РетроМебели",
    description: "Мы специализируемся на винтажной мебели ручной работы.",
  };

  const [description, setDescription] = useState(staticSeller.description);
  const [savedDescription, setSavedDescription] = useState(staticSeller.description);

  const onSaveClick = () => {
    setSavedDescription(description);
    alert("Описание обновлено!");
  };

  const onCancelClick = () => {
    setDescription(savedDescription);
  };

  return (
    <div className="seller-header">
      <div className="seller-icon big"></div>
      <div className="seller-info">
        <h1 className="seller-name">{staticSeller.name}</h1>
        <div>
          <TextField
            label="Описание"
            placeholder="Введите описание вашего магазина"
            multiline
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            sx={{
              marginTop: "40px",
              width: "700px",
              "& .MuiInputBase-root": {
                fontSize: "16px",
                fontFamily: "'Comfortaa', cursive",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                color: "black",
                fontFamily: "'Comfortaa', cursive",
                "&.Mui-focused": {
                  color: "black",
                },
              },
            }}
          />
        </div>
        <div className="seller-info-buttons">
          <TextButton className="seller-info-button accept" callback={onSaveClick} text={"Сохранить"} />
          <TextButton className="seller-info-button cancel" callback={onCancelClick} text={"Отменить"} />
        </div>
      </div>
    </div>
  );
};

export default SellerFormInfo;
