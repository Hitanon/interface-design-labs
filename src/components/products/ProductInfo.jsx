import ImageSlider from "../ui/ImageSlider";


const ProductInfo = ({ product, onClick = () => {} }) => {
  return (
    <>
      <div onClick={() => onClick(product.id)}>
        <div>
          <ImageSlider />
        </div>

        <div>
          Name: {product.name}
        </div>

        <div>
          Price: {product.price}
        </div>

        <div>
          Rating: {product.rating}
        </div>

        <div>
          Units in stock: {product.unitsInStock}
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
