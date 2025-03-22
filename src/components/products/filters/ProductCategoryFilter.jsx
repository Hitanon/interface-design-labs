import { useState } from "react";
import { Select, MenuItem, Box, FormControl } from "@mui/material";

import { CATEGORY_FILTER_LABEL } from "../../../utils/Consts";

const ProductCategoryFilter = () => {
  const [category, setCategory_] = useState("");
  const [categories, setCategories] = useState([
    { id: 1, image: "/img/accessories.png", name: "Аксессуары" },
    { id: 2, image: "/img/jewelry.png", name: "Украшения" },
    { id: 3, image: "/img/cloth.png", name: "Одежда" },
    { id: 4, image: "/img/toys.png", name: "Игрушки и игры" },
    { id: 5, image: "/img/bags.png", name: "Сумки и кошельки" },
  ]);

  const setCategory = (event) => {
    setCategory_(event.target.value);
  };

  return (
    <Box>
      <h2>{CATEGORY_FILTER_LABEL}</h2>
      <FormControl fullWidth>
        <Select
          value={category}
          onChange={setCategory}
          displayEmpty
          sx={{
            fontFamily: "'Comfortaa', cursive",
            borderRadius: "0",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
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
          <MenuItem
            value=""
            disabled
            sx={{
              fontStyle: "italic",
            }}
          >
            Выбор...
          </MenuItem>
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

export default ProductCategoryFilter;
