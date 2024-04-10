import { useState } from "react";

import useSearch from "../../hooks/useSearch";


const ProductPriceOrderer = () => {
  const baseText = "По цене";
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { search, applyFilters } = useSearch();

  const selectNext = () => {
    if (selectedIndex === 2) {
      setSelectedIndex(0);
      search.clearOrderBy();
    }
    else {
      if (selectedIndex === 0) {
        search.setOrderBy("asc-price");
      }
      else if (selectedIndex === 1) {
        search.setOrderBy("desc-price");
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

export default ProductPriceOrderer;
