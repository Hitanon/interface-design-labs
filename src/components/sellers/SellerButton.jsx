import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getSellerInfo } from "../../clients/SellerClient";
import { SELLERS_ROUTE } from "../../utils/Consts";
import ImageField from "../ui/ImageField";


const SellerButton = ({ id }) => {
  const [seller, setSeller] = useState({});
  const navigate = useNavigate();

  const loadSeller = async () => {
    setSeller(await getSellerInfo(id));
  };

  const onSellerClick = () => {
    navigate(`${SELLERS_ROUTE}/${id}`);
  };

  useEffect(() => {
    loadSeller();
  }, []);

  return (
    <>
      <div onClick={onSellerClick}>
        <ImageField />
        <div>
          <div>
            Name: {seller.name}
          </div>
          <div>
            Description: {seller.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerButton;
