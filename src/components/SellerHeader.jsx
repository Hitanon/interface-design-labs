import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";


const SellerHeader = observer(() => {
  const { seller } = useContext(Context);

  return (
    <>
      <div>
        Name: {seller.name}
      </div>
      <div>
        Description: {seller.description}
      </div>
      <div>
        Rating: {seller.rating}
      </div>
      <div>
        Sales: {seller.sales}
      </div>
      <div>
        Sells from: {seller.sellsFrom}
      </div>
    </>
  );
});

export default SellerHeader;
