import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { styled } from "styled-components";
import { useFilterContext } from "../context/filter-Context";

const Sort = () => {
  const { allProduct, gridView, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <Div>
      <div>
        <div className="grid-list-icon">
          <button className={gridView ? "active" : ""} onClick={setGridView}>
            <BsFillGrid3X3GapFill />
          </button>
          <button className={gridView ? "" : "active"} onClick={setListView}>
            <FaList />
          </button>
        </div>
      </div>
      <div>
        {/* <p>{allProduct.length} Product Available</p> */}
      </div>
      <div className="select-option">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" onClick={sorting}>
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(A-Z)</option>
          <option value="z-a">Price(Z-A)</option>
        </select>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  .grid-list-icon {
    padding: 10px 0;
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
`;

export default Sort;
