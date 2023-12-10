import { useState } from 'react';
import './ViewProduct.css'
function ViewProduct({productToShow, setProductToShow}){


return(
    <>
    <section className="viewProductSection">
        <button className='secondaryCloseBtn' onClick={()=>setProductToShow([])} ><i className="bi bi-x"></i></button>
        <div className="container">
            <div className="viewProductDisplayCont">
            <div className="viewProductImgCont">
                <img src={productToShow.img} alt={productToShow.title+" Image"} />
            </div>
            </div>
            <div className="viewProductInfoCont">
                <div style={{fontWeight:"bold",marginBottom:"var(--space-2)"}}>{productToShow.title}</div>




                <h4 className="viewProductPriceCont" style={{color:"var(--color-accent)",marginBottom:"0"}}>
                    <span style={{fontSize:"var(--font-size-h6)",fontWeight:"normal",marginRight:"var(--space-half)"}}>$</span>
                    <span>{productToShow.price}</span>
                </h4>


                <div className="viewProductStars">
                    <i className='bi bi-star-fill' star={+true}></i>
                    <i className='bi bi-star-fill' star={+true}></i>
                    <i className='bi bi-star-fill' star={+true}></i>
                    <i className='bi bi-star' star={+false}></i>
                    <i className='bi bi-star' star={+false}></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa, blanditiis ipsam quis harum quisquam eum! Quasi autem consectetur dolor?</p>

<ul className='viewProductToggle'>
    <li><div className="title">Details<i className="bi bi-chevron-right"></i></div>
    <div className="viewProductInfoTogglerContent">
        <h1>Ok</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quae. Nam laborum magni iusto, harum autem modi ratione libero reiciendis. Explicabo atque, repellendus voluptatem nemo accusamus recusandae quam. Ea, impedit.</p>
    </div>
     </li>
    <li><div className="title">Size & Fit<i className="bi bi-chevron-right"></i></div>
    <div className="viewProductInfoTogglerContent">

    </div>
     </li>
    <li><div className="title">Care<i className="bi bi-chevron-right"></i></div>
    <div className="viewProductInfoTogglerContent">

    </div>
     </li>
</ul>

            </div>
        </div>
    </section>
    </>
);

}

export default ViewProduct