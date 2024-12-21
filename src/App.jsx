
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/Navbar'
import Footer from './components/pages/Footer'

function App() {


  return (
    <>
    <div className='w-full lg:w-11/12 mx-auto'>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
     <Footer></Footer>
    </>
  )
}

export default App
