import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import PurchaseCartOrder from "../components/carts/PurchaseOrder";


const PurchaseOrder = () => {
  return (
    <>
      <Header />
      <hr />
      <PurchaseCartOrder />
      <hr />
      <Footer />
    </>
  );
};

export default PurchaseOrder;
