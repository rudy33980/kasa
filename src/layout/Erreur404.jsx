// import React from 'react';
import img from "../assets/404.jpg";
import "../style/Erreur.css"

const Erreur404 = () => {
    return (
        <div className='PageErreur'>
            <img src={img} alt="ERREUR 404" className='erreur' />
            <p className="message">Oups!La page que vous demandez n'existe pas</p>
            <span className="linkErreur"><a href="http://localhost:3000/Home"> Retourner sur la page d'accueil</a>
            </span>
        </div>
    );
};

export default Erreur404;