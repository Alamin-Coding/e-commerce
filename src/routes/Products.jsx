import { styled } from "styled-components";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import GridView from "../components/GridView";
import { useState } from "react";
import ListView from "../components/ListView";

const Products = () => {
  const [gridView, setGridView] = useState(true);
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
            <div className="filter-top-bar">
              <div>
                <div className="grid-list-icon">
                  <button
                    className={`${gridView ? "active" : ""}`}
                    onClick={() => setGridView(true)}
                  >
                    <BsFillGrid3X3GapFill />
                  </button>
                  <button
                    className={`${gridView ? "" : "active"}`}
                    onClick={() => setGridView(false)}
                  >
                    <FaList />
                  </button>
                </div>
              </div>
              <div>
                <p>12 Product Available</p>
              </div>
              <div className="select-option">
                <select name="" id="">
                  <option value="">Price(lowest)</option>
                  <option value="">Price(highest)</option>
                  <option value="">Price(A-Z)</option>
                  <option value="">Price(Z-A)</option>
                </select>
              </div>
            </div>
            <div className="grid-list-view">
              {gridView ? <GridView /> : <ListView />}
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
      .filter-top-bar {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        .grid-list-icon {
          padding: 40px 10px;
          display: flex;
          gap: 15px;
          align-items: center;
          button {
            border-radius: 3px;
            font-size: 30px;
            width: 40px;
            height: 40px;
            border: 1px solid #000;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 3px;
            transition: all linear 0.2s;
            cursor: pointer;
            &:focus {
              box-shadow: none;
              outline: none;
              border: 1px solid #000000;
            }
            &:hover {
              color: #ffffff;
              background: #000000;
            }
          }
          button.active {
            color: #ffffff;
            background: #000000;
          }
        }
      }

      .select-option {
        select {
          padding: 5px;
        }
      }
    }
  }
`;

export default Products;
