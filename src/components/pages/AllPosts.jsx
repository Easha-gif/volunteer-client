import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { HiMiniBars4 } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";


const AllPosts = () => {

    const [sortPost , setSortPost] =useState([])
    const [search , setSearch] =useState("")
    const [layout, setLayout] =useState(false)
const {theme}=useContext(AuthContext)

useEffect(()=>{
  
const handlePostSortData =async ()=>{
  const {data} = await axios.get(`${import.meta.env.VITE_APIHOST}/sortPost?search=${search}`)

  setSortPost(data)
  }
  handlePostSortData()
},[search])



const handleTableLayout = ()=>{
  setLayout(true)
}
const handleCardLayout = ()=>{
  setLayout(false)
}


    return (
       <div>
        <Helmet title="Volunteer | All Posts"></Helmet>
    <div className="flex flex-col lg:flex-row gap-8 items-center">
    <div><h1 className={`${theme?"text-white text-4xl font-bold py-10":"text-4xl text-gray-900 font-bold py-10"}`}>All Volunteer Need Posts</h1></div>
        <div className="flex items-center w-1/2">
                            <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search" name="search" className="input input-bordered w-1/2" required />
                       <button className="text-white text-base  bg-slate-800 px-6 py-3 rounded-lg">Search</button>
                        </div>
                        <div><button onClick={handleCardLayout}><TfiLayoutGrid4 className={`${layout?"text-3xl text-gray-600 mr-3":"text-3xl text-blue-600 mr-3"}`}/></button>
                                  <button onClick={handleTableLayout}><HiMiniBars4 className={`${layout?"text-3xl text-blue-600":"text-3xl text-gray-600"}`}/></button>
                                  </div>
    </div>
        {layout|| <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
         {sortPost.map(post=><div key={post._id} className="bg-blue-100 shadow-lg p-4 rounded-lg mb-2">
    <div>
      <img className="w-full h-56 mb-4 rounded-md border-2 object-cover hover:border-2 hover:border-gray-500" src={post.photo} alt="" />
    <div>
    <h1 className="text-2xl text-gray-600 font-bold">{post.title}</h1>
    <p className="text-base text-gray-500 font-bold ">Deadline :  {format(new Date(post.deadline) ,'P')}</p>
    <p className="text-sm text-gray-400">{post.description.substring(0,70)}...</p>
    </div>
    </div>
    <div>
      <p className={`
       ${post.category==="healthcare"&&"bg-blue-200/60 rounded-2xl text-blue-600/60 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="education"&&"bg-red-300/60 rounded-2xl text-red-600/60 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="social service"&&"bg-green-200/60 rounded-2xl text-green-600/60 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="animal welfare"&&"bg-yellow-200/60 rounded-2xl text-yellow-600/60 font-bold text-sm text-center w-fit p-2 my-3"}
       `}>{post.category}</p>
      <p className="text-gray-800">Need people : {post.need}</p>
      <Link to={`/sortPost/${post._id}`} className="text-xl text-black font-bold btn mt-6 w-40">View Details</Link>
    </div>
  </div>

         )}
        </div>}

{layout&&<div className="overflow-x-auto mb-12">
  <table className="table">
    {/* head */}
    <thead>
      <tr className=" border-2 bg-white">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="text-base">Photo ,Title</th>
        <th className="text-base">Category ,Deadline</th>
        <th className="text-base">Need people</th>
        <th className="text-base">View</th>
      </tr>
    </thead>
    <tbody>
     {sortPost.map(post=> <tr  key={post._id} className="border bg-white border-green-300 rounded-xl">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={post.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{post.title}</div>
              <div className="text-sm opacity-50 flex items-center gap-2"><span><FaLocationDot /></span>{post.location}</div>
            </div>
          </div>
        </td>
        <td>
        <p className={`
       ${post.category==="healthcare"&&"bg-blue-200/60 rounded-2xl text-blue-600 font-bold text-center text-sm w-fit px-1"}
       ${post.category==="education"&&"bg-red-300/60 rounded-2xl text-red-600 font-bold text-center text-sm w-fit px-1"}
       ${post.category==="social service"&&"bg-green-200/60 rounded-2xl text-green-400 font-bold text-center text-sm w-fit px-1"}
       ${post.category==="animal welfare"&&"bg-yellow-200/60 rounded-2xl text-yellow-600 font-bold text-sm text-center w-fit px-1"}
       `}>
              {post.category}
            </p>
          <br />
          <span className="badge badge-ghost badge-sm">{format(new Date(post.deadline) ,'P')}</span>
        </td>
        <td>{post.need}</td>
        <th>
        <Link to={`/sortPost/${post._id}`} className="text-sm text-black font-bold btn">View Details</Link>
        </th>
      </tr>)}
     
    
      
    </tbody>
   
  </table>
</div>}

       </div>
    );
};

export default AllPosts;