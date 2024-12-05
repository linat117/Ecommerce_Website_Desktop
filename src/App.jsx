
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
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
i
import Checkout from './pages/Checkout'
import EditProfileForm from './pages/EditProfileForm'
function App() {
  

  return (
  <>
  
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/manage_account" element={<ManageAccount/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/EditProfileForm" element={<EditProfileForm/>}/>
    
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/product_details" element={<ProductDetails/>}/>
    <Route path="/notfound" element={<NotFound/>}/>
   
    </Routes>
    
  </>
  )
}

export default App
