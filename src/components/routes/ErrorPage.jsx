import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
          <div className="flex justify-center mt-6">
          <Link className=" text-red-400 bg-red-300 p-4 rounded-2xl btn" to='/'>Go Back</Link>
          </div>
            <h1 className="text-3xl text-red-600 font-bold text-center mt-5 mb-2">No date Found 404</h1>
            <div className="flex justify-center mt-16">
            <span className="loading loading-ring loading-lg"></span>
            </div>
        </div>
    );
};

export default ErrorPage;