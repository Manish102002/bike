import { Link, useNavigate } from "react-router-dom"
import Navi from "../Header/Navi"
import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import bgimg1 from '/public/images/bg.avif';
import { clearErrors, register } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useAlert } from "react-alert";



const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const alert = useAlert();
    
   
    const { error, loading, isAuthenticated } = useSelector(
      (state) => state.user
    );
    axios.defaults.baseURL = 'http://localhost:5000';

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone:""
      });
    
      const { name, email, password, phone } = user;
  
  
    const registerSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("phone", phone);
        dispatch(register(myForm));
      };
      const registerDataChange = (e) => {
        // if (e.target.name === "avatar") {
        //   const reader = new FileReader();
    
        //   reader.onload = () => {
        //     if (reader.readyState === 2) {
        //       setAvatarPreview(reader.result);
        //       setAvatar(reader.result);
        //     }
        //   };
    
        //   reader.readAsDataURL(e.target.files[0]);
        // } else {
          setUser({ ...user, [e.target.name]: e.target.value });
        // }
      };
  
    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
      }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
    
        // if (isAuthenticated) {
        //   history.push(redirect);
        // }
      }, [dispatch, error, alert, isAuthenticated]);

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
            <div className=" bg-cover h-[88.9vh] pb-2 w-full gap-3 flex items-center flex-col text-white" style={{ backgroundImage:`url(${bgimg1})` }}>

                <h1 className="login font-bold my-6 text-darkYellow   text-2xl">
                    Create your account
                </h1>

                <div className=" flex items-center flex-wrap justify-center gap-y-4 gap-x-9">

                    <div>
                        <input onChange={registerDataChange} type="text" name="name" id="" className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder="UserName" />
                    </div>
                    <input onChange={registerDataChange} type="text" name="email" id="" className="right bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder="Email" />

                </div>

                <div className=" flex items-center flex-wrap justify-center gap-y-4 gap-x-9">

                    <input onChange={registerDataChange} type="text" name="phone" id="" className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder=" Mobil Number" />

                    <input type="text" name="" id="" className="right bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder=" OTP" />

                </div>

                <div className=" flex items-center flex-wrap justify-center gap-y-4 gap-x-9">

                    <input onChange={registerDataChange} type="text" name="password" id="" className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder=" Password" />

                    <input type="password" name="" id="" className="right bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" placeholder=" Conform Password" />

                </div>
                <div onClick={registerSubmit} className=" bottom">
                    <div className="bottom w-[170px] py-1 mt-10 cursor-pointer border border-darkYellow font-semibold text-center hover:bg-bgDarkYellow duration-100 ease-linear hover:text-black">Register</div>
                </div>
                <Link to="/login">
                    <div className="bottom cursor-pointer mt-6 hover:text-red-900 font-semibold">
                        Back To login
                    </div>
                </Link>
            </div>
      </>
    )
}

export default Register;