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

export default function ESwiper() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={0}
        // pagination={{
        //   type: 'fraction',
        // }}
        // navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div  className=' text-white flex justify-center items-center pt-4 bg-black h-[100px] w-[200px]'>
            <img src="/public/product/seatp.png" alt="" className=' h-[100px]'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className=' text-white flex justify-center items-center pt-4 bg-black h-[100px] w-[200px]'>
            <img src="/public/product/seatp.png" alt="" className=' h-[100px]'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className=' text-white flex justify-center items-center pt-4 bg-black h-[100px] w-[200px]'>
            <img src="/public/product/seatp.png" alt="" className=' h-[100px]'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className=' text-white flex justify-center items-center pt-4 bg-black h-[100px] w-[200px]'>
            <img src="/public/product/seatp.png" alt="" className=' h-[100px]'/>
          </div>
        </SwiperSlide>
      </Swiper>

    
    </>
  );
}
