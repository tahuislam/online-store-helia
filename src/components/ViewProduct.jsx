import { useState } from 'react';
import './ViewProduct.css'
function ViewProduct({productToShow, setProductToShow,updateCart}){

    const [drawer,setDrawer] = useState([{id:1,state:false},{id:2,state:false},{id:3,state:false}]);
    
    function openDrawer(drawerId, className){
         drawerId == 0 && drawer[0].state==false ? drawer[0].state = true:drawerId == 1 && drawer[1].state==false ? drawer[1].state = true:drawerId == 2 && drawer[2].state==false ? drawer[2].state = true: console.log("nothing")

        setDrawer(drawer);
        
        
    }
    console.log(drawer);

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
                <button
            className="buttonPrimaryInvert"
            onClick={() => updateCart("add", productToShow)}
          >
            Add To Bag
          </button>

<ul className='viewProductToggle'>
    <li><div className="title" onClick={()=>openDrawer(0 , "viewProductDrawer1")}>Details<i className="bi bi-chevron-right"></i></div>
    <div className="viewProductInfoTogglerContent viewProductDrawer1">
        <h1>details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quae. Nam laborum magni iusto, harum autem modi ratione libero reiciendis. Explicabo atque, repellendus voluptatem nemo accusamus recusandae quam. Ea, impedit.</p>
    </div>
     </li>
    <li><div className="title" onClick={()=>openDrawer(1, "viewProductDrawer2")}>Size & Fit<i className="bi bi-chevron-right"></i></div>
    <div className="viewProductInfoTogglerContent viewProductDrawer2">
    <h1>sizee</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quae. Nam laborum magni iusto, harum autem modi ratione libero reiciendis. Explicabo atque, repellendus voluptatem nemo accusamus recusandae quam. Ea, impedit.</p>
    </div>
     </li>
    <li><div className="title" onClick={()=>openDrawer(2, "viewProductDrawer3")}>Care<i className="bi bi-chevron-right"></i></div>
    <div className="viewProductInfoTogglerContent viewProductDrawer3">
    <h1>this is how to clean</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quae. Nam laborum magni iusto, harum autem modi ratione libero reiciendis. Explicabo atque, repellendus voluptatem nemo accusamus recusandae quam. Ea, impedit.</p>
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