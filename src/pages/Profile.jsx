import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";
import CustomerOrders from "../components/customers/CustomerOrders";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import SellerOrders from "../components/orders/SellerOrders";
import { ROLE } from "../utils/Consts";


const Profile = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <Header />
      <hr />
      {
        user.role === ROLE.CUSTOMER
          ? <CustomerOrders />
          : <SellerOrders />
      }
      <hr />
      <Footer />
    </>
  );
});

export default Profile;
