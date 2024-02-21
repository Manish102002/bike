import { useEffect, useState , useRef } from "react"
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";



// gsap.registerPlugin(ScrollTrigger);
const Navi = ({ text, itemCount, setCartItems, }) => {

    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // const [login, setLogin] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  
 
  

    return (
        <>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif' }} className=" flex z-50 text-center items-center justify-between lg:px-12 md:px-10  px-6  sm:px-10  text-textColor sticky top-0  bg-darkBlack h-[72px]
            shadow-lg transition duration-200 ease-in shadow-white/50  ">


                <div>
                    <img src="/public/images/preloader.jpg" alt="" className="heading w-10 rounded-[50%]" />
                </div>

                <Link to="/" className=" lg:translate-x-28 translate-x-5  md:hidden lg:block sm:block block">
                    <div >
                        <h1 className=" heading head font-bold text-[20px]  text-darkYellow  lg:text-[30px] md:text-[25px] sm:text-[20px]">Beni Automotives</h1>
                    </div>
                </Link>

                <div className="flex gap-4">

                    <div onClick={toggleMenu} id="navstiky" className={`  z-30 items-center flex-col  gap-8 top-[74px] flex bg-black bg-opacity-60 h-[88.7vh] text-white w-full left-0 px-10 py-10 sm:flex lg:top-0 md:top-0 md:px-0 md:w-auto md:bg-black md:text-textColor md:py-0 lg:px-0 lg:bg-opacity-0 md:bg-opacity-0  lg:w-auto lg:bg-darkBlack lg:text-textColor lg:py-0 lg:bg  lg:flex lg:flex-row md:flex-row md:flex absolute lg:relative md:relative sm:flex-col  ${open ? 'block transition duration-300 ease-in' : '  hidden sm:hidden'}`}>

                        <NavLink to="/product" activeClassName="active" className="Navbar">
                            <h1 className="  heading font-semibold">  Product </h1>
                        </NavLink>


                        <NavLink to="/login" activeClassName="active" className="Navbar" >
                            <div className={`flex justify-center font-semibold items-center cursor-pointer gap-2 `} >
                                <h1 className=" heading">Login</h1>
                                {/* <div className={` transition-all duration-300 rotate-[180deg] ease-linear `}><FaAngleDown /></div> */}
                            </div>
                        </NavLink>

                        {/* onClick={clickHandleLogin} className={`flex font-semibold justify-center items-center cursor-pointer gap-2 ${login ? "" : " text-white"} `} */}

                        <div className=" flex items-center gap-4  justify-items-end">

                            <Link to="/profile">
                                <div >
                                    <div className="heading text-3xl  hover:text-darkYellow cursor-pointer"> <CgProfile /></div>
                                </div>
                            </Link>

                            <Link to="/cart">
                                <div className=" flex items-center justify-center">
                                    <div className=" heading lg:block md:block  hover:text-darkYellow sm:block text-2xl">
                                        <FaCartShopping />
                                    </div>

                                    {/* <div className=" -translate-x-2 text-[red] font-bold text-xl -translate-y-2">{itemCount}</div> */}

                                    <div className=" block lg:hidden md:hidden sm:hidden">

                                    </div>
                                </div>
                            </Link>

                            <Link to="/prebook">
                                <div className=" cursor-pointer">
                                    <h2 className=" heading py-2 text-sm font-[200] px-4 bg-bgDarkYellow hover:bg-lightYellow rounded-[2rem] text-black" >Pre-Book</h2>
                                </div>
                            </Link>

                        </div>


                    </div>


                </div>




                <div onClick={toggleMenu} className={`flex flex-col gap-1  cursor-pointer lg:hidden md:hidden `}>

                    <div className={`w-7 h-[3px] text-white bg-white border border-r-2 transition duration-300 ease   ${open ? ' transform translate-y-[4px] -rotate-[45deg]' : 'bg-blue-300'}`} ></div>

                    <div className={`w-7 h-[3px] text-white bg-white border border-r-2  ${open ? 'hidden' : 'bg-blue-300'}`} ></div>

                    <div className={`w-7 h-[3px] text-white bg-white border border-r-2 transition duration-300 ease ${open ? '  transform -translate-y-[4px] rotate-[45deg]' : 'bg-blue-300'}`} ></div>

                </div>

            </div>


        </>

    )
}

export default Navi