import { AiTwotoneSafetyCertificate } from "react-icons/ai";

const Price = () => {
    return (
        <>
            <div className=" flex flex-col justify-end items-end bg-black pb pl-20" >
                <div className=" flex flex-col flex-wrap border mb-4 border-black justify-center items-center bg-darkbrown rounded-md  mt-20 h-auto gap-5" style={{ position: 'sticky', bottom: 120,   zIndex: 10 }}>

                    <div>
                        <h1 className=" text-black font-bold mt-2  border-black w-80 opacity-50 text-xl">PRICE DETAILS</h1>
                    </div>

                    <hr className=" border border-black w-80 opacity-50" />

                    <div className=" flex gap-16">

                        <div className=" flex flex-col gap-3 font-semibold">

                            <h2>Price(4 items)</h2>
                            <h2>Discount</h2>
                            <h2>Delivery Charges</h2>
                            <h2>Secured Packaging Fee</h2>

                        </div>

                        <div className=" flex flex-col gap-3 font-semibold">
                            <h1>(5466)</h1>
                            <h1>(5466)</h1>
                            <h1>(5466)</h1>
                            <h1>(5466)</h1>

                        </div>

                    </div>

                    <hr className=" border border-black w-80 opacity-50" />

                    <div className=" flex text-2xl font-semibold gap-20">
                        <h2>Total Amount</h2>
                        <h2>25000</h2>
                    </div>

                    <hr className=" border border-black w-80 opacity-50" />

                    <div className=" text-green-800 font-semibold ">You Will sace 10000 on this order</div>

                    <hr className=" border border-black w-80 opacity-50" />

                    <div className=" flex w-96 font-semibold opacity-50">
                        <AiTwotoneSafetyCertificate className=" text-2xl" />
                        Safe and Secute Payments. Easy return. 100% Authentic products
                    </div>

                </div>


            </div>
        </>
    )
}

export default Price