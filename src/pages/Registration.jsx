import { REGISTRATION_FORM_TITLE } from "../utils/Consts";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
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
