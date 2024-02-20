import Main from "../pages/Main";
import Product from "../pages/Product";

import { MAIN_ROUTE, PRODUCT_ROUTE } from "./Consts";


export const routes = [
  {
    path: MAIN_ROUTE,
    element: <Main />,
  },
  {
    path: PRODUCT_ROUTE,
    element: <Product />,
  },
];
