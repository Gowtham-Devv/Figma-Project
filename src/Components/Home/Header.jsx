import React from "react";
import { Element, Logo } from "../../images/index";
import "../Home/Header.css";
import Navbar from "./Navbar";
import Content1 from "./Content1";

function Header() {
  return (
    <div className="bgr">
      <img src={Element} className="element" />
      <img src={Logo} alt="Logo" className="logo" />
      <Navbar />
      <Content1 />
    </div>
  );
}

export default Header;
