import Lottie from "lottie-react";
import loginLottie from '../../assets/lottie/Animation - 1734787361826.json'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../pages/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
const {handleGoogleSignIn ,handleSignIn} = useContext(AuthContext)
const navigate = useNavigate()
const handleLoginFrom = (e) =>{
e.preventDefault()
const form = e.target 
const email = form.email.value
const password = form.password.value
handleSignIn(email,password)
.then(()=>{
  Swal.fire({
    title: 'Login done!',
    text: 'login successfully complete',
    icon: 'success',
    confirmButtonText: 'okay'
  })
  navigate("/")
})
.catch(error=>Swal.fire({
  title: 'Something wrong!',
  text: "Invalid credential",
  icon: 'error',
  confirmButtonText: 'Try Again'
}))
}


const handleGoogle = ()=>{
  handleGoogleSignIn()
  .then(()=>{
    Swal.fire({
      title: 'Login done!',
      text: 'Google login successfully complete',
      icon: 'success',
      confirmButtonText: 'okay'
    })
navigate("/")
  })
  .catch(error=>Swal.fire({
    title: 'Something wrong!',
    text: "Invalid credential",
    icon: 'error',
    confirmButtonText: 'Try Again'
  }))
}



    return (
        <div className="py-16">

  <div className="hero-content flex-col lg:flex-row">
    <div className="card bg-base-100 shadow-xl w-full max-w-sm border-2 border-green-200">
    <div>
    <button onClick={handleGoogle} className="w-full">  <p className="text-green-900 font-bold text-lg bg-green-300 rounded-xl hover:rounded-2xl p-2 border-2 border-green-500  text-center">Login With Google</p></button>
    </div>
      <form onSubmit={handleLoginFrom} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold text-gray-700">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold text-gray-700">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-block bg-green-400 text-xl text-green-950 font-bold">Login</button>
        </div>
      </form>
      <p className="text-lg font-bold text-gray-600 p-2">New to this website !! please <span className="text-green-950 underline"><Link to='/register'>Register</Link></span></p>
    </div>
    <div className="w-96">
      <Lottie animationData={loginLottie}></Lottie>
    </div>
  </div>
</div> 
    );
};

export default Login;