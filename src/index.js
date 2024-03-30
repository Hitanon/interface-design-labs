import ReactDOM from "react-dom/client";
import React, { createContext } from "react";

import App from "./App";
import TopItemsStore from "./store/TopItemsStore";
import ProductStore from "./store/ProductStore";
import UserStore from "./store/UserStore";
import SearchStore from "./store/SearchStore";
import SellerOrdersStore from "./store/SellerOrdersStore";
import CartStore from "./store/CartStore";
import ProjectInfoStore from "./store/ProjectInfoStore";
import SearchProductsStore from "./store/SearchProductsStore";

import "./index.css";
import EditProductStore from "./store/EditProductStore";
import SellerProfileStore from "./store/SellerProfileStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
const Context = createContext(null);

root.render(
  <Context.Provider value={{
    topItems: new TopItemsStore(),
    product: new ProductStore(),
    user: new UserStore(),
    search: new SearchStore(),
    searchProducts: new SearchProductsStore(),
    sellerOrders: new SellerOrdersStore(),
    cart: new CartStore(),
    projectInfo: new ProjectInfoStore(),
    editProduct: new EditProductStore(),
    sellerProfile: new SellerProfileStore(),
  }}>
    <App />
  </Context.Provider>
);

export { Context };
