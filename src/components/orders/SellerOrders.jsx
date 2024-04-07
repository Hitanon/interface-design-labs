import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Pagination } from "@mui/material";

import { Context } from "../..";
import { ORDERS_PER_PAGE } from "../../utils/Consts";

import SellerOrder from "./SellerOrder";


const SellerOrders = observer(() => {
  const [page, setPage] = useState(1);
  const { sellerProfile } = useContext(Context);

  const getPagedOrders = () => {
    const startIndex = (page - 1) * ORDERS_PER_PAGE;
    const endIndex = startIndex + ORDERS_PER_PAGE;
    return sellerProfile.orders.slice(startIndex, endIndex);
  };

  return (
    <>
      {getPagedOrders().map(order => <div key={order.id}><SellerOrder order={order} /></div>)}
      {
        sellerProfile.orders.length / ORDERS_PER_PAGE > 1
          ?
          <Pagination
            count={Math.ceil(sellerProfile.orders.length / ORDERS_PER_PAGE)}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
          :
          <></>
      }
    </>
  );
});

export default SellerOrders;
