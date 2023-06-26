import { useFilterContext } from "../context/filter-Context"
import Product from "./Product";

import { styled } from "styled-components";

const GridView = () => {
 const {filterProduct} = useFilterContext();
  return (
    <Div className="grid grid-three-column">
      {
       filterProduct.map((product) => {
        return <Product key={product.id} {...product} />
       })
      }
    </Div>
  )
}

const Div = styled.div`
 display: grid;
 gap: 24px !important;
`

export default GridView
