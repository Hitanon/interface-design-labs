import useFilters from "../../hooks/useFilters";

import useSearch from "../../hooks/useSearch";
import { APPLY_FILTERS_BUTTON_TEXT } from "../../utils/Consts";
import TextButton from "../ui/TextButton";

import BoundedSearchFilter from "./BoundedSearchFilter";
import SelectFilter from "./SelectFilter";


const SearchFilters = () => {
  const { applyFilters } = useSearch();
  const { filters, boundedFilters } = useFilters();

  const onSubmitClick = async () => {
    await applyFilters();
  };

  return (
    <>
      {
        filters.map(options => <SelectFilter key={options.name} options={options} />)
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
