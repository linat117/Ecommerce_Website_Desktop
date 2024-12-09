import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Cart items from the API
  const [total, setTotal] = useState(0); // Total price

  // Fetch all cart items from API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/carts");
        const data = await response.json();

        if (data.length > 0) {
          const enrichedCarts = data.map((cart) =>
            cart.products.map((product) => ({
              ...product,
              title: `Product ${product.productId}`, // Replace with actual API product title
              image: `https://via.placeholder.com/150`, // Replace with actual product image
              price: 20.0, // Replace with actual API product price
            }))
          );

          const flatCart = enrichedCarts.flat(); // Flatten all products from all carts
          setCartItems(flatCart);
          calculateTotal(flatCart);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Calculate total price
  const calculateTotal = (items) => {
    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalPrice.toFixed(2));
  };

  // Update a cart item quantity
  const handleQuantityUpdate = async (productId, quantity) => {
    try {
      const updatedCart = cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );

      setCartItems(updatedCart);
      calculateTotal(updatedCart);

      // Update API
      await fetch("https://fakestoreapi.com/carts/7", {
        method: "PUT",
        body: JSON.stringify({
          userId: 3,
          date: "2019-12-10",
          products: updatedCart,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Delete a cart item
  const handleDeleteItem = async (productId) => {
    try {
      const updatedCart = cartItems.filter(
        (item) => item.productId !== productId
      );

      setCartItems(updatedCart);
      calculateTotal(updatedCart);

      // Delete request to API (optional; depends on backend handling)
      await fetch("https://fakestoreapi.com/carts/7", {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };
  
    return ( 
        <>
        <div>
           <Header/>
              {/*Cart page Navbar startted*/}
             <HomeNavbar/>
    <div className="p-4 ml-[9rem] mr-[9rem]">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Product</th>
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Total</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.productId}>
                    <td className="border px-4 py-2">{item.title}</td>
                    <td className="border px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16"
                      />
                    </td>
                    <td className="border px-4 py-2">${item.price}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityUpdate(
                            item.productId,
                            parseInt(e.target.value)
                          )
                        }
                        className="w-16 text-center border border-gray-300"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleDeleteItem(item.productId)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <p className="text-lg font-bold">
                Total: <span className="text-green-500">${total}</span>
              </p>
            </div>
          </>
        )}
      </div>
    <Footer/>
        </div>
        </>
     );
}
 
export default Cart;