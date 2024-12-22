import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const BeAVolunteer = () => {
const{user}=useContext(AuthContext)
    const [sortPost , setSortPost] =useState([])
    const [startDate , setStartDate] = useState(new Date())
    const{id}=useParams()
        useEffect(()=>{
          
        const handlePostSortData =async ()=>{
          const {data} = await axios.get(`${import.meta.env.VITE_APIHOST}/sortPost/${id}`)
        
          setSortPost(data)
          }
          handlePostSortData()
        },[])
    
       const { photo, title, description, 
            category, location, need, deadline, userEmail, userName ,userPhoto}=sortPost

    return (
        <div>
            <p className="text-xl text-red-600 font-bold mt-8">All Filed just for check out only</p>
             <form>
                
                <div className="w-11/12 mx-auto px-10 bg-white  mb-40 rounded-md  py-8">
                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Thumbnail </span>
                            </label>
                            <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered" readOnly defaultValue={photo}/>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Title</span>
                            </label>
                            <input type="text" placeholder="Enter Post Title" name="title" className="input input-bordered" readOnly defaultValue={title}/>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Description </span>
                            </label>
                            <input type="text" placeholder="Enter Description " name="description" className="input input-bordered" readOnly defaultValue={description} />
                        </div>
                    </div>
                    <div className="flex gap-6">
                       
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Category </span>
                            </label>
                            <select className="py-3 rounded-lg border border-gray-300 text-gray-600" name="category" id="" readOnly value={category}>
                                <option value="Select category">Select category</option>
                                <option value="healthcare">healthcare</option>
                                <option value="education">education</option>
                                <option value="social service">social service</option>
                                <option value="animal welfare">animal welfare</option>
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Location</span>
                            </label>
                            <input type="text" placeholder="Enter the Location" name="location" className="input input-bordered" readOnly defaultValue={location} />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">No. of volunteers needed </span>
                            </label>
                            <input type="text" placeholder="Enter No. of volunteers needed " name="no" className="input input-bordered" readOnly defaultValue={need}/>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Deadline</span>
                            </label>
                            <DatePicker
                            className="input input-bordered w-full"
                            selected={deadline} readOnly defaultValue={deadline}/>
                        </div>
                          <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Organizer name </span>
                            </label>
                            <input type="text" className="input input-bordered" name="userName" readOnly value={userName} />
                        </div>
                        <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-lg text-gray-600 font-bold">Organizer email</span>
                        </label>
                        <input type="text" className="input input-bordered" name="userEmail" readOnly value={userEmail} />
                    </div>
                        {/* <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Organizer name </span>
                            </label>
                            <input type="text" className="input input-bordered" name="userName" readOnly value={user?.displayName} />
                        </div>
                        <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-lg text-green-600 font-bold">Organizer email</span>
                        </label>
                        <input type="text" className="input input-bordered" name="userEmail" readOnly value={user?.email} />
                    </div> */}
                    </div>
                    <div className="flex items-center gap-6">
                    <div className="form-control w-1/2">
                    <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">status</span>
                            </label>
                            <input type="text" className="input input-bordered" name="status" readOnly value={"request"} />
                    </div>
                        <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-lg text-gray-600 font-bold">Volunteer Email</span>
                        </label>
                        <input type="text" className="input input-bordered" name="volunteerEmail" readOnly value={user?.email} />
                    </div>
                    <div className="form-control w-1/2">
                    <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Volunteer Name </span>
                            </label>
                            <input type="text" className="input input-bordered" name="volunteerName" readOnly value={user?.displayName} />
                    </div>
                            
                            
                        </div>
                        <p className="text-base text-red-600 font-bold">You provide a Suggestion message</p>
                        <div className="form-control w-1/2">
                    <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Suggestion</span>
                            </label>
                            <input type="text" className="input input-bordered" name="Suggestion" readOnly value={"Suggestion"} />
                    </div>
                    <button className="btn btn-block mt-7 bg-red-200 text-red-400 border-2  text-lg">Send Request</button>
                </div>
            </form>
        </div>
    );
};

export default BeAVolunteer;