import useFilters from "../../hooks/useFilters";

import useSearch from "../../hooks/useSearch";
import { APPLY_FILTERS_BUTTON_TEXT, SEARCH_PRODUCTS_LABEL } from "../../utils/Consts";
import TextButton from "../ui/TextButton";

import BoundedSearchFilter from "./BoundedSearchFilter";
import CheckBoxSearchFilter from "./CheckBoxSearchFIlter";


const SearchFilters = () => {
  const { applyFilters } = useSearch();
  const { checkBoxFilters, boundedFilters } = useFilters();

  const onSubmitClick = async () => {
    await applyFilters();
  };

  return (
    <>
      <div>
        {SEARCH_PRODUCTS_LABEL}
      </div>

      {
        checkBoxFilters.map(
          ({ name, label, loader }) =>
            <CheckBoxSearchFilter key={name} name={name} label={label} loader={loader} />
        )
      }

      {
        boundedFilters.map(
          ({ label, inputType, lower, upper }) =>
            <BoundedSearchFilter key={label} label={label} lower={lower} upper={upper} inputType={inputType} />
        )
      }

      <div>
        <TextButton text={APPLY_FILTERS_BUTTON_TEXT} callback={onSubmitClick} />
      </div>
    </>
  );
};

export default SearchFilters;
