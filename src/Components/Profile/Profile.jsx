import Navi from "../Header/Navi"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Profile = () => {


  useEffect(()=>{
    const timeout = setTimeout(() => {
      ScrollReveal().reveal(".nametop", {
        origin: 'top',
        reset: true,
        distance: '500px',
        duration: 3000,
        delay: 500,
      });
  
      ScrollReveal().reveal(".nameleft", {
        origin: 'left',
        reset: true,
        distance: '1000px',
        duration: 3000,
        delay: 600,
      });
  
      ScrollReveal().reveal(".nameright", {
        origin: 'right',
        reset: true,
        distance: '1000px',
        duration: 3000,
        delay: 700,
      });
  
      return () => clearTimeout(timeout);
      
    }, 0);
  },[])
  


  return (
    <>
      <Navi />
      <div className=" h-[570px] min-h-full bg-black text-white flex flex-col pt-10 items-center">
        <div>
          <img src="/public/img1.jpg" alt="" className="nametop w-32 border-black border rounded-[50%]" />
        </div>
        <div className=" w-90vw">
          <div className=" flex flex-wrap justify-center items-center gap-x-12">
            <div className="nameleft">
              <h1 className=" mt-4 font-semibold opacity-45 text-lg ">Name</h1>
              <h1 className=" text-xl w-60 p-2 border border-darkYellow rounded-md">Manish Choudhary</h1>
            </div>
            <div className="nameright">
              <h1 className=" mt-4 opacity-45 font-semibold text-lg">Email</h1>
              <h1 className=" text-xl w-60 p-2 border border-darkYellow rounded-md">Manish@gmail.com</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12">
            <details  className="nameleft">
              <summary className="mt-4  w-60 font-semibold opacity-45 text-lg -translate-x-5">Order Summary</summary>
              <p className="text-xl w-60 p-2 border border-darkYellow rounded-md">Hidden content here...</p>
            </details>

            <details  className="nameright">
              <summary className="mt-4  w-60 font-semibold opacity-45 text-lg -translate-x-5">Delivery Address</summary>
              <p className="text-xl w-60 p-2 border border-darkYellow rounded-md">Hidden content here...</p>
            </details>
          </div>

          <div className="flex items-center justify-center  flex-wrap gap-x-12">
            <details  className="nameleft">
              <summary className="mt-4  w-60 font-semibold opacity-45 text-lg -translate-x-5">Setting</summary>
              <p className="text-xl w-60 p-2 border border-darkYellow rounded-md">Hidden content here...</p>
            </details>

            <h1 className="nameright w-60  mt-10 text-black bg-darkYellow opacity-45 cursor-pointer font-semibold text-xl p-2 border border-darkYellow rounded-md">LogOut</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile