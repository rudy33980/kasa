import React from 'react';
import { useState} from "react";
import "../style/Slideshow.css";
import left from "../assets/left.svg"
import right from "../assets/right.svg";


export default function Slideshow({pictures}) {
      const [currentIndex, setCurrentIndex] = useState(0);
      console.log(currentIndex);
      const totalPictures = pictures.length;
      

    //comportement
    function next() {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        return(newIndex)
    }


    function before() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    }
 

    return (
                    <div >
               
                       {pictures.map((picture, index) => {
                         return (
                               <div key={index}>
                                  {index === currentIndex && (
                                  <div className='ContainerPictures'>
                                    <img className='dimPictures' src={picture} alt="Slider" />
                                    <img src={left} onClick={before} alt="arrowleft" className='arrowleft'/>
                                    <img src={right} onClick={next} alt="arrowright" className='arrowright'/>
                                    <span className='count'>{currentIndex + 1}/{totalPictures}</span>
                                 </div>
                                )}
                                </div>
                                );
                             })}
                                 
                    
                     
                    
                    </div>
        
    );
};
