import React from "react";
import logo from "../assets/logo.jpg"
import Home from "../pages/Home";

const Header = () => {
  <Home />;
  return (
    <div>
      <header className="header">
        <img id="logo" src={logo} alt="logo-Kasa" />
        <div className="linkToHome">
          <a href="/">Accueil</a>
          <a href="/">A Propos</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
