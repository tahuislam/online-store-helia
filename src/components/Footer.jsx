import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerInner flex">
            <div className="flex space-between ulConts">
              <div className="item">
                <h6>Categories</h6>
                <ul>
                  <li>
                    <a href="#">Shirts</a>
                  </li>
                  <li>
                    <a href="#">Jeans</a>
                  </li>
                  <li>
                    <a href="#">Trousers</a>
                  </li>
                  <li>
                    <a href="#">Watches</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <h6>Help</h6>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">Locations</a>
                  </li>
                </ul>
              </div>

              <div className="item">
                <h6>About</h6>
                <ul>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Our Process</a>
                  </li>
                </ul>
              </div>
            </div>
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
        </div>
        <span> 3 </span> <span></span>
        <h1>Ok done</h1>
      </footer>
    </>
  );
}

export default Footer;
