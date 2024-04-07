import { useNavigate } from "react-router-dom";

import { SELLERS_ROUTE } from "../../utils/Consts";


const SellerButton = ({ seller }) => {
  const navigate = useNavigate();

  const onSellerClick = () => {
    navigate(`${SELLERS_ROUTE}/${seller.id}`);
  };

  const getDescriptionLabel = () => {
    if (seller.description) {
      return seller.description;
    }
    return null;
  };

  return (
    <>
      <div onClick={onSellerClick}>
        <div>
          <div>
            Name: {seller.name}
          </div>
          <div>
            {getDescriptionLabel()}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerButton;
