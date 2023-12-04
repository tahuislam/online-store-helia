import { useState } from "react";
import "./Header.css";
import Cart from "./Cart";

let burgerStatus = false;
let cartStatus = false;

function Header({ cartArray, updateCart }) {
  const [burgerStyle, setBurgerStyle] = useState({});
  const [cartStyle, setCartStyle] = useState({});
  const [headerStyle, setHeaderStyle] = useState({});
  document.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setHeaderStyle(
        {
          backgroundColor: "#000000cc",
        } /*{backgroundColor: "rgba(0, 0, 0, 0.356)", backdropFilter: "blur(50px) saturate(200%)"}*/
      );
    } else {
      setHeaderStyle({});
    }
  });

  function toggleBurger() {
    console.log(burgerStatus);
    if (!burgerStatus) {
      setBurgerStyle({ display: "block" });
      burgerStatus = true;
    } else {
      setBurgerStyle({ display: "none" });
      burgerStatus = false;
    }
  }

  function toggleCart() {
    if (!cartStatus) {
      setCartStyle({ display: "block" });
      cartStatus = true;
    } else {
      setCartStyle({ display: "none" });
      cartStatus = false;
    }
  }

  return (
    <>
      <header style={headerStyle}>
        <div className="headerLeft">
          <button className="burgerBtn" onClick={toggleBurger}>
            <i className="bi bi-list"></i>
          </button>
          <div className="logo">Helia</div>
        </div>
        <ul className="nav" style={burgerStyle}>
          <button className="closeBurgerBtn" onClick={toggleBurger}>
            <i className="bi bi-x"></i>
          </button>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              Categories
            </a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Featured</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <ul className="rightNav">
          <li className="headerDropDownTrigger">
            <a href="#">
              Account <i className="bi bi-chevron-down"></i>
            </a>
            <ul className="headerDropDown">
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
            </ul>
          </li>
          <li>
            <button
              className="bagBtn"
              style={{ cursor: "pointer" }}
              onClick={toggleCart}
            >
              <i className="bi bi-bag"></i>
            </button>
            <span className="cartDisplayNumber">{cartArray.length}</span>
          </li>
        </ul>
        <Cart
          cartStyle={cartStyle}
          cartArray={cartArray}
          updateCart={updateCart}
          toggleCart={toggleCart}
        />
      </header>
    </>
  );
}

export default Header;
