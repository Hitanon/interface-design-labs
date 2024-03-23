import { useState } from "react";

import SelectFilterItem from "./SelectFIlterItem";


const SelectFilter = ({ label, items, setItem, clearSelected }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const isItemSelected = (item) => {
    return selectedItem === item;
  };

  const onSelect = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
      clearSelected();
    } else {
      setSelectedItem(item);
      setItem(item);
    }
  };

  return (
    <>
      <div>
        {label}
      </div>
      <div>
        {
          items.map(
            item =>
              <div key={item.id}>
                <SelectFilterItem item={item} onSelect={onSelect} isSelected={isItemSelected(item)} />
              </div>
          )
        }
      </div>
    </>
  );
};

export default SelectFilter;
