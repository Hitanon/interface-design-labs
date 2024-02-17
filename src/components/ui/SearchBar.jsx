export const SearchBar = ({ text, callback }) => {
  return (
    <div>
      <input type="text" placeholder={text}/>
      <button onClick={callback}>Search</button>
    </div>
  );
};

export default SearchBar;
