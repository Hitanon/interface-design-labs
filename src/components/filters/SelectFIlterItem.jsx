const SelectFilterItem = ({ item, onSelect, isSelected }) => {
  return (
    <div onClick={() => onSelect(item)} style={{ fontWeight: isSelected ? "bold" : "normal" }}>
      {item.name}
    </div>
  );
};

export default SelectFilterItem;
