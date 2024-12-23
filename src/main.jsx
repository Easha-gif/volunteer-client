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
import MyPosted from './components/routes/MyPosted.jsx';
import Private from './components/pages/Private.jsx';
import Update from './components/routes/Update.jsx';
import MyPostRequest from './components/routes/MyPostRequest.jsx';
import ErrorPage from './components/routes/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<Private><AddPost></AddPost></Private>
      },
      {
        path:'/allPosts',
        element:<AllPosts></AllPosts>,
        
      },
      {
        path:'/sortPost/:id',
        element:<Private><Details></Details></Private>,
      },
      {
        path:'/beVolunteer/:id',
        element:<Private><BeAVolunteer></BeAVolunteer></Private>
      },
      {
        path:"/myPosts",
        element:<Private><MyPosted></MyPosted></Private>
      },
      {
        path:"/update/:id",
        element:<Private><Update></Update></Private>
      },
      {
        path:"/myPostRequest",
        element:<Private><MyPostRequest></MyPostRequest></Private>
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
