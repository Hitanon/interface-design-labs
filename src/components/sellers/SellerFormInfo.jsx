import { useState } from "react";

import TextButton from "../ui/TextButton";
import InputField from "../ui/InputField";
import { updateSellerProfile } from "../../clients/SellerClient";


const SellerFormInfo = ({ seller }) => {
  const [description, setDescription] = useState(seller.description || "");

  const onSaveClick = async () => {
    await updateSellerProfile({ description });
  };

  const onCancelClick = () => {
    setDescription(seller.description);
  };

  return (
    <>
      <div>
        Name: {seller.name}
      </div>
      <div>
        <InputField type="text" value={description} callback={setDescription} />
      </div>
      <div>
        <TextButton callback={onSaveClick} text={"Сохранить"} />
        <TextButton callback={onCancelClick} text={"Отменить"} />
      </div>
    </>
  );
};

export default SellerFormInfo;
