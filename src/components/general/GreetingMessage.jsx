import { useContext } from "react";

import { Context } from "../..";
import { HELLO_MESSAGE_TEXT, ROLE } from "../../utils/Consts";

import "./general.css";


const GreetingMessage = () => {
  const { user } = useContext(Context);

  const getGreetingMessage = () => {
    if (user.role === ROLE.CUSTOMER) {
      return `${HELLO_MESSAGE_TEXT}, ${user.username}`;
    }
    return `${HELLO_MESSAGE_TEXT}, ${user.username} (${user.role})`;
  };

  return (
    <div className="greeting-message">
      {getGreetingMessage()}
    </div>
  );
};

export default GreetingMessage;
