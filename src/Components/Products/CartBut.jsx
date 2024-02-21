import { FaAngleDown } from "react-icons/fa6";

const CartBut = ({ text , itemCount }) => {
  return (
    <button className="flex border-2 font-bold leading-3 text-white hover:bg-white px-2 hover:text-black border-white w-32 h-9 cursor-pointer justify-center items-center transition ease-linear duration-300 gap-2">
      {text}[{itemCount}] 
      {/* <FaAngleDown /> */}
    </button>
  );
};

export default CartBut