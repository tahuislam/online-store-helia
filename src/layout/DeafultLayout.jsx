/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DeafultLayout = ({ cart, updateCart }) => {
  return (
    <>
      <Header cartArray={cart} updateCart={updateCart} />
      <Outlet />
      <Footer />
    </>
  );
};

export default DeafultLayout;
