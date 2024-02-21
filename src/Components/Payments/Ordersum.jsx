import { FaPlus } from "react-icons/fa6";
import { FaWindowMinimize } from "react-icons/fa";

const Ordersum = () => {
  return (
    <>
        <div>
                    <div className="  ">
                        <div className=" bg-brown   rounded-lg overflow-hidden ">

                            <h1 className=" text-center text-3xl font-bold bg-darkbrown py-3 mb-10 ">Your Item</h1>

                            <div className=" flex flex-col items-center justify-center gap-4  border border-black px-40 mb-9 ">

                                <div className=" flex flex-wrap justify-center items-center rounded-md bg-darkbrown py-4  px-5 gap-5  ">

                                    <img src="/public/product/seatp.png" alt="" className="w-48 border-brown" />

                                    <div className=" lg:border-l-2 md:border-l-2 sm:border-l-2 border-brown flex md:flex-col sm:flex-col lg:justify-start  lg:items-center  lg:flex-col lg:pl-10 md:pl-10 sm:pl-10  sm:items-center flex-col justify-center items-center ">

                                        <h3 className=" text-2xl font-semibold ">Bike Seat</h3>

                                        <h4 className=" text-lg font-bold">INR 100</h4>

                                        <div className=" flex items-center gap-4 mt-4 mb-4">
                                            <div className=" text-md cursor-pointer rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaPlus /></div>
                                            <h6 className=" w-10 text-center">10</h6>
                                            <div className=" text-md cursor-pointer rounded-[50%] border border-white hover:bg-white hover:text-black p-2 "><FaWindowMinimize className="pb-1" /></div>


                                        </div>

                                        <div className="flex flex-col gap-2 lg:mt-6 md:mt-5 sm:mt-4 mt-2">
                                            <button className='px-5 py-2 hover:bg-transparent hover:text-[white] border-[white] border-2 transition ease-linear duration-300  font-bold bg-[white] text-[black] '>Buy</button>
                                            <button className='px-5 py-2 hover:bg-transparent hover:text-[white] border-[white] border-2 transition ease-linear duration-300  font-bold bg-[white] text-[black] '>Remove to Cart</button>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
    </>
  )
}

export default Ordersum