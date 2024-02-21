import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import Navi from "../Navi";
import Footer from "../Footer/Footer";
import Navi from "../Header/Navi";
import CartBut from "./CartBut";


const ProductPage = () => {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);


    function itemCountHandle() {
      setItemCount(cartItems.length);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        // https://fakestoreapi.com/products
        const data = await response.json();
        setProducts(data.slice(0, 3)); // Take only the first 3 items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addItemHandle = (productId) => {
    // Check if the product is already in the cart
    const isItemInCart = cartItems.some((item) => item.id === productId);

    if (isItemInCart) {
      // If the item is already in the cart, remove it
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
      setItemCount(updatedCart.length);
      
  } else {
      // If the item is not in the cart, add it
      const productToAdd = products.find((product) => product.id === productId);
      setCartItems([...cartItems, productToAdd]);

      setItemCount(cartItems.length + 1);
  }
  };

  




  return (
    <>
    <Navi itemCount={itemCount} setCartItems={setCartItems}/>

    
      <section className=" w-full h-full bg-darkBlack">
      {/* <CartBut text="Add to Cart" setCartItems={setCartItems} itemCount={itemCount} /> */}
        <div >
          <h1 className=" text-darkYellow text-center pt-5 text-4xl font-bold">Products</h1>


          <div className="flex text-textColor flex-wrap text-center items-center  justify-center mt-8 gap-20">

            {
              products.map((product) => (
                <div className="  rounded-lg bg-brown px-6 py-6 gap-1 flex flex-col shadow-lg transition duration-200 ease-in hover:shadow-white/50" key={product.id}>

                  <div className=" w-48 h-40 overflow-hidden ">

                    <img src="/public/product/seatp.png" alt="" className=" w-48 hover:scale-110 transition duration-300 ease-linear" />

                  </div>

                  <h1 className=" text-lg font-bold mt-3 w-48 overflow-hidden h-8">{product.title}</h1>

                  <h3 className=" -leading-10 mb-3">INR {product.price}</h3>

                  <button
                    onClick={() => addItemHandle(product.id)}
                    key={product.id}
                    className={`px-5 py-2 hover:bg-[white] hover:text-[black] border-white border-2 transition ease-linear duration-300 font-bold bg-black text-white mb-1`}
                  >
                    {cartItems.some((item) => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                  </button>

                  {/* <h5 className={`text-[red] text-sm ${cartItems.some((item) => item.id === product.id) ? 'block' : 'hidden'}`}>
                    Item added to cart
                  </h5> */}

                  <button className='px-5 py-2 hover:bg-[black] hover:text-[white] border-[white] border-2 transition ease-linear duration-300  font-bold bg-[white] text-[black] '>Buy</button>

                </div>
              ))
            }

          </div>


          <Link to="/fullproduct"> <div className=" text-center mt-8">
            <button className='px-5 py-2  hover:bg-darkYellow hover:text-black border-darkYellow text-white border transition ease-linear duration-300 mb-8  font-bold bg-black  '>View All Products</button>
          </div></Link>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default ProductPage