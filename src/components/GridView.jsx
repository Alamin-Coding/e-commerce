/* eslint-disable react/prop-types */
import Product from "./Product";

import { styled } from "styled-components";

const GridView = ({ products }) => {
  return (
    <Div className="grid grid-three-column">
      {products && products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </Div>
  );
};

const Div = styled.div`
  padding: 1rem 0;
  display: grid;
  gap: 24px !important;
`;

export default GridView;
