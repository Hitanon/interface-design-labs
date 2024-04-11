import { useContext } from "react";
import { observer } from "mobx-react-lite";
import TextField from "@mui/material/TextField";

import { Context } from "../../..";

const ProductInfoForm = observer(() => {
  const { editProduct } = useContext(Context);

  // Общие стили для TextField компонентов
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
          value={editProduct.price}
          onChange={(e) => editProduct.setPrice(e.target.value)}
          fullWidth
          sx={{
            width: "20%",
            marginRight: "20px",
            ...commonStyles,
          }}
        />
        <TextField
          label="Количество (шт)"
          type="number"
          variant="outlined"
          value={editProduct.unitsInStock}
          onChange={(e) => editProduct.setUnitsInStock(e.target.value)}
          fullWidth
          sx={{
            width: "20%",
            ...commonStyles,
          }}
        />
      </div>

      <TextField
        label="Название"
        type="text"
        variant="outlined"
        value={editProduct.name}
        onChange={(e) => editProduct.setName(e.target.value)}
        fullWidth
        multiline
        minRows={3}
        sx={commonStyles}
      />
      <TextField
        label="Описание"
        type="text"
        variant="outlined"
        value={editProduct.description}
        onChange={(e) => editProduct.setDescription(e.target.value)}
        fullWidth
        multiline
        minRows={3}
        sx={commonStyles}
      />
    </div>
  );
});

export default ProductInfoForm;
