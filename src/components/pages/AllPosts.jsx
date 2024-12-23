import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const AllPosts = () => {

    const [sortPost , setSortPost] =useState([])
    const [search , setSearch] =useState("")


useEffect(()=>{
  
const handlePostSortData =async ()=>{
  const {data} = await axios.get(`${import.meta.env.VITE_APIHOST}/sortPost?search=${search}`)

  setSortPost(data)
  }
  handlePostSortData()
},[search])


    return (
       <div>
        <Helmet title="Volunteer | All Posts"></Helmet>
    <div className="flex flex-col lg:flex-row gap-8 items-center">
    <div><h1 className="text-4xl text-gray-600 font-bold my-10 ">All Volunteer Need Posts</h1></div>
        <div className="flex items-center w-1/2">
                            <input type="text" onBlur={(e)=>setSearch(e.target.value)} placeholder="Search" name="search" className="input input-bordered w-1/2" required />
                       <button className="text-white text-base  bg-slate-800 px-6 py-3 rounded-lg">Search</button>
                        </div>
    </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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
        </div>
       </div>
    );
};

export default AllPosts;