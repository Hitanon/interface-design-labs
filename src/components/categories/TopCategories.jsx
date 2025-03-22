import { TOP_CATEGORIES_LABEL } from "../../utils/Consts";

import Categories from "./Categories";

import "./categories.css";

const TopCategories = () => {
  const topCategories = [
    { image: "/img/accessories.png", name: "Аксессуары" },
    { image: "/img/jewelry.png", name: "Украшения" },
    { image: "/img/cloth.png", name: "Одежда" },
    { image: "/img/toys.png", name: "Игрушки и игры" },
    { image: "/img/bags.png", name: "Сумки и кошельки" },
  ];

  return (
    <div className="top-categories-section">
      <h2 className="top-categories-title">{TOP_CATEGORIES_LABEL}</h2>
      <Categories categories={topCategories} />
    </div>
  );
};

export default TopCategories;
