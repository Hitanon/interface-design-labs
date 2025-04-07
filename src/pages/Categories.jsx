import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import CategoriesList from "../components/categories/Categories";

const Categories = () => {
  const categories = [
    { id: 1, image: "/img/accessories.png", name: "Аксессуары" },
    { id: 2, image: "/img/jewelry.png", name: "Украшения" },
    { id: 3, image: "/img/cloth.png", name: "Одежда" },
    { id: 4, image: "/img/toys.png", name: "Игрушки и игры" },
    { id: 5, image: "/img/bags.png", name: "Сумки и кошельки" },
  ];

  return (
    <div className="page-footer-bottom">
      <Header />
      <section className="container categroies-section">
        <div className="row py-3">
          <h1 className="col-12 text-center text-md-start">Категории</h1>
        </div>
        <div className="row">
          <CategoriesList categories={categories} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Categories;
