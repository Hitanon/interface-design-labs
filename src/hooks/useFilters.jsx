import useCategories from "../hooks/useCategories";


const useFilters = () => {
  // Категория - category
  // Минимальная цена - lowerPrice
  // Максимальная цена - upperPrice
  // Минимальный рейтинг - lowerRating
  // Максимальный рейтинг - upperRating

  const positiveNumberValidator = (value) => {
    try {
      const num = Number(value);
      if (num < 0) {
        return false;
      }
    } catch (e) {
      return false;
    }

    return true;
  };

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
        validator: positiveNumberValidator,
      },
      upper: {
        label: "Максимальная цена",
        name: "upperPrice",
        validator: positiveNumberValidator,
      },
    },
  ];

  return {
    checkBoxFilters,
    boundedFilters,
  };
};

export default useFilters;
