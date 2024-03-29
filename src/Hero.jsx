import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import ProductPage from "./Components/ProductPage";
import FullProduct from './Components/Products/FullProduct.jsx';
// import AboutAs from "./Components/AboutAs.jsx/AboutAs.jsx";
import About from "./Components/AboutAs.jsx/About.jsx";
import ProductPage from "./Components/Products/ProductPage.jsx";
import App from "./Components/Hero/App.jsx";
// import CartPage from "./Components/Cart/CartPage.jsx";
import { Payments } from "./Components/Payments/Payments.jsx";
import Login from "./Components/Login/Login.jsx";
import EPage1 from "./Components/Explore/EPage1.jsx";
import PreBook from "./Components/PreBook/Prebook.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Register from "./Components/Login/Register.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Delivery from "./Components/Payments/Delivery.jsx";
import LocomotiveScroll from 'locomotive-scroll';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ForgotPassword from "./Components/Login/ForgotPassword.jsx";
import ResetPassword from "./Components/Login/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/fullproduct",
    element: <FullProduct />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  ,
  {
    path: "/payment",
    element: <Payments />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/password/forgot",
    element: <ForgotPassword />
  },
  {
    path: "/password/reset/:token",
    element: <ResetPassword />
  },
  {
    path: "/Explore/:productId",
    element: <EPage1 />
  },
  {
    path: "/prebook/:productId",
    element: <PreBook />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/profile",
    element: <Profile />
  },

]);

const Hero = () => {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {

    const headings = document.querySelectorAll('.heading');
    headings.forEach((heading, index) => {
      ScrollReveal().reveal(heading, {
        origin: 'top',
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200 * index, // Delay increases for each heading
      });
    });

    ScrollReveal().reveal(".about", {
      origin: 'right',
      reset: true,
      distance: '300px',
      duration: 1500,
      delay: 100,
    })

    ScrollReveal().reveal(".about2", {
      origin: 'left',
      reset: true,
      distance: '300px',
      duration: 1500,
      delay: 100,
    })

    // const timeout = setTimeout(() => {
    //   ScrollReveal().reveal(".landing", {
    //     origin: 'top',
    //     reset: true,
    //     distance: '80px',
    //     duration: 1000,
    //     delay: 100,
    //   });
    // }, 0);

    // return () => clearTimeout(timeout);

  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Hero