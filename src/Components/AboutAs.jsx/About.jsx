import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Testimonial from "./Testimonial";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import Footer from "../Footer/Footer";
import Navi from "../Header/Navi";





const About = ({ open, setOpen, toggleMenu }) => {

    const [lastClickedItemId, setLastClickedItemId] = useState(null);

    const items = [
        {
            id: 1, name: 'Question 1', heading: [{
                feature: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, necessitatibus qui expedita asperiores harum provident? Repellat ipsa beatae vel doloremque inventore distinctio, voluptate vitae itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et est laborum, ea sunt obcaecati aliquid minus modi assumenda? ",
                feature: " Rerum alias amet possimus velit accusamus libero sed debitis facere recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur est, expedita eos fugit enim minus voluptates autem excepturi soluta!"
            }]
        },
        {
            id: 2, name: 'Question 2', heading: [
                { feature: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, necessitatibus qui expedita asperiores harum provident? Repellat ipsa beatae vel doloremque inventore distinctio, voluptate vitae itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et est laborum, ea sunt obcaecati aliquid minus modi assumenda?" },
            ]
        },
        {
            id: 3, name: 'Question 3', heading: [{
                feature: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, necessitatibus qui expedita asperiores harum provident? Repellat ipsa beatae vel doloremque inventore distinctio, voluptate vitae itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et est laborum, ea sunt obcaecati aliquid minus modi assumenda? ",
                feature: " Rerum alias amet possimus velit accusamus libero sed debitis facere recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur est, expedita eos fugit enim minus voluptates autem excepturi soluta!"
            },
            ]
        },
        {
            id: 4, name: 'Question', heading: [{
                feature: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, necessitatibus qui expedita asperiores harum provident? Repellat ipsa beatae vel doloremque inventore distinctio, voluptate vitae itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et est laborum, ea sunt obcaecati aliquid minus modi assumenda?"
            },
            ]
        },
        {
            id: 5, name: 'Question5', heading: [{
                feature: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, necessitatibus qui expedita asperiores harum provident? Repellat ipsa beatae vel doloremque inventore distinctio, voluptate vitae itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et est laborum, ea sunt obcaecati aliquid minus modi assumenda?"
            },
            ]
        },
    ];




    const handleItemClick = (itemId) => {
        if (lastClickedItemId === itemId) {
            // Clicking on the same item again, close it
            setLastClickedItemId(null);
        } else {
            // Clicking on a different item, open it
            setLastClickedItemId(itemId);
        }
    };



    return (
        <>
            <Navi/>
            <div className="bg-black">

                <div className="flex justify-center pt-1 pb-8">
                    <img src="/public/logo.png" alt="" className=" lg:w-80 md:w-80 sm:w-60 w-60" />
                </div>

                <div className=" text-center  lg:px-28 md:px-10  sm:px-6 px-3 lg:text-xl md:text-xl sm:text-sm text-sm ">
                    <p className="text-white text-center mb-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, necessitatibus qui expedita asperiores harum provident? Repellat ipsa beatae vel doloremque inventore distinctio, voluptate vitae itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et est laborum, ea sunt obcaecati aliquid minus modi assumenda? Rerum alias amet possimus velit accusamus libero sed debitis facere recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur est, expedita eos fugit enim minus voluptates autem excepturi soluta!</p>
                    <h6 className=" text-end text-white">Mr. Udit </h6>
                </div>


                <h3 className="text-white lg:text-5xl md:text-5xl sm:text-4xl text-4xl pt-20 text-center font-bold mb-12">Website Related Question</h3>


                <div className=" flex flex-col text-white lg:mx-44 md:mx-20 sm:mx-14 mx-5 pb-8  ">

                    {
                        items.map((item) => (
                            <div key={item.id}>
                                <div onClick={() => handleItemClick(item.id)} className={`text bg-[#2D2D2D] flex justify-between items-center cursor-pointer  mt-3 bg- hover:bg-[#414141] p-4 text-2xl pl-5 ${lastClickedItemId === item.id ? '' : 'text-white'}`}>
                                    <p className="">{item.name}</p>
                                    <div className={` font-semibold  transition duration-400 ease-linear ${lastClickedItemId === item.id ? ' block transform  rotate-[45deg] text-[red]' : ''}`}><FaPlus /></div>
                                </div>


                                {
                                    item.heading.map((feature, index) => (

                                        <div className={`bg-[#2D2D2D] pl-5 mt-[2px] text-md  transition duration-400 ease-linear   py-6 ${lastClickedItemId === item.id ? 'block' : 'hidden'}`} key={index}>{feature.feature}</div>

                                    ))}



                            </div>
                        ))
                    }

                </div>

                <h3 className="text-white text-5xl pt-10 text-center font-bold mb-0">Testimonial</h3>

                <div>
                    <Testimonial />
                </div>

                <h3 className="text-white text-5xl pt-16 text-center font-bold mb-0">Team</h3>

                <div className=" pb-16 text-textColor flex flex-wrap gap-6 justify-center mt-16">

                    <div className=" w-72 h-64 bg-brown  flex flex-col rounded-lg items-center mt-7 shadow-lg transition duration-200 ease-in hover:shadow-white/50">
                        <img src="/public/test.png" alt="" className=" w-24 border rounded-[50%] bg-white -translate-y-10" />
                        <h3 className=" -mt-9 font-semibold">Manish Choudhary</h3>
                        <h2 className=" px-4 pt-3">Frontend developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, enim?</h2>
                        <div className=" flex  my-6 cursor-pointer  gap-7 ">
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaInstagram /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaTwitter /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <MdEmail /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <CiLinkedin /></div>
                        </div>
                    </div>

                    <div className=" w-72 h-64 bg-brown  flex flex-col rounded-lg items-center mt-7 shadow-lg transition duration-200 ease-in hover:shadow-white/50">
                        <img src="/public/test.png" alt="" className=" w-24 border rounded-[50%] bg-white -translate-y-10" />
                        <h3 className=" -mt-9 font-semibold">Manish Choudhary</h3>
                        <h2 className=" px-4 pt-3">Frontend developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, enim?</h2>
                        <div className=" flex  my-6 cursor-pointer  gap-7 ">
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaInstagram /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaTwitter /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <MdEmail /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <CiLinkedin /></div>
                        </div>
                    </div>

                    <div className=" w-72 h-64 bg-brown  flex flex-col rounded-lg items-center mt-7 shadow-lg transition duration-200 ease-in hover:shadow-white/50">
                        <img src="/public/test.png" alt="" className=" w-24 border rounded-[50%] bg-white -translate-y-10" />
                        <h3 className=" -mt-9 font-semibold">Manish Choudhary</h3>
                        <h2 className=" px-4 pt-3">Frontend developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, enim?</h2>
                        <div className=" flex  my-6 cursor-pointer  gap-7 ">
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaInstagram /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaTwitter /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <MdEmail /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <CiLinkedin /></div>
                        </div>
                    </div>

                    <div className=" w-72 h-64 bg-brown  flex flex-col rounded-lg items-center mt-7 shadow-lg transition duration-200 ease-in hover:shadow-white/50">
                        <img src="/public/test.png" alt="" className=" w-24 border rounded-[50%] bg-white -translate-y-10" />
                        <h3 className=" -mt-9 font-semibold">Manish Choudhary</h3>
                        <h2 className=" px-4 pt-3">Frontend developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, enim?</h2>
                        <div className=" flex  my-6 cursor-pointer  gap-7 ">
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaInstagram /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <FaTwitter /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <MdEmail /></div>
                            <div className=" text-md rounded-[50%] border border-white hover:bg-white hover:text-black p-2"> <CiLinkedin /></div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About