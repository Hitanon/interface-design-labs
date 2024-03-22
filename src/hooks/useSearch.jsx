import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "..";
import { SEARCH_PRODUCTS_ROUTE } from "../utils/Consts";
import { searchProductsByParams } from "../clients/ProductClient";


const useSearch = () => {
  const navigate = useNavigate();
  const { search, searchProducts } = useContext(Context);

  const getUrlParams = () => {
    const urlParams = search.params.reduce((acc, param) => `${acc}${param.name}=${param.value}&`, "?");
    return urlParams.slice(0, -1);
  };

  const parseUrlParams = () => {
    const splitted = window.location.search.replace("?", "").split("&");
    const filtered = splitted.filter(param => param.length > 0);
    const params = filtered.map((param) => param.split("=")).map(([key, value]) => ({name: key, value}));
    for (const param of params) {
      search.addParam(param);
    }
  };

  const applyFilters = async () => {
    searchProducts.setProducts(await searchProductsByParams(getUrlParams()));
    navigate(`${SEARCH_PRODUCTS_ROUTE}${getUrlParams()}`);
  };

  const clearParams = () => {
    search.clearParams();
  };

  return {
    search,
    getUrlParams,
    parseUrlParams,
    applyFilters,
    clearParams,
  };
};

export default useSearch;
