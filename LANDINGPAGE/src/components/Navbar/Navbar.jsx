import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";

import { useState } from "react";
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href="#" className="">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="" className="">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="">
              Product
            </a>
          </li>
          <li>
            <a href="" className="">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="">
              Careers
            </a>
          </li>
          <li>
            <a href="" className="">
              Community
            </a>
          </li>
        </ul>
        <a href="" className="action-btn">
          Get Started
        </a>
        <div onClick={handleDropdown} className="toggle-btn">
          {openDropdown ? (
            <img src={close} alt="" className="" />
          ) : (
            <img src={burger} alt="" className="" />
          )}
        </div>
      </div>

      <div>
        <ul className={openDropdown ? "dropdown_menu open" : "dropdown_menu"}>
          <li>
            <a href="" className="">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="">
              Product
            </a>
          </li>
          <li>
            <a href="" className="">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="">
              Careers
            </a>
          </li>
          <li>
            <a href="" className="">
              Community
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
