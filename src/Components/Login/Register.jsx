import { Link } from "react-router-dom"
import Navi from "../Header/Navi"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Register = () => {

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
            <div className=" bg-cover h-[88.5vh] pb-2 w-full gap-3 flex items-center flex-col text-white" style={{ backgroundImage: 'url(/public/images/bg.avif)' }}>

                <h1 className="login font-bold my-6 text-darkYellow   text-2xl">
                    Create your account
                </h1>

                <div className=" flex items-center flex-wrap justify-center gap-y-4 gap-x-9">

                    <div>
                        <input type="text" name="" id="" className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder="UserName" />
                    </div>
                    <input type="text" name="" id="" className="right bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder="Email" />

                </div>

                <div className=" flex items-center flex-wrap justify-center gap-y-4 gap-x-9">

                    <input type="text" name="" id="" className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder=" Mobil Number" />

                    <input type="text" name="" id="" className="right bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder=" OTP" />

                </div>

                <div className=" flex items-center flex-wrap justify-center gap-y-4 gap-x-9">

                    <input type="text" name="" id="" className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder=" Password" />

                    <input type="password" name="" id="" className="right bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder=" Conform Password" />

                </div>
                <div className=" bottom">
                    <div className="bottom w-[170px] py-1 mt-10 cursor-pointer border border-darkYellow font-semibold text-center hover:bg-bgDarkYellow duration-100 ease-linear hover:text-black">Sign In</div>
                </div>
                <Link to="/login">
                    <div className="bottom cursor-pointer mt-6 hover:text-red-900 font-semibold">
                        Back To login
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Register