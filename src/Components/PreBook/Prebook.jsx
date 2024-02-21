import Navi from "../Header/Navi"
import React from 'react';
import { ReactImageTurntable } from 'react-image-turntable';
// import  { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';

const images = [
    '/public/bikes/1.png',
    '/public/bikes/2.png',
    '/public/bikes/3.png',
    '/public/bikes/4.png',
    '/public/bikes/5.png',
    '/public/bikes/6.png',
    '/public/bikes/7.png',
    '/public/bikes/8.png',
    '/public/bikes/9.png',
    '/public/bikes/10.png',
    '/public/bikes/11.png',
    '/public/bikes/12.png',
    '/public/bikes/13.png',
    '/public/bikes/14.png',
    '/public/bikes/15.png',
    '/public/bikes/16.png',
  
];

// useEffect(()=>{
//     const timeout = setTimeout(() => {
//         ScrollReveal().reveal(".prebook", {
//           origin: 'top',
//           reset: true,
//           distance: '500px',
//           duration: 3000,
//           delay: 500,
//         });
    
//         ScrollReveal().reveal(".img", {
//           origin: 'left',
//           reset: true,
//           distance: '800px',
//           duration: 3000,
//           delay: 600,
//         });
    
//         ScrollReveal().reveal(".pre", {
//           origin: 'right',
//           reset: true,
//           distance: '800px',
//           duration: 3000,
//           delay: 700,
//         });
    
//         return () => clearTimeout(timeout);
        
//       }, 0);
// }, [])

const Prebook = () => {
    return (
        <>
            <Navi />

            <div className=" flex justify-center flex-wrap items-center  bg-black">

                <div className="img w-[600px] " >
                    {/* <img src="/public/1.png" alt="" /> */}
                    <ReactImageTurntable images={images} />;
                    <h3></h3>
                </div>

                <div className="pre bg-black text-white flex flex-col flex-wrap justify-center items-center">
                    <h1 className="prebook pt-10 text-3xl text-darkYellow font-semibold space-x-8">PRE-BOOK YOUR TEXT RIDE</h1>
                    <div className=" flex flex-wrap justify-center items-center  gap-7 mt-10">
                        <div className="">
                            <h2 className=" font-semibold text-md mb-2">Full Name</h2>
                            <input type="text" name="" id="" placeholder=" Full Name" className=" w-[250px] py-3 bg-transparent border  outline-none px-1 placeholder:font-semibold" />
                        </div>
                        <div>
                            <h2 className=" font-semibold text-md mb-2">PinCode</h2>
                            <input type="text" name="" id="" placeholder="PinCode" className=" w-[250px] py-3 bg-transparent border  outline-none px-1 placeholder:font-semibold" />
                        </div>
                    </div>
                    <div className=" flex justify-center items-center flex-wrap gap-7 mt-6">
                        <div>
                            <h2 className=" font-semibold text-md mb-2">Email</h2>
                            <input type="text" name="" id="" placeholder="Email" className=" w-[250px] py-3 bg-transparent border  outline-none px-1 placeholder:font-semibold" />
                        </div>
                        <div>
                            <h2 className=" font-semibold text-md mb-2">Mobil Number</h2>
                            <input type="text" name="" id="" placeholder="Mobile Number" className=" w-[250px] py-3 bg-transparent border  outline-none px-1 placeholder:font-semibold" />
                        </div>
                    </div>
                    <div className="mt-9  border border-white" />
                    <div>
                        <p className=" lg:w-[500px] md:w-[500px] sm:w-[500px] w-[300px] opacity-50">
                            Disclaimer: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto fugiat tenetur porro quaerat soluta totam amet?
                        </p>
                    </div>
                    <div className=" flex gap-5 mt-4 items-start ">
                        <input type="checkbox" name="" id="" className="mt-2"/>
                        <p className=" lg:w-[500px] md:w-[500px] sm:w-[500px] w-[300px]">I accept the terms and conditions as well as privacy policy.</p>
                    </div>
                    <button className=" w-[350px] border mb-10 mt-10 p-3 hover:bg-darkYellow hover:text-black text-white font-semibold ">Pre Book</button>
                </div>


            </div>
        </>
    )
}

export default Prebook