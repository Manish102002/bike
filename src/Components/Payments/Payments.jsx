
import { FaPlus } from "react-icons/fa6";
import Navi from "../Header/Navi";
import Footer from "../Footer/Footer";
import Price from "../Cart/Price";
import Delivery from "./Delivery";
import Ordersum from "./Ordersum";
import { Poption } from "./Poption";
// import CartPage from "../Cart/CartPage";
// import PlaceOrder from "../Cart/PlaceOrder";
// import PlaceOrder from "../Cart/PlaceOrder";



export const Payments = () => {
    return (
        <>
            <Navi />
            <div className=" overflow-hidden flex flex-row-reverse justify-center flex-wrap text-textColor items-center bg-black">

              <div className="lg:-mt-52  -ml-20"  style={{ position: 'sticky', bottom: 1000, top: -100,   zIndex: 10 }} >  <Price /> </div>

              <div className="bg-black min-h-[100vh] " >
                <div >
                    <div className=" flex flex-col text-white  md:mx-20 sm:mx-14 mx-0  pb-8 mt-6   ">



                        <div className=" lg:w-[50vw] md:w-[70vw] sm:[60vw] w-[350px] min-w-full px-7 lg:-ml-16">
                            <div className={`text bg-[#2D2D2D] flex justify-between items-center cursor-pointer  mt-3 bg- hover:bg-[#414141] p-4 text-2xl pl-5 `}>
                                <p className="">Login</p>
                                <div className={` font-semibold  transition duration-400 ease-linear`}><FaPlus /></div>
                            </div>



                            <div className={`bg-[#2D2D2D] pl-5 mt-[2px] text-md  transition duration-400 ease-linear   py-6 `}></div>


                            <div className={`text bg-[#2D2D2D] flex justify-between items-center cursor-pointer  mt-3 bg- hover:bg-[#414141] p-4 text-2xl pl-5 `}>
                                <p className="">Delivery Address</p>
                                <div className={` font-semibold  transition duration-400 ease-linear`}><FaPlus /></div>
                            </div>


                            <div className={`bg-[#2D2D2D] pl-5 mt-[2px] text-md  transition duration-400 ease-linear   py-6 `}>
                                <Delivery/>
                            </div>



                            <div className={`text bg-[#2D2D2D] flex justify-between items-center cursor-pointer  mt-3 bg- hover:bg-[#414141] p-4 text-2xl pl-5 `}>
                                <p className=""> Order Summery</p>
                                <div className={` font-semibold  transition duration-400 ease-linear`}><FaPlus /></div>
                            </div>


                            <div className={`bg-[#2D2D2D] pl-5 mt-[2px] text-md  transition duration-400 ease-linear   py-6 `}>
                                {/* <CartPage/> */}
                                <Ordersum/>
                            </div>



                            <div className={`text bg-[#2D2D2D] flex justify-between items-center cursor-pointer  mt-3 bg- hover:bg-[#414141] p-4 text-2xl pl-5 `}>
                                <p className="">Payments Option</p>
                                <div className={` font-semibold  transition duration-400 ease-linear`}><FaPlus /></div>
                            </div>


                            <div className={`bg-[#2D2D2D] pl-5 mt-[2px] text-md  transition duration-400 ease-linear   py-6 `}>
                                <Poption/>
                            </div>

                      </div>



                    </div>
                </div>

              
            </div>
            </div>
            {/* <PlaceOrder /> */}
            <Footer />
        </>
    )
}
