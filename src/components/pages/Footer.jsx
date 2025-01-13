
import footer from '../../assets/footer logo.png'
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-28'>
     <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img className='w-28 rounded-full' src={footer} alt="" />
  </aside>
  <nav>
    <h1 className='text-xl font-bold text-black'>Need to Know</h1>
  <Link to='/' className="text-green-700 font-bold text-base mr-5">Home</Link>
        <Link to='/allPosts' className="text-green-700 font-bold text-base mr-5">All posts</Link>
<Link to="/addPost" className="text-green-700 font-bold text-base mr-5">Add Post</Link>
        
  </nav>
 <div className='flex flex-col'>
 <div className='flex flex-col lg:flex-row gap-5'>
    <a href='https://www.linkedin.com/feed/' target='https://www.linkedin.com/feed/' className='bg-black px-4 py-2 text-white font-bold rounded-lg flex items-center gap-3'><span><FaLinkedin className='text-3xl' /></span>LinkedIn</a>
    <a href='https://www.facebook.com/' target='https://www.facebook.com/'  className='bg-black px-4 py-2 text-white font-bold rounded-lg flex items-center gap-3'><span><FaSquareFacebook className='text-2xl text-blue-600'/></span>Facebook</a>
  </div>
 </div>
</footer>
        </div>
    );
};

export default Footer;