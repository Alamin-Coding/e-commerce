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
 
  default:
   return state
 }
}

export default FilterReducer;