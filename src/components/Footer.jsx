import React from "react";
import logofooter from "../assets/logofooter.jpg";
import logo from "../style/logo-footer.css"

const Footer= () => {
  return (
    <div>
        <img className="logo-footer" src={logofooter} alt={logo} />
     </div>
  );
};

export default Footer;
