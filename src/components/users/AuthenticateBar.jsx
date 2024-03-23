import { LOGIN_BUTTON_TEXT, LOGIN_ROUTE, REGISTRATION_BUTTON_TEXT, REGISTRATION_ROUTE } from "../../utils/Consts";

import TextRedirectButton from "../ui/TextRedirectButton";


const AuthenticateBar = () => {
  return (
    <>
      <div>
        <TextRedirectButton text={LOGIN_BUTTON_TEXT} route={LOGIN_ROUTE} />
        <TextRedirectButton text={REGISTRATION_BUTTON_TEXT} route={REGISTRATION_ROUTE} />
      </div>
    </>
  );
};

export default AuthenticateBar;
