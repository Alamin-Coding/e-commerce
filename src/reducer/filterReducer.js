/* eslint-disable no-case-declarations */
const FilterReducer = ( state, action ) => {
 switch (action.type) {
  case "SET_FILTER_PRODUCT":
   return {
    ...state,
    filterProduct: action.payload,
    allProduct: action.payload,
   }
 
  case "SET_GRID_VIEW":
   return {
    ...state,
    gridView: true
   }
 
 
  case "SET_LIST_VIEW":
   return {
    ...state,
    gridView: false
   }
 
 
  case "SORTING_BY_DROPDOWN":
    const getSelectTag = document.getElementById("sort");
    const OptionValue = getSelectTag.options[getSelectTag.selectedIndex].value;
    console.log(OptionValue);
   return {
    ...state,
    sortingValue: OptionValue
   }
 
  default:
   return state
 }
}

export default FilterReducer;