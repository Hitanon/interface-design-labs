import { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

import useCategories from "../../../hooks/useCategories";
import useSearch from "../../../hooks/useSearch";
import { CATEGORY_FILTER_LABEL } from "../../../utils/Consts";

import "./filters.css";


const ProductCategoryFilter = () => {
  const PARAM_NAME = "category";
  const { getAll } = useCategories();
  const { search } = useSearch();
  const [category, setCategory_] = useState({});
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    setCategories(await getAll());
  };

  const setCategory = (event) => {
    search.addParam({ name: "category", value: event.target.value });
    setCategory_(event.target.value);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>

      <Box>
        <h2>
          {CATEGORY_FILTER_LABEL}
        </h2>
        <FormControl fullWidth>
          <Select
            value={category}
            label="Категория"
            onChange={setCategory}
          >
            {
              categories.map(category => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)
            }
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default ProductCategoryFilter;
