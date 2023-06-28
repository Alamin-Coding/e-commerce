/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./product-context";


const ProductFilterContext = createContext();

import reducer from "../reducer/filterReducer";

const initialState = {
  filterProduct: [],
  allProduct: [],
  gridView: true,
  sortingValue: "lowest"
};

const FilterContextProvider = ({ children }) => {
  const {products} = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //Set grid view

  const setGridView = () => {
    return dispatch({type: "SET_GRID_VIEW"})
  }

  const setListView = () => {
    return dispatch({type: "SET_LIST_VIEW"})
  }

  // Sorting Value by dropdown
  const sorting = () => {
     dispatch({type: "SORTING_BY_DROPDOWN"})
  }

  useEffect(() => {
    dispatch({type: "SET_FILTER_PRODUCT", payload: products})
  },[products])

// Sorting product by dropdown selected value
  useEffect(() => {
    dispatch({type: "SET_SORTING_PRODUCT", payload: products})
  },[state.sortingValue])

  return (
    <ProductFilterContext.Provider value={{ ...state, setGridView, setListView,sorting }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

// custom hooks

const useFilterContext = () => {
  return useContext(ProductFilterContext);
};

export { ProductFilterContext, useFilterContext, FilterContextProvider };
