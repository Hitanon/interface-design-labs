import { useState } from "react";

import SelectItem from "./SelectItem";


const SelectItemList = ({ items, setItem, clearSelected }) => {
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
      {
        items.map(
          item =>
            <div key={item.id}>
              <SelectItem item={item} onSelect={onSelect} isSelected={isItemSelected(item)} />
            </div>
        )
      }
    </>
  );
};

export default SelectItemList;
