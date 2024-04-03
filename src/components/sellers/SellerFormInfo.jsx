import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import TextButton from "../ui/TextButton";
import InputField from "../ui/InputField";
import { Context } from "../..";
import useSeller from "../../hooks/useSeller";


const SellerFormInfo = observer(() => {
  const { sellerProfile } = useContext(Context);
  const { updateDescription } = useSeller();
  const [description, setDescription] = useState(sellerProfile.description || "");

  const onSaveClick = async () => {
    updateDescription(description);
  };

  const onCancelClick = () => {
    setDescription(sellerProfile.description);
  };

  return (
    <>
      <div>
        Name: {sellerProfile.name}
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
});

export default SellerFormInfo;
