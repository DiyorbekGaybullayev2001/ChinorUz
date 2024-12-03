// import React from "react";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination,} from 'swiper/modules';


import img1 from '../imgs/swipers1.png'
import img2 from '../imgs/swipers2.png'
import img3 from '../imgs/swipers3.png'
import img4 from '../imgs/swipers4.png'
import img5 from '../imgs/swipers5.png'
import img6 from '../imgs/swipers6.png'
import img7 from '../imgs/swipers7.png'

const Swipers = () => {
    return (
        <div id='works' className=" container m-auto pt-[70px] p-[10px]">
            <div>
                <p className='font-semibold sm:text-[23px] md:text-[33px] text-[#94C11F]'>Мы тщательно контролируем качество производства, обеспечивая долговечность нашей мебели на срок свыше 10 лет.</p>
                <p className='text-[12px] md:text-[18px]'>Производство состоит из 7 этапов.</p>
            </div>
            
            <div id='dastafka' className='mt-[5px]'>
                <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination , Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                        
                    </Swiper>
            </div>

            <div className='pt-[70px]'>
                <p className='md:text-[40px] font-serif'>ДОСТАВКА ПО ВСЕМУ МИРУ, ОПЛАТА ПО </p>
                <p className='md:text-[40px] font-serif'>ФАКТУ ОСМОТРА У ВАС ДОМА.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 p-[10px]'>
                <div className='text-white bg-[#94C11F] p-[10px] m-[10px] rounded-lg'>
                    <br />
                    <h2 className='text-[20px] md:text-[30px]'>Условия доставки</h2><br />
                    <p className='text-[#e9e5e5]'> Доставка по Ташкенту от 30.000 сум. Отправляем мебель в другие города Узбекистана, условия доставки обсуждается индивидуально. </p><br />
                    <p className='text-[#e9e5e5]'>Доставка до клиента производиться нашими сотрудниками, которые также помогут поднять и собрать мебель</p>
                </div>

                <div className='text-white bg-[#94C11F] p-[10px] m-[10px] rounded-lg'>
                    <br />
                    <h2 className='text-[20px] md:text-[30px]'>Способы оплаты</h2><br />
                    <p className='text-[#e9e5e5]'>Любая форма оплаты-безналичные, наличные и перечислением. </p><br />
                    <p className='text-[#e9e5e5]'>Вы можете оплатить 100% стоимости товара или внести 10% от общей суммы, оставшуюся часть оплатить уже после осмотра и привоза мебели к вам домой</p>
                </div>

            </div>
            

        </div>
    )
}


export default Swipers;