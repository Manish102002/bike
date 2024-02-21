import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Testimonial = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='lg:w-[100vw] md:w-[100vw] sm:w-[100vw] w-full lg:h-[80vh] md:h-[80vh] sm:h-[80vh] h-[50vh] bg-black lg:pt-20  sm:pt-10 md:pt-10  pt-10 mx-8'>

                        <div className=' flex justify-center '>

                            <div className=' lg:w-[60vw] md:w-[60vw] lg:h-96 md:h-96 sm:h-96 w-[80vw] mr-16 p-5 h-80 sm:w-80 bg-brown hover:bg-darkbrown flex justify-center flex-col items-center text-white rounded-lg  lg:text-xl md:text-xl sm:text-sm text-[10px] border-black  shadow-lg hover:shadow-white/50  '>

                                <div className=''><img src="/public/test.png" alt="" width="200px" className=' w-[80px] bg-white rounded-[100%]  border-white mb-5' /></div>

                                <p className=' text-white px-8 pb-5 '>'' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias minus asperiores esse temporibus neque deleniti illo consectetur repellendus facere similique, eius nulla sunt. Cupiditate cumque asperiores, exercitationem velit officiis in. ,,</p>

                                <h5 className='text-sm'>Mr. Manish Choudhary</h5>

                                <h5 className='text-sm'>Indore (Madhya Pradesh)</h5>

                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[100vw] md:w-[100vw] sm:w-[100vw] w-full lg:h-[80vh] md:h-[80vh] sm:h-[80vh] h-[50vh] bg-black lg:pt-20  sm:pt-10 md:pt-10  pt-10 mx-8'>

                        <div className=' flex justify-center '>

                            <div className=' lg:w-[60vw] md:w-[60vw] lg:h-96 md:h-96 sm:h-96 w-[80vw] mr-16 p-5 h-80 sm:w-80 bg-brown hover:bg-darkbrown flex justify-center flex-col items-center text-white rounded-lg  lg:text-xl md:text-xl sm:text-sm text-[10px] border-black  shadow-lg hover:shadow-white/50  '>

                                <div className=''><img src="/public/test.png" alt="" width="200px" className=' w-[80px] bg-white rounded-[100%]  border-white mb-5' /></div>

                                <p className=' text-white px-8 pb-5 '>'' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias minus asperiores esse temporibus neque deleniti illo consectetur repellendus facere similique, eius nulla sunt. Cupiditate cumque asperiores, exercitationem velit officiis in. ,,</p>

                                <h5 className='text-sm'>Mr. Manish Choudhary</h5>

                                <h5 className='text-sm'>Indore (Madhya Pradesh)</h5>

                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[100vw] md:w-[100vw] sm:w-[100vw] w-full lg:h-[80vh] md:h-[80vh] sm:h-[80vh] h-[50vh] bg-black lg:pt-20  sm:pt-10 md:pt-10  pt-10 mx-8'>

                        <div className=' flex justify-center '>

                            <div className=' lg:w-[60vw] md:w-[60vw] lg:h-96 md:h-96 sm:h-96 w-[80vw] mr-16 p-5 h-80 sm:w-80 bg-brown hover:bg-darkbrown flex justify-center flex-col items-center text-white rounded-lg  lg:text-xl md:text-xl sm:text-sm text-[10px] border-black  shadow-lg hover:shadow-white/50  '>

                                <div className=''><img src="/public/test.png" alt="" width="200px" className=' w-[80px] bg-white rounded-[100%]  border-white mb-5' /></div>

                                <p className=' text-white px-8 pb-5 '>'' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias minus asperiores esse temporibus neque deleniti illo consectetur repellendus facere similique, eius nulla sunt. Cupiditate cumque asperiores, exercitationem velit officiis in. ,,</p>

                                <h5 className='text-sm'>Mr. Manish Choudhary</h5>

                                <h5 className='text-sm'>Indore (Madhya Pradesh)</h5>

                            </div>

                        </div>

                    </div>
                </SwiperSlide>
               
            </Swiper>
        </>
    )
}

export default Testimonial