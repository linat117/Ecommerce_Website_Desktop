
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import ManageAccount from './pages/ManageAccount'
import NotFound from './pages/NotFound'
import EditProfileForm from './pages/EditProfileForm'
import WishList from './pages/Wishlist'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
function App() {
  

  return (
  <>
 
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/wishlist" element={<WishList/>}/>
    <Route path="/manage_account" element={<ManageAccount/>}/>
    <Route path="/EditProfileForm" element={<EditProfileForm/>}/>
    <Route path="/notfound" element={<NotFound/>}/>
    <Route path="/products/:productId" element={<ProductDetails />} />
         
   
    </Routes>
    
  </>
  )
}

export default App
