import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/routes/Login.jsx';
import Register from './components/routes/Register.jsx';
import AuthProvider from './components/pages/AuthProvider.jsx';
import Slider from './components/pages/Slider.jsx';
import Home from './components/routes/Home.jsx';
import AddPost from './components/AddPost.jsx';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<p>error...</p>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login> ,
      },
      {
        path:'/register',
        element:<Register></Register> ,
      },
      {
        path:'/addPost',
        element:<AddPost></AddPost>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
  <RouterProvider router={router} />
  <Toaster
  position="top-right"
  reverseOrder={false}
/>
</AuthProvider>
  </StrictMode>,
)
