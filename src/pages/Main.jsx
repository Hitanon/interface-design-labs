import TopCategories from "../components/categories/TopCategories";
import TopProducts from "../components/products/TopProducts";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import ProjectGreeting from "../components/general/ProjectGreeting";


const Main = () => {
  return (
    <>
      <Header />
      <ProjectGreeting />
      <TopCategories />
      <TopProducts />
      <Footer />
    </>
  );
};

export default Main;
