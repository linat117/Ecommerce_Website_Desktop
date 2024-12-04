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
const Home = () => {
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
   const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, icon: <MdPhoneIphone className="w-12 h-12" />, name: "Phones" },
    { id: 2, icon: <RiComputerLine className="w-12 h-12" />, name: "Computers" },
    { id: 3, icon: <BsSmartwatch className="w-12 h-12" />, name: "Smartwatches" },
    { id: 4, icon: <FiCamera className="w-12 h-12" />, name: "Cameras" },
    { id: 5, icon: <MdOutlineHeadphones className="w-12 h-12" />, name: "Headphones" },
    { id: 6, icon: <TbDeviceGamepad className="w-12 h-12" />, name: "Gaming" },
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
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
        <li>Contact</li>
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
      <div
  ref={scrollContainerRef}
  className="flex overflow-x-auto gap-3 ml-[9rem] mt-[2rem] scrollbar-hidden"
>
  <div className="w-90 h-[90px] rounded-12 flex-shrink-0">
    <div className="w-[20rem] bg-gray-100 group rounded-[10px] h-80">
    <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
    <img
      src=""
      alt="Placeholder 1"
      className=" pt-[2.6rem] pl-[3.8rem] object-cover rounded"
    />
     <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
    </div>
  </div>

  <div className="w-65 h-80 flex-shrink-0">
  <div className="w-[20rem] group bg-gray-100 rounded-[10px] h-80">
  <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
      <img
        src=""
        alt="Placeholder 1"
        className="pt-[2.6rem] pl-[3.8rem] object-cover rounded"
      />
       <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
      </div>
  </div>

  <div className="w-65 h-80 flex-shrink-0">
  <div className="w-[20rem] group bg-gray-100 rounded-[10px] h-80">
  <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
      <img
        src=""
        alt="Placeholder 1"
        className="pt-[2.6rem] pl-[3.8rem] object-cover rounded"
      />
      <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
      </div>
  </div>

  <div className="w-65 h-80 flex-shrink-0">
  <div className="w-[20rem] group bg-gray-100 rounded-[10px] h-80">
      <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
      <img
        src=""
        alt="Placeholder 1"
        className="pt-[2.6rem] pl-[3.8rem] object-cover rounded"
      />
       <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
      </div>
      hello
  </div>
  <div className="w-65 h-80 flex-shrink-0">
  <div className="w-[20rem] group bg-gray-100 rounded-[10px] h-80">
  <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
      <img
        src=""
        alt="Placeholder 1"
        className="pt-[2.6rem] pl-[3.8rem] object-cover rounded"
      />
       <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
      </div>
  </div>
  <div className="w-65 h-80 flex-shrink-0">
  <div className="w-[20rem] group bg-gray-100 rounded-[10px] h-80">
  <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
      <img
        src=""
        alt="Placeholder 1"
        className="pt-[2.6rem] pl-[3.8rem] object-cover rounded"
      />
       <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
      </div>
  </div>
  <div className="w-65 h-80 flex-shrink-0">
  <div className="w-[20rem] group bg-gray-100 rounded-[10px] h-80">
  <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
      <img
        src=""
        alt="Placeholder 1"
        className="pt-[2.6rem] pl-[3.8rem] object-cover rounded"
      />
       <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
      </div>
  </div>
  <div className="w-65 h-80 flex-shrink-0">
  <div className="w-[20rem] group bg-gray-100 rounded-[10px] h-80">
  <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
      <img
        src=""
        alt="Placeholder 1"
        className="pt-[2.6rem] pl-[3.8rem] object-cover rounded"
      />
       <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
      </div>
  </div>
  <div className="w-65 h-80 flex-shrink-0">
  <div className="w-[20rem] group bg-gray-100 rounded-[10px]  h-80">
  <div className="flex">
<div className="bg-red-600 w-14 h-7 rounded-md ml-[0.7rem] mt-[0.7rem] text-white/[70%] text-[12px] p-1 pl-3">-40%</div>
<div className="ml-[13rem] mt-[0.6rem] space-y-2">
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoIosHeartEmpty className="w-5 h-5   "/></div>
<div className="bg-white w-8 h-8 pt-[6.5px] pl-[6px] rounded-full"><IoEyeOutline className="w-5 h-5   "/></div>
</div>
      </div>
      <img
        src=""
        alt="Placeholder 1"
        className="pt-[2.6rem] pl-[3.8rem] object-cover rounded"
      />
       <button
      className="w-[20rem] rounded-b  ml-[10rem] mt-[8.4rem] transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Add to Cart
    </button>
      </div>
  </div>

  
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
  <div
   ref={scrollContainerRef}
  className="flex overflow-x-auto gap-x-12 ml-[9rem] mt-[2rem] ">
{categories.map((category) => (
  <div
    key={category.id}
    onClick={() => handleClick(category)}
    className={`w-44 p-7 border rounded-[3px] flex-shrink-0 h-44 cursor-pointer ${
      selectedCategory?.id === category.id
        ? "bg-red-600 text-white"
        : "bg-white border-gray-400"
    }`}
  >
    <div className="ml-[2.4rem] mb-[1rem]">{category.icon}</div>
    <div className="ml-[1.6rem]">{category.name}</div>
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
        <div className="ml-[10rem] mt-[1rem] flex pt-2">
          <div className="text-[22px] font-poppins font-semibold">
            {selectedCategory
              ? `${selectedCategory.name} Flash Sales`
              : "Select a Category"}
          </div>
        </div>

        {/* Placeholder for category-specific items */}
        <div className="ml-[9rem] mt-[2rem]">
          {selectedCategory ? (
            <div>
              Showing items for <strong>{selectedCategory.name}</strong>
            </div>
          ) : (
            <div>Please select a category to see items.</div>
          )}
        </div>
      </div>
        </div>
     );
}

 
export default Home;