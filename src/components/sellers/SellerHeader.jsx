import "./sellers.css";

const SellerHeader = ({ seller }) => {
  const getSellsCountText = () => {
    if (seller.sales % 10 === 1) {
      return `${seller.sales} продажа`;
    }
    if (seller.sales === 0 || (seller.sales > 4 && seller.sales < 21)) {
      return `${seller.sales} продаж`;
    }
    return `${seller.sales} продажи`;
  };

  const getSellsFrom = () => {
    const year = new Date(seller.sellsFrom).getFullYear();
    return `${year} года`;
  };

  return (
    <div className="seller-header">
      <div className="seller-icon big"></div>
      <div className="seller-info">
        <h1 className="seller-name">
          {seller.name}
        </h1>
        <div className="seller-rates">
          <div className="rating">
            <div className="rating-icon"></div>
            {seller.rating}
          </div>
          <div className="sells-count">
            <div className="sells-coount-icon"></div>
            {getSellsCountText()}
          </div>
          <div className="date">
            <div className="date-icon"></div>
            Продает с {getSellsFrom()}
          </div>
        </div>
        <div className="seller-description">
          {seller.description}
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
