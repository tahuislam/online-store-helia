// import "./App.css";
import Products from "./components/Products.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DeafultLayout from "./layout/DeafultLayout.jsx";
import Home from "./components/Home.jsx";
import { useState } from "react";

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
          path: "products/all",
          element: <Products updateCart={updateCart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
