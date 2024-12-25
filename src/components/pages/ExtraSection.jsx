import middle1 from '../../assets/middle1.jpg'
import middle2 from '../../assets/alt1.jpg'
import middle3 from '../../assets/middle2.jpg'
import { motion } from "motion/react"
import { easeOut } from 'motion';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
const ExtraSection = () => {
const {theme}=useContext(AuthContext)

    return (
       <div>
         <div className='flex flex-col lg:flex-row justify-between items-center bg-white shadow-xl mt-28 border-4 rounded-lg px-3 py-20'>
            <div>
<motion.h1 animate={{x:50}}
transition={{duration:2 ,delay:1,repeat:Infinity ,ease:easeOut}}
 className='text-black text-4xl font-bold mb-3'
 > All <motion.span animate={{color :['#33ffe3','#ecff33','#ff6133']}}
 transition={{duration:1.5 , repeat:Infinity}}
 >Volunteers</motion.span> are very <br></br> hardworking</motion.h1>
<p className='text-sm text-gray-500 font-bold ml-3 mb-3'>Volunteers are very helpful and hardworking .<br></br>They help people ,children,old man .</p>
<button className='text-white bg-green-400 rounded-xl text-lg font-bold py-2 px-4 border ml-8'>Read More Info</button>
            </div>
            <div className='flex items-center'>
            <div>
                <motion.img
                animate={{ x:[ 0, -30, 0] }}
                transition={{ duration: 15 ,delay:3, repeat:Infinity}}
                className='w-72 h-48 border-l-8 border-b-8 border-blue-500 rounded-t-[40px]  rounded-br-[40px] object-cover' src={middle1} alt="" />
            </div>

               <div>
               <motion.img
               animate={{ y:[ 0, -30, 0] }}
               transition={{ duration: 15 ,delay:3, repeat:Infinity}}
               className='w-72 h-48 border-l-8 border-b-8 border-blue-500 rounded-t-[40px]  rounded-br-[40px] object-cover' src={middle2} alt="" />
          
          <motion.img
           animate={{ y:[ 0, 30, 0] }}
           transition={{ duration: 15,delay:3 ,repeat:Infinity}}
          className='w-72 h-48 border-l-8 border-b-8 border-blue-500 rounded-t-[40px]  rounded-br-[40px] object-cover' src={middle3} alt="" />

               </div>
            </div>
        </div>

<div>
    <h1 className={`${theme?"text-white text-4xl font-bold pt-12 mb-16":"text-4xl mb-8 text-gray-900 font-bold pt-10"}`}>FAQS</h1>
<div className='flex flex-col lg:flex-row gap-6'>
    {/* 1 */}
  <div className='lg:w-1/2'>
  <div className="bg-base-200 collapse mb-7">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-pink-300 text-pink-700 peer-checked:bg-green-300 peer-checked:text-green-800">
   How can I become a volunteer?
  </div>
  <div
    className="collapse-content bg-green-300 text-primary-content peer-checked:bg-green-300 peer-checked:text-green-800">
    <p>You can become a volunteer by visiting our "Be a Volunteer" page. Fill out the registration form and apply to projects that match your skills and interests.</p>
  </div>
</div>
  <div className="bg-base-200 collapse mb-7">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-pink-300 text-pink-700 peer-checked:bg-green-300 peer-checked:text-green-800">
  Can I volunteer if I don’t have previous experience?
  </div>
  <div
    className="collapse-content bg-green-300 text-primary-content peer-checked:bg-green-300 peer-checked:text-green-800">
    <p>Yes! Many of our opportunities welcome volunteers without prior experience. Look for beginner-friendly roles, and you'll receive guidance and training if needed.</p>
  </div>
</div>
{/* 2 */}
<div className="bg-base-200 collapse mb-7">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-pink-300 text-pink-700 peer-checked:bg-green-300 peer-checked:text-green-800">
  How can I find volunteers for my project?
  </div>
  <div
    className="collapse-content bg-green-300 text-primary-content peer-checked:bg-green-300 peer-checked:text-green-800">
    <p>To find volunteers for your project, go to our "All Post" section. Submit the project details, including the description, timeline, and required skills. Interested volunteers will be able to apply directly.</p>
  </div>
</div>
{/* 3 */}
<div className="bg-base-200 collapse mb-7">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-pink-300 text-pink-700 peer-checked:bg-green-300 peer-checked:text-green-800">
   Is there any fee to volunteer or post a project?
  </div>
  <div
    className="collapse-content bg-green-300 text-primary-content peer-checked:bg-green-300 peer-checked:text-green-800">
    <p>No, our platform is completely free to use for both volunteering and posting projects.</p>
  </div>
</div>
  </div>

    {/* 4 */}
<div className='lg:w-1/2'>
<div className="bg-base-200 collapse mb-7">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-blue-300 text-blue-700 peer-checked:bg-red-200 peer-checked:text-red-600">
   Do I need any qualifications to become a volunteer?
  </div>
  <div
    className="collapse-content bg-red-200 text-red-600 peer-checked:bg-red-200 peer-checked:text-red-600">
    <p>Most projects don’t require any specific qualifications. However, some may need particular skills or experience, which will be mentioned in the project description.</p>
  </div>
</div>
{/* 5 */}
<div className="bg-base-200 collapse mb-7">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-blue-300 text-blue-700 peer-checked:bg-red-200 peer-checked:text-red-600">
  Why should I volunteer through this platform?
  </div>
  <div
    className="collapse-content bg-red-200 text-red-600 peer-checked:bg-red-200 peer-checked:text-red-600">
    <p>Our platform connects you with a variety of meaningful opportunities tailored to your interests and skills. It’s easy to find projects that align with your values and make a real impact in your community or beyond.</p>
  </div>
</div>
{/* 6 */}
<div className="bg-base-200 collapse mb-7">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-blue-300 text-blue-700 peer-checked:bg-red-200 peer-checked:text-red-600">
    How will I know if my application to volunteer is accepted?
  </div>
  <div
    className="collapse-content bg-red-200 text-red-600 peer-checked:bg-red-200 peer-checked:text-red-600">
    <p>Once you apply for a project, the project organizer will review your application. If accepted, you’ll receive an email notification with further details on how to get started.</p>
  </div>
</div>
<div className="bg-base-200 collapse mb-7">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-blue-300 text-blue-700 peer-checked:bg-red-200 peer-checked:text-red-600">
   How do I become a volunteer?
  </div>
  <div
    className="collapse-content bg-red-200 text-red-600 peer-checked:bg-red-200 peer-checked:text-red-600">
    <p>Simply create an account on our website, browse available opportunities, and sign up for the ones you're interested in.</p>
  </div>
</div>
</div>
</div>
</div>
       </div>


    );
};

export default ExtraSection;