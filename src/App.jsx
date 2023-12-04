import { useState } from 'react'
import './App.css'
import products from './enum/products.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'



export default function App() {
  const [data,setData] = useState([]);

  function updateCart(op,newObj) {

    const inCart = data.find((item)=>item.id===newObj.id);

    if(op==="add"){
    if(inCart){
      const newData = [...data].map((item)=>
      item.id === newObj.id?(item.qty<10?{...item,qty:item.qty+1}:{...item,qty:10}):item
      )
      setData(newData);
    }else{
      const newData = {...newObj,qty:1}
      setData([...data,newData]);
      
    }
    //add
  }else if(op==="dec"){
    if(inCart){
      const newData = [...data].map((item)=>
      item.id === newObj.id?(item.qty>1?{...item,qty:item.qty-1}:({...item,qty:1})):(item)
      )
      setData(newData);
    }
  }
  //updateCart
  }


  console.log(data);

  return (
    <>
      <Header cartArray={data} updateCart={updateCart} />
      <section className="heroSection" style={{backgroundImage:" url(/src/assets/hero.jpg)"}}>
        <div className="container">
          <div className="heroTextCont" style={{}}>
            <h1>Winter Collection</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse veniam nisi fuga tempora voluptas tempore eius deserunt placeat libero accusamus.</p>
            <a href="#">Explore Collection</a>
          </div>
        </div>
      </section>

      <section className="productSection">
        <div className="container">
          <h4 className='sectionTitle'>All Products</h4>
          <div className="product_grid">
            {products.map((item, idx) => (
              <div className="item" key={idx}>
                <div className="img_cont">
                  <img src={item.img} alt="" />
                  <div className="overlay">
                  </div>
                </div>
                <div className="item_footer">
                  <div className="item_footer_row"><div className="itemTitle">{item.title}</div>
                    <div className="price_cont"><span className="dollar_sign">$</span>{item.price}<span className="price"></span></div>
                    <button className="add_to_cart" onClick={() => updateCart("add",item)}>Add To Bag</button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>



      <section className="displayFeatured" style={{backgroundImage:"url(https://images.unsplash.com/photo-1571139627661-cf707929f465?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
        <div className="container" >
          <div className="heroTextCont">
            <h1>Knitwear Liera</h1>
            <p> Accusantium facere magni ut adipisci, maxime hic labore iure vero obcaecati temporibus aliquid cupiditate eaque, quidem aspernatur vel cum fuga? Praesentium eos rerum deserunt, cupiditate illo quis.</p>
            <a href="#">Explore Collection</a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}



