import { TOP_CATEGORIES_LABEL } from "../../utils/Consts";

import Categories from "./Categories";

import "./categories.css";

const TopCategories = () => {
  const topCategories = [
    { id: 1, image: "/img/accessories.png", name: "Аксессуары" },
    { id: 2, image: "/img/jewelry.png", name: "Украшения" },
    { id: 3, image: "/img/cloth.png", name: "Одежда" },
    { id: 4, image: "/img/toys.png", name: "Игрушки и игры" },
  ];

  return (
    <section className="top-categories-section container-fluid py-3">
      <div className="container">
        <div className="row text-center">
          <h2 className="top-categories-title">{TOP_CATEGORIES_LABEL}</h2>
        </div>
        <div className="row gy-3 py-4">
          <Categories categories={topCategories} />
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
