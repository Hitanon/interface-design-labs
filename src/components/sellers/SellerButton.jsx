import { useNavigate } from "react-router-dom";

import { SELLERS_ROUTE } from "../../utils/Consts";

const SellerButton = ({ seller }) => {
  const navigate = useNavigate();

  const onSellerClick = () => {
    navigate(`${SELLERS_ROUTE}/${seller.id}`);
  };

  const getDescriptionLabel = () => {
    return seller.description || null;
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={onSellerClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSellerClick();
        }
      }}
    >
      <div>
        <div className="product-seller">
          <div className="seller-icon"></div>
          {seller.name}
        </div>
        <div>{getDescriptionLabel()}</div>
      </div>
    </div>
  );
};

export default SellerButton;
