import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const {user,handleSignOut}=useContext(AuthContext)
  return (
    <div>
      <div className="navbar bg-green-100 p-4 rounded-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink className="text-green-700 font-bold text-base mr-5" to='/'>Home</NavLink>
        <NavLink  className="text-green-700 font-bold text-base"  to='/allPosts'>All posts</NavLink>
      </ul>
    </div>
    <a className="text-4xl text-green-900 font-extrabold flex items-center "><small><img className="w-10" src={logo} alt="" /></small> Volunteer</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <NavLink className="text-green-700 font-bold text-base mr-5" to='/'>Home</NavLink>
     <NavLink  className="text-green-700 font-bold text-base"  to='/allPosts'>All posts</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
  {user?<div className=" flex items-center"><div className="dropdown">
  <div tabIndex={0} role="button" className="mr-4 text-base font-bold text-green-500">My Profile</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 -ml-16 p-2 shadow">
    <li><Link className="text-green-700 font-bold text-sm">Add Volunteer Post</Link></li>
    <li><Link className="text-green-700 font-bold text-sm">Manage My Posts </Link></li>
    <li onClick={ handleSignOut}><p className="text-green-700 font-bold text-base">Log-out</p></li>
  </ul>
</div>
<img className="w-14 h-14 object-cover rounded-full border-2 border-green-200 hover:border-green-400" src={user?.photoURL} alt="" />
</div>:<Link to='/login' className="btn bg-green-600 text-white font-bold text-lg">Login</Link>}
  </div>
</div>
    </div>
  );
};

export default Navbar;