import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { Provider } from 'react-redux';
import Hero from '../Hero';
import { store } from '../store';
// import store from '../store';
import loder from '/public/images/preloader.jpg';

export const Loader = () => {

  const [loader, SetLoader] = useState(true);


  useEffect(()=>{
    setTimeout(() => {
      SetLoader(false)
    }, (2500));
  })




  return (
    <Provider store = {store}>
      {/* <Sidepro/> */}

      {
        loader ? (
          <>
            <div className=' bg-black  h-screen w-screen flex justify-center flex-col items-center  '>
              <div className=' translate-y-7'>
                <img src={loder} className=' rounded-[100%] w-24 animate-spin duration-50 ' alt="" />
              </div>
              render(<ThreeDots
                visible={true}
                height="50"
                width="50"
                color="white"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />)
            </div>


          </>

        ) : <Hero />
      }

    </Provider>
  )
}

export default Loader