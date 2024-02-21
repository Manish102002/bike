import { Link } from "react-router-dom"
import ESwiper from "./ESwiper"
import epng from "/public/1.png";


const EPage3 = () => {
    return (
        <>
            <div className=" h-[89vh]  text-white w-full overflow-hidden bg-black ">
                <h1 className=" font-semibold text-center text-3xl pt-8">COLOURS</h1>
                <div className=" flex mt-6">
                    <div>
                        <div className="">
                            <img src={epng} alt="" className=" w-[700px]" />
                            <h3></h3>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2 items-center">
                        <div className=" lg:w-[600px] md:w-[400px] my-7 mb-8">
                            <ESwiper />
                        </div>
                        <h1 className=" font-semibold text-2xl">DRILL GREEN</h1>
                        <h2 className=" font-semibold text-2xl">₹3,70,138</h2>
                        <h3 className=" font-semibold opacity-50 text-1xl mb-8">Ex-Showroom Indore</h3>

                        <Link to="/prebook">
                            <button className=" w-[450px] p-3  bg-white text-black font-semibold">PRE BOOK TEST RIDE</button>
                        </Link>
                        <button className=" w-[450px] p-3  bg-[#191919] text-white font-semibold mt-2">DOWNLOAD TECHNICAL SPECIFICATION</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EPage3