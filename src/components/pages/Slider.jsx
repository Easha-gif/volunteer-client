import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img2 from '../../assets/middle2.jpg'
import img1 from '../../assets/altImg1.jpg'
import img3 from '../../assets/2.jpg'
import img4 from '../../assets/img-4.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
            <div className='w-full h-[540px] bg-cover object-cover bg-center flex flex-col justify-center items-center'  style={{backgroundImage:`url(${img1})`}}>
            <div className=' bg-black bg-opacity-80 text-center gap-5 py-6 px-28 rounded-xl'>
       <h1 className='text-5xl text-white font-bold '>Welcome to Volunteer <br></br>management site</h1>
       <p className='text-base text-white font-bold py-2'>Here you will find various information about volunteers.<br></br>And can join as a volunteer</p>

       </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> <div className='w-full h-[540px] bg-cover  bg-center object-cover flex flex-col justify-center items-center' style={{backgroundImage:`url(${img3})`}}>
        <div className='bg-black bg-opacity-80 text-center gap-5 py-6 px-28 rounded-xl'>
       <h1 className='text-5xl text-white text-center font-bold'>Help People and make <br></br> happy</h1>
       <p className='text-base text-gray-200 text-center py-2'>Here you will find various information about volunteers.<br></br>And can join as a volunteer</p>
       </div>
            </div></SwiperSlide>
        <SwiperSlide> <div  className='w-full h-[540px] bg-cover object-cover bg-center flex flex-col justify-center items-center' style={{backgroundImage:`url(${img4})`}}>
        <div className='bg-black bg-opacity-50 text-center gap-5 py-6 px-28 rounded-xl'>
        <h1 className='text-5xl text-white text-center font-bold'>Help People and make <br></br> happy</h1>
        <p className='text-base text-gray-200 text-center py-2'>Here you will find various information about volunteers.<br></br>And can join as a volunteer</p>
       </div>
            </div></SwiperSlide>
        <SwiperSlide> <div  className='w-full h-[540px]  bg-cover object-cover bg-center flex flex-col justify-center items-center' style={{backgroundImage:`url(${img2})`}}>
        <div className='bg-black bg-opacity-70 text-center gap-5 py-6 px-28 rounded-xl'>
        <h1 className='text-5xl text-white text-center font-bold'>Help People and make <br></br> happy</h1>
        <p className='text-base text-gray-200 text-center py-2'>Here you will find various information about volunteers.<br></br>And can join as a volunteer</p>
       </div>
      
            </div></SwiperSlide>
      </Swiper>

    );
};

export default Slider;