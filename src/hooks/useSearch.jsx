import { useContext } from "react";

import { Context } from "..";


const useSearch = () => {
  const { search } = useContext(Context);

  const getUrlParams = () => {
    console.log(search.params.map((param) => `${param.name}=${param.value}`));
    return search.params.reduce((acc, param) => `${acc}&${param.name}=${param.value}`, "?");
  };

  return {
    search,
    getUrlParams,
  };
};

export default useSearch;
