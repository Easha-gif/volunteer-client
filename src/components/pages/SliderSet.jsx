import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { motion } from "motion/react"
import { easeOut } from 'motion';


const SliderSet = () => {
const [sortPost , setSortPost] =useState([])

const {theme}=useContext(AuthContext)

useEffect(()=>{
  
const handlePostSortData =async ()=>{
  const {data} = await axios.get(`${import.meta.env.VITE_APIHOST}/sort`)

const sortedDta = data.splice(0,6)
  setSortPost([...sortedDta])
  }
  handlePostSortData()
},[])



    return (
      <div>
          <div className="text-center mt-10 mb-10"><h1 className={`${theme?"text-white text-4xl font-bold py-4":"text-4xl text-gray-700 font-bold py-4"}`}>Volunteer Needs Now Section</h1>
      <p className={`${theme?"text-sm text-gray-300 font-bold":"text-gray-600"}`}>Here the upcoming deadlines to volunteer needs</p></div>
      
<motion.button animate={{x:100}}
transition={{duration:4 ,delay:2,repeat:Infinity ,ease:easeOut}}
 className="text-lg font-bold text-red-500 bg-red-300/40 rounded-2xl border px-9 py-4 text-center mb-16 flex gap-5">Upcoming Deadline Posts <span><BsCalendarDate className="text-3xl text-blue-400"/></span></motion.button>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{
  sortPost.map(post=><div key={post._id} className="bg-slate-200 shadow-lg p-4 rounded-lg mb-2">
    <div className="flex justify-between m-3">
      <img className="w-16 h-16 rounded-full border-2 object-cover hover:border-2 hover:border-gray-500" src={post.photo} alt="" />
      <p className={`
       ${post.category==="healthcare"&&"bg-blue-200/60 rounded-2xl text-blue-600/60 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="education"&&"bg-red-300/60 rounded-2xl text-red-600/60 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="social service"&&"bg-green-200/60 rounded-2xl text-green-400/60 font-bold text-center text-sm w-fit p-2 my-3"}
       ${post.category==="animal welfare"&&"bg-yellow-200/60 rounded-2xl text-yellow-600/60 font-bold text-sm text-center w-fit p-2 my-3"}
       `}>{post.category}</p>
    </div>
    <h1 className="text-2xl text-gray-600 font-bold">{post.title}</h1>
    <p className="text-base text-gray-500 font-bold mb-2">Deadline :  {format(new Date(post.deadline) ,'P')}</p>
    <p className="text-sm text-gray-400">{post.description.substring(0,60)}...</p>

    <div>
      
       
      <Link  to={`/sortPost/${post._id}`} className="text-xl text-black font-bold btn mt-6 w-40">View Details</Link>
    </div>
  </div>)
}
</div>
<Link to="/allPosts" className="text-black bg-blue-300 btn mt-8">See All Posts</Link>




      </div>
    );
};

export default SliderSet;