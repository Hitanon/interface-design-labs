import useSearch from "../../hooks/useSearch";


const OrderOption = ({ option }) => {
  const { setOrderByField } = useSearch();

  const setOrderOption = () => {
    setOrderByField(option.codename);
  };

  return (
    <>
      <div onClick={setOrderOption}>{option.name}</div>
    </>
  );
};

export default OrderOption;
