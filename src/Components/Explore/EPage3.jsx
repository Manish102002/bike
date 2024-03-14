import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { getProductDetails } from "../../actions/productAction";
import ESwiper from "./ESwiper"
import epng from "/public/1.png";


const EPage3 = () => {
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
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
  
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
      dispatch(addItemsToCart(productId, quantity));
      alert.success("Item Added To Cart");
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
    const handleNavigatetoPrebook=()=>{
        navigate(`/prebook/${productId}`);
      }
  
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
    
            <div className=" h-[89vh]  text-white w-full overflow-hidden bg-black ">
                <ToastContainer/>
                <h1 className=" font-semibold text-center text-3xl pt-8">COLOURS</h1>
                <div className=" flex mt-6">
                    <div>
                        <div className="">
                            <img src={epng} alt="" className=" w-[700px]" />
                            <h3></h3>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-3 items-center">
                      
                        <h1 className=" font-semibold text-2xl">DRILL GREEN</h1>
                        <h2 className=" font-semibold text-2xl">{product.price}</h2>
                        <h3 className=" font-semibold opacity-50 text-1xl mb-8">Ex-Showroom Indore</h3>

                        <button onClick={handleNavigatetoPrebook} className="w-[450px] p-3 bg-white text-black font-semibold">PRE BOOK TEST RIDE</button>

                        <button className=" w-[450px] p-3  bg-[#191919] text-white font-semibold mt-2">DOWNLOAD TECHNICAL SPECIFICATION</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EPage3