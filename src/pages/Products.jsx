import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.error("Error fetching products:", err));
    }, []); // Fetches data when the component is mounted.
    const handleProductClick = (productId) => {
        navigate(`/products/${productId}`); // Navigate to the product detail page
    };
    //add to cart page 
    const handleAddToCart = async (product) => {
  const cartData = {
    userId: 5, // Replace with dynamic user ID if available
    date: new Date().toISOString().split("T")[0],
    products: [
      {
        productId: product.id,
        quantity: 1, // Default quantity set to 1
      },
    ],
  };

  try {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    });
    const result = await response.json();
    console.log("Product added to cart:", result);
    alert(`${product.title} has been added to the cart.`);
  } catch (error) {
    console.error("Error adding product to cart:", error);
    alert("Failed to add product to cart.");
  }
};

    return ( 
        <>
        <Header/>
        <HomeNavbar/>
        <div className="p-4 ml-[9rem] mr-[9rem]">
  <h1 className="text-2xl font-bold mb-4 font-poppins">All Products</h1>
  <div>
  <div className="grid grid-cols-3 gap-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="border p-4 rounded shadow-lg hover:bg-red-100"
      >
        <h2 className="text-lg font-bold">{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-32 mx-auto cursor-pointer"
          onClick={() => handleProductClick(product.id)}

        />
        <p className="text-sm">{product.description}</p>
        <p className="text-green-500 font-bold">${product.price}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-red-500 text-white p-2 mt-2 rounded hover:bg-red-600"
        >
          Add to Cart
        </button>
      
      </div>
      
    ))}
  </div>
  
        </div>
</div>
<Footer/>

        </>
     );
}
 
export default Products;