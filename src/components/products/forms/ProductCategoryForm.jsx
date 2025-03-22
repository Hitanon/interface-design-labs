import { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const ProductCategoryForm = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Статические категории (заглушка)
  const mockCategories = [
    { id: 1, name: "Мебель" },
    { id: 2, name: "Освещение" },
    { id: 3, name: "Аксессуары" },
    { id: 4, name: "Текстиль" },
  ];

  const loadCategories = () => {
    setCategories(mockCategories);
  };

  const onSelect = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Box>
      <FormControl fullWidth sx={{ fontFamily: "'Comfortaa', cursive" }}>
        <InputLabel
          id="category-label"
          sx={{
            fontFamily: "'Comfortaa', cursive",
            "&.Mui-focused": {
              color: "black",
            },
          }}
        >
          Категория
        </InputLabel>
        <Select
          labelId="category-label"
          value={category}
          label="Категория"
          onChange={onSelect}
          sx={{
            borderRadius: "0",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "& .MuiSelect-select": {
              borderRadius: "0",
              "&:not([value=''])": {
                color: "black",
              },
            },
            "& .MuiSvgIcon-root": {
              color: "black",
            },
            "& .MuiMenuItem-root.Mui-selected": {
              backgroundColor: "grey !important",
            },
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "lightgrey",
            },
          }}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.id}
              value={category.id}
              sx={{
                fontFamily: "'Comfortaa', cursive",
              }}
            >
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductCategoryForm;
