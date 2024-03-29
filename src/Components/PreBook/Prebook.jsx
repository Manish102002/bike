import Navi from "../Header/Navi"
import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { getProductDetails } from "../../actions/productAction";
// import ESwiper from "./ESwiper"
import epng from "/public/1.png";
import { ReactImageTurntable } from 'react-image-turntable';
// import  { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';
import circle1 from '/public/bikes/1.png';
import circle2 from '/public/bikes/2.png';
import circle3 from '/public/bikes/3.png';
import circle4 from '/public/bikes/4.png';
import circle5 from '/public/bikes/5.png';
import circle6 from '/public/bikes/6.png';
import circle7 from '/public/bikes/7.png';
import circle8 from '/public/bikes/8.png';
import circle9 from '/public/bikes/9.png';
import circle10 from '/public/bikes/10.png';
import circle11 from '/public/bikes/11.png';
import circle12 from '/public/bikes/12.png';
import circle13 from '/public/bikes/13.png';
import circle14 from '/public/bikes/14.png';
import circle15 from '/public/bikes/15.png';
import circle16 from '/public/bikes/16.png';
import { clearErrors } from "../../actions/userAction";
import { addItemsToCart } from "../../actions/cartAction";
// import { useParams } from "react-router";

const images = [
    circle1,
    circle2,
    circle3,
    circle4,
    circle5,
    circle6,
    circle7,
    circle8,
    circle9,
    circle10,
    circle11,
    circle12,
    circle13,
    circle14,
    circle15,
    circle16,
   
];

// useEffect(()=>{
//     const timeout = setTimeout(() => {
//         ScrollReveal().reveal(".prebook", {
//           origin: 'top',
//           reset: true,
//           distance: '500px',
//           duration: 3000,
//           delay: 500,
//         });
    
//         ScrollReveal().reveal(".img", {
//           origin: 'left',
//           reset: true,
//           distance: '800px',
//           duration: 3000,
//           delay: 600,
//         });
    
//         ScrollReveal().reveal(".pre", {
//           origin: 'right',
//           reset: true,
//           distance: '800px',
//           duration: 3000,
//           delay: 700,
//         });
    
//         return () => clearTimeout(timeout);
        
//       }, 0);
// }, [])


const Prebook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const alert = useAlert();
    axios.defaults.baseURL = 'http://localhost:5000';
  
    const { product, loading, error } = useSelector(
      (state) => state.productDetails
    );
  
    const { success, error: reviewError } = useSelector(
      (state) => state.newReview
    );
  
    // const options = {
    //   size: "large",
    //   value: product.ratings,
    //   readOnly: true,
    //   precision: 0.5,
    // };
  
    const [quantity, setQuantity] = useState(1);
    const [bikeName, setBike] = useState("");
    const [bikeYear, setModelYear] = useState("");
    const [mobile, setMobile] = useState("");
    const [bikeColor, setColor] = useState("");
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isChecked, setIsChecked] = useState(false);

   
      const handleColorChange = (event) => {
        const inputColor = event.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    
        // Regular expression to validate color names
        const colorRegex = /^[a-zA-Z\s]+$/; // Only alphabets and spaces allowed
    
        if (inputColor === '' || colorRegex.test(inputColor)) {
          // If the input is empty or matches the color name pattern
          setColor(inputColor);
        }
      };
      const handleMobileChange = (event) => {
        const inputColor = event.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    
        // Regular expression to validate color names
        const mobileNumberRegex = /^[6-9][0-9]{9}$/;
    
        if (inputColor === '' || mobileNumberRegex.test(inputColor)) {
          // If the input is empty or matches the color name pattern
          setMobile(inputColor);
        }
      };
      const handleBikeChange = (event) => {
        const inputColor = event.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    
        // Regular expression to validate color names
        const bikeNameRegex = /^[a-zA-Z0-9\s'-]+$/;
    
        if (inputColor === '' || bikeNameRegex.test(inputColor)) {
          // If the input is empty or matches the color name pattern
          setBike(inputColor);
        }
      };
      const handleModelYearChange = (event) => {
        const inputColor = event.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    
        // Regular expression to validate color names
        const yearRegex = /^(19|20)\d{2}$/;
// Only alphabets and spaces allowed
    
        if (inputColor === '' || yearRegex.test(inputColor)) {
          // If the input is empty or matches the color name pattern
          setModelYear(inputColor);
        }
      };
      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
  
    const increaseQuantity = () => {
      if (product.Stock <= quantity) return;
  
      const qty = quantity + 1;
      setQuantity(qty);
    };
    // const productId  = "65ef6bad271503e62838c032";
  
    const decreaseQuantity = () => {
      if (1 >= quantity) return;
  
      const qty = quantity - 1;
      setQuantity(qty);
    };
  
    const addToCartHandler = () => {
     if(isChecked)
     {
        dispatch(addItemsToCart(productId,quantity,bikeColor,bikeYear,bikeName));
        toast.success("Item Added To Cart");
        navigate("/cart");
     }
     else{
         toast.warning("Please accept the terms and conditions");
     }
    };
  
    const submitReviewToggle = () => {
      open ? setOpen(false) : setOpen(true);
    };
  

    const {productId} = useParams();
    console.log(productId);

    const reviewSubmitHandler = () => {
      const myForm = new FormData();
  
      myForm.set("rating", rating);
      myForm.set("comment", comment);
      myForm.set("productId", productId);
  
      dispatch(newReview(myForm));
  
      setOpen(false);
    };
    const isPreBookDisabled = !bikeName || !bikeColor || !bikeYear || !mobile;

  
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
  
      if (reviewError) {
        toast.error(reviewError);
        dispatch(clearErrors());
      }
  
      if (success) {
        toast.success("Review Submitted Successfully");
        dispatch({ type: NEW_REVIEW_RESET });
      }
      dispatch(getProductDetails(productId));
      console.log(product);
    }, [dispatch, error, reviewError, success]);

    return (
        <>
            <Navi />
<ToastContainer/>
            <div className=" flex justify-center flex-wrap items-center   bg-black">

                <div className="img w-[600px] " >
                    {/* <img src="/public/1.png" alt="" /> */}
                    <ReactImageTurntable images={images} />;
                    <h3></h3>
                </div>

                <div className="pre bg-black text-white flex flex-col flex-wrap justify-center pb-8 items-center">
                    <h1 className="prebook pt-10 text-3xl text-darkYellow font-semibold space-x-8">PRE-BOOK YOUR TEXT RIDE</h1>
                    <div className=" flex flex-wrap justify-center items-center  gap-7 mt-10">
                        <div className="">
                            <h2 className=" font-semibold text-md mb-2">Color</h2>
                            <input  onChange = {handleColorChange} type="text" name="" id="" placeholder=" Color" className=" w-[250px] py-3 bg-transparent border  outline-none px-1 placeholder:font-semibold" />
                        </div>
                        <div>
                            <h2 className=" font-semibold text-md mb-2">Model Year</h2>
                            <input onChange = {handleModelYearChange} type="text" name="" id="" placeholder="Bike Model Year" className=" w-[250px] py-3 bg-transparent border  outline-none px-1 placeholder:font-semibold" />
                        </div>
                    </div>
                    <div className=" flex justify-center items-center flex-wrap gap-7 mt-6">
                        <div>
                            <h2 className=" font-semibold text-md mb-2">Bike</h2>
                            <input onChange = {handleBikeChange} type="text" name="" id="" placeholder="Bike Model Name" className=" w-[250px] py-3 bg-transparent border  outline-none px-1 placeholder:font-semibold" />
                        </div>
                        <div>
                            <h2 className=" font-semibold text-md mb-2">Mobil Number</h2>
                            <input onchange = {handleMobileChange} type="text" name="" id="" placeholder="Mobile Number" className=" w-[250px] py-3 bg-transparent border  outline-none px-1 placeholder:font-semibold" />
                        </div>
                    </div>
                    <div className="mt-9  border border-white" />
                    <div>
                        <p className=" lg:w-[500px] md:w-[500px] sm:w-[500px] w-[300px] opacity-50">
                            Disclaimer: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto fugiat tenetur porro quaerat soluta totam amet?
                        </p>
                    </div>
                    <div className=" flex gap-5 mt-4 items-start ">
                        <input onChange = {handleCheckboxChange} type="checkbox" name="" id="" className="mt-2"/>
                        <p className=" lg:w-[500px] md:w-[500px] sm:w-[500px] w-[300px]">I accept the terms and conditions as well as privacy policy.</p>
                    </div>
                    <button onClick = {addToCartHandler} className=" w-[350px] border mb-10 mt-10 p-3 hover:bg-darkYellow hover:text-black text-white font-semibold ">Pre Book</button>
                </div>


            </div>
        </>
    )
}

export default Prebook