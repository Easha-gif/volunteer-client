import Lottie from "lottie-react";
import registerLottie from '../../assets/lottie/Animation - 1734785481314.json'
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../pages/AuthProvider";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

const {handleGoogleSignIn ,handleSignUp,updateUserProfile,setUser,theme} = useContext(AuthContext)
const navigate = useNavigate()
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

const handleLoginFrom = (e) =>{
  e.preventDefault()
  const form = e.target 
  const email = form.email.value
  const password = form.password.value
  const name = form.name.value
  const photo = form.photo.value
  if(password.length<6){
    return Swal.fire({
       title: 'Something wrong!',
       text: 'password must be contain at least 6 characters',
       icon: 'error',
       confirmButtonText: 'Try Again'
     })
   }
   if(!/[a-z]/.test(password)){
     return Swal.fire({
       title: 'Something wrong!',
       text: 'password must be contain at least one lowercase letter',
       icon: 'error',
       confirmButtonText: 'Try Again'
     })
   }
   
   if(!/[A-Z]/.test(password)){
     return Swal.fire({
       title: 'Something wrong!',
       text: 'password must be contain at least one Uppercase letter',
       icon: 'error',
       confirmButtonText: 'Try Again'
     })
   }
   handleSignUp(email,password)
   .then(result=>{
    updateUserProfile(name,photo)
      setUser({...result.user,displayName:name,photoURL:photo})
      Swal.fire({
        title: 'Register Successfully Complete!',
        text: 'Thank you for register',
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
    })
  )
  }
  
  

  
    return (
      <div>
        <Helmet title="Volunteer | Register page"></Helmet>
        <h1 className={`${theme?"text-white text-4xl font-bold pt-10":"text-4xl text-gray-900 font-bold pt-10"}`}>Register</h1>
        <div className="py-9">

        <div className="hero-content flex-col  lg:flex-row gap-10">
          <div className="card bg-base-100 shadow-xl w-full max-w-sm border-2">
          <div>
    <button onClick={handleGoogle} className="w-full">  <p className="text-red-900/70 w-full py-4 font-bold text-lg bg-red-300/50 rounded-xl hover:rounded-2xl p-2 border-2 border-red-500/80  text-center flex items-center gap-4 justify-center"><span><FcGoogle className="text-4xl"/></span>Login With Google</p></button>
    </div>
            <form onSubmit={handleLoginFrom} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold text-gray-700">Name</span>
                </label>
                <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold text-gray-700">Photo URL</span>
                </label>
                <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold text-gray-700">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold text-gray-700">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-block bg-gray-400 text-xl text-gray-950 font-bold">Register</button>
              </div>
            </form>
            <p className="text-lg font-bold text-gray-800 p-2">Already have an account !! please <span className="text-red-500 underline"><Link to='/login'>Login</Link></span></p>
          </div>
        
        <div>
            <Lottie animationData={registerLottie}></Lottie>
           </div>
           </div>
      </div> 
      </div>
    );
};

export default Register;