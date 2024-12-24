
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/Navbar'
import Footer from './components/pages/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [theme , setTheme] = useState('')


const handleToggleTheme = () =>{
 const themeSet =!theme
 setTheme(themeSet)
} 

useEffect(()=>{
console.log(theme);
},[theme])





  return (
    <>
   <div className={`${theme?"bg-black":"bg-white"}`}>
   <div className='w-full lg:w-11/12 mx-auto'>
    <Navbar handleToggleTheme={handleToggleTheme}theme={theme}></Navbar>
    <Outlet></Outlet>
    </div>
     <Footer></Footer>
   </div>
    </>
  )
}

export default App
