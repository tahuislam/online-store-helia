import { Link } from "react-router-dom";
import categories from "../enum/categories";
import  './Categories.css'

function Categories({ pageTitle }) {
  return (
    <>
      <section>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 className="sectionTitle">{pageTitle}</h4>
        </div>


          <div className="container categoryCont" style={{backgroundImage:"url(/public/assets/cat-jackets.jpg)"}}>
            <div className="heroTextCont">
              <h5>Winter Collection</h5>
              <Link to="/collections/winter">Explore</Link>
            </div>
          </div>
          <div className="container categoryCont" style={{backgroundImage:"url(/public/assets/cat-shirt.jpg)"}}>
            <div className="heroTextCont">
              <h5>Shirts</h5>
              <Link to="/products/shirts">Explore</Link>
            </div>
          </div>
          <div className="container categoryCont" style={{backgroundImage:"url(/public/assets/cat-jeans.jpg)"}}>
            <div className="heroTextCont">
              <h5>Jeans</h5>
              <Link to="/products/jeans">Explore</Link>
            </div>
          </div>
          <div className="container categoryCont" style={{backgroundImage:"url(/public/assets/cat-jackets2.jpg)"}}>
            <div className="heroTextCont">
              <h5>Jackets</h5>
              <Link to="/products/jackets">Explore</Link>
            </div>
          </div>


      </section>
    </>
  );
}

export default Categories;
