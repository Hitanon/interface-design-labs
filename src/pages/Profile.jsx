import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";
import CustomerOrders from "../components/CustomerOrders";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SellerOrders from "../components/SellerOrders";
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
