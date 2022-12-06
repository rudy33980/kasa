import React,{useEffect} from "react";
import { useParams } from 'react-router-dom';
import DefilementPictures from "../components/DefilementPictures";
import logements from "../logements.json"
import '../style/FicheLogement.css'
// import DefilementPictures from "../components/DefilementPictures";

export default function FicheLogements() {
  let { id } = useParams();
  console.log(id);
  const slides = logements.data;
  
  
  useEffect(() => {
    let habitation = logements.find((logement) => id === logement.id)
    console.log(habitation);
    
    if (!habitation) {
      console.log("/error");
    }
  })
  
  
  return (
    <div >
               <div >
               {logements.filter((logement) => id === logement.id)
               .map((logement,index) => (
                <div key={product.id - index}>
                 <DefilementPictures       />


               )
               

                    
                 )
                )}
              </div>
                </div>
        </div>

    )
   
}