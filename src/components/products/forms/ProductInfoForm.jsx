import { useState } from "react";
import TextField from "@mui/material/TextField";

const ProductInfoForm = () => {
  const [price, setPrice] = useState(1000);
  const [unitsInStock, setUnitsInStock] = useState(10);
  const [name, setName] = useState("Пример товара");
  const [description, setDescription] = useState("Описание примера товара");

  const commonStyles = {
    marginBottom: "20px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& .MuiInputLabel-root": {
      fontFamily: "'Comfortaa', cursive",
      color: "black",
      "&.Mui-focused": {
        color: "black",
      },
    },
    "& .MuiInputBase-input": {
      fontFamily: "'Comfortaa', cursive",
    },
  };

  return (
    <div className="product-info">
      <div className="price-count-container">
        <TextField
          label="Цена (₽)"
          type="number"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          sx={{
            width: "30%",
            marginRight: "20px",
            ...commonStyles,
          }}
        />
        <TextField
          label="Количество"
          type="number"
          variant="outlined"
          value={unitsInStock}
          onChange={(e) => setUnitsInStock(e.target.value)}
          fullWidth
          sx={{
            width: "40%",
            ...commonStyles,
          }}
        />
      </div>

      <TextField
        label="Название"
        type="text"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        multiline
        minRows={3}
        sx={commonStyles}
      />
      <TextField
        label="Описание"
        type="text"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        minRows={3}
        sx={commonStyles}
      />
    </div>
  );
};

export default ProductInfoForm;
