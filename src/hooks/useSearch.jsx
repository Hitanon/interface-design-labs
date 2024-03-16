import { useContext } from "react";

import { Context } from "..";


const useSearch = () => {
  const { search } = useContext(Context);

  const getUrlParams = () => {
    const urlParams = search.params.reduce((acc, param) => `${acc}${param.name}=${param.value}&`, "?");
    return urlParams.slice(0, -1);
  };

  const parseUrlParams = () => {
    const splitted = window.location.search.replace("?", "").split("&")
    const params = splitted.map((param) => param.split("=")).map(([key, value]) => ({name: key, value}));
    for (const param of params) {
      search.addParam(param);
    }
  };

  return {
    search,
    getUrlParams,
    parseUrlParams,
  };
};

export default useSearch;
