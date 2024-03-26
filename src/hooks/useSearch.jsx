import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "..";
import { SEARCH_PRODUCTS_ROUTE } from "../utils/Consts";
import { searchProductsByParams } from "../clients/ProductClient";


const useSearch = () => {
  const navigate = useNavigate();
  const { search, searchProducts } = useContext(Context);

  const addParam = (name, value) => {
    search.addParam({name, value});
  };

  const getUrlParams = () => {
    const urlParams = search.params.reduce((acc, param) => `${acc}${param.name}=${param.value}&`, "?");
    const sliced = urlParams.slice(0, -1);
    if (search.orderBy) {
      return `${sliced}&orderBy=${search.orderBy}`;
    }
    return sliced;
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
    const url = getUrlParams();
    searchProducts.setProducts(await searchProductsByParams(url));
    navigate(`${SEARCH_PRODUCTS_ROUTE}${url}`);
  };

  const clearParams = () => {
    search.clearParams();
    search.clearOrderBy();
  };

  const setOrderByField = (field) => {
    search.setOrderBy(field);
  };

  return {
    search,
    addParam,
    getUrlParams,
    parseUrlParams,
    applyFilters,
    clearParams,
    setOrderByField,
  };
};

export default useSearch;
