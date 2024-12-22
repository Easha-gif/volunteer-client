import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";



const SliderSet = () => {
const [sortPost , setSortPost] =useState([])

useEffect(()=>{
  fetch(`${import.meta.env.VITE_APIKEY}/sortPost`)
  .then(res=>res.json())
  .then(data=>console.log(data))
})
    return (
      <div>
          <div className="text-center mt-10 mb-20"><h1 className="text-4xl text-gray-700 font-bold py-4">Volunteer Needs Now Section</h1>
      <p className="text-sm text-gray-500 font-bold">Here the upcoming deadlines to volunteer needs</p></div>
      
{/* {
  sortPost.map(post=><div key={post._id} className="bg-slate-200 shadow-lg p-4 rounded-lg flex items-center justify-between">
    <div className="flex items-center justify-center gap-4">
      <img className="w-16 h-16 rounded-full border-2 hover:border-2 hover:border-gray-500" src="" alt="" />
    <div>
    <h1 className="text-2xl text-gray-600 font-bold">{post.title}</h1>
    <p className="text-xl text-gray-500 font-bold">Deadline :</p>
    </div>
    </div>
    <div>
      <p className="bg-red-100 rounded-2xl text-red-400 font-bold text-center">category</p>
      <Link className="text-xl text-black font-bold btn">View Details</Link>
    </div>
  </div>)
} */}



      </div>
    );
};

export default SliderSet;