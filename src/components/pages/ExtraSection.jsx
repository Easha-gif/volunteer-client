import middle1 from '../../assets/middle1.jpg'
import middle2 from '../../assets/alt1.jpg'

const ExtraSection = () => {
    return (
       <div>
         <div className='flex flex-col lg:flex-row justify-between items-center bg-white shadow-xl mt-10 border-4 rounded-lg p-6'>
            <div>
<h1 className='text-black text-4xl font-bold mb-6'> All Volunteers are very <br></br> hardworking</h1>
<p></p>
<button className='text-white bg-green-400 rounded-xl text-lg font-bold py-2 px-4 border'>Read More Info</button>
            </div>
            <div>
            <div>
                <img className='w-80 h-48 rounded-md object-cover' src={middle1} alt="" />
            </div>
            <div>
                <img className='w-80 h-48 rounded-md object-cover' src={middle2} alt="" />
            </div>
            </div>
        </div>

<div>
    <h1 className='text-4xl text-black font-bold mt-28 mb-8'>FAQS</h1>
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
<div className='lg:w-1/2'>
    {/* 4 */}
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
</div>
</div>
</div>
       </div>


    );
};

export default ExtraSection;