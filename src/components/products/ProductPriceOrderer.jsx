import { useState } from "react";

const ProductPriceOrderer = () => {
  const baseText = "По цене";
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectNext = () => {
    setSelectedIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const getText = () => {
    if (selectedIndex === 0) return baseText;
    if (selectedIndex === 1) return `${baseText} ↑`;
    if (selectedIndex === 2) return `${baseText} ↓`;
  };

  return (
    <div className="orderer-list">
      <p className="order-item" onClick={selectNext}>
        {getText()}
      </p>
    </div>
  );
};

export default ProductPriceOrderer;
