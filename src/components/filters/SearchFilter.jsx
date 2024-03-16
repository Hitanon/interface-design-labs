import { useEffect, useState } from "react";

import useSearch from "../../hooks/useSearch";


const SearchFilter = ({ name, label, loader }) => {
  const { search } = useSearch();
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    setItems(await loader());
  };

  const onItemClick = (item) => {
    search.addParam({name, value: item.id});
  };

  const onClearClick = () => {
    search.clearParam(name);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <>
      <div>
        {label}
      </div>
      <div>
        {items.map((item) => <div key={item.id} onClick={() => onItemClick(item)}>{item.name}</div>)}
      </div>
      <div>
        <button onClick={onClearClick}>Очистить</button>
      </div>
    </>
  );
};

export default SearchFilter;
