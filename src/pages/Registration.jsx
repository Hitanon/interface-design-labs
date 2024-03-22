import { REGISTRATION_FORM_TITLE } from "../utils/Consts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationForm from "../components/forms/RegistrationForm";


const Registration = () => {
  return (
    <>
      <Header />
      <hr />
      <div>
        {REGISTRATION_FORM_TITLE}
      </div>
      <RegistrationForm />
      <hr />
      <Footer />
    </>
  );
};

export default Registration;
