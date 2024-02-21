import Footer from "../Footer/Footer"
import Navi from "../Header/Navi"
import EPage2 from "./EPage2"
import EPage3 from "./EPage3"
// import EPage4 from "./EPage4"


const EPage1 = () => {
  return (
    <>
     <Navi/>
      <div>
        <div className="background-video-container lg:h-[588px] md:h-[458px]">
          <video autoPlay muted loop className="background-video " >
            <source src="/public/vedio/evedio.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <EPage2/>
      <EPage3/>
      {/* <EPage4/> */}


      <Footer/>
    </>
  )
}

export default EPage1