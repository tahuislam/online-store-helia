import { useState } from 'react'
import './Cart.css'


export default function Cart({ cartArray, updateCart,cartStyle,toggleCart }) {

    const cartTotal = cartArray.reduce((acc,curr)=>(acc+curr.price*curr.qty),0)
    function CartItem() {

        return (
            (cartArray || []).map((item, idx) => (
                <li key={idx}>
                    <div className="cartItemSection1">
                        <div className="cartItemImgCont">
                        <img src={item.img} alt="" />
                        </div>
                        <div className="cartItemInfo">
                            <div>{item.title}</div>
                            <div className="cartItemPrice">
                                <span style={{ marginRight: "2px" }}>$</span>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="cartItemSection2">
                        <button onClick={()=>updateCart("add",{
            id:item.id,
            title:item.title,
            img:item.img,
            price:item.price
        })}><i className="bi bi-plus"></i></button>
                        <input type="text" readOnly value={item.qty} />
                        <button onClick={()=>updateCart("dec",{
            id:item.id,
            title:item.title,
            img:item.img,
            price:item.price
        })}><i className="bi bi-dash"></i></button>
                    </div>
                </li>
            ))

        )
    }
    return (
        <>
            <div className="cartCont" style={cartStyle}>
                <div className="container">
                    <div className="cartTopSection">
                    <h5>Shopping Bag ({cartArray.length})</h5>
                    <button className="cartCloseBtn" onClick={toggleCart}>
                    <i className="bi bi-x"></i>
                    </button>
                    </div>

                    <ul className="cartItemList">
                        {CartItem()}
                    </ul>

                    <div className="cartBottomSection">
                        <div className="cartTotalCont">
                            <span className="cartBottomLabel">Total:</span>
                            <span className="cartBottomPrice"><span style={{ marginRight: "2px" }}>$</span>{cartTotal}</span>
                        </div>
                        <button className="cartCta">Place Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}