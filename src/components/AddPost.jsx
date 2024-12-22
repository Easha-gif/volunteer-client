import { useContext } from "react";
import { AuthContext } from "./pages/AuthProvider";


const AddPost = () => {

const{user}=useContext(AuthContext)

    const handleAddPostForm = (e) => {
        e.preventDefault()

        const photo = e.target.photo.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const location = e.target.location.value;
        const no = e.target.no.value;
        const deadline = e.target.deadline.value;
        const userEmail = e.target.userEmail.value;
        const userName = e.target.userName.value;
        console.log({ photo, title, description, 
            category, location, no, deadline, userEmail, userName })

           

    }


    return (
        <div>

            <form onSubmit={handleAddPostForm}>
                <div className="w-11/12 mx-auto px-10 bg-white border-2 mb-40 rounded-md border-green-300 py-8 mt-5">
                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-pink-600 font-bold">Thumbnail </span>
                            </label>
                            <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-pink-600 font-bold">Title</span>
                            </label>
                            <input type="text" placeholder="Enter Post Title" name="title" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-pink-600 font-bold">Description </span>
                            </label>
                            <input type="text" placeholder="Enter Description " name="description" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-pink-600 font-bold">Category </span>
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
                                <span className="label-text text-lg text-pink-600 font-bold">Location</span>
                            </label>
                            <input type="text" placeholder="Enter the Location" name="location" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-pink-600 font-bold">No. of volunteers needed </span>
                            </label>
                            <input type="number" placeholder="Enter No. of volunteers needed " name="no" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-pink-600 font-bold">Deadline</span>
                            </label>
                            <input type="text" className="input input-bordered" name="deadline" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-pink-600 font-bold">Organizer name </span>
                            </label>
                            <input type="text" className="input input-bordered" name="userName" readOnly value={user?.displayName} />
                        </div>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-lg text-pink-600 font-bold">Organizer email</span>
                        </label>
                        <input type="text" className="input input-bordered" name="userEmail" readOnly value={user?.email} />
                    </div>
                    <button className="btn btn-block mt-7 bg-gray-200 text-pink-500 border-2 border-pink-200 text-lg">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;