/* eslint-disable react/prop-types */
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
            <a href="#">Explore Collection</a>
          </div>
        </div>
      </section>

      <h4 className="sectionTitle">Featured Products</h4>
      <Products updateCart={updateCart} />

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
            <a href="#">Explore Collection</a>
          </div>
        </div>
      </section>

      <section className="twoSideDisplay">
        <div className="container">
          <div className="flex space-between align-center">
            <div className="textDisplay">
              <h4>About</h4>
              <br />
              <br />
              <p>Our Story</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                enim voluptatibus consequuntur. Quam ipsa exercitationem sunt,
                earum iusto nesciunt, molestiae neque porro dicta quibusdam
                vitae voluptate, vero voluptas aliquam! Vel.
              </p>
              <p>Our Vision</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet eius velit obcaecati adipisci laudantium quas sit
                explicabo nesciunt tempore quae!
              </p>
              <a href="">Read More</a>
            </div>
            <div className="imgDisplay">
              <img
                src="https://images.unsplash.com/photo-1646270968745-05e006d5bdd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
