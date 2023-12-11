/* eslint-disable react/prop-types */
import { useState } from "react";
import products from "../enum/products";
import ViewProduct from "./ViewProduct";
import "./Products.css";

function Products({ updateCart }) {
  const [productToShow, setProductToShow] = useState([]);

  productToShow.length === 1
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      {productToShow.length === 1 ? (
        <ViewProduct
          productToShow={productToShow[0]}
          setProductToShow={setProductToShow}
        />
      ) : (
        console.log(productToShow)
      )}

      <section>
        <div className="container">
          <div className="grid">
            {products.map((item, idx) => (
              <div className="gridItem" key={idx}>
                <div className="gridItemImgCont">
                  <img
                    src={item.img}
                    alt=""
                    onClick={() => setProductToShow([item])}
                  />
                </div>
                <div>
                  <div className="itemTitle">{item.title}</div>
                  <div className="priceCont">
                    <span className="sign">$</span>
                    {item.price}
                    <span className="price"></span>
                  </div>

                  <button
                    className="buttonPrimaryInvert"
                    onClick={() => updateCart("add", item)}
                  >
                    Add To Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
