import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import { ROLE } from "../../utils/Consts";
import SellerProfile from "../sellers/SellerProfile";
import CustomerProfile from "../customers/CustomerProfile";
import AdminProfile from "../admin/AdminProfile";

const UserProfile = observer(() => {
  const { user } = useContext(Context);

  if (user.role === ROLE.SELLER) {
    return <SellerProfile />;
  }

  if (user.role === ROLE.ADMIN) {
    return <AdminProfile />;
  }

  return <CustomerProfile />;
});

export default UserProfile;
