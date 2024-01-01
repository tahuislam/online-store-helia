// import "./App.css";
import Products from "./components/Products.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DeafultLayout from "./layout/DeafultLayout.jsx";
import Home from "./components/Home.jsx";
import { useState } from "react";
import About from "./components/About.jsx";
import Categories from "./components/Categories.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  function updateCart(op, newObj) {
    const inCart = cart.find((item) => item.id === newObj.id);

    if (op === "add") {
      if (inCart) {
        const newCart = [...cart].map((item) =>
          item.id === newObj.id
            ? item.qty < 10
              ? { ...item, qty: item.qty + 1 }
              : { ...item, qty: 10 }
            : item
        );
        setCart(newCart);
      } else {
        const newCart = { ...newObj, qty: 1 };
        setCart([...cart, newCart]);
      }
      //add
    } else if (op === "dec") {
      if (inCart) {
        const newCart = [...cart].map((item) =>
          item.id === newObj.id
            ? item.qty > 1
              ? { ...item, qty: item.qty - 1 }
              : { ...item, qty: 1 }
            : item
        );
        setCart(newCart);
      }
    } else if (op === "rmv") {
      if (inCart) {
        const newCart = [...cart].filter((item) => item.id !== newObj.id);
        setCart(newCart);
      }
    }
    //updateCart
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DeafultLayout updateCart={updateCart} cart={cart} />,
      children: [
        {
          path: "/",
          element: <Home updateCart={updateCart} />,
        },
        {
          path: "/products/all",
          element: <Products updateCart={updateCart} cat="all" pageTitle="All Products" />,
        },
        {
          path:"/categories",
          element:  <Categories cat="categories" pageTitle="Categories & Collections" />
        },
        {
          path:"/collections/winter",
          element:  <Products updateCart={updateCart} cat="winter" pageTitle="Winter Collection" />
        },
        {
          path:"/products/featured",
          element:  <Products updateCart={updateCart} cat="featured" pageTitle="Featured Products" />
        },
        {
          path:"/products/shirts",
          element:  <Products updateCart={updateCart} cat="shirts" pageTitle="Shirts" />
        },
        {
          path:"/products/jeans",
          element:  <Products updateCart={updateCart} cat="jeans" pageTitle="Jeans" />
        },
        {
          path:"/products/jackets",
          element:  <Products updateCart={updateCart} cat="jackets" pageTitle="Jackets" />
        },
        {
          path:"/about",
          element:  <About pageTitle="Featured Products" />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
