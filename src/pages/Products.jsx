import { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.error("Error fetching products:", err));
    }, []); // Fetches data when the component is mounted.

    return ( 
        <>
        <Header/>
        <Navbar/>
         <div className="p-4 ml-[9rem] mr-[9rem]">
             <h1 className="text-2xl font-bold mb-4 font-poppins">All Products</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <h2 className="text-lg font-bold">{product.title}</h2>
                        <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto" />
                        <p className="text-sm">{product.description}</p>
                        <p className="text-green-500 font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
     );
}
 
export default Products;