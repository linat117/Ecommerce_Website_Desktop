import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
const ProductDetails = () => {
    const { productId } = useParams(); // Retrieve product ID from URL
    const [product, setProduct] = useState(null);
    const [defaultProducts, setDefaultProducts] = useState([]); //to store default products at first
    const [selectedImage, setSelectedImage] = useState(null); // To handle the selected image
    const [quantity, setQuantity] = useState(1); // To handle the quantity of product
    const [count, setCount] = useState(0);

    // Function to increase count
    const increment = () => setCount(count + 1);
  
    // Function to decrease count
    const decrement = () => {
      if (count > 0) setCount(count - 1); // Prevent negative values
    };
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())
            .then((json) =>{
                console.log("product Data:" , json);
                console.log("current product state:", product);
                setProduct(json);
            }) 
            .catch((err) => console.error("Error fetching product:", err));
    }, [productId]);
 // Handle Quantity Increment
 const increaseQuantity = () => setQuantity(prev => prev + 1);

 // Handle Quantity Decrement
 const decreaseQuantity = () => {
     if (quantity > 1) setQuantity(prev => prev - 1);
 };

 // Handle image change when clicked
 const handleImageChange = (image) => {
     setSelectedImage(image);
 };
    if (!product) {
        return <div>Loading product detail...</div>;
    }

    
    
    
    return ( 
        <>
        <div>
           <Header/>
              {/*Product details page Navbar startted*/}
          <HomeNavbar/>
    <div className="mt-[3rem] ml-[9rem] mr-[9rem] mb-[3rem]">
    {/* Product Title */}
    
    {/* Product Image and Description Section */}
    <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Image */}
        <div className="flex-1">
            <img 
                src={product.image} 
                alt={product.title} 
                className="w-[36rem] h-[36rem] object-contain rounded-lg shadow-lg"
            />
        </div>

        {/* Product Information */}
        <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 mt-[-1rem]">{product.title}</h1>

            <p className="font-poppins text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl text-green-600 font-bold mb-6"> ${product.price}</p>

<hr className="border border-gray-500"/>
<div className="flex mt-[1rem] mb-[1rem]">
    <p>Colors:</p>
    <div className="w-5 h-5 mt-[0.3rem] ml-[0.5rem] rounded-full border border-black bg-blue-400"></div>
    <div className="w-5 h-5 mt-[0.3rem] ml-[0.5rem] rounded-full border border-black bg-red-400"></div>

</div>
<div className="flex mb-[1rem] space-x-4">
    <div>Size:</div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2 hover:bg-red-500 active:bg-red-500 focus:bg-red-500"><p>XS</p></div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2 hover:bg-red-500 active:bg-red-500 focus:bg-red-500"><p>S</p></div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2 hover:bg-red-500 active:bg-red-500 focus:bg-red-500"><p>M</p></div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2 hover:bg-red-500 active:bg-red-500 focus:bg-red-500"><p>L</p></div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2 hover:bg-red-500 active:bg-red-500 focus:bg-red-500"><p>XL</p></div>
</div>
<div>
    <div className="flex space-x-3">
    <div className="flex border border-gray-600 space-x-4">
        <button
          className="bg-green-500 text-white px-4 py-2  hover:bg-green-600"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-xl mt-[0.6rem] text-gray-700">{count}</span>

        <button
          className="bg-red-500 text-white px-4 py-2  hover:bg-red-600"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div>
         {/* Add to Cart Button */}
         <button 
                className="bg-red-500 text-white text-lg font-medium py-3 px-8 rounded-lg hover:bg-red-600 transition"
            >
                <Link to="/checkout">
                Buy Now
                </Link>
            </button>
      </div>
      <div className="border border-gray-600 w-12 h-12 mt-[0.1rem] rounded-md hover:bg-red-500 active:bg-red-500 focus:bg-red-500">
        <CiHeart className="w-9 h-9 mt-[0.4rem] ml-[0.3rem]"/>
      </div>
    </div>
   
           
            </div>
            <div className="border border-black w-[36rem] h-[9rem] mt-[1rem]">
<div className="flex">
<div><TbTruckDelivery className="w-9 h-9 mt-[1rem] ml-[1rem] mr-[1rem]"/></div>
<div className="mt-[0.5rem] mb-[1rem]"> 
    <p>Free Delivery</p>
    <p className="underline">Enter your postal code for Delivery Availability</p>
    </div>
</div>
<hr/>
<div className="flex">
    <div><LuRefreshCcw className="w-9 h-9 mt-[1rem] ml-[1rem] mr-[1rem]"/></div>
    <div className="mt-[0.5rem]">
        <p>Return Delivery</p>
        <p className="flex">Free 30 Days Delivery Returns.<p className="underline">Details</p></p>
    </div>
</div>
</div>
        </div>
    </div>
</div>
<div className="flex overflow-x-auto gap-3 ml-[9rem] mt-[2rem] scrollbar-hidden">
      {defaultProducts.map((product) => (
        <div key={product.id} className="w-90 h-[340px] rounded-12 flex-shrink-0">
          <div className="w-[20rem] shadow-lg group rounded-[10px] h-80">
            <div className="flex">
              <div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">
                -40%
              </div>
              <div className="ml-[13rem] mt-[0.6rem] space-y-2">
                <div className="bg-gray-100 w-8 h-8 pt-[6.5px] pl-[6px] rounded-full">
                  <IoIosHeartEmpty 
                  className="w-5 h-5" 
                  onClick={() => handleAddToWishlist(product)}
                  />
                </div>
                <div className="bg-gray-100 w-8 h-8 pt-[6.5px] pl-[6px] rounded-full">
                  <IoEyeOutline className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="">
            <img
              src={product.image} // Assuming product has 'imageUrl'
              alt={product.name} // Assuming product has 'name'
              className="p- w-[120px] h-[176px] ml-[6.5rem] py-[0.3rem] object-cover rounded"
            />
            </div>
           <button
            onClick={handleAddToCart}
              className="w-[20rem] rounded-b ml-[10rem] mt-[1.7rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>


    <Footer/>
        </div>
        </>
     );
}
 
export default ProductDetails;