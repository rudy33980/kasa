// import React from 'react';
import img from "../assets/404.jpg";
import message from "../assets/message.jpg";
import accueil from "../assets/accueil.jpg";
import "../style/Erreur.css"

const Erreur404 = () => {
    return (
        <div className='PageErreur'>
            <img src={img} alt="ERREUR 404" className='erreur' />
            <img src={message} alt="message" className='page' />
            <img src={accueil} alt="messageRetourAccueil" className='accueil' />
        </div>
    );
};

export default Erreur404;