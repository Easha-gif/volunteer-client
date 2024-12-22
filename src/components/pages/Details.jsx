import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Details = () => {
    const [sortPost , setSortPost] =useState([])

const{id}=useParams()
    useEffect(()=>{
      
    const handlePostSortData =async ()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_APIHOST}/sortPost/${id}`)
    
      setSortPost(data)
      }
      handlePostSortData()
    },[])

   const { photo, title, description, 
        category, location, need, deadline, userEmail,_id, userName ,userPhoto}=sortPost
    return (
        <div
        className="hero min-h-screen rounded-2xl"
        style={{
          backgroundImage: `url(${photo})`,backgroundSize:'cover'
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">

<div className="flex items-center -mt-10 mb-5">
    <img className="w-16 h-16 rounded-full" src={userPhoto} alt="" />
<div>
<h1 className="font-bold"><span className="text-white font-bold text-lg">Organizer name : </span>  {userName}</h1>
            <p>
            <span className="text-white font-bold text-lg">Organizer Email : </span> {userEmail}
            </p>
</div>
</div>

            <h1 className=" text-3xl font-bold mt-16 mb-3 text-white"><span className="text-3xl text-white font-bold">Title : </span> {title}</h1>
            <p className="mb-4 text-gray-200 font-bold text-sm">
              {description}
            </p>
            <div className="flex justify-center items-center">
            <p className={`
       ${category==="healthcare"&&"bg-blue-200 rounded-2xl text-blue-600 font-bold text-center text-sm w-fit p-2"}
       ${category==="education"&&"bg-red-300 rounded-2xl text-red-600 font-bold text-center text-sm w-fit p-2"}
       ${category==="social service"&&"bg-green-200 rounded-2xl text-green-400 font-bold text-center text-sm w-fit p-2"}
       ${category==="animal welfare"&&"bg-yellow-200 rounded-2xl text-yellow-600 font-bold text-sm text-center w-fit p-2"}
       `}>
              {category}
            </p>
            </div>

    
{sortPost.deadline&&   <p className="text-white font-bold text-lg ">Deadline :  {format(new Date(deadline) ,'P')}</p>}
         <p className="text-white font-bold text-lg">
            <span  className="text-white font-bold text-lg">Location : </span>  {location}
            </p>


        
            <div className="flex items-center justify-center gap-2 mt-2">
                <p  className="text-white font-bold text-lg">Need People :</p>
                <p className="text-white font-bold text-lg">
              {need}
            </p>
        </div>


            <Link to={`/beVolunteer/${_id}`} className="btn mt-5">Be a Volunteer</Link>
          </div>
        </div>
      </div>
    );
};

export default Details;