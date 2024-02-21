import { data } from "autoprefixer";
import { useEffect, useState } from "react"
import { Link, json } from "react-router-dom";
// import Buttons from "../Buttons";
import CartBut from "./CartBut";
// import CardButton from "../CardButton";



const FullProduct = () => {

    const [originalProducts, setOriginalProducts] = useState([]);
    const [searchProducts , setSearchProducts] = useState([]); 
    const [filteredData, setFilteredData] = useState(null)
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    // const [filteredData, setFilteredData] = useState(null)
    // const [selectedBtn, setSelectedBtn] = useState("all");

    function itemCountHandle() {
        setItemCount(cartItems.length);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('');
                // https://fakestoreapi.com/products
                const data = await response.json();
                setOriginalProducts(data);
                setFilteredData(data);
                setProducts(data); 
                
                // Take only the first 3 items
                // setFilteredData(json);
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

    const filterProduct = (cateItem) => {
        if (cateItem === 'ALL') {
            // Reset to the original list when 'ALL' is clicked
            setProducts(originalProducts);
        } else {
            const updatedItem = originalProducts.filter((curElem) => curElem.category === cateItem);
            setProducts(updatedItem);
        }
    };


    const searchFood = (e) => {
        const searchValue = e.target.value;
        console.log(searchValue);
    
        if (searchValue.trim() === "") {
            setFilteredData(null);
        } else {
            const filter = products?.filter((product) =>
                product.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            console.log(filter || []);  // Log the filtered data
            setFilteredData(filter || []);
        }
    };
    


    return (



        <div className=" bg-black  w-full min-h-[100vh] h-full">


            <div>
                <div className=" flex justify-between pt-5 mb-4 px-10">

                    <Link to="/"><button className=" border border-white text-sm px-3 bg-white py-1 text-black font-bold rounded-sm">Back</button></Link>

                    <div>
                        <input onChange={searchFood}  type="text" name="" id="" placeholder="Search name" className=" outline-none p-1 rounded-sm bg-transparent border text-white font-semibold " />
                    </div>

                    <CartBut text="Add to Cart" setCartItems={setCartItems} itemCount={itemCount} />
                    {/* <div className=" text-white" ><Buttons/></div> */}
                    {/* <div className="text-white text-2xl">{itemCount}</div> */}
                    

                </div>

                <div className=" flex justify-center items-center gap-3">

                    <button onClick={() => filterProduct('ALL')} className=" border border-white text-sm px-3 bg-white py-1 text-black font-bold rounded-sm">ALL</button>
                    <button onClick={() => filterProduct("men's clothing")}  className=" border border-white text-sm px-3 bg-white py-1 text-black font-bold rounded-sm">Men's cloth</button>
                    <button  onClick={() => filterProduct("women's clothing")}  className=" border border-white text-sm px-3 bg-white py-1 text-black font-bold rounded-sm"> Women's Cloth</button>
                    <button onClick={() => filterProduct("jewelery")}  className=" border border-white text-sm px-3 bg-white py-1 text-black font-bold rounded-sm">Jewelery</button>
                    <button  onClick={() => filterProduct("electronics")}   className=" border border-white text-sm px-3 bg-white py-1 text-black font-bold rounded-sm">Electronic</button>
                    
                </div>

            </div>



            <div className="flex text-textColor flex-row flex-wrap text-center items-center justify-center pt-10 gap-20">
                { 
                    (products || filteredData)?.map((product) => (
                        <div className=" border border-white px-6 py-6 gap-1 flex flex-col" key={product.id}>

                            <div className=" w-48 h-40 overflow-hidden ">

                                <img src={product.image} alt="" className=" w-48 hover:scale-110 transition duration-300 ease-linear" />

                            </div>

                            <h1 className=" text-lg font-bold mt-3 w-48">{product.title}</h1>

                            <h3 className=" -leading-10 mb-3">INR {product.price}</h3>

                            <button
                                onClick={() => addItemHandle(product.id)}
                                key={product.id}
                                className={`px-5 py-2 hover:bg-white hover:text-black border-white border-2 transition ease-linear duration-300 font-bold bg-black text-white mb-1`}
                            >
                                {cartItems.some((item) => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                            </button>

                            {/* <h5 className={`text-[red] text-sm ${cartItems.some((item) => item.id === product.id) ? 'block' : 'hidden'}`}>
                                Item added to cart
                            </h5> */}

                            <button className='px-5 py-2  hover:bg-transparent hover:text-white border-white border-2 transition ease-linear duration-300  font-bold bg-white text-black '>Buy</button>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default FullProduct