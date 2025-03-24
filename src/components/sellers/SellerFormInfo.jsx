import { useState } from "react";
import TextButton from "../ui/TextButton";
import "./sellers.css";

const SellerFormInfo = () => {
  const staticSeller = {
    name: "Магазин РетроМебели",
    description: "Мы специализируемся на винтажной мебели ручной работы.",
  };

  const [description, setDescription] = useState(staticSeller.description);
  const [savedDescription, setSavedDescription] = useState(
    staticSeller.description
  );

  const onSaveClick = () => {
    setSavedDescription(description);
    alert("Описание обновлено!");
  };

  const onCancelClick = () => {
    setDescription(savedDescription);
  };

  return (
    <div className="col-12 col-lg-6">
      <div className="row gy-3">
        <div className="col-12 d-flex align-items-center seller-info">
          <div className="seller-icon big"></div>
          <h1 className="seller-name">{staticSeller.name}</h1>
        </div>

        <div className="col-12">
          <label
            htmlFor="description"
            className="form-label"
            style={{ fontFamily: "'Comfortaa', cursive", color: "black" }}
          >
            Описание
          </label>
          <textarea
            id="description"
            placeholder="Введите описание вашего магазина"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={{
              minHeight: "150px",
              maxHeight: "300px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              fontFamily: "'Comfortaa', cursive",
              border: "1px solid black",
              borderRadius: "4px",
              resize: "vertical",
              marginTop: "5px",
            }}
          />
          <div className="seller-info-buttons">
            <TextButton
              className="seller-info-button accept"
              callback={onSaveClick}
              text={"Сохранить"}
            />
            <TextButton
              className="seller-info-button cancel"
              callback={onCancelClick}
              text={"Отменить"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerFormInfo;
