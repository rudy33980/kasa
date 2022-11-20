// import React from "react";
import { useParams } from "react-router-dom";
import "../style/EquipementLog.css"

const EquipementLog = () => {
  let { itemTags, equipments } = useParams();
  console.log(itemTags, equipments);

  return (
    <header>
      <div className="bg">
        {/* <p className="tags">{itemTags}</p>
        <ul>{equipments}</ul> */}

        {/* <img src={idLogement} alt="logement" /> */}
      </div>
    </header>
  );
};

export default EquipementLog;
