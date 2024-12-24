import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { compareAsc } from "date-fns";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const BeAVolunteer = () => {
    const { user ,theme} = useContext(AuthContext)
    const [sortPost, setSortPost] = useState([])
    const { id } = useParams()
const navigate =useNavigate()
    useEffect(() => {

        const handlePostSortData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_APIHOST}/sortPost/${id}`)

            setSortPost(data)
        }
        handlePostSortData()
    }, [])

    const { photo, title, description,
        category, location, need, deadline, userEmail, userName, _id } = sortPost



    const handleVolunteerData = async (e) => {
        e.preventDefault()

        const suggestion = e.target.suggestion.value;
        const status = e.target.status.value;
        const volunteerEmail = e.target.volunteerEmail.value;
        const volunteerName = e.target.volunteerName.value;

        if (compareAsc(new Date(), new Date(deadline)) === 1)
            return toast.error("Deadline crossed ,request not allowed!!")

        if (need < 0 || need == 0)
            return toast.error("Need people is 0 ,request not allowed!!")

        const volunteerInfo = {
            title,
            category, location, deadline, requestId: _id, userEmail, userName, suggestion, status, volunteerName, volunteerEmail
        }


        try {
            await axios.post(`${import.meta.env.VITE_APIHOST}/addBid`, volunteerInfo)
            toast.success("Requested send successfully !!")
            navigate("/myPostRequest")
        }
        catch (err) {
            toast.error(`${err.message}`)
            console.log(err)
        }

    }

    return (
        <div>
              <Helmet title="Volunteer | Be a Volunteer"></Helmet>
            <h1 className={`${theme?"text-white text-4xl font-bold pt-10 text-center":"text-4xl text-center text-gray-900 font-bold pt-10"}`}>Sent a request to be a volunteer</h1>
            <p className="text-lg text-red-600 font-bold mt-5 mb-4">Here all the fills are given for check only..<br></br> You can't change any field ,except suggestion field</p>
            <form onSubmit={handleVolunteerData}>

                <div className="w-11/12 mx-auto px-10 bg-white  mb-40 rounded-md  py-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Thumbnail </span>
                            </label>
                            <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered" readOnly defaultValue={photo} />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Title</span>
                            </label>
                            <input type="text" placeholder="Enter Post Title" name="title" className="input input-bordered" readOnly defaultValue={title} />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Description </span>
                            </label>
                            <input type="text" placeholder="Enter Description " name="description" className="input input-bordered" readOnly defaultValue={description} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">

                        <div className="form-control lg:w-1/2">
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
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Location</span>
                            </label>
                            <input type="text" placeholder="Enter the Location" name="location" className="input input-bordered" readOnly defaultValue={location} />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">No. of volunteers needed </span>
                            </label>
                            <input type="text" placeholder="Enter No. of volunteers needed " name="no" className="input input-bordered" readOnly defaultValue={need} />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Deadline</span>
                            </label>
                            <DatePicker
                                className="input input-bordered w-full"
                                selected={deadline} readOnly defaultValue={deadline} />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Organizer name </span>
                            </label>
                            <input type="text" className="input input-bordered" name="userName" readOnly value={userName} />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Organizer email</span>
                            </label>
                            <input type="text" className="input input-bordered" name="userEmail" readOnly value={userEmail} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:w-1/2">
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
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg text-gray-600 font-bold">Volunteer Name </span>
                            </label>
                            <input type="text" className="input input-bordered" name="volunteerName" readOnly value={user?.displayName} />
                        </div>


                    </div>
                    <p className="text-base text-red-600 font-bold">You provide a Suggestion message</p>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg text-gray-600 font-bold">Suggestion</span>
                        </label>
                        <input type="text" className="input input-bordered" name="suggestion" defaultValue={"Suggestion"} />
                    </div>
                    <button className="btn btn-block mt-7 bg-red-200 text-red-400 border-2  text-lg">Send Request</button>
                </div>
            </form>
        </div>
    );
};

export default BeAVolunteer;