const FilterReducer = ( state, action ) => {
 switch (action.type) {
  case "SET_FILTER_PRODUCT":
   return {
    ...state,
    filterProduct: action.payload,
    allProduct: action.payload,
   }
 
  default:
   return state
 }
}

export default FilterReducer;