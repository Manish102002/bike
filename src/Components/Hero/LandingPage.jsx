// import PageOne from "./PageOne"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import NextPage from "./NextPage"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bikeV from '/public/vedio/vedio.mp4'
// import { Power0 } from "gsap-trial/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const LandingPage = () => {

    useEffect(() => {
        gsap.to(".landing", {
            opacity: 1,
            x: 100,
            duration: 1, // animation duration in seconds
            delay: 1, // delay before the animation starts in seconds
            ease: "power2.out" // easing function
        });
    }, []);

    return (
        <>
            <div>
                <div className="background-video-container lg:h-[588px] md:h-[458px]">
                    <video autoPlay muted loop className="background-video " >
                        <source src={bikeV} type="video/mp4" />

                    </video>

                </div>

                <div className=" landing opacity-0 lg:ml-20 md:ml-20 sm:ml-16 ml-12 -translate-y-[400px] absolute text-white z-0">
                    <h1 className=" font-semibold  text-5xl mb-2" >Shotgun 650</h1>
                    <h6 className=" font-thin mb-4">Inspired by custom. For custom.</h6>
                    <Link to="/explore">
                        <button className=" text-md font-none py-2 bg-darkYellow hover:shadow-darkYellow shadow-md hover:bg-lightYellow transition duration-200 ease-in  rounded-[2rem] text-black px-6">Explore</button>
                        {/* <button
                            class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                        >
                            Hover me!
                            <span
                                class="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                            ></span>
                            <span
                                class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                            ></span>
                            <span
                                class="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                            ></span>
                            <span
                                class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                            >Explore!</span
                            >
                        </button> */}

                    </Link>

                </div>
            </div>

            <NextPage />

            <Footer />
        </>
    )
}

export default LandingPage
