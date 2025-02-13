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
         <div className='flex flex-col lg:flex-row justify-between items-center bg-white shadow-xl border-4 rounded-lg px-3 py-20'>
            <div>
<motion.h1 animate={{x:50}}
transition={{duration:2 ,delay:1,repeat:Infinity ,ease:easeOut}}
 className='text-black text-4xl font-bold mb-3'
 > All <motion.span animate={{color :['#33ffe3','#ecff33','#ff6133']}}
 transition={{duration:1.5 , repeat:Infinity}}
 >Volunteers</motion.span> are very <br></br> hardworking</motion.h1>
<p className='text-sm text-gray-500 font-bold ml-3 mb-3'>Volunteers are very helpful and hardworking .<br></br>They help people ,children,old man .</p>
            </div>
            <div className='flex items-center'>
            <div>
                <motion.img
                animate={{ x:[ 0, -30, 0] }}
                transition={{ duration: 15 ,delay:3, repeat:Infinity}}
                className='w-72 h-48 border-l-8 border-b-8 border-green-300 rounded-t-[40px]  rounded-br-[40px] object-cover' src={middle1} alt="" />
            </div>

               <div>
               <motion.img
               animate={{ y:[ 0, -30, 0] }}
               transition={{ duration: 15 ,delay:3, repeat:Infinity}}
               className='w-72 h-48 border-l-8 border-b-8 border-green-300 rounded-t-[40px]  rounded-br-[40px] object-cover' src={middle2} alt="" />
          
          <motion.img
           animate={{ y:[ 0, 30, 0] }}
           transition={{ duration: 15,delay:3 ,repeat:Infinity}}
          className='w-72 h-48 border-l-8 border-b-8 border-green-300 rounded-t-[40px]  rounded-br-[40px] object-cover' src={middle3} alt="" />

               </div>
            </div>
        </div>

<div>
    <h1 className={`${theme?"text-white text-4xl font-bold my-16":"text-4xl text-gray-900 font-bold my-16"}`}>FAQS</h1>
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

<div>
   <h1 className={`${theme?"text-white text-4xl font-bold my-16":"text-4xl text-gray-900 font-bold my-16"}`}>Reviews</h1>

<div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  <div className='bg-green-100 p-6 rounded-lg border-2 border-green-300 md:h-[300px] md:w-[400px]'>
    <h1 className='text-3xl font-bold text-center py-2'>Environmental Cleanup Project</h1>
    <p className='text-sm text-gray-500 font-semibold'>Volunteering for the cleanup project was an amazing experience! Seeing the direct impact of our work on the environment was so fulfilling. The organizers were incredibly supportive, and the teamwork made the entire process enjoyable. I can't wait to join again!</p>
  <h5 className='text-lg text-gray-700 text-center font-bold py-2'>— Sarah L., Volunteer</h5>
  </div>
  <div className='bg-green-100 p-6 rounded-lg border-2 border-green-300 md:h-[300px] md:w-[400px]'>
    <h1 className='text-3xl font-bold text-center py-2'>Teaching Underprivileged Children</h1>
    <p className='text-sm text-gray-500 font-semibold'>Teaching young children was truly life-changing. Their enthusiasm and eagerness to learn inspired me every day. This project not only allowed me to share knowledge but also helped me grow as a person. I highly recommend it to anyone looking to make a difference!</p>
  <h5 className='text-lg text-gray-700 text-center font-bold py-2'>— James R., Volunteer

</h5>
  </div>
  <div className='bg-green-100 p-6 rounded-lg border-2 border-green-300 md:h-[300px] md:w-[400px]'>
    <h1 className='text-3xl font-bold text-center py-2'>Animal Shelter Volunteering</h1>
    <p className='text-sm text-gray-500 font-semibold'>Helping at the animal shelter was a heartwarming experience. Taking care of the rescued animals and assisting in adoptions made me feel like I was truly making a difference. The staff was wonderful, and the bond I built with the animals was unforgettable!</p>
  <h5 className='text-lg text-gray-700 text-center font-bold py-2'>— Emily T., Volunteer</h5>
  </div>
  <div className='bg-green-100 p-6 rounded-lg border-2 border-green-300 md:h-[300px] md:w-[400px]'>
    <h1 className='text-3xl font-bold text-center py-2'>Food Bank Assistance</h1>
    <p className='text-sm text-gray-500 font-semibold'>This was my first time volunteering at a food bank, and it was an eye-opener. Seeing how many families rely on these services made me appreciate the importance of giving back. The experience was well-organized, and I felt like I contributed to something meaningful.</p>
  <h5 className='text-lg text-gray-700 text-center font-bold py-2'>— Michael D., Volunteer

</h5>
  </div>
  <div className='bg-green-100 p-6 rounded-lg border-2 border-green-300 md:h-[300px] md:w-[400px]'>
    <h1 className='text-3xl font-bold text-center py-2'>Disaster Relief Volunteering</h1>
    <p className='text-sm text-gray-500 font-semibold'>I was honored to be part of a disaster relief team. Helping families rebuild their lives after a crisis was both emotional and rewarding. The organization provided great training, and I felt safe and prepared. I would do it again in a heartbeat!</p>
  <h5 className='text-lg text-gray-700 text-center font-bold py-2'>— Olivia M., Volunteer</h5>
  </div>
  <div className='bg-green-100 p-6 rounded-lg border-2 border-green-300 md:h-[300px] md:w-[400px]'>
    <h1 className='text-3xl font-bold text-center py-2'>Elderly Care Volunteering</h1>
    <p className='text-sm text-gray-500 font-semibold'>Spending time with the elderly was a beautiful experience. Listening to their life stories and being there for them was something I’ll cherish forever. This project taught me patience, empathy, and the importance of companionship</p>
  <h5 className='text-lg text-gray-700 text-center font-bold py-2'>— Daniel W., Volunteer</h5>
  </div>
</div>

</div>
       </div>


    );
};

export default ExtraSection;