import { useFilterContext } from "../context/filter-Context"
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {

 const {filterProduct, gridView} =  useFilterContext();
  if (gridView === true) {
   return <GridView products={filterProduct} />
  }
  if(gridView === false){
   return <ListView products={filterProduct} />
  }
}

export default ProductList
