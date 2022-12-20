import React from 'react';
import { useState } from "react";
import "../style/Slideshow.css";
import left from "../assets/left.svg"
import right from "../assets/right.svg";


export default function Slideshow({ pictures }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   console.log(currentIndex);
    const totalPictures = pictures.length;

  

   function next() {
      const isLastSlide = currentIndex === pictures.length - 1;
      console.log(isLastSlide);
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      console.log(newIndex);
      return (newIndex)
   }


   function before() {
      const isFirstSlide = currentIndex === 0;
      console.log(isFirstSlide);
      const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
      console.log(newIndex);
      setCurrentIndex(newIndex);

   }


   // Affichage 
   return (
      <div >
         {pictures.map((picture, index) => {
            return (
               <div key={index} className='ContainerPictures'>
                  {index === currentIndex && (
                     <img className='dimPictures' src={picture} alt="Slider" />
                  )}
               </div>
            );
         })}

         <div className="arrows">
            {totalPictures > 1 && (
               <img src={left} onClick={before} alt="arrowleft" className='arrowleft' />
            )}
            {totalPictures > 1 && (
               <img src={right} onClick={next} alt="arrowright" className='arrowright' />
            )}
         </div>
         {totalPictures > 1 && (
         <span className='count'>{currentIndex + 1}/{totalPictures}</span>
         )}
      </div>
   );

}
