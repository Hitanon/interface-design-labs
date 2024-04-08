import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import PurchaseCartOrder from "../components/carts/PurchaseOrder";


const PurchaseOrder = () => {
  return (
    <div className="page-footer-bottom">
      <Header />
      <PurchaseCartOrder />
      <Footer />
    </div>
  );
};

export default PurchaseOrder;
