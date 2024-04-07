import { useState } from "react";

import SelectItem from "./SelectItem";


const SelectItemList = ({ items, setItem, clearSelected, className, itemClassName }) => {
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
    <div className={className}>
      {
        items.map(
          item =>
            <div key={item.id}>
              <SelectItem className={itemClassName} item={item} onSelect={onSelect} isSelected={isItemSelected(item)} />
            </div>
        )
      }
    </div>
  );
};

export default SelectItemList;
