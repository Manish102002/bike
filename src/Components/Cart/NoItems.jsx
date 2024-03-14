import React from 'react'

const NoItems = () => {
    return (
        <div className="bg-black md:gap-12 lg:gap-12 sm:gap-12 text-white md:px-10 sm:px-8 flex md:flex-wrap sm:flex-wrap flex-wrap md:justify-center sm:justify-center">
          <div className="cart1 flex flex-col pt-4 gap-10 md:w-full w-full lg:w-[50%] sm:w-full">
            <div className="flex justify-center items-center w-full h-full text-xl font-semibold">
              No items in the cart
            </div>
          </div>
        </div>
      );
    };


export default NoItems
