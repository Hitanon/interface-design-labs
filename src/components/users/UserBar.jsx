import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { Context } from "../..";
import { LOGOUT_BUTTON_TEXT, MAIN_ROUTE, PROFILE_BUTTON_TEXT, PROFILE_ROUTE, ROLE } from "../../utils/Consts";
import useAuthenticate from "../../hooks/useAuthenticate";

import CustomerBar from "../customers/CustomerBar";
import SellerBar from "../sellers/SellerBar";
import TextButton from "../ui/TextButton";
import TextRedirectButton from "../ui/TextRedirectButton";


const UserBar = observer(() => {
  const { user } = useContext(Context);
  const { logout } = useAuthenticate();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    logout();
    navigate(MAIN_ROUTE);
  };

  return (
    <>
      <div>
        <TextRedirectButton text={PROFILE_BUTTON_TEXT} route={PROFILE_ROUTE} />
        <TextButton text={LOGOUT_BUTTON_TEXT} callback={onLogoutClick} />
      </div>

      <div>
        {
          user.role === ROLE.CUSTOMER
            ? <CustomerBar />
            : <SellerBar />
        }
      </div>
    </>
  );
});

export default UserBar;
