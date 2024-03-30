import PurchaseOrder from "../pages/PurchaseOrder";
import Categories from "../pages/Categories";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";
import SearchProducts from "../pages/SearchProducts";
import Seller from "../pages/Seller";
import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";

import {
  CATEGORIES_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PURCHASE_ORDER_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE,
  SELLER_ROUTE,
  CREATE_PRODUCT_ROUTE,
  EDIT_PRODUCT_ROUTE,
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
  {
    path: LOGIN_ROUTE,
    element: <Login />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Registration />,
  },
  {
    path: SELLER_ROUTE,
    element: <Seller />,
  },
  {
    path: PURCHASE_ORDER_ROUTE,
    element: <PurchaseOrder />,
  },
  {
    path: CREATE_PRODUCT_ROUTE,
    element: <CreateProduct />,
  },
  {
    path: EDIT_PRODUCT_ROUTE,
    element: <EditProduct />,
  },
];
