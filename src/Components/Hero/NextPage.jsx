import React, { startTransition, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Triangle } from "react-loader-spinner";

const NextPage = () => {
    const twoRef = useRef(null);
    const box2Ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: twoRef.current,
                start: "top top",
                end: "+=100%",
                scrub: true,
              }
        });

        tl.to(box2Ref.current, {
            y: 580,
            x: 600,
            // rotate: 300,
            ease: 'all'
        });

     

    }, []);

    return (
        <>
            <div className=" lg:two min-w-full overflow-hidden" ref={twoRef}  >
                <div className="bg-black flex lg:flex lg:justify-center lg:items-center md:flex sm:flex-wrap flex-wrap md:flex-wrap sm:flex text-white min-h-[90vh] justify-center px-6 items-center">
                    <div className="bg-black " >
                    <img src="/public/1.png" className=" md:w-[600px] sm:w-[600px] w-[700px] block md:block sm:block lg:hidden rotate-[0deg]" alt="" />
                        <div className="box2 " ref={box2Ref} >
                            <img src="/public/1.png" className=" bike hidden lg:block  w-[700px] rotate-[25deg]" alt="" />
                           
                        </div>
                    </div>
                    <div className="about lg:w-[40vw] md:[500px] sm:[500px] flex mr-5 flex-col gap-6">
                        <h1 className="font-bold text-darkYellow text-2xl">About Product</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem illum nostrum itaque, voluptates odio
                            totam amet fugiat eligendi! Non, velit eos voluptatem nobis labore magni debitis illo dignissimos placeat
                            quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, velit quo perferendis illum
                            molestias alias animi eaque! Vero reiciendis commodi, ipsa earum architecto quam, placeat laudantium optio
                            explicabo, eligendi neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint temporibus eos fuga
                           
                        </p>
                    </div>
                </div>


                <div className="min-w-[60vw] min-h-[100vh] flex items-center flex-wrap md:flex md:flex-wrap md:justify-center md:items-center lg:flex lg:justify-start  bg-black">

                <img src="/public/1.png" className=" md:w-[600px] sm:w-[600px] w-[700px] block md:block sm:block lg:hidden rotate-[0deg]" alt="" />

                    <div className=" about2 lg:w-[40vw] md:[500px] sm:[500px] px-6 lg:ml-32 flex justify-center  flex-col gap-6  text-white">
                        <h1 className="font-bold text-darkYellow text-2xl">About Product</h1>
                        <p className="">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem illum nostrum itaque, voluptates odio
                            totam amet fugiat eligendi! Non, velit eos voluptatem nobis labore magni debitis illo dignissimos placeat
                            quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, velit quo perferendis illum
                            molestias alias animi eaque! Vero reiciendis commodi, ipsa earum architecto quam, placeat laudantium optio
                            explicabo, eligendi neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint temporibus eos fuga
                            impedit itaque voluptatem dolorem sit explicabo quas nostrum consequatur, dolorum asperiores vel quo
                            distinctio blanditiis. Pariatur, autem cum!
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NextPage