import { useState } from "react";

import useSearch from "../../hooks/useSearch";


const ProductRatingOrderer = () => {
  const baseText = "По рейтингу";
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { search, applyFilters } = useSearch();

  const selectNext = () => {
    if (selectedIndex === 2) {
      setSelectedIndex(0);
      search.clearOrderBy();
    }
    else {
      if (selectedIndex === 0) {
        search.setOrderBy("asc-rating");
      }
      else if (selectedIndex === 1) {
        search.setOrderBy("desc-rating");
      }
      setSelectedIndex(selectedIndex + 1);
    }
    applyFilters();
  };

  const getText = () => {
    if (selectedIndex === 0) {
      return `${baseText}`;
    }
    else if (selectedIndex === 1) {
      return `${baseText} ↑`;
    }
    else if (selectedIndex === 2) {
      return `${baseText} ↓`;
    }
  };

  return (
    <>
      <div className="orderer-list">
        <p className="order-item" onClick={selectNext}>{getText()}</p>
      </div>
    </>
  );
};

export default ProductRatingOrderer;
