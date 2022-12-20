import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Card() {

  // state  (état, données)
  let navigate = useNavigate();

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('logements.json', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // Comportements;

  const handleSelect = (id) => {
    navigate("../Logements/" + id)
  }
  // affichage (render)

  return (
    <div className="container">
      <div>
        <section>

          <div className="box">
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <div className="card" key={item.id}>
                  <img onClick={() => handleSelect(item.id)}
                    className="pictures"
                    src={item.cover}
                    alt="logement"
                  />

                  <p className="itemTitle">{item.title}</p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}