// import React, { useEffect, useRef } from "react";
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const EPage2 = () => {

    const timeout = setTimeout(() => {
        ScrollReveal().reveal(".text2", {
          origin: 'bottom',
          reset: true,
          distance: '1000px',
          duration: 3000,
          delay: 500,
        });
  
        ScrollReveal().reveal(".text3", {
          origin: 'bottom',
          reset: true,
          distance: '1000px',
          duration: 3000,
          delay: 600,
        });
  
        ScrollReveal().reveal(".text4", {
          origin: 'bottom',
          reset: true,
          distance: '1000px',
          duration: 3000,
          delay: 700,
        });
  
  
        ScrollReveal().reveal(".text5", {
          origin: 'bottom',
          reset: true,
          distance: '1000px',
          duration: 3000,
          delay: 800,
        });

        ScrollReveal().reveal(".text6", {
          origin: 'bottom',
          reset: true,
          distance: '1000px',
          duration: 3000,
          delay: 900,
        });

        ScrollReveal().reveal(".text7", {
          origin: 'bottom',
          reset: true,
          distance: '1000px',
          duration: 3000,
          delay: 1000,
        });
      }, 0);
    


    return (
        <>
            <div className="textBox text-lightYellow overflow-hidden bg-cover h-[90vh] flex pt-20 items-center gap-6 flex-col lg:text-3xl md:text-3xl sm:text-lg pb-2 w-max-[100vw] " style={{ backgroundImage: 'url(/public/Eimages/img1.jpg)' }}>
                <h1 className="text2">A CENTURY OF PURE MOTORCYCLING DNA COLLIDED</h1>
                <h1 className="text3">WITH THE ANARCHIC SPIRIT OF CUSTOM CULTURE</h1>
                <h1 className="text4">AND A SHAPESHIFTING MUTANT WAS BORN</h1>
                <h1 className="text5">SHOTGUN 640</h1>
                <h1 className="text6">INSPIRED BY CUSTOM</h1>
                <h1 className="text7">FOR CUSTOM</h1>
            </div>
            {/* <h1>Manish choudhary</h1> */}
        </>
    )
}

export default EPage2