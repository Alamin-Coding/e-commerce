import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgClose, CgMenu } from "react-icons/cg";
import { styled } from "styled-components";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  window.addEventListener("resize", () => {
    const windowWidth = screen.width;

    if (windowWidth > 768) {
      setMenu(false);
    }
  });

  return (
    <Nav>
      <div className="container">
        <div className="logo">
          <NavLink>
            <img src="/public/images/logo.png" alt="logo" />
          </NavLink>
        </div>
        <div className={`${menu ? "main-menu active" : "main-menu"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <span className="cart-number">3</span>
                <span className="cart-icon">
                  <HiOutlineShoppingCart />
                </span>
              </NavLink>
            </li>
          </ul>
          <span className="close">
            <CgClose
              onClick={() => setMenu(!menu)}
              className="close-icon"
              name="close-icon"
            />
          </span>
        </div>

        {/* For Mobile Open/Close Icon */}
        <div className="open-close">
          {!menu ? (
            <CgMenu
              onClick={() => setMenu(!menu)}
              className="bars"
              name="bars"
            />
          ) : (
            <CgClose
              onClick={() => setMenu(!menu)}
              className="close-icon"
              name="close-icon"
            />
          )}
        </div>
      </div>
    </Nav>
  );
};

// Style
const Nav = styled.nav`
  background: #90adab;
  padding: 10px 0;
  /* position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999; */

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .main-menu.active {
    position: fixed;
    z-index: 11;
    height: 100vh;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    background: #0f0f0f;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  li {
    position: relative;
  }

  a {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  .cart-icon {
    font-size: 25px;
  }

  .cart-number {
    display: flex;
    font-size: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: #3318bb;
    background: #8d8de6;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }

  .open-close {
    display: none;
    .bars {
      color: #fff;
      font-size: 30px;
    }
    .close-icon {
      color: #fff;
      font-size: 30px;
    }
  }

  .close {
    color: #ffffff;
    background: #426096;
    border-radius: 5px;
    display: none;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .open-close {
      display: inline-flex;
    }

    .main-menu {
      display: none;
    }

    .close {
      display: flex;
    }
  }
`;

export default Header;
