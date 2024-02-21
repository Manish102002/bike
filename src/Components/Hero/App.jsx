// import EPage1 from "../Explore/EPage1";
import Navi from "../Header/Navi";
import Register from "../Login/Register";
import Delivery from "../Payments/Delivery";
// import Modal from "../Payments/Modal";
// import { Sidepro } from "../Header/Sidepro";
import LandingPage from "./LandingPage";
// import React, { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';

function App() {

  // useEffect(() => {
  //   const landings = document.querySelectorAll('.landing');
  //   landings.forEach((landing, index) => {
  //     ScrollReveal().reveal(landing, {
  //       origin: 'top',
  //       distance: '100px',
  //       duration: 2000,
  //       delay: 200 * index,
  //       reset:false,
  //     });
  //   });
  // }, []);



  return (
    <>
      <Navi />
      <LandingPage/>
      {/* <Delivery/> */}
      {/* <Modal/> */}
      {/* <Register/> */}
      {/* <EPage1/> */}
      {/* <Sidepro/> */}
    </>
  )
}

export default App
