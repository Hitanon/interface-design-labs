import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import CategoriesList from "../components/categories/Categories";

const Categories = () => {
  const categories = [
    { image: "/img/accessories.png", name: "Аксессуары" },
    { image: "/img/jewelry.png", name: "Украшения" },
    { image: "/img/cloth.png", name: "Одежда" },
    { image: "/img/toys.png", name: "Игрушки и игры" },
    { image: "/img/bags.png", name: "Сумки и кошельки" },
  ];

  return (
    <div className="page-footer-bottom">
      <Header />
      <div className="categroies-section">
        <h1>Категории</h1>
        <CategoriesList categories={categories} />
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
