import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllPosts = () => {

    const [sortPost , setSortPost] =useState([])


useEffect(()=>{
  
const handlePostSortData =async ()=>{
  const {data} = await axios.get(`${import.meta.env.VITE_APIHOST}/sortPost`)

  setSortPost(data)
  }
  handlePostSortData()
},[])


    return (
       <div>
        <h1 className="text-4xl text-gray-600 font-bold my-10 ">All Volunteer Need Posts</h1>
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
       ${post.category==="healthcare"&&"bg-blue-200 rounded-2xl text-blue-600 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="education"&&"bg-red-300 rounded-2xl text-red-600 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="social service"&&"bg-green-200 rounded-2xl text-green-400 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="animal welfare"&&"bg-yellow-200 rounded-2xl text-yellow-600 font-bold text-sm text-center w-fit p-2 my-3"}
       `}>{post.category}</p>
       
      <Link to={`/sortPost/${post._id}`} className="text-xl text-black font-bold btn mt-6 w-40">View Details</Link>
    </div>
  </div>

         )}
        </div>
       </div>
    );
};

export default AllPosts;