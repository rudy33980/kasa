import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import Header from "../components/Header";
import img from "../assets/img.jpg";

function Home() {
  // state  (état, données)
  const [data, setData] = useState([]);
  console.log(setData);
  const getData = () => {
    fetch('logements.json', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // Comportements;
  let navigate = useNavigate();
  const logementCible = (itemTags, equipments) => {
  navigate("../EquipementLog/" + itemTags + equipments);
  }
  // affichage (render)
  return (
    <div className="container">
      <div>
        <Header />
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
                  {item.id}
                  <img
                    onClick={() => logementCible(item.tags, item.equipments)}
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
export default Home;
