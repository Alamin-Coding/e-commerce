import { styled } from "styled-components";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

const Products = () => {
  return (
    <Section>
      <div className="container">
        <div className="grid grid-filter-column">
          <div className="left-site">
            <div className="search">
              <input type="search" />
            </div>
            <div className="category">
              <h3>Category</h3>
              <div>
                <ul>
                  <li>
                    <Link to={"/"}>All</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Mobile</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Laptop</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Computer</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Accessories</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Watch</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="company">
              <h3>Company</h3>
              <select name="" id="">
                <option value="">All</option>
                <option value="">Apple</option>
              </select>
            </div>

            <div>
              <h3>Colors</h3>
              <p className="colors">
                All:
                <button className="red"></button>
                <button className="black"></button>
                <button className="gray"></button>
              </p>
            </div>
          </div>
          <div className="right-site">
            <div>
              <Sort />
            </div>
            <div className="grid-list-view">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 20px 0;
  h3 {
    color: #000000;
    font-size: 20px;
    font-weight: 700;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .grid-filter-column {
    grid-template-columns: 1fr 3fr;
    gap: 24px;
    .left-site {
      .category {
        ul {
          display: flex;
          gap: 15px;
          flex-direction: column;
          li {
            a {
              color: #000000;
              font-size: 16px;
              font-weight: 400;
            }
          }
        }
      }

      .colors {
        display: flex;
        align-items: center;
        gap: 20px;
        button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: none;
          padding: 0;
          display: inline-flex;
          &:hover {
            border: none;
          }
          &:focus {
            outline: none;
            border: none;
            box-shadow: none;
          }
        }
        .red {
          background: red;
        }
        .black {
          background: green;
        }
        .gray {
          background: gray;
        }
      }
    }
    .right-site {
      

      .select-option {
        select {
          padding: 5px;
        }
      }
    }
  }
`;

export default Products;
