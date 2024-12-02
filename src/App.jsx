
import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
  <>
  
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    
  </>
  )
}

export default App
