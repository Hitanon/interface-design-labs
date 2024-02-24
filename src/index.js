import ReactDOM from "react-dom/client";
import React, { createContext } from "react";

import App from "./App";
import TopItemsStore from "./store/TopItemsStore";
import ProjectInfoStore from "./store/ProjectInfoStore";
import ProductStore from "./store/ProductStore";
import UserStore from "./store/UserStore";
import SearchProductsStore from "./store/SearchProductsStore";
import SellerStore from "./store/SellerStore";
import SellerOrdersStore from "./store/SellerOrdersStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
const Context = createContext(null);

root.render(
  <Context.Provider value={{
    topItems: new TopItemsStore(),
    projectInfo: new ProjectInfoStore(),
    product: new ProductStore(),
    user: new UserStore(),
    searchProducts: new SearchProductsStore(),
    seller: new SellerStore(),
    sellerOrders: new SellerOrdersStore(),
  }}>
    <App />
  </Context.Provider>
);

export { Context };
