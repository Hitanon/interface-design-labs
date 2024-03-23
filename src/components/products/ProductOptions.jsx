import ProductOption from "./ProductOption";


const ProductOptions = ({ options }) => {
  return (
    <>
      <div>
        {
          options.map((option) => <div key={option.id}><ProductOption option={option} /></div>)
        }
      </div>
    </>
  );
};

export default ProductOptions;
