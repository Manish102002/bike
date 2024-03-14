import { Link, useNavigate } from "react-router-dom"
import Navi from "../Header/Navi"
import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import axios from "axios";
import bgimg1 from '/public/images/bg.avif';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { FaTowerBroadcast } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  axios.defaults.baseURL = 'http://localhost:5000';


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
   dispatch(login(loginEmail, loginPassword));
  };
  const forgot = ()=>{
    console.log("forgot Password Clicked");
    navigate("/password/forgot");
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors());
    }

    // if (isAuthenticated) {
    //   history.push(redirect);
    // }
  }, [dispatch, error, alert, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollReveal().reveal(".login", {
        origin: 'top',
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 100,
      });

      ScrollReveal().reveal(".left", {
        origin: 'left',
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 100,
      });

      ScrollReveal().reveal(".right", {
        origin: 'right',
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 100,
      });


      ScrollReveal().reveal(".bottom", {
        origin: 'bottom',
        reset: true,
        distance: '180px',
        duration: 2000,
        delay: 100,
      });
    }, 0);


    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <ToastContainer />
      <Navi />
      <div className=" bg-cover h-[88.9vh] pb-2 w-min-full gap-3 flex items-center flex-col text-white" style={{
    backgroundImage: `url(${bgimg1})`, }} >

        <h1 className="login font-bold my-6   text-2xl">
          Log in to your account
        </h1>

        <div className=" flex items-center flex-wrap justify-center gap-y-4 gap-x-9">

          <input onChange={(e) => setLoginEmail(e.target.value)} type="text" name="" id="" className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder="Email/Mobil Number" />

          <input onChange={(e) => setLoginPassword(e.target.value)} type="password" name="" id="" className="right bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder="Password" />

        </div>

        <div className=" flex flex-wrap items-center justify-center gap-x-9 gap-y-4 ">

          <div onClick = {loginSubmit} className="left w-[300px] py-3 font-bold bg-darkYellow cursor-pointer text-black text-center">Login</div>
          <div onClick = {forgot} className="right w-[300px] py-3 font-bold  text-white cursor-pointer text-start hover:text-red-900">Forget Password?</div>

        </div>

        <div className="bottom mt-10 font-bold  text-2xl ">New to Yourwebsite.com?</div>

        <Link to="/register" className="bottom">
          <div className=" w-[170px] py-1 cursor-pointer border border-white font-semibold text-center hover:bg-darkYellow duration-100 ease-linear hover:text-black">Create an Account</div>
        </Link>

        <div className="bottom mt-10 font-bold  text-2xl ">sign in to via</div>
        <div className="bottom w-[190px] py-1 bg-lightYellow rounded-md font-semibold cursor-pointer text-black  text-center">sign in with Google</div>
      </div>
    </>
  )
}

export default Login;