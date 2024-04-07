import "./general.css"

const SelectItem = ({ item, onSelect, isSelected }) => {
  return (
    <p className="select-item">
      <div onClick={() => onSelect(item)} style={{ fontWeight: isSelected ? "bold" : "normal" }}>
        {item.name}
      </div>
    </p>
  );
};

export default SelectItem;
