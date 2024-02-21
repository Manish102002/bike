import { Link } from "react-router-dom"
import Navi from "../Header/Navi"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Login = () => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollReveal().reveal(".login", {
        origin: 'top',
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 500,
      });

      ScrollReveal().reveal(".left", {
        origin: 'left',
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 500,
      });

      ScrollReveal().reveal(".right", {
        origin: 'right',
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 500,
      });


      ScrollReveal().reveal(".bottom", {
        origin: 'bottom',
        reset: true,
        distance: '180px',
        duration: 2000,
        delay: 500,
      });
    }, 0);


    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navi />
      <div className=" bg-cover h-[88.5vh] pb-2 w-min-full gap-3 flex items-center flex-col text-white" style={{ backgroundImage: 'url(/public/images/bg.avif)' }}>

        <h1 className="login font-bold my-6   text-2xl">
          Log in to your account
        </h1>

        <div className=" flex items-center flex-wrap justify-center gap-y-4 gap-x-9">

          <input type="text" name="" id="" className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder="Email/Mobil Number" />

          <input type="password" name="" id="" className="right bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder="Password" />

        </div>

        <div className=" flex flex-wrap items-center justify-center gap-x-9 gap-y-4 ">

          <div className="left w-[300px] py-3 font-bold bg-darkYellow cursor-pointer text-black text-center">Login</div>
          <div className="right w-[300px] py-3 font-bold  text-white cursor-pointer text-start hover:text-red-900">Forget Password?</div>

        </div>

        <div className="bottom mt-10 font-bold  text-2xl ">New to Yourwebsite.com?</div>

        <Link to="/register" className="bottom">
          <div className=" w-[170px] py-1 cursor-pointer border border-white font-semibold text-center hover:bg-darkYellow duration-100 ease-linear hover:text-black">Create an Account</div>
        </Link>

        <div className="bottom mt-10 font-bold  text-2xl ">sign in to via</div>
        <div className="bottom w-[190px] py-1 bg-lightYellow rounded-md font-semibold cursor-pointer text-black  text-center">sign in with Google</div>
      </div>
    </>
  )
}

export default Login