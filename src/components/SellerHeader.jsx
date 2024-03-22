const SellerHeader = ({ seller }) => {
  return (
    <>
      <div>
        Name: {seller.name}
      </div>
      <div>
        Description: {seller.description}
      </div>
      <div>
        Rating: {seller.rating}
      </div>
      <div>
        Sales: {seller.sales}
      </div>
      <div>
        Sells from: {seller.sellsFrom}
      </div>
    </>
  );
};

export default SellerHeader;
