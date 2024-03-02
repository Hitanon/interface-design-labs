import { useContext, useEffect } from "react";

import { Context } from "..";
import { getUserOrders } from "../clients/UserClient";
import CustomerOrders from "../components/CustomerOrders";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SellerOrders from "../components/SellerOrders";
import { getSellerOrders } from "../clients/SellerClient";
import { ROLE } from "../utils/Consts";


const Profile = () => {
  const { sellerOrders, user } = useContext(Context);

  const loadOrders = async () => {
    const orders = await getUserOrders();
    user.setOrders(orders);
  };

  const loadSellerOrders = async () => {
    const orders = await getSellerOrders();
    sellerOrders.setOrders(orders);
  };

  useEffect(() => {
    loadSellerOrders();
    loadOrders();
  }, []);

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
};

export default Profile;
