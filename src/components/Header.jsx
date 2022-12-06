import React from "react";
import logo from "../assets/logo.jpg";
import "../style/Header.css"


const Header = () => {
  return (
    <div>
      <div className="header">
        <img id="logo" src={logo} alt="logo-Kasa" />
        <div className="linkToHome">
          <a href="/">Accueil</a>
          <a href="/">A Propos</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
