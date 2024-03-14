import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import bgimg1 from '/public/images/bg.avif';
import 'react-toastify/dist/ReactToastify.css';
import Navi from '../Header/Navi';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, forgotPassword } from '../../actions/userAction';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  
  axios.defaults.baseURL = 'http://localhost:5000';

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );



  const forgot = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
        toast.error(error)
      dispatch(clearErrors());
    }

    if (message) {
        toast.success(message)
      
    }
  }, [dispatch, error, message]);

  return (
    <>
      <ToastContainer />
      <Navi />
      <div className="bg-cover h-[88.9vh] pb-2 w-min-full gap-3 flex items-center flex-col text-white" style={{ backgroundImage: `url(${bgimg1})` }} >

        <h1 className="login font-bold my-6 text-2xl">
          Forgot Password
        </h1>

        <div className="flex items-center flex-wrap justify-center gap-y-4 gap-x-9">
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            name="email" 
            id="email" 
            className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" 
            placeholder="Email Address" 
            required 
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 ">
          <div onClick={forgot} className="bottom w-[190px] py-1 bg-lightYellow rounded-md font-semibold cursor-pointer text-black text-center">Forgot Password</div>
        </div>

        <div className="bottom mt-10 font-bold text-2xl">New to Yourwebsite.com?</div>

        <Link to="/register" className="bottom">
          <div className="w-[170px] py-1 cursor-pointer border border-white font-semibold text-center hover:bg-darkYellow duration-100 ease-linear hover:text-black">Create an Account</div>
        </Link>

        {/* <div className="bottom mt-10 font-bold text-2xl">Sign in via</div> */}
        {/* <div className="bottom w-[190px] py-1 bg-lightYellow rounded-md font-semibold cursor-pointer text-black text-center">Sign in with Google</div> */}
      </div>
    </>
  );
};

export default ForgotPassword;
