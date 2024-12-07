import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for list items
import { useState, useRef } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { MdOutlineHeadphones } from "react-icons/md";
import { TbDeviceGamepad } from "react-icons/tb";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";

import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../components/Footer";
const Home = () => {
  //dropdown 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //to make the dropdown closes when you click on the outside of the dropdown 
  const dropdownRef = useRef(null);
//logout logic
const { setUser } = useContext(UserContext)
const navigate = useNavigate();
const handleLogout = () => {
  // Clear all local storage or session data
  localStorage.removeItem("userToken");
  localStorage.removeItem("userInfo");

  // Optionally, clear the entire localStorage/sessionStorage
  localStorage.clear(); 
  sessionStorage.clear();
// Reset user state in context
setUser(null);
  // Redirect to login
  navigate("/login");
};

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);   
  // Slider content with description and images
  const slides = [
    {
      description: (
        <>
         <div className="flex mt-[0rem] ml-[1rem]">
<FaApple className="text-white text-[40px] mt-[-0.5rem]"/>
          <p className="text-white ml-[1rem]">iPhone 14 Series </p>
          </div> 
          <div className="text-white text-[36px] font-poppins w-[20rem]  ml-[1.4rem] ">
            Up to 10% off Voucher
          </div>
          <div>
            <a href="/shop" className="text-white underline ml-[1.6rem] mt-[1rem] font-poppins">Shop Now</a>
          </div>
        </>
      ),
    
      image: ( 
        <>
       <img src="phoneone.png"/>
        </>
      ),
    },
    {
      description: (
        <>
         <div className="flex mt-[0rem] ml-[1rem]">
<FaApple className="text-white text-[40px] mt-[-0.5rem]"/>
          <p className="text-white ml-[1rem]">iPhone 14 Series </p>
          </div> 
          <div className="text-white text-[36px] font-poppins w-[20rem]  ml-[1.4rem] ">
            Up to 10% off Voucher
          </div>
          <div>
            <a href="/shop" className="text-white underline ml-[1.6rem] mt-[1rem] font-poppins">Shop Now</a>
          </div>
        </>
      ),
      image: (
        <img
      src="phonetwo.png"
      alt="iPhone 14"
      className="w-40 h-auto object-cover mx-auto mt-4"
    />
      ),
    },
    {
      description: (
        <>
        <div className="flex mt-[0rem] ml-[1rem]">
<FaApple className="text-white text-[40px] mt-[-0.5rem]"/>
         <p className="text-white ml-[1rem]">iPhone 14 Series </p>
         </div> 
         <div className="text-white text-[36px] font-poppins w-[20rem]  ml-[1.4rem] ">
           Up to 10% off Voucher
         </div>
         <div>
           <a href="/shop" className="text-white underline ml-[1.6rem] mt-[1rem] font-poppins">Shop Now</a>
         </div>
       </>
      ),
      image: "image3.jpg",
    },
    {
      description: (
        <>
        <div className="flex mt-[0rem] ml-[1rem]">
<FaApple className="text-white text-[40px] mt-[-0.5rem]"/>
         <p className="text-white ml-[1rem]">iPhone 14 Series </p>
         </div> 
         <div className="text-white text-[36px] font-poppins w-[20rem]  ml-[1.4rem] ">
           Up to 10% off Voucher
         </div>
         <div>
           <a href="/shop" className="text-white underline ml-[1.6rem] mt-[1rem] font-poppins">Shop Now</a>
         </div>
       </>
      ),
      image: "image4.jpg",
    },
    {
      description: (
        <>
         <div className="flex mt-[0rem] ml-[1rem]">
<FaApple className="text-white text-[40px] mt-[-0.5rem]"/>
          <p className="text-white ml-[1rem]">iPhone 14 Series </p>
          </div> 
          <div className="text-white text-[36px] font-poppins w-[20rem]  ml-[1.4rem] ">
            Up to 10% off Voucher
          </div>
          <div>
            <a href="/shop" className="text-white underline ml-[1.6rem] mt-[1rem] font-poppins">Shop Now</a>
          </div>
        </>
      ),
      image: "image5.jpg",
    },
  ];

  // State to manage current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };  
 
  //category section on click functionality
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]); //to store default products at first
  //const scrollContainerRef = useRef(null);

  // Fetch categories on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  
  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => setDefaultProducts(data.slice(0, 5))) // Fetch and show 5 products initially
  .catch((err) => console.error("Error fetching default products:", err));
}, []);

  // Handle category click
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const handleClick = (categoryName) => {
  setSelectedCategory(categoryName);
  setLoading(true); // Start loading
  setError(null);
  fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setLoading(false); // Stop loading
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      setLoading(false); // Stop loading on error
    });
};

  return ( 
        <div className="overflow-x-hidden">
            <Header/>
           
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
<div className="flex ml-[14rem]" ref={dropdownRef}>
    <input type="text" placeholder="what are you looking for?" className="bg-gray-50 h-8 p-2 w-60 rounded-lg text-[12px] font-poppins"/>
    <IoIosSearch className="ml-[-2rem] mt-[0.5rem] mr-[1rem] text-[20px]"/>
<CiHeart className="text-[26px] mt-[0.3rem] ml-[1rem]"/>
<BsCart2 className="text-[23px] mt-[0.3rem] ml-[1rem]"/>
<FaUserCircle className="text-red-600 w-6 h-6 ml-[1rem] mt-[0.3rem]"
 onClick={() => setIsDropdownOpen((prev) => !prev)}
 />
  {isDropdownOpen && (
              <div className="absolute ml-[10rem] mt-8 w-52 bg-[#000000]/[10%] backdrop-blur-xl backdrop-opacity-95  rounded-  z-50">
                <ul className="py-2 font-poppins text-[13px] text-white">
                  <li className="flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                    <a href="/manage_account">
                  < FaRegUser className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/>  Manage My Account
                  </a>
                  </li>
                  <li className="flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                   <PiShoppingBagOpenDuotone className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/> My Orders
                  </li>
                  <li className=" flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                  <MdOutlineCancel className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/>  My Cancellations
                  </li>
                  <li className=" flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                   <IoIosStarOutline className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/> My Reviews
                  </li>
                  <li
                  onClick={handleLogout}
                   className=" flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                   <SlLogout className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/> Logout
                  </li>
                </ul>
              </div>
            )}

</div>
</div>
    </div>
    <div className="flex">
        <div className="border-r-2  w-60 h-[320px] ml-[10rem]">
            <ul className="space-y-2 py-4">
                <li className="flex">Woman's Fashion <MdKeyboardArrowRight className="ml-[6rem] mt-[0.3rem] text-[20px]"/></li>
                <li className="flex">Men's Fashion <MdKeyboardArrowRight className="ml-[7.3rem] mt-[0.3rem] text-[20px]"/></li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>MEdicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
        <div className="w-[1050px] h-[285px] mt-[2rem] ml-[2rem] bg-black relative flex items-center justify-between px-4">
      {/* Description Section */}
      <div className="w-1/2 text-left p-4">{slides[currentSlide].description}</div>

      {/* Image Section */}
      <div className="w-1/2">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="object-cover rounded"
        />
      </div>

      {/* Radio Buttons */}
      <div className=" bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>

    </div>
    <div className="mt-[4rem]">
      <div className="flex">
      <div className="bg-red-600 w-6 h-12 ml-[10rem] rounded-md"></div>
      <p className="text-red-800 font-poppins text-[12px] font-semibold mt-[0.9rem] ml-[1rem]">Today's</p>
      </div>
      <div className="ml-[10rem] mt-[1rem] flex pt-2">
        <div className="text-[22px] font-poppins font-semibold">Flash Sales</div>
        <div className="mt-[-0.5rem]">
          <div className="ml-[12rem]"> Days &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Hours &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; Minutes &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Seconds</div>
          <div className="ml-[12rem] text-[20px] font-semibold font-poppins">03 <span className="ml-[1.5rem] mr-[1.3rem] text-red-700"> : </span > 23 <span className="ml-[1.5rem] mr-[1.3rem] text-red-700"> : </span> 19 <span className="ml-[1.5rem] mr-[1.3rem] text-red-700"> : </span> 56</div>
        </div>
        <div className="flex space-x-3 ml-[37rem]">
          <div className="bg-gray-100 w-11 h-11 rounded-full" > <FaArrowLeft
        className="  text-2xl text-gray-700 cursor-pointer z-10 ml-[0.6rem] mt-[0.6rem]"
        onClick={scrollLeft}
      /></div>
          <div className="bg-gray-100 w-11 h-11 rounded-full"><FaArrowRight
        className="   text-2xl text-gray-700 cursor-pointer z-10 ml-[0.6rem] mt-[0.6rem]"
        onClick={scrollRight}
      /></div>
        </div>
      </div>
      <div className=" w-full ">
      {/* Icons */}
     
      

      {/* Scrollable Image box for todays option */}
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
              className="w-[20rem] rounded-b ml-[10rem] mt-[1.7rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>

    </div>
      <div className="ml-[46rem] mt-[2rem]"><Link to="/products"><button  className="bg-red-600 p-2 text-white px-6 rounded">View All Product</button></Link></div>
    </div>
    <hr className="mx-[9rem] mt-[2rem]"/>
    {/*scrollabl buttons for categories section*/}
    <div className="flex mt-[3rem]">
      <div className="bg-red-600 w-6 h-12 ml-[10rem] rounded-md"></div>
      <p className="text-red-800 font-poppins text-[12px] font-semibold mt-[0.9rem] ml-[1rem]">Categories</p>
      </div>
      <div className="ml-[10rem] mt-[1rem] flex pt-2">
        <div className="text-[22px] font-poppins font-semibold">Browse By Categories</div>
       
        <div className="flex space-x-3 ml-[58rem]">
          <div className="bg-gray-100 w-11 h-11 rounded-full" > <FaArrowLeft
        className="  text-2xl text-gray-700 cursor-pointer z-10 ml-[0.6rem] mt-[0.6rem]"
        onClick={scrollLeft}
      /></div>
          <div className="bg-gray-100 w-11 h-11 rounded-full"><FaArrowRight
        className="   text-2xl text-gray-700 cursor-pointer z-10 ml-[0.6rem] mt-[0.6rem]"
        onClick={scrollRight}
      /></div>
        </div>
      </div>
      <div className="category-section">
      {/* Categories */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-x-16 ml-[9rem] mt-[2rem]"
      >
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleClick(category)}
            aria-pressed={selectedCategory === category}
            className={`w-64 p-7 px-[48px] py-16 border rounded-[3px] flex-shrink-0 h-44 cursor-pointer ${
              selectedCategory === category
                ? "bg-red-600 text-white text-2xl transition-all ease-in-out duration-100"
                : "bg-white border-gray-400 text-2xl"
            }`}
          >
            <div className="ml-[1.6rem]">{category}</div>
          </div>
        ))}
      </div>
<div className="mt-[4rem]">
        <div className="flex">
          <div className="bg-red-600 w-6 h-12 ml-[10rem] rounded-md"></div>
          <p className="text-red-800 font-poppins text-[12px] font-semibold mt-[0.9rem] ml-[1rem]">
            Today's
          </p>
          
        </div>
        {/* Products */}
        <div className="products mt-8 ml-[9rem]">
        <div className="text-[22px] font-poppins font-semibold">
    {selectedCategory ? selectedCategory : "All Products"}
  </div>
  {loading ? (
    <p className="text-gray-500">Loading products...</p>
  ) : products.length > 0 ? (
    <div className="grid grid-cols-4 gap-6 mr-[10rem] ">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded p-4 shadow-md hover:shadow-lg hover:bg-red-100"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-32 w-full object-contain mb-2"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.price} USD</p>
        </div>
      ))}
    </div>
  ) : (
    // Display default "App Products" when no category is selected
    <div className="grid grid-cols-4 gap-6 mr-[10rem]">
    {defaultProducts.map((product) => (
      <div key={product.id} className="border rounded p-4 shadow-md hover:shadow-lg">
        <img src={product.image} alt={product.title} className="h-32 w-full object-contain mb-2" />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.price} USD</p>
      </div>
    ))}
  </div>
    
  )}
</div>

    </div>
    <div className="bg-black w-[76rem] h-[24rem] ml-[9rem] mt-[3rem]">
<div className="flex">
  <div className="p-14 space-y-5 pl-20">
    <div> <p className="text-[#00FF66] font-poppins">Categories</p></div>
    <div><h1 className="text-white text-[32px] font-poppins w-[18rem]">Enhance Your Music Experience</h1></div>
    <div className="flex space-x-3">
      <div className="bg-white  w-12 h-12 rounded-full">
        <p className="text-[12px] font-bold pl-4 pt-1 ">23</p>
        <p className="text-[9px] font-semibold font-poppins -pt-3 pl-1">Hours</p>
      </div>
      <div className="bg-white w-12 h-12 rounded-full">
      <p className="text-[12px] font-bold pl-4 pt-1 ">05</p>
      <p className="text-[8px] font-semibold font-poppins -pt-3 pl-1">Days</p>
      </div>
      <div className="bg-white w-12 h-12 rounded-full">
      <p className="text-[12px] font-bold pl-4 pt-1 ">59</p>
      <p className="text-[8px] font-semibold font-poppins -pt-3 pl-1">Minute</p>
      </div>
      <div className="bg-white w-12 h-12 rounded-full">
      <p className="text-[12px] font-bold pl-4 pt-1 ">35</p>
      <p className="text-[8px] font-semibold font-poppins -pt-3 pl-1">Second</p>
      </div>
    </div>
    <div>
      <button className="bg-[#00FF66] p-2 pl-7 pr-7 rounded font-poppins ">Buy now</button>
    </div>
  </div>
  <div>
    <img src="Music.png" 
    className=""
    />
  </div>
</div>
    </div>
    <div className="grid grid-cols-4 gap-6 mx-[9rem] mt-[2rem]">
  {defaultProducts.map((product) => (
    <div key={product.id} className="w-90 h-[340px] rounded-12">
      <div className="w-[20rem] shadow-lg group rounded-[10px] h-80">
        <div className="flex">
          <div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">
            -40%
          </div>
          <div className="ml-auto mt-[0.6rem] space-y-2">
            <div className="bg-gray-100 w-8 h-8 pt-[6.5px] pl-[6px] rounded-full">
              <IoIosHeartEmpty className="w-5 h-5" />
            </div>
            <div className="bg-gray-100 w-8 h-8 pt-[6.5px] pl-[6px] rounded-full">
              <IoEyeOutline className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-[120px] h-[176px] ml-[6.5rem] py-[0.3rem] object-cover rounded"
          />
        </div>
        
      </div>
    </div>
  ))}
</div>

    <div>
<div className="flex mt-[2rem] space-x-3">
          <div className="bg-red-600 w-6 h-12 ml-[9rem] rounded-md"></div>
          <p className="text-red-800 font-poppins text-[12px] font-semibold mt-[0.9rem] ml-[1rem]">
            Featured
          </p>
          
        </div>
        <div className="text-[22px] font-poppins font-semibold ml-[9rem] mt-[1rem]">New Arrival</div>
      <div className="flex ml-[9rem] mt-[2rem]">
        <div className="relative bg-black w-[580px] h-[570px]">
<img src="Playstation.png" className="mt-[-2rem]"/>
<p className="absolute inset-0 text-white mt-[25rem] font-poppins text-[28px] ml-[2rem]">PlayStation 5</p>
    <p className="absolute inset-0 text-white w-[250px] font-poppins mt-[28rem] ml-[2rem]">Black and White version of the PS5 coming out on sale</p>
    <p className="absolute inset-0 text-white w-[250px] font-poppins mt-[32rem] ml-[2rem]"><a href="" className="underline">Shop Now</a></p>
       
        </div>
        <div>
<div className="flex bg-black w-[580px] h-[250px] ml-[3.2rem]">
<div className="w-[280px] ml-[1rem] space-y-2">
<p className="text-white font-poppins text-[26px] font-semibold mt-[6rem] ">Women's Collection</p>
<p className="text-white font-poppins">Featured woman collections that give you another vibe.</p>
<p className="font-poppins text-white"><a href="" className="underline">Shop Now</a></p>
</div>
<div>
  <img src="Woman.png" className= " ml-[1.3rem] w-[250px] h-[220px] mt-[1.9rem]"/>
</div>
</div>
<div className="flex">
  <div className=" relative bg-black w-[265px] h-[270px] ml-[3.2rem] mt-[3rem]">
  <img src="speakers.png" className="mt-[1.2rem] ml-[4rem] w-[180px] h-[250px]"/>
<p className="absolute inset-0 text-white  font-poppins text-[18px] ml-[2rem] mt-[11.4rem]">Speakers</p>
<p className="absolute inset-0 text-white  font-poppins text-[16px] ml-[2rem] mt-[13.4rem]">Amazon wireless speakers</p>
<p className="absolute inset-0 text-white  font-poppins text-[18px] ml-[2rem] mt-[15rem]"><a href="" className="underline">Shop Now</a></p>

  </div>
  <div className="relative bg-black w-[265px] h-[270px] ml-[3.2rem] mt-[3rem]">
  <img src="perfume.png" className="mt-[1.2rem] ml-[4rem] w-[180px] h-[200px]"/>
  <p className="absolute inset-0 text-white  font-poppins text-[18px] ml-[2rem] mt-[11.4rem]">Perfume</p>
<p className="absolute inset-0 text-white  font-poppins text-[16px] ml-[2rem] mt-[13.4rem]">GUCCI INTENSE OUD EDP</p>
<p className="absolute inset-0 text-white  font-poppins text-[18px] ml-[2rem] mt-[15rem]"><a href="" className="underline">Shop Now</a></p>
  </div>
</div>
        </div>
        </div> 
</div>
    <div className="flex mt-[5rem] ml-[9rem] space-x-40">
    <div className="w-72 h-56  rounded bg-white ">
        <div className="w-20 h-20 rounded-full bg-gray-400  p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black  p-3">
            <TbTruckDelivery className="text-[40px]  text-white  "/>
            </div>
        </div>
        <div className="ml-[1rem] mt-[1rem] font-poppins font-semibold text-[16px]"> FREE AND FAST DELIVERY</div>
        <div className="font-poppins text-[14px] ml-[rem] mt-[">Free delivery for all orders over $140</div>
    
    </div>
    <div className="w-72 h-56  rounded ">
        <div className="w-20 h-20 rounded-full bg-gray-400  p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black  p-3">
            <RiCustomerServiceLine className="text-[40px]  text-white"/>
            </div>
        </div>
        <div className="ml-[1rem] mt-[1rem] font-poppins font-semibold text-[16px]"> 24/7 CUSTOMER SERVICE</div>
        <div className="font-poppins text-[14px] ml-[rem] mt-[">Friendly 24/7 customer support</div>
    
    </div>
    <div className="w-72 h-56  rounded ">
        <div className="w-20 h-20 rounded-full bg-gray-400  p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black   p-3">
            < AiOutlineSafetyCertificate  className="text-[40px]  text-white"/>
            </div>
        </div>
        <div className="ml-[1rem] mt-[1rem] font-poppins font-semibold text-[16px]"> MONEY BACK GUARANTEE</div>
        <div className="font-poppins text-[14px] ml-[rem] mt-[">we return money within 30 days</div>
    
    </div>
    
</div>

      </div>
      <Footer/>
        </div>
     );
}

 
export default Home;