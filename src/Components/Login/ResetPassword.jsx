import { useEffect, useState } from 'react';
import { Link, matchPath, Navigate, useMatch, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import bgimg1 from '/public/images/bg.avif';
import Navi from '../Header/Navi';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, resetPassword } from '../../actions/userAction';
import Loader from '../Loader';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    axios.defaults.baseURL = 'http://localhost:5000';

  
    const { error, success, loading} = useSelector(
      (state) => state.forgotPassword
    );
    
    const {token} = useParams();
    console.log(token);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const resetPasswordSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("password", password);
      myForm.set("confirmPassword", confirmPassword);
  
      dispatch(resetPassword(token, myForm));
    };
    useEffect(() => {
        if (error) {
         toast.error(error)
          dispatch(clearErrors());
        }
    
        if (success) {
            toast.success("Password Updated Successfully");
            setPassword("")
            setConfirmPassword("")
            
        
        }
      }, [dispatch, error, success]);

  return (
    <>
      {loading?<Loader />:
      <>
      <ToastContainer />
      <Navi />
      <div className="bg-cover h-[88.9vh] pb-2 w-min-full gap-3 flex items-center flex-col text-white" style={{ backgroundImage: `url(${bgimg1})` }} >

        <h1 className="login font-bold my-6 text-2xl">
          Reset Password
        </h1>

        <div className="flex items-center flex-wrap justify-center gap-y-4 gap-x-9">
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            name="password" 
            id="password" 
            className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" 
            placeholder="New Password" 
            required 
          />
          <input 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            type="password" 
            name="confirmPassword" 
            id="confirmPassword" 
            className="left bg-transparent border border-white w-[300px] p-3 text-white outline-none placeholder:text-white placeholder:font-bold" 
            placeholder="Confirm Password" 
            required 
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 ">
          <div onClick={resetPasswordSubmit} className="bottom w-[190px] py-1 bg-lightYellow rounded-md font-semibold cursor-pointer text-black text-center">Reset Password</div>
        </div>

        <div className="bottom mt-10 font-bold text-2xl">New to Yourwebsite.com?</div>

        <Link to="/register" className="bottom">
          <div className="w-[170px] py-1 cursor-pointer border border-white font-semibold text-center hover:bg-darkYellow duration-100 ease-linear hover:text-black">Create an Account</div>
        </Link>

        {/* <div className="bottom mt-10 font-bold text-2xl">Sign in via</div>
        <div className="bottom w-[190px] py-1 bg-lightYellow rounded-md font-semibold cursor-pointer text-black text-center">Sign in with Google</div> */}
      </div>
      </>
      }
    </>
  );
};

export default ResetPassword;
