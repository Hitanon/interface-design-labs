import TopCategories from "../components/categories/TopCategories";
import TopProducts from "../components/products/TopProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectGreeting from "../components/ProjectGreeting";


const Main = () => {
  return (
    <>
      <Header />
      <hr/>
      <ProjectGreeting />
      <hr/>
      <TopCategories />
      <hr/>
      <TopProducts />
      <hr/>
      <Footer />
    </>
  );
};

export default Main;
