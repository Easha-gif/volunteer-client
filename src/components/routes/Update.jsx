import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../pages/AuthProvider";


const Update = () => {

const {user}=useContext(AuthContext)

    const [startDate , setStartDate] = useState(new Date())
    const [sortPost , setSortPost] =useState([])
    const navigate = useNavigate()
    const{id}=useParams()
        useEffect(()=>{
          
        const handlePostSortData =async ()=>{
          const {data} = await axios.get(`${import.meta.env.VITE_APIHOST}/sortPost/${id}`)
        
          setSortPost(data)
          setStartDate(new Date(data.deadline))
          }
          handlePostSortData()
        },[])
    
        const { photo, title, description, 
            category, location, need, deadline, userEmail,_id, userName }=sortPost
 
 
            const handleAddPostForm =async (e) => {
                e.preventDefault()
        
                const photo = e.target.photo.value;
                const title = e.target.title.value;
                const description = e.target.description.value;
                const category = e.target.category.value;
                const location = e.target.location.value;
                const need = e.target.no.value;
                const deadline = startDate;
                const userEmail = e.target.userEmail.value;
                const userName = e.target.userName.value;
                const userPhoto = user?.photoUrl;
            
            const addInfo ={ photo, title, description, 
                    category, location, need, deadline, userEmail, userName,userPhoto}
        
        try{

            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
              }).then(async(result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    await axios.put(`${import.meta.env.VITE_APIHOST}/update/${id}`,addInfo)
           
                    navigate("/myPosts")
                  Swal.fire("Data updated!", "", "success");
                } else if (result.isDenied) {
                  Swal.fire("Changes are not saved", "", "info");
                }
              });
          
        }
        catch(err){
            toast.error(`something wrong !!${err.message}`)
        }
            }
 
 
 
            return (
        <div>
<div>
    <h1 className="text-4xl text-center mt-8 mb-4 font-extrabold text-slate-700">Update post</h1>
    <p className="text-base text-slate-500 text-center mb-10">if you want to update your post check this filed and fillup.</p>
</div>
            <form onSubmit={handleAddPostForm}>
                <div className="w-11/12 mx-auto px-10 bg-white border-2 mb-40 rounded-md border-blue-300 py-8 mt-5">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-blue-500/70 font-bold">Thumbnail </span>
                            </label>
                            <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered" defaultValue={photo}/>
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-blue-500/70 font-bold">Title</span>
                            </label>
                            <input type="text" placeholder="Enter Post Title" name="title" className="input input-bordered" defaultValue={title} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-blue-500/70 font-bold">Description </span>
                            </label>
                            <input type="text" placeholder="Enter Description " name="description" className="input input-bordered" defaultValue={description} />
                        </div>
                      {category&&  <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-blue-500/70 font-bold">Category </span>
                            </label>
                            <select className="py-3 rounded-lg border border-gray-300 text-gray-600" name="category" defaultValue={category}>
                                <option value="Select category">Select category</option>
                                <option value="healthcare">healthcare</option>
                                <option value="education">education</option>
                                <option value="social service">social service</option>
                                <option value="animal welfare">animal welfare</option>
                            </select>
                        </div>}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-blue-500/70 font-bold">Location</span>
                            </label>
                            <input type="text" placeholder="Enter the Location" name="location" className="input input-bordered" defaultValue={location} />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-blue-500/70 font-bold">No. of volunteers needed </span>
                            </label>
                            <input type="text" placeholder="Enter No. of volunteers needed " name="no" className="input input-bordered" defaultValue={need}/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-blue-500/70 font-bold">Deadline</span>
                            </label>
                            <DatePicker
                            className="input input-bordered w-full"
                            selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg  text-blue-500/70 font-bold">Organizer name </span>
                            </label>
                            <input type="text" className="input input-bordered" name="userName" readOnly value={user?.displayName} />
                        </div>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg text-blue-500/70 font-bold">Organizer email</span>
                        </label>
                        <input type="text" className="input input-bordered" name="userEmail" readOnly value={user?.email} />
                    </div>
                    <button className="btn btn-block mt-7 bg-blue-200/60 text-blue-700/60 border-2 border-blue-700/60 text-lg">Update</button>
                </div>
            </form>
        </div>
    );
};
export default Update;