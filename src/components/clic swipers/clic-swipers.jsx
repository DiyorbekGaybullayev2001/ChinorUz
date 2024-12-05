import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import imgs1 from '../clic swipers/swiperimg1.png'
import imgs2 from '../clic swipers/swiperimg2.png'
import imgs3 from '../clic swipers/swiperimg3.png'
import imgs4 from '../clic swipers/swiperimg4.png'


const ClicSwipers = () =>{
  return (
    <div className='container m-auto pt-[150px]'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-[900px]'>
            <img className='object-cover h-[800px]' src={imgs1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imgs2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imgs3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imgs4} alt="" />
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default ClicSwipers
