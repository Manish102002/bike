import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Delivery = ({ onClick, hide }) => {

  return (
    <>
      <div className={`relative h-screen flex items-center  justify-center`}>
        {/* <div className="absolute inset-0 z-0 h-full w-full filter mt-40 blur-lg" /> */}
        <div className="z-10 p-7 sm:mt-16 mt-16 lg:m-0 bg-white rounded-lg shadow-lg">
          <div className="pt-1  flex justify-center flex-col  items-center">
            <h1 className="border font-semibold text-xl text-start  py-2 w-[350px] lg:w-[600px] md:w-[600px] sm:w-[477px] px-6 bg-black text-darkYellow">Delivery Address</h1>
            <div className="flex flex-wrap mt-5 gap-x-7 gap-y-2 justify-center">
              <div className="border px-5 w-full md:w-72">
                <h2>Name</h2>
                <input type="text" className="w-full h-8 outline-none bg-transparent" />
              </div>
              <div className="border px-5 w-full md:w-72">
                <h2>Mobile No.</h2>
                <input type="text" className="w-full h-8 outline-none bg-transparent" />
              </div>
            </div>

            <div className="flex flex-wrap mt-2 gap-x-7 gap-y-2 justify-center">
              <div className="border px-5 w-full md:w-72">
                <h2>Pincode</h2>
                <input type="text" className="w-full h-8 outline-none bg-transparent" />
              </div>
              <div className="border px-5 w-full md:w-72">
                <h2>Locality</h2>
                <input type="text" className="w-full h-8 outline-none bg-transparent" />
              </div>
            </div>

            <div className="w-[350px] lg:w-[600px] md:w-[600px] sm:w-[477px] border mt-6 px-5">
              <h1>Address (Area & Street)</h1>
              <input type="text" name="" id="" className="w-72 h-12 bg-transparent outline-none" />
            </div>

            <div className="flex flex-wrap mt-5 gap-7 justify-center">
              <div className="border px-5 w-full md:w-72">
                <h2>City/District/Town</h2>
                <input type="text" className="w-full h-8 outline-none bg-transparent" />
              </div>
              <div className="border px-5 w-full md:w-72">
                <h2>State</h2>
                <input type="text" className="w-full h-8 outline-none bg-transparent" />
              </div>
            </div>

            <div className="flex gap-7 mt-5 justify-center">
              <h1 className="w-72 px-2 border bg-white cursor-pointer text-black font-semibold py-3 text-center">Save and Payment</h1>
              <h1 onClick={onClick} className={`cursor-pointer w-full md:w-72 py-3 font-semibold text-center`}>Cancel</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Delivery;
