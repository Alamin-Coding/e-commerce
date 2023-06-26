/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./product-context";


const ProductFilterContext = createContext();

import reducer from "../reducer/fiterReducer";

const initialState = {
  filterProduct: [],
  allProduct: [],
  gridView: true
};

const FilterContextProvider = ({ children }) => {
  const {products} = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: "SET_FILTER_PRODUCT", payload: products})
  },[products])

  return (
    <ProductFilterContext.Provider value={{ ...state }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

// custom hooks

const useFilterContext = () => {
  return useContext(ProductFilterContext);
};

export { ProductFilterContext, useFilterContext, FilterContextProvider };
