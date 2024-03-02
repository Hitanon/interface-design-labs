import { useContext, useEffect } from "react";

import { Context } from "..";
import { getUserOrders } from "../clients/UserClient";
import CustomerOrders from "../components/CustomerOrders";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProjectInfo } from "../clients/ProjectInfoClient";
import SellerOrders from "../components/SellerOrders";
import { getSellerOrders } from "../clients/SellerClient";
import { ROLE } from "../utils/Consts";


const Profile = () => {
  const { sellerOrders, user, projectInfo } = useContext(Context);

  const loadOrders = async () => {
    const orders = await getUserOrders();
    user.setOrders(orders);
  };

  const loadProjectInfo = async () => {
    const info = await getProjectInfo();
    projectInfo.setInfo(info);
  };

  const loadSellerOrders = async () => {
    const orders = await getSellerOrders();
    sellerOrders.setOrders(orders);
  };

  useEffect(() => {
    loadSellerOrders();
    loadProjectInfo();
    loadOrders();
    loadProjectInfo();
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
