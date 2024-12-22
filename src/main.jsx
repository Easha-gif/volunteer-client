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
import Home from './components/routes/Home.jsx';
import AddPost from './components/AddPost.jsx';
import { Toaster } from 'react-hot-toast';
import AllPosts from './components/pages/AllPosts.jsx';
import Details from './components/pages/Details.jsx';
import BeAVolunteer from './components/pages/BeAVolunteer.jsx';


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
      },
      {
        path:'/allPosts',
        element:<AllPosts></AllPosts>,
        
      },
      {
        path:'/sortPost/:id',
        element:<Details></Details>,
      },
      {
        path:'/beVolunteer/:id',
        element:<BeAVolunteer></BeAVolunteer>
      },
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
