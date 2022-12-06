import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import img from "../assets/img.jpg";

  
  
export default function Card () {

  // state  (état, données)
   let navigate = useNavigate();

  const [data, setData] = useState([]);
  // console.log(setData);
  const getData = () => {
    fetch('logements.json', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // Comportements;

  const handleSelect = (id) => {
    // console.log(id);
    navigate("../FicheLogements/"+id)
  }
  // affichage (render)

  return (
    <div className="container">
      <div>
           <section>
          <div>
            <img className="banniere" src={img} alt="banniere" />
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
          <div className="box">
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <div className="card" key={item.id}>
                  <img onClick= {()=> handleSelect(item.id) }
                    className="pictures"
                    src={item.cover}
                    alt="logement"
                  />
                  <p>{item.title}</p>
     
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}