import Navi from "../Header/Navi";
import Footer from "../Footer/Footer"
import { useState } from "react";
import Delivery from "../Payments/Delivery";
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import cartimg11 from '/public/img1.jpg';
import cartimg2 from '/public/img2.jpg';
import cartimg3 from '/public/img3.jpg';

const Cart = () => {

    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const openHandle = () => {
        setOpen(!open);
    }
    const handlehide = () => {
        setHide(!hide);
    };

    const cart = [
        {
            id: 1,
            img: cartimg11,
            name: 'basic Tee',
            color: 'black',
            prize: 240,
            avilable: 'stock'
        },
        {
            id: 2,
            img: cartimg2,
            name: 'basic Tee',
            color: 'white',
            prize: 340,
            avilable: 'stock'
        },
        {
            id: 3,
            img: cartimg3,
            name: 'tee',
            color: 'brown',
            prize: 290,
            avilable: 'out of stock'
        }
    ]

    const timeout = setTimeout(() => {
        ScrollReveal().reveal(".shop", {
          origin: 'top',
          reset: true,
          distance: '500px',
          duration: 3000,
          delay: 500,
        });
  
        ScrollReveal().reveal(".cart1", {
          origin: 'left',
          reset: true,
          distance: '1000px',
          duration: 3000,
          delay: 600,
        });
  
        ScrollReveal().reveal(".cart2", {
          origin: 'right',
          reset: true,
          distance: '1000px',
          duration: 3000,
          delay: 700,
        });
  
        return () => clearTimeout(timeout);
        
      }, 0);


    return (
        <>
            <Navi />
            <div className=" bg-black text-white">

                <div className=" border  lg:mx-1 mx-5 md:mx-2 pt-7 rounded-lg border-black">

                    <h1 className="shop text-darkYellow my-7 ml-10 text-4xl font-semibold ">Shopping cart</h1>

                    <div className=" bg-black md:gap-12 lg:gap-12 sm:gap-12 text-white md:px-10 sm:px-8 flex md:flex-wrap sm:flex-wrap flex-wrap md:justify-center sm:justify-center  ">


                        <div className="cart1 flex flex-col pt-4 gap-10 md:w-full w-full lg:w-[50%] sm:w-full">
                            {
                                cart.map((item => (

                                    <div key="item.id">
                                        <div className=" flex w-full ">

                                            <img src={item.img} alt="" className=" lg:w-52 md:w-52 sm:w-52 w-40 border rounded-lg " />

                                            <div className="  md:ml-16 sm:ml-10 ml-10  w-[50%] font-semibold flex flex-col justify-between">
                                                <div>
                                                    <h1>{item.name}</h1>
                                                    <h1>{item.color}</h1>
                                                    <h1>{item.prize}</h1>
                                                </div>
                                                <div>
                                                    <h1>{item.avilable}</h1>
                                                </div>
                                            </div>

                                            <h1>Remove</h1>

                                        </div>
                                        <div className=" mt-10 border opacity-45 w-full border-white"> </div>
                                    </div>
                                )))
                            }

                        </div>


                        <div className="cart2 lg:w-96 md:w-full sm:w-full w-full  mx-4  lg:ml-12 px-5 py-5 my-4 border rounded-md h-72 sticky top-24" >
                            <div className=" flex flex-col">

                                <h1 className=" text-xl font-semibold mb-5">Order Summary</h1>

                                <div className=" flex flex-col gap-2 opacity-40">
                                    <div className=" flex justify-between">
                                        <h2>SubTotal</h2>
                                        <h2>500</h2>
                                    </div>
                                    <div className=" flex justify-between">
                                        <h2>SubTotal</h2>
                                        <h2>500</h2>
                                    </div>
                                    <div className=" flex justify-between">
                                        <h2>SubTotal</h2>
                                        <h2>500</h2>
                                    </div>
                                </div>
                                <div className=" flex justify-between mt-5">
                                    <h1>Order Total</h1>
                                    <h1>400</h1>
                                </div>
                            </div>
                            <div className=" cursor-pointer" onClick={handlehide}>
                                <button className=" w-full py-2 rounded-lg bg-darkYellow text-black font-bold mt-5">Continue to Payment</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`overflow-y-auto`}>
                <div className={`lg:fixed md:fixed sm:fixed sm:mt-44 lg:mt-10 md:mt-10 fixed lg:inset-0 md:inset-0 sm:inset-0 inset-0 z-40 ${hide ? "block" : "hidden"}`} style={{ backdropFilter: 'blur(10px)' }}>
                    <Delivery onClick={handlehide} hide={hide} />
                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default Cart