import { useEffect, useState } from "react";
import { Select, MenuItem, Box, FormControl } from "@mui/material";

import useCategories from "../../../hooks/useCategories";
import useSearch from "../../../hooks/useSearch";
import { CATEGORY_FILTER_LABEL } from "../../../utils/Consts";

const ProductCategoryFilter = () => {
  const PARAM_NAME = "category";
  const { getAll } = useCategories();
  const { search } = useSearch();
  const [category, setCategory_] = useState("");
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    setCategories(await getAll());
  };

  const setCategory = (event) => {
    search.addParam({ name: PARAM_NAME, value: event.target.value });
    setCategory_(event.target.value);
  };

  useEffect(() => {
    loadCategories();
  }, []);

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
