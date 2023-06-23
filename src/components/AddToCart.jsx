/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Colors = ({ product }) => {
  const { id, colors, stock } = product;
  const [check, setCheck] = useState(0);
  const [count, setCount] = useState(1);

  return (
    <Div>
      <div className="colors">
        <p>
          <span className="color-text">Color : </span>
        </p>
        <div className="color-btn-group">
          {stock > 0 &&
            colors.map((curElem, index) => {
              return (
                <button
                  key={index}
                  style={{ background: curElem }}
                  className={check === index ? "color-btn active" : "color-btn"}
                  onClick={() => setCheck(index)}
                >
                  {check === index && <BsCheckLg className="check" />}
                </button>
              );
            })}
        </div>
      </div>

      <div className="counter">
        <button onClick={() => (count === 1 ? count : setCount(count - 1))}>
          <AiOutlineMinus />
        </button>
        <span>{count}</span>
        <button
          onClick={() =>
            count < stock
              ? setCount(count + 1)
              : Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `We have total ${count} product only`
              })
          }
        >
          <AiOutlinePlus />
        </button>
      </div>

      <div className="add-to-cart">
        <NavLink to={"/shop"} className={"add-to-cart"}>
          Add to cart
        </NavLink>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .colors {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .color-text {
    color: #000;
    font-weight: bold;
  }

  .color-btn-group {
    display: flex;
    gap: 5px;
    cursor: pointer;

    .color-btn {
      min-width: 20px !important;
      min-height: 20px !important;
      padding: 0;
      display: block;
      border: none;
      border-radius: 50% !important;
      opacity: 0.5;
      position: relative;
      &:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }
      &:hover {
        opacity: 1;
      }

      .check {
        font-size: 14px;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .color-btn.active {
      opacity: 1;
    }
  }

  .counter {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: 0;
      border: none;
      font-size: 20px;
      color: #000;
      font-weight: bold;
      border-radius: 0;
      &:focus {
        outline: 0;
        box-shadow: 0;
        border: 0;
      }
    }
    span {
      color: #6254f3;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .add-to-cart {
    background: #6254f3;
    padding: 5px 15px;
    color: #ffffff;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export default Colors;
