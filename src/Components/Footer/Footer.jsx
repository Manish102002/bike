import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";



const Footer = () => {

  const [lastClickedItemId, setLastClickedItemId] = useState(null);

  const items = [
    {
      id: 1, name: 'MoterCycles', heading: [{
        feature: "Himaliyan"
      },
      { feature: "Bullet 350" },
      { feature: "Hunter 350" }]
    },
    {
      id: 2, name: 'About Us', heading: [
        { feature: "Himaliyan" },
        { feature: "Bullet 350" },
        { feature: "Hunter 350" }]
    },
    {
      id: 3, name: 'Support', heading: [{
        feature: "Himaliyan"
      },
      { feature: "Bullet 350" },
      { feature: "Hunter 350" }]
    },
    {
      id: 4, name: 'Careers', heading: [{
        feature: "Himaliyan"
      },
      { feature: "Bullet 350" },
      { feature: "Hunter 350" }]
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

    console.log("Manish hcoudhary")
  };

  return (
    <>
      <div className=" bg-textColor pb-5">

        <div className="flex lg:flex-row lg:justify-end flex-col lg:pr-16 lg:gap-3 gap-1 justify-center pt-2 items-center h-[72px]
        ">

          <h3 className=" font-semibold">Join the conversation</h3>

          <div className="flex items-center gap-7 ">

            <IoLogoFacebook className=" text-[35px] cursor-pointer hover:text-blue-500" />
            <FaSquareXTwitter className=" text-[30px] cursor-pointer" />
            <FaYoutube className=" text-[32px] cursor-pointer hover:text-red-600" />
            <RiInstagramFill className=" text-[30px] cursor-pointer " />
            <FaLinkedin className=" text-[28px] cursor-pointer hover:text-blue-500" />

          </div>

        </div>

        <hr className="border border-black opacity-30 mx-5 hidden lg:block md:block sm:block" />

        <div className="flex flex-col justify-center items-start px-7 lg:items-start md:items-start sm:items-start gap-3 lg:justify-between md:justify-between sm:justify-between pt-5 lg:px-20 sm:flex sm:flex-wrap sm:px-12 lg:flex-row lg:flex md:flex md:flex-row sm:flex-row  ">

          {
            items.map((item) => (

              <div key={item.id} className="flex flex-col gap-1 ">
                <div className="flex justify-center items-center text-center gap-2">

                  <div onClick={() => handleItemClick(item.id)} className={`pb-1 pt-1 cursor-pointer transition duration-200 ease lg:hidden md:hidden sm:hidden ${lastClickedItemId === item.id ? 'block transform -translate-y-[1px] rotate-[180deg] text-[red] ' : ' '}`}><FaAngleDown /></div>

                  <h1 className={`font-bold pb-2 text-xl ${lastClickedItemId === item.id ? ' block text-[red] md:text-black sm:text-black lg:text-black ' : 'lg:text-black'}`}>{item.name}</h1>

                </div>


                <div className={` md:block sm:block ${lastClickedItemId === item.id ? ' block  ' : 'hidden'}`}>
                  {
                    item.heading.map((feature, index) => (

                      <h6 className=" pl-7 lg:pl-0 md:pl-0 sm:pl-0 opacity-50 hover:opacity-100 cursor-pointer font-semibold" key={index}>{feature.feature}</h6>

                    ))}

                </div>
              </div>
            ))
          }



        </div>

        <hr className="border border-black opacity-30 mx-5 mt-9" />

        <div className=" flex justify-between flex-col lg:flex-row md:flex md:flex-row items-center mt-4 px-6 gap-2 lg:flex lg:justify-between sm:text-[10px]">

          <div className=" lg:w-96 md:w-96 sm:w-80">

            <h6 className="text-[12px]">© 2024. Royal Enfield. | *T&C apply. Images shown here may differ from the actual product.</h6>

          </div>

          <div className=" lg:text-[12px] md:text-[12px] sm:text-[11px] text-[9px] font-semibold flex gap-2 justify-center">

            <a href="" className=" opacity-50 hover:opacity-100">Private</a> <div className=" border-r-2 border-black " />
            <a href="" className=" opacity-50 hover:opacity-100">Import Policy</a><div className=" border-r-2 border-black " />
            <a href="" className=" opacity-50 hover:opacity-100">Privacy</a><div className=" border-r-2 border-black " />
            <a href="" className=" opacity-50 hover:opacity-100">Terms & Conditions</a><div className=" border-r-2 border-black " />
            <a href="" className=" opacity-50 hover:opacity-100">Cookies</a>

          </div>

        </div>

      </div>
    </>
  )
}

export default Footer