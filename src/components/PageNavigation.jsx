/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

import { styled } from "styled-components";

const PageNavigation = ({productName}) => {
  return (
    <Div className="page-navigation">
      <NavLink to={"/"}>Home</NavLink>
       / 
      <span>{productName}</span>
    </Div>
  )
}

const Div = styled.div`
  padding: 20px 0;
  font-size: 30px;
  font-weight: bold;
  a{
   font-size: 30px;
   margin-right: 10px;
  }
  span{
   font-size: 30px;
   margin-left: 10px;
  }
`

export default PageNavigation
