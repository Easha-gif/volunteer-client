import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import error from '../../assets/err.avif'
const ErrorPage = () => {
    return (
        <div><Helmet title="Error"></Helmet>
            <div className="flex justify-center mt-16">
            <img src={error} alt="" />
            </div>
           <div className="flex justify-center my-10">
           <Link className=" text-red-400 p-4 rounded-2xl btn btn-outline" to='/'>Go Back</Link>
           </div>
        </div>
    );
};

export default ErrorPage;