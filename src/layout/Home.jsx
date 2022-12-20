import "../style/Home.css";
import Card from '../components/Card';
import img from "../assets/img.jpg";


function Home() {


  return (
    <>

      {/* Banniere  */}
      <div className="containerPage">
        <div className="containerHeader">
          <img className="banniere" src={img} alt="banniere" />
          <h1 className="titre">
            Chez vous, partout et ailleurs
          </h1>
        </div>
        <div>
          {/* Appel du composant Card  */}
          <Card />
        </div>
      </div>
    </>
  )
}
export default Home;
