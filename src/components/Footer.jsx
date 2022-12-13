import React from "react";
import logofooter from "../assets/logoFooter.svg";
import logofootersmartphone from "../assets/logofootersmartphone.jpg";
import logo from "../style/footer.css"


const Footer= () => {
  return (

    
    <div>
        <img className="logo-footer" src={logofooter} alt={logo} />
        <img className="logo-footer-smartphone" src={logofootersmartphone} alt={logo} />
    </div>

  );
};

export default Footer;
