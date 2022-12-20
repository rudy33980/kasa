import { useParams } from 'react-router-dom';
import Slidershow from "../components/Slideshow";
import logements from "../logements.json";
import '../style/Logement.css'
import stars from "../assets/stars.svg";
import emptyStars from "../assets/emptyStars.svg";
import Collapse from "../components/Collapse";
import Erreur404 from './Erreur404';


export default function FicheLogements() {
  let { id } = useParams();

  console.log(id);

  const habitation = logements.find((logement) => id === logement.id)

  if (!habitation) {
    return <Erreur404 />;
  }


  let rating = [];

  const starsFull = habitation.rating;

  for (let i = 0; i < starsFull; i++) {

    rating.push(
      <img className='StarsFull'
        src={stars}
        alt='StarsFull' />);
  }


  for (let p = rating.length; p < 5; p++) {

    rating.push(
      <img className='StarsFull'
        src={emptyStars}
        alt='StarsEmpty' />);
    console.log(p);
  }


  return (
    <>
      {logements.filter((logement) => id === logement.id)
        .map((logement, index) => (
          <div className='containerLogement' key={logement.id - index} >
            <div className="containerPictures">
              <Slidershow pictures={logement.pictures} />
            </div>
            <div className="containerInformationFiche">
              <div className="TitreduLogement">{logement.title}
                <div className="flexAlignItems">
                  <div className='containerEtatCivil'>
                    <div className="align">
                      <div className='name'>{logement.host.name}</div>
                      <img className="portrait" src={logement.host.picture} alt="portrait" />
                    </div>
                    <div className="containerStars">{rating}</div>

                  </div>
                </div>
              </div>
              <div className="location">{logement.location}</div>

              <div className='tags'>
                {logement.tags.map((tag) => (
                  <div className='tag' key={tag} >
                    {tag}
                  </div>

                ))}
              </div>

              <div className='containerEquipement'>
                <Collapse title="Description"
                  description={logement.description} />
                <Collapse title="Equipements" className="equipement"
                  description={logement.equipments.map((equipement) => (
                    <div key={equipement} >
                      {equipement}
                    </div>
                  ))}
                />
              </div>
            </div>
          </div>

        )
        )}
    </>
  )

}