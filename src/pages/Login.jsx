import { LOGIN_FORM_TITLE } from "../utils/Consts";
import LoginForm from "../components/forms/LoginForm";


const Login = () => {
  return (
    <>
      <div>
        {LOGIN_FORM_TITLE}
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
