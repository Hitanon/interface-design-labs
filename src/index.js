import ReactDOM from "react-dom/client";
import React, { createContext } from "react";

import App from "./App";
import TopItemsStore from "./store/TopItemsStore";
import ProjectInfoStore from "./store/ProjectInfoStore";
import ProductStore from "./store/ProductStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
const Context = createContext(null);

root.render(
  <Context.Provider value={{
    topItems: new TopItemsStore(),
    projectInfo: new ProjectInfoStore(),
    product: new ProductStore(),
  }}>
    <App />
  </Context.Provider>
);

export { Context };
