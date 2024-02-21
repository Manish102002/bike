// import PageOne from "./PageOne"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import NextPage from "./NextPage"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { Power0 } from "gsap-trial/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger";



const LandingPage = () => {
   
    return (
        <>
            <div>
                <div className="background-video-container lg:h-[588px] md:h-[458px]">
                    <video autoPlay muted loop className="background-video " >
                        <source src="/public/vedio/vedio.mp4" type="video/mp4" />

                    </video>
                   
                </div>

                <div className=" landing lg:ml-20 md:ml-20 sm:ml-16 ml-12 -translate-y-[400px] absolute text-white z-0">
                        <h1 className=" font-semibold  text-5xl mb-2" >Shotgun 650</h1>
                        <h6 className=" font-thin mb-4">Inspired by custom. For custom.</h6>
                       <Link to="/explore">
                       <button className=" text-md font-none py-2 bg-darkYellow hover:shadow-darkYellow shadow-md hover:bg-lightYellow transition duration-200 ease-in  rounded-[2rem] text-black px-6">Explore</button>

                        </Link>

                    </div>
            </div>
            
        <NextPage/>
            
        <Footer/>        
        </>
    )
}

export default LandingPage