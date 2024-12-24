import { FcGoogle } from 'react-icons/fc';
import footer from '../../assets/footer logo.png'
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-36'>
     <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img className='w-28 rounded-full' src={footer} alt="" />
    <p>
    Volunteer management Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 <div className='flex flex-col'>
 <div className='flex flex-col lg:flex-row gap-5'>
    <h1 className='bg-black px-4 py-2 text-white font-bold rounded-lg flex items-center gap-3'><span><FcGoogle className='text-3xl' /></span>Google</h1>
    <h1  className='bg-black px-4 py-2 text-white font-bold rounded-lg flex items-center gap-3'><span><FaSquareFacebook className='text-2xl text-blue-600'/></span>Facebook</h1>
    <p  className='bg-black px-4 py-2 text-white font-bold rounded-lg flex items-center gap-3'><span><FaTwitterSquare className='text-3xl text-blue-400'/></span>Twitter</p>
  </div>
<div className='flex items-center justify-center mt-5'>
<input className='input input-bordered w-80'placeholder='Search' type="search" name="" id="" />
<button className='text-white bg-slate-900 btn'>Search</button>
</div>
 </div>
</footer>
        </div>
    );
};

export default Footer;