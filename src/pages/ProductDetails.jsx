import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
const ProductDetails = () => {
    const { productId } = useParams(); // Retrieve product ID from URL
    const [product, setProduct] = useState(null);
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
              <div className="w-screen h-20 border p-7 overflow-hidden">
<div className="flex  w-[1250px] h-9 ml-[8rem]  mr-[8rem] p-1">
<div className="text-[18px] font-poppins font-semibold">Exclusive</div>
<div className="ml-[12rem]">
    <ul className="flex space-x-10 font-poppins">
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/signup">Sign up</a></li>
    </ul>
</div>
<div className="flex ml-[14rem] ">
    <input type="text" placeholder="what are you looking for?" className="bg-gray-50 h-8 p-2 w-60 rounded-lg text-[12px] font-poppins"/>
    <IoIosSearch className="ml-[-2rem] mt-[0.5rem] mr-[1rem] text-[20px]"/>
<CiHeart className="text-[26px] mt-[0.3rem] ml-[1rem]"/>
<BsCart2 className="text-[23px] mt-[0.3rem] ml-[1rem]"/>
<FaUserCircle className="text-red-600 w-6 h-6 ml-[1rem] mt-[0.3rem]"/>

</div>
</div>
<div className="p-4 ml-[9rem]  mr-[9rem]">
                <h1 className="text-2xl font-bold mb-4 font-poppins">{product.title}</h1>
                <div className="flex gap-6">
                    <img src={product.image} alt={product.title} className="w-64 h-64 object-cover" />
                    <div>
                        <p className="text-lg">{product.description}</p>
                        <p className="text-green-500 font-bold mt-4">Price: ${product.price}</p>
                        <p className="mt-2">Category: {product.category}</p>
                    </div>
                </div>
            </div>
    </div> 
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
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2"><p>XS</p></div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2"><p>S</p></div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2"><p>M</p></div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2"><p>L</p></div>
    <div className="w-9 h-9 border border-gray-500 rounded-md p-1 pl-2"><p>XL</p></div>
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
                Buy Now
            </button>
      </div>
      <div className="border border-gray-600 w-12 h-12 mt-[0.1rem] rounded-md">
        <CiHeart className="w-9 h-9 mt-[0.4rem] ml-[0.3rem]"/>
      </div>
    </div>
   
           
            </div>
            <div className="border border-black w-[36rem] h-[12rem]">

</div>
        </div>
    </div>
</div>

    <Footer/>
        </div>
        </>
     );
}
 
export default ProductDetails;