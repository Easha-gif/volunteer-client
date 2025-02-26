
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/Navbar'
import Footer from './components/pages/Footer'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './components/pages/AuthProvider'

function App() {
  // const [theme , setTheme] = useState(false)
const {theme,setTheme}=useContext(AuthContext)

const handleToggleTheme = () =>{
 const themeSet =(!theme)
 setTheme(themeSet)
} 


  return (
    <>
   <div className={`${theme?"bg-black":"bg-white"}`}>
    <Navbar handleToggleTheme={handleToggleTheme}theme={theme}></Navbar>
   <div className="pt-20 min-h-screen">
   <Outlet></Outlet>
   </div>
    </div>
     <Footer></Footer>
    </>
  )
}

export default App
