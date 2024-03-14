const ProductOption = ({ option }) =>{
  return (
    <>
      <div>
        {option.name}
      </div>
      <ul>
        {option.values.map((value) => <li key={value.id}>{value.name}</li>)}
      </ul>
    </>
  );
};

export default ProductOption;
