import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import { ROLE } from "../../utils/Consts";
import SellerProfile from "../sellers/SellerProfile";
import CustomerProfile from "../customers/CustomerProfile";


const UserProfile = observer(() => {
  const { user } = useContext(Context);

  if (user.role === ROLE.SELLER) {
    return <SellerProfile />;
  }
  return <CustomerProfile />;
});

export default UserProfile;
