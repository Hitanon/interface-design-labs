import "./sellers.css";

const SellerHeader = ({ seller }) => {
  const getSellsCountText = () => {
    if (seller.sales % 10 === 1 && seller.sales !== 11) {
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
    <div className="row seller-header">
      <div className="col-12 col-xxl-7 py-4 d-flex align-items-center">
        <div className="seller-icon big"></div>
        <h1 className="seller-name">{seller.name}</h1>
      </div>
      <div className="col-12 col-xxl-7 py-2">
        <div className="seller-info">
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
          <div className="seller-description">{seller.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
