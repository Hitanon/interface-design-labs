import { LOGIN_FORM_TITLE } from "../utils/Consts";
import LoginForm from "../components/forms/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Login = () => {
  return (
    <>
      <Header />
      <hr />
      <div>
        {LOGIN_FORM_TITLE}
      </div>
      <LoginForm />
      <hr />
      <Footer />
    </>
  );
};

export default Login;
