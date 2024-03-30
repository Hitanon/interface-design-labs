import { useContext } from "react";
import { observer } from "mobx-react-lite";

import InputField from "../../ui/InputField";
import { Context } from "../../..";


const ProductInfoForm = observer(() => {
  const { editProduct } = useContext(Context);

  const setPrice = (price) => {
    editProduct.setPrice(price);
  };

  const setUnitsInStock = (unitsInStock) => {
    editProduct.setUnitsInStock(unitsInStock);
    setUnitsInStock(unitsInStock);
  };

  const setName = (name) => {
    editProduct.setName(name);
    setName(name);
  };

  const setDescription = (description) => {
    editProduct.setDescription(description);
    setDescription(description);
  };

  return (
    <>
      <div>
        Price:
        <InputField
          type="number"
          value={editProduct.price}
          callback={setPrice}
        />
      </div>
      <div>
        Units in Stock:
        <InputField
          type="number"
          value={editProduct.unitsInStock}
          callback={setUnitsInStock}
        />
      </div>
      <div>
        Name:
        <InputField
          type="text"
          value={editProduct.name}
          callback={setName}
        />
      </div>
      <div>
        Description:
        <InputField
          type="text"
          value={editProduct.description}
          callback={setDescription}
        />
      </div>
    </>
  );
});

export default ProductInfoForm;
