import ReactDOM from "react-dom/client";
import React, { createContext } from "react";

import App from "./App";
import TopItemsStore from "./store/TopItemsStore";
import ProjectInfoStore from "./store/ProjectInfoStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
const Context = createContext(null);

root.render(
  <Context.Provider value={{
    topItems: new TopItemsStore(),
    projectInfo: new ProjectInfoStore(),
  }}>
    <App />
  </Context.Provider>
);

export { Context };
