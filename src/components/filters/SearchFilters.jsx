import useCategories from "../../hooks/useCategories";

import useSearch from "../../hooks/useSearch";
import TextButton from "../ui/TextButton";

import BoundedSearchFilter from "./BoundedSearchFilter";
import SearchFilter from "./SearchFilter";


const SearchFilters = () => {
  // Категория - category
  // Минимальная цена - lowerPrice
  // Максимальная цена - upperPrice
  // Минимальный рейтинг - lowerRating
  // Максимальный рейтинг - upperRating

  const filters = [
    {
      label: "Категория",
      name: "category",
      loader: useCategories().getAll,
    },
  ];

  const boundedFilters = [
    {
      label: "Цена",
      inputType: "number",
      lower: {
        label: "Минимальная цена",
        name: "lowerPrice",
      },
      upper: {
        label: "Максимальная цена",
        name: "upperPrice",
      },
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

      {
        boundedFilters.map(
          ({ label, inputType, lower, upper }) =>
            <BoundedSearchFilter key={label} label={label} lower={lower} upper={upper} inputType={inputType} />
        )
      }

      <div>
        <TextButton text="Применить" callback={onSubmitClick} />
      </div>
    </>
  );
};

export default SearchFilters;
