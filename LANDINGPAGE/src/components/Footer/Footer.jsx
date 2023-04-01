import logo from "../../assets/images/logo.svg";
import "./Footer.scss";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* icons */}
        <div className="icons">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="copyright-mobile">
            <p>Copyright 2020. All Rights Reserved.</p>
          </div>
          <div className="social-icon">
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
        {/* links */}
        <div className="links">
          <div className="link-one">
            <ul>
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="link-two">
            <ul>
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        {/* search */}
        <div className="search">
          <div className="search bar">
            <form>
              <input
                className="text"
                type="text"
                placeholder="Updates in your inbox"
              />
              <input className="btn" type="submit" value="Go"></input>
            </form>
          </div>
          <div className="copyright">
            <p>Copyright 2020. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
