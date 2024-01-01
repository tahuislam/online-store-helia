import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerInner flex">
          <div className="item letterBox">
              <h6>Stay Updated!</h6>
              <p>
                Sign up to our daily newsletter to stay updated with latest
                blogs, products and more!
              </p>
              <form action="#">
                <input type="email" placeholder="Put your email here" />
                <input type="submit" value="Sign up" />
              </form>
            </div>
            <div className="flex space-between ulConts">
              <div className="item">
                <h6>Categories</h6>
                <ul>
                  <li>
                    <Link to="/products/shirts">Shirts</Link>
                  </li>
                  <li>
                    <Link to="/products/jeans">Jeans</Link>
                  </li>
                  <li>
                    <Link to="/products/jackets">Jackets</Link>
                  </li>
                  <li>
                    <Link to="/collections/winter">Winter Collection</Link>
                  </li>
                </ul>
              </div>
              <div className="item">
                <h6>Help</h6>
                <ul>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="#">Locations</Link>
                  </li>
                </ul>
              </div>

              <div className="item">
                <h6>About</h6>
                <ul>
                  <li>
                    <Link to="/about">Our Story</Link>
                  </li>
                  <li>
                    <Link to="/about">Partners</Link>
                  </li>
                  <li>
                    <Link to="/about">Our Process</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <ul className="footerSocials flex center">
            <li>
              <a href="">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
          <div style={{textAlign:"center",marginTop:"var(--space-10)"}} className="credit">This website is developed by <a href="https://github.com/tahuislam" target="blank">@tahuislam</a></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
