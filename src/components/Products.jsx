/* eslint-disable react/prop-types */
import { useState } from "react";
import products from "../enum/products";
import ViewProduct from "./ViewProduct";
import "./Products.css";

function Products({ updateCart, cat, pageTitle, inHome }) {
  const [productToShow, setProductToShow] = useState([]);

  productToShow.length === 1
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  function itemRender(item, idx) {
    return (
      <div className="gridItem" key={idx}>
        <div className="gridItemImgCont">
          <img src={item.img} alt="" onClick={() => setProductToShow([item])} />
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
    );
  }

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
        {!inHome ? (
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4 className="sectionTitle">{pageTitle}</h4>
          </div>
        ) : (
          console.log("Product Category not Defined")
        )}

        <div className="container">
          <div className="grid">
            {products.map(
              (item, idx) =>
              cat == 'all'
              ? itemRender(item,idx)
              : item.cat.map((currentCat) =>
                  currentCat == cat
                    ? itemRender(item, idx)
                    : console.log("no cat")
                )

              /*
              item.cat.map((curr)=>

              curr==cat?
              (
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

              ):(console.log("not ok"))

              )
              */
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
