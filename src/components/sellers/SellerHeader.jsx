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
    <>
      <div>
        {seller.name}
      </div>
      <div>
        {seller.description}
      </div>
      <div className="rating">
        <div className="rating-icon"></div>
        {seller.rating}
      </div>
      <div>
        {getSellsCountText()}
      </div>
      <div>
        Продает с {getSellsFrom()}
      </div>
    </>
  );
};

export default SellerHeader;
