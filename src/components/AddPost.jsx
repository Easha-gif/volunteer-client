import { useContext, useState } from "react";
import { AuthContext } from "./pages/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const AddPost = () => {

const{user}=useContext(AuthContext)
const [startDate , setStartDate] = useState(new Date())
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
        const userPhoto = user?.photoURL;
    
    const addInfo ={ photo, title, description, 
            category, location, need, deadline, userEmail, userName ,userPhoto}

try{
    await axios.post(`${import.meta.env.VITE_APIHOST}/addPost`,addInfo)
    toast.success("post successfully added")
}
catch(err){
console.log(err)
}
    }


    return (
        <div>
<div>
    <h1 className="text-4xl text-center mt-8 mb-4 font-extrabold text-slate-700">Add Volunteer need post</h1>
    <p className="text-base text-slate-500 text-center mb-10">if you need volunteers add a post.</p>
</div>
            <form onSubmit={handleAddPostForm}>
                <div className="w-11/12 mx-auto px-10 bg-white border-2 mb-40 rounded-md border-green-300 py-8 mt-5">
                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-green-600 font-bold">Thumbnail </span>
                            </label>
                            <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-green-600 font-bold">Title</span>
                            </label>
                            <input type="text" placeholder="Enter Post Title" name="title" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-green-600 font-bold">Description </span>
                            </label>
                            <input type="text" placeholder="Enter Description " name="description" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-green-600 font-bold">Category </span>
                            </label>
                            <select className="py-3 rounded-lg border border-gray-300 text-gray-600" name="category" id="">
                                <option value="Select category">Select category</option>
                                <option value="healthcare">healthcare</option>
                                <option value="education">education</option>
                                <option value="social service">social service</option>
                                <option value="animal welfare">animal welfare</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-green-600 font-bold">Location</span>
                            </label>
                            <input type="text" placeholder="Enter the Location" name="location" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-green-600 font-bold">No. of volunteers needed </span>
                            </label>
                            <input type="number" placeholder="Enter No. of volunteers needed " name="no" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-green-600 font-bold">Deadline</span>
                            </label>
                            <DatePicker
                            className="input input-bordered w-full"
                            selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-green-600 font-bold">Organizer name </span>
                            </label>
                            <input type="text" className="input input-bordered" name="userName" readOnly value={user?.displayName} />
                        </div>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-lg text-green-600 font-bold">Organizer email</span>
                        </label>
                        <input type="text" className="input input-bordered" name="userEmail" readOnly value={user?.email} />
                    </div>
                    <button className="btn btn-block mt-7 bg-green-200 text-green-700 border-2 border-green-700 text-lg">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;