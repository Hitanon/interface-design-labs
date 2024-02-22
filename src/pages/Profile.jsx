import { useContext, useEffect } from "react";

import { Context } from "..";
import { getUserOrders } from "../clients/UserClient";
import CustomerOrders from "../components/CustomerOrders";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProjectInfo } from "../clients/ProjectInfoClient";


const Profile = () => {
  const { user, projectInfo } = useContext(Context);

  const loadOrders = async () => {
    const orders = await getUserOrders();
    user.setOrders(orders);
  };

  const loadProjectInfo = async () => {
    const info = await getProjectInfo();
    projectInfo.setInfo(info);
  };

  useEffect(() => {
    loadOrders();
    loadProjectInfo();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <CustomerOrders />
      <hr />
      <Footer />
    </>
  );
};

export default Profile;
