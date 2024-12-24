import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../pages/AuthProvider";
import { format } from "date-fns";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FaLocationDot } from "react-icons/fa6";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { HiMiniBars4 } from "react-icons/hi2";

const MyPosted = () => {
    const {user}=useContext(AuthContext)

const [myPost, setMyPost] =useState([])
const [layout, setLayout] =useState(true)
    useEffect(()=>{
          handlePostSortData()
        },[user.email])

      
        const handlePostSortData =async ()=>{
            const {data} = await axios.get(`${import.meta.env.VITE_APIHOST}/allJob/${user?.email}`)
          
            setMyPost(data)
            }  

const handleDelete = async(id)=>{
   try{ 

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
   await axios.delete(`${import.meta.env.VITE_APIHOST}/allPost/${id}`)
    handlePostSortData()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });

}
   catch(err){
    console.log(err)
   }
}

const handleTableLayout = ()=>{
  setLayout(true)
}
const handleCardLayout = ()=>{
  setLayout(false)
}


    return (
        <div>
          <Helmet title="My Post"></Helmet>
          <div className="flex justify-between items-center bg-white p-4 shadow-xl rounded-xl mb-7"> <h1 className="text-3xl text-black font-bold">My Posts : {myPost.length}</h1>
          <div><button onClick={handleCardLayout}><TfiLayoutGrid4 className={`${layout?"text-3xl text-gray-900 mr-3":"text-3xl text-blue-600 mr-3"}`}/></button>
          <button onClick={handleTableLayout}><HiMiniBars4 className={`${layout?"text-3xl text-blue-600":"text-3xl text-gray-900"}`}/></button>
          </div>
          </div>
           
     {layout&&     <div className="overflow-x-auto mb-60">
  <table className="table">
    {/* head */}
    <thead>
      <tr className=" border-2">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="text-base">Photo ,title</th>
        <th className="text-base">Category ,Deadline</th>
        <th className="text-base">need people</th>
        <th className="text-base">Edit</th>
      </tr>
    </thead>
    <tbody>
     {myPost.map(post=> <tr  key={post._id} className="border border-green-300 rounded-xl">
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
        <th className="flex items-center gap-2">
            <Link to={`/update/${post._id}`}> <FiEdit className="text-xl"/></Link>
          <button onClick={()=>handleDelete(post._id)} className="btn btn-ghost btn-xs"><MdDeleteForever className="text-2xl text-red-600" /></button>
        </th>
      </tr>)}
     
    
      
    </tbody>
   
  </table>
</div>}

{layout|| <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {myPost.map(post=><div className="border-2 p-4 rounded-md" key={post._id}>
 <div className="flex justify-between">
 <img className="w-16 h-16 rounded-3xl object-cover" src={post.photo} alt="" />
 <div>
 <p className={`
       ${post.category==="healthcare"&&"bg-blue-200/60 rounded-2xl text-blue-600 font-bold text-center text-sm w-fit px-2"}
       ${post.category==="education"&&"bg-red-300/60 rounded-2xl text-red-600 font-bold text-center text-sm w-fit px-2"}
       ${post.category==="social service"&&"bg-green-200/60 rounded-2xl text-green-400 font-bold text-center text-sm w-fit px-2"}
       ${post.category==="animal welfare"&&"bg-yellow-200/60 rounded-2xl text-yellow-600 font-bold text-sm text-center w-fit px-2"}
       `}> {post.category}</p>
 </div>
 </div>
    <h1 className="text-2xl text-gray-700 font-bold mt-3">{post.title}</h1>
<p className="text-sm text-gray-400 font-bold mt-2 flex items-center gap-2"><span><FaLocationDot /></span> {post.location}</p>
 <p className="text-sm text-gray-800">Deadline :  {format(new Date(post.deadline) ,'P')}</p>
 <div className="flex items-center justify-end gap-2 mt-2">
 <Link to={`/update/${post._id}`}> <FiEdit className="text-2xl"/></Link>
 <button onClick={()=>handleDelete(post._id)}><MdDeleteForever className="text-3xl text-red-600" /></button>
 </div>
  </div>)}
</div>

}


{myPost.length==0 &&<p className="text-2xl text-red-500 font-bold mt-9 mb-80">You don't have any posts.....</p>}
        </div>
    );
};

export default MyPosted;