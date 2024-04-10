import { useContext, useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

import useCategories from "../../../hooks/useCategories";
import { Context } from "../../..";


const ProductCategoryForm = () => {
  const { editProduct } = useContext(Context);
  const [category, setCategory_] = useState("");
  const [categories, setCategories] = useState([]);
  const { getAll } = useCategories();


  const loadCategories = async () => {
    setCategories(await getAll());
  };

  const onSelect = (event) => {
    editProduct.setCategory(event.target.value);
    setCategory_(event.target.value);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Box>
        <p>
          Категория
        </p>
        <FormControl fullWidth>
          <Select
            value={category}
            label="Категория"
            onChange={onSelect}
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

export default ProductCategoryForm;
