/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Home.css'
import Products from "./Products";
const Home = ({ updateCart }) => {
  return (
    <main>
      <section
        className="heroSection"
        style={{ backgroundImage: " url(/assets/hero.jpg)" }}
      >
        <div className="container">
          <div className="heroTextCont" style={{}}>
            <h1>Winter Collection</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              veniam nisi fuga tempora voluptas tempore eius deserunt placeat
              libero accusamus.
            </p>
            <Link to="/collections/winter">Explore Collection</Link>
          </div>
        </div>
      </section>

      <h4 className="sectionTitle">Featured Products</h4>
      <Products updateCart={updateCart} cat='featured' pageTitle="Featured Products" inHome={true} />

      <section
        className="displayFeatured"
        style={{ backgroundImage: "url(/assets/hero6.jpg)" }}
      >
        <div className="container">
          <div className="heroTextCont">
            <h1>Knitwear Liera</h1>
            <p>
              Accusantium facere magni ut adipisci, maxime hic labore iure vero
              obcaecati temporibus aliquid cupiditate eaque, quidem aspernatur
              vel cum fuga? Praesentium eos rerum deserunt, cupiditate illo
              quis.
            </p>
            <Link to="/products/jackets">Explore Collection</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
