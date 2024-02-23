import Categories from "../pages/Categories";
import Main from "../pages/Main";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import SearchProducts from "../pages/SearchProducts";

import {
  CATEGORIES_ROUTE,
  MAIN_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE,
} from "./Consts";


export const routes = [
  {
    path: MAIN_ROUTE,
    element: <Main />,
  },
  {
    path: PRODUCT_ROUTE,
    element: <Product />,
  },
  {
    path: PROFILE_ROUTE,
    element: <Profile />,
  },
  {
    path: CATEGORIES_ROUTE,
    element: <Categories />,
  },
  {
    path: SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE,
    element: <SearchProducts />,
  },
];
