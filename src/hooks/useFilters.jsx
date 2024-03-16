import useCategories from "../hooks/useCategories";


const useFilters = () => {
  // Категория - category
  // Минимальная цена - lowerPrice
  // Максимальная цена - upperPrice
  // Минимальный рейтинг - lowerRating
  // Максимальный рейтинг - upperRating

  const checkBoxFilters = [
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

  return {
    checkBoxFilters,
    boundedFilters,
  };
};

export default useFilters;
