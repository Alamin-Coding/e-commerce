/* eslint-disable no-case-declarations */
const FilterReducer = ( state, action ) => {
 switch (action.type) {

  case "SET_FILTER_PRODUCT":
   return {
    ...state,
    filterProduct: [...action.payload].sort((a, b) => a.price - b.price),
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
        return a.name.localeCompare(z.name);
      }) 
    }

    if (state.sortingValue === "z-a") {
      sortingData = newSortingData.sort((a, z) => {
        return z.name.localeCompare(a.name);
      }) 
    }
    if (state.sortingValue === "lowest") {
      sortingData = newSortingData.sort((a, b) => {
        return a.price -b.price;
      }) 
    }
    if (state.sortingValue === "highest") {
      sortingData = newSortingData.sort((a, b) => {
        return b.price - a.price;
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