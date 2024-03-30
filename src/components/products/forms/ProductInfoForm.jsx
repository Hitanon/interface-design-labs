import { useContext, useState } from "react";

import { descriptionValidator, nameValidator, priceValidator, quantityValidator } from "../../../utils/Validators";
import InputField from "../../ui/InputField";
import { Context } from "../../..";


const ProductInfoForm = () => {
  const { editProduct } = useContext(Context);
  const [price, setPrice] = useState(0);
  const [unitsInStock, setUnitsInStock] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const setProductPrice = (price) => {
    editProduct.setPrice(price);
    setPrice(price);
  };

  const setProductUnitsInStock = (unitsInStock) => {
    editProduct.setUnitsInStock(unitsInStock);
    setUnitsInStock(unitsInStock);
  };

  const setProductName = (name) => {
    editProduct.setName(name);
    setName(name);
  };

  const setProductDescription = (description) => {
    editProduct.setDescription(description);
    setDescription(description);
  };

  return (
    <>
      <div>
        Price:
        <InputField
          type="number"
          value={price}
          callback={setProductPrice}
        />
      </div>
      <div>
        Units in Stock:
        <InputField
          type="number"
          value={unitsInStock}
          callback={setProductUnitsInStock}
        />
      </div>
      <div>
        Name:
        <InputField
          type="text"
          value={name}
          callback={setProductName}
        />
      </div>
      <div>
        Description:
        <InputField
          type="text"
          value={description}
          callback={setProductDescription}
        />
      </div>
    </>
  );
};

export default ProductInfoForm;
