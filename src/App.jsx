
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
  <>
  
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path="/products" element={<Products/>}/>
    </Routes>
    
  </>
  )
}

export default App
