import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img2 from '../../assets/alt1.jpg'
import img1 from '../../assets/save.avif'
import img3 from '../../assets/alt3.jpg'
import img4 from '../../assets/img-4.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
            <div className='w-full h-[38rem] bg-cover bg-center '  style={{backgroundImage:`url(${img1})`}}>
            <div className='w-full h-full flex flex-col justify-center text-center gap-5'>
       <h1 className='text-5xl text-white font-bold'>Welcome to Volunteer <br></br>management site</h1>
       <p className='text-base text-white font-bold'>Here you will find various information about volunteers.<br></br>And can join as a volunteer</p>
       <button className='btn bg-gray-200 w-36 mx-auto'>View More</button>
       </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> <div className='w-full h-[38rem]  bg-cover bg-center object-cover' style={{backgroundImage:`url(${img3})`}}>
        <div className='w-full h-full '>
       <h1 className='text-5xl text-red-600 font-bold pt-36 ml-28'>To views this site please <br></br>login or Register</h1>
       <p className='text-base text-gray-700 ml-36 pt-5'>Here you will find various information about volunteers.<br></br>And can join as a volunteer</p>
       <button className='btn bg-red-500 w-36 ml-36 mt-5'>View More</button>
       </div>
            </div></SwiperSlide>
        <SwiperSlide> <div  className='w-full h-[38rem]  bg-cover bg-center' style={{backgroundImage:`url(${img4})`}}>
        <div className='w-full h-full flex flex-col justify-center text-center gap-5'>
       <h1 className='text-5xl text-green-900 font-bold'>Here you see different <br></br>volunteers</h1>
       <p className='text-base text-gray-900'>Here you will find various information about volunteers.<br></br>And can join as a volunteer</p>
       <button className='btn bg-green-500 w-36 mx-auto'>View More</button>
       </div>
            </div></SwiperSlide>
        <SwiperSlide> <div  className='w-full h-[38rem]  bg-cover bg-center' style={{backgroundImage:`url(${img2})`}}>
        <div className='w-full h-full flex flex-col justify-center text-center gap-5'>
       <h1 className='text-5xl text-blue-700 font-bold'>Volunteer management site</h1>
       <p className='text-base text-gray-800'>Here you will find various information about volunteers.<br></br>And can join as a volunteer</p>
       <button className='btn bg-blue-500 w-36 mx-auto'>View More</button>
       </div>
      
            </div></SwiperSlide>
      </Swiper>

    );
};

export default Slider;