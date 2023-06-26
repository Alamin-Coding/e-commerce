import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/product-context";
import { FilterContextProvider } from "./context/filter-Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
