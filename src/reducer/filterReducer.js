/* eslint-disable no-case-declarations */
const FilterReducer = ( state, action ) => {
 switch (action.type) {

  case "SET_FILTER_PRODUCT":
   return {
    ...state,
    filterProduct: [...action.payload],
    allProduct: [...action.payload],
   };
 
  case "SET_GRID_VIEW":
   return {
    ...state,
    gridView: true
   };
 
 
  case "SET_LIST_VIEW":
   return {
    ...state,
    gridView: false
   };
 
 
  case "SORTING_BY_DROPDOWN":
    const getSelectTag = document.getElementById("sort");
    const OptionValue = getSelectTag.options[getSelectTag.selectedIndex].value;
    console.log(OptionValue);
   return {
    ...state,
    sortingValue: OptionValue
   };
 
   case "SET_SORTING_PRODUCT":
    let sortingData;
    let newSortingData = [...action.payload];

    if (state.sortingValue === "a-z") {
      sortingData = newSortingData.sort((a, z) => {
        return a.name.localeCompare(z.name)
      }) 
    }
    if (state.sortingValue === "z-a") {
      sortingData = newSortingData.sort((a, z) => {
        return z.name.localeCompare(a.name)
      }) 
    }

    
   return {
    ...state,
    filterProduct: sortingData,
   };
 
  default:
   return state
 }
}

export default FilterReducer;