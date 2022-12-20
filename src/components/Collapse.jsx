import React from 'react';
import { useState } from "react";
import "../style/Collapse.css";
import flecheHaut from "../assets/flecheHaut.svg";

const Collapse = (props) => {
  const [currentIndex, setCurrentIndex] = useState(false);

  const arrowLeft = () => {
    setCurrentIndex(!currentIndex);
  };

  return (
    <div className="Collapse" >
      <div onClick={arrowLeft} className="Collapse-visible" >
        <h1>
          {props.title}
        </h1>
        <img
          className={currentIndex ? "flecheBas" : "flecheHaut"}
          src={flecheHaut}
          alt="Arrow direction"
        />
      </div>


      <div className={currentIndex ? "Collapse-change Animate" : "Collapse-change"}>
        {props.description}
      </div>
    </div>


  );
};

export default Collapse;