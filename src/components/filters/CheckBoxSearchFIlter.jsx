import { useEffect, useState } from "react";

import useSearch from "../../hooks/useSearch";


const CheckBoxSearchFilter = ({ name, label, loader }) => {
  const { search } = useSearch();

  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const loadItems = async () => {
    setItems(await loader());
  };

  const handleCheckboxChange = (id) => {
    const newChecked = checkedItems.includes(id)
      ? checkedItems.filter((itemId) => itemId !== id)
      : [...checkedItems, id].sort((a, b) => a - b);

    search.addParam({name, value: newChecked.join("-")});
    setCheckedItems(newChecked);
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
        {
          items.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={checkedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.name}
            </div>
          ))
        }
      </div>
    </>
  );
};

export default CheckBoxSearchFilter;
