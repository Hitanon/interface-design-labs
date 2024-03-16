import useCategories from "../../hooks/useCategories";

import useSearch from "../../hooks/useSearch";
import TextButton from "../ui/TextButton";

import SearchFilter from "./SearchFilter";


const SearchFilters = () => {
  // Категория - category
  // Минимальная цена - lowerPrice
  // Максимальная цена - upperPrice
  // Минимальный рейтинг - lowerRating
  // Максимальный рейтинг - upperRating

  const filters = [
    {
      name: "category",
      label: "Категория",
      loader: useCategories().getAll,
    },
  ];

  const { applyFilters } = useSearch();

  const onSubmitClick = async () => {
    await applyFilters();
  };

  return (
    <>
      <div>
        SearchFilters
      </div>

      {
        filters.map(({ name, label, loader }) => <SearchFilter key={name} name={name} label={label} loader={loader} />)
      }

      <div>
        <TextButton text="Применить" callback={onSubmitClick} />
      </div>
    </>
  );
};

export default SearchFilters;
