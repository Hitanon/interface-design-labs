import LoginForm from "../components/forms/LoginForm";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

import "../index.css";


const Login = () => {
  return (
    <div className="page-footer-bottom">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
