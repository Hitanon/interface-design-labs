import "./general.css";

const SelectItem = ({ item, onSelect, isSelected, className }) => {
  return (
    <p className={className}
      onClick={() => onSelect(item)}
      style={{ fontWeight: isSelected ? "bold" : "normal" }}>
      {item.name}
    </p>
  );
};

export default SelectItem;
