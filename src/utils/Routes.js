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
import AboutUs from "../pages/AboutUs";
import AdminProfile from "../components/admin/AdminProfile";
import AdminNewProductsList from "../components/admin/AdminNewProductsList";
import AdminNewProductView from "../components/admin/AdminNewProductView";
import AdminUsersList from "../components/admin/AdminUsersList";
import AdminSellersControl from "../components/admin/AdminSellersControl";


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
  ABOUT_US_ROUTE,
  ADMIN_ROUTE,
  ADMIN_NEW_PRODUCTS_ROUTE,
  ADMIN_NEW_PRODUCT_VIEW_ROUTE,
  ADMIN_USERS_ROUTE,
  ADMIN_SELLERS_ROUTE,
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
  {
    path: ABOUT_US_ROUTE,
    element: <AboutUs />,
  },
  // Admin routes
  {
    path: ADMIN_ROUTE,
    element: <AdminProfile />,
  },
  {
    path: ADMIN_NEW_PRODUCTS_ROUTE,
    element: <AdminNewProductsList />,
  },
  {
    path: ADMIN_NEW_PRODUCT_VIEW_ROUTE,
    element: <AdminNewProductView />,
  },
  {
    path: ADMIN_USERS_ROUTE,
    element: <AdminUsersList />,
  },
  {
    path: ADMIN_SELLERS_ROUTE,
    element: <AdminSellersControl />,
  },
];
