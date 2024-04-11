import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { TextField } from "@mui/material";

import TextButton from "../ui/TextButton";
import { Context } from "../..";
import useSeller from "../../hooks/useSeller";

import "./sellers.css";


const SellerFormInfo = observer(() => {
  const { sellerProfile } = useContext(Context);
  const { updateDescription } = useSeller();
  const [description, setDescription] = useState(sellerProfile.description || "");

  const onSaveClick = async () => {
    updateDescription(description);
  };

  const onCancelClick = () => {
    setDescription(sellerProfile.description);
  };

  return (
    <div className="seller-header">
      <div className="seller-icon big"></div>
      <div className="seller-info">
        <h1 className="seller-name">
          {sellerProfile.name}
        </h1>
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
});

export default SellerFormInfo;
